export const usStates = [
  'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS',
  'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY',
  'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV',
  'WI', 'WY',
] as const;

export function formatUsPhoneNumber(input: string): string {
  const digits = input.replace(/\D/g, '').slice(0, 10);
  const match = digits.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);

  if (!match) return digits;

  return [
    match[1] ? `(${match[1]}` : '',
    match[2] ? `)${match[2]}` : '',
    match[3] ? `-${match[3]}` : '',
  ].join('');
}

export function formatUsZipCode(input: string): string {
  return input.replace(/\D/g, '').slice(0, 5);
}
