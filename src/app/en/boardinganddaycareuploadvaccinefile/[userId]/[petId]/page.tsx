'use client';

import { useEffect, useRef, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import {
    getStorage,
    ref,
    listAll,
    getDownloadURL,
    uploadBytes,
    deleteObject,
} from 'firebase/storage';
import { initializeApp, getApps, getApp } from 'firebase/app';
import { useLocale, useTranslations } from 'next-intl';

// ---------- Firebase ----------
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

interface RemoteFile {
    name: string;
    url: string;
    fullPath: string;
}

export default function BoardingAndDaycareUploadVaccineFilePage() {
    const t = useTranslations('boardingAndDaycareUploadVaccineFile');
    const locale = useLocale();
    const router = useRouter();
    const { userId, petId } = useParams() as { userId: string; petId: string };

    const [petName, setPetName] = useState<string>('Pet');
    const [clientName, setClientName] = useState<string>('Client');
    const [existingFiles, setExistingFiles] = useState<RemoteFile[]>([]);
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    const fileInputRef = useRef<HTMLInputElement | null>(null);

    // ---------- Auth + initial load ----------
    useEffect(() => {
        const auth = getAuth(app);
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (!user) {
                router.push(`/${locale}/loginsignup`);
                return;
            }

            try {
                setLoading(true);
                setError(null);

                // Load client + pet info
                const userRef = doc(db, 'users', userId);
                const userSnap = await getDoc(userRef);
                if (userSnap.exists()) {
                    const data = userSnap.data();
                    const first = data.firstName || '';
                    const last = data.lastName || '';
                    const full = `${first} ${last}`.trim();
                    setClientName(full || 'Client');
                }

                const petRef = doc(db, 'users', userId, 'pets', petId);
                const petSnap = await getDoc(petRef);
                if (petSnap.exists()) {
                    const pdata = petSnap.data();
                    setPetName(pdata.petName || 'Pet');
                }

                await loadExistingFiles();
            } catch (err) {
                console.error('❌ Error loading vaccine files:', err);
                setError(t('error_loading'));
            } finally {
                setLoading(false);
            }
        });

        return () => unsubscribe();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userId, petId, locale, router]);

    const loadExistingFiles = async () => {
        const folderRef = ref(storage, `vaccineRecords/${userId}`);
        const result = await listAll(folderRef);

        const relevant = result.items.filter((item) =>
            item.name.startsWith(`${petId}_`)
        );

        const files: RemoteFile[] = [];
        for (const item of relevant) {
            try {
                const url = await getDownloadURL(item);
                files.push({
                    name: item.name,
                    url,
                    fullPath: item.fullPath,
                });
            } catch {}
        }

        setExistingFiles(files);
    };

    // ---------- Upload handlers ----------

    const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;
        const fileArray = Array.from(e.target.files).slice(0, 2); // max 2
        setSelectedFiles(fileArray);
        setError(null);
    };

    const handleUpload = async () => {
        if (selectedFiles.length === 0 || uploading) return;

        try {
            setUploading(true);
            setError(null);

            const cleanupExtensions = ['pdf', 'jpg', 'jpeg', 'png', 'heic'];

            // Delete old files (slots 1 and 2, any extension)
            for (let i = 1; i <= 2; i++) {
                for (const ext of cleanupExtensions) {
                    const path = `vaccineRecords/${userId}/${petId}_${i}.${ext}`;
                    const fileRef = ref(storage, path);
                    try {
                        await deleteObject(fileRef);
                    } catch {}
                }
            }

            const toUpload = selectedFiles.slice(0, 2);

            for (let idx = 0; idx < toUpload.length; idx++) {
                const file = toUpload[idx];

                const parts = file.name.split('.');
                let ext = parts.length > 1 ? parts.pop()!.toLowerCase() : 'dat';
                if (!ext) ext = 'dat';

                const fullPath = `vaccineRecords/${userId}/${petId}_${idx + 1}.${ext}`;
                const fileRef = ref(storage, fullPath);

                await uploadBytes(fileRef, file, {
                    contentType: file.type || undefined,
                });
            }

            await loadExistingFiles();
            setSelectedFiles([]);

            router.push(`/${locale}/boardinganddaycareindividualclient/${userId}`);
        } catch (err) {
            console.error('❌ Upload error:', err);
            setError(t('error_uploading'));
        } finally {
            setUploading(false);
        }
    };

    const handleDelete = async (file: RemoteFile) => {
        try {
            await deleteObject(ref(storage, file.fullPath));
            await loadExistingFiles();
        } catch (err) {
            console.error('❌ Delete error:', err);
            setError(t('error_deleting'));
        }
    };

    // ---------- RENDER ----------

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[color:var(--color-background)]">
                <p>{t('loading_page')}</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[color:var(--color-background)] text-[color:var(--color-foreground)] px-4 py-8">
            <div className="max-w-2xl mx-auto space-y-6">
                <button
                    onClick={() =>
                        router.push(`/${locale}/boardinganddaycareindividualclient/${userId}`)
                    }
                    className="text-sm text-blue-600 underline hover:opacity-80"
                >
                    {t('back_to_client')}
                </button>

                <div>
                    <h1 className="text-2xl font-bold text-[color:var(--color-accent)] mb-1">
                        {t('manage_vaccine_files_title')}
                    </h1>
                    <p className="text-sm text-gray-600">
                        {t('client_label')} <span className="font-semibold">{clientName}</span>
                    </p>
                    <p className="text-sm text-gray-600">
                        {t('pet_label')} <span className="font-semibold">{petName}</span>
                    </p>
                </div>

                {error && (
                    <div className="bg-red-100 border border-red-300 text-red-700 text-sm p-3 rounded">
                        {error}
                    </div>
                )}

                {/* Existing vaccine files */}
                <div className="bg-white border border-gray-200 rounded-md p-4 text-black">
                    <h2 className="font-semibold text-lg mb-2">
                        {t('existing_files_title')}
                    </h2>

                    {existingFiles.length === 0 ? (
                        <p className="text-sm text-red-600 font-semibold">
                            {t('no_files_uploaded')}
                        </p>
                    ) : (
                        <div className="space-y-2">
                            {existingFiles.map((file) => (
                                <div
                                    key={file.fullPath}
                                    className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded"
                                >
                                    <button
                                        onClick={() => window.open(file.url, '_blank')}
                                        className="text-blue-600 underline text-sm font-semibold hover:opacity-80"
                                    >
                                        {file.name}
                                    </button>
                                    <button
                                        onClick={() => handleDelete(file)}
                                        className="text-xs text-red-600 font-bold hover:opacity-80"
                                    >
                                        {t('delete_button')}
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Upload new files */}
                <div className="bg-white border border-gray-200 rounded-md p-4 text-black space-y-3">
                    <h2 className="font-semibold text-lg mb-1">
                        {t('upload_new_files')}
                    </h2>
                    <p className="text-xs text-gray-600">
                        {t('upload_instructions')}
                    </p>

                    <input
                        ref={fileInputRef}
                        type="file"
                        multiple
                        accept=".pdf,.jpg,.jpeg,.png,.heic,.HEIC"
                        className="hidden"
                        onChange={handleFileInputChange}
                    />

                    <button
                        onClick={() => fileInputRef.current?.click()}
                        className="w-full bg-green-700 text-white font-semibold py-2 rounded hover:opacity-90 text-sm"
                    >
                        {t('select_files_button')}
                    </button>

                    {selectedFiles.length > 0 && (
                        <div className="mt-2 space-y-1">
                            <p className="text-sm font-semibold">
                                {t('files_selected_label')}
                            </p>
                            {selectedFiles.map((file) => (
                                <div key={file.name} className="text-xs text-gray-700">
                                    {file.name}
                                </div>
                            ))}
                        </div>
                    )}

                    <button
                        onClick={handleUpload}
                        disabled={selectedFiles.length === 0 || uploading}
                        className={`mt-4 w-full font-semibold py-2 rounded text-sm ${
                            selectedFiles.length === 0 || uploading
                                ? 'bg-gray-400 text-white cursor-not-allowed'
                                : 'bg-green-700 text-white hover:opacity-90'
                        }`}
                    >
                        {uploading ? t('uploading_label') : t('upload_files_button')}
                    </button>
                </div>
            </div>
        </div>
    );
}
