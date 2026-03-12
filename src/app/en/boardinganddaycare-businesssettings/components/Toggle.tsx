'use client';

type ToggleProps = {
    label: string;
    checked: boolean;
    onChange: (val: boolean) => void;
};

export function Toggle({ label, checked, onChange }: ToggleProps) {
    return (
        <label className="flex items-center gap-3 text-sm">
            <input
                type="checkbox"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
                className="h-5 w-5 accent-[#2c4a30]"
            />
            <span>{label}</span>
        </label>
    );
}
