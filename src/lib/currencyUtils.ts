export function currencyTextToCents(text: string): number {
  // Accept "45", "45.00", "$45.00" etc. (mirrors iOS)
  const filtered = text
    .replace(/,/g, '.')
    .split('')
    .filter((ch) => '0123456789.'.includes(ch))
    .join('');

  if (!filtered) return 0;

  // Split on decimal; support 0-2 decimals; ignore extras.
  const parts = filtered.split('.');
  const dollarsPart = parts[0] ?? '0';
  const centsRaw = parts.length > 1 ? (parts[1] ?? '0') : '0';

  const dollars = Number.parseInt(dollarsPart, 10) || 0;

  const centsTwoDigits = (() => {
    if (!centsRaw) return 0;
    const trimmed = centsRaw.slice(0, 2);
    if (trimmed.length === 1) return (Number.parseInt(trimmed, 10) || 0) * 10;
    return Number.parseInt(trimmed, 10) || 0;
  })();

  return Math.max(0, (dollars * 100) + centsTwoDigits);
}

export function centsToCurrencyText(cents: number): string {
  const safe = Math.max(0, cents || 0);
  const dollars = Math.floor(safe / 100);
  const remainder = safe % 100;
  return `${dollars}.${remainder.toString().padStart(2, '0')}`;
}