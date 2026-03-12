'use client';

type RepeatingTextareaListProps = {
    label: string;
    items: string[];
    placeholder: (index: number) => string;
    addButtonLabel: string;
    onChange: (index: number, value: string) => void;
    onAdd: () => void;
    onRemove: (index: number) => void;
    maxLength?: number;
};

export function RepeatingTextareaList({
    label,
    items,
    placeholder,
    addButtonLabel,
    onChange,
    onAdd,
    onRemove,
    maxLength = 150,
}: RepeatingTextareaListProps) {
    return (
        <div>
            <label className="mb-1 block font-semibold text-sm">{label}</label>

            {items.map((item, index) => (
                <div key={`${label}-${index}`} className="mb-3">
                    <div className="relative">
                        {item.trim() === '' ? (
                            <span className="pointer-events-none absolute top-2 left-3 text-sm text-gray-400">
                                {placeholder(index)}
                            </span>
                        ) : null}

                        <textarea
                            value={item}
                            onChange={(e) => onChange(index, e.target.value.slice(0, maxLength))}
                            className="min-h-[80px] w-full resize-none rounded border px-3 py-2 text-sm"
                        />
                    </div>

                    <div className="mt-1 flex justify-end text-xs">
                        <span className={item.length >= maxLength ? 'text-red-600' : 'text-gray-500'}>
                            {item.length} / {maxLength}
                        </span>
                    </div>

                    {items.length > 1 ? (
                        <button
                            type="button"
                            onClick={() => onRemove(index)}
                            className="mt-1 text-lg font-bold text-red-600"
                        >
                            &times;
                        </button>
                    ) : null}
                </div>
            ))}

            <button type="button" onClick={onAdd} className="mt-1 text-sm text-blue-600 underline">
                {addButtonLabel}
            </button>
        </div>
    );
}
