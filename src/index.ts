const ALPHA2_REGEX = /^[a-z]{2}$/i;
const UNICODE_OFFSET = 127397;

export const isoCodeToFlagEmoji = (iso_code: string | null): string => {
  if (iso_code === null) return '';

  if (!ALPHA2_REGEX.test(iso_code)) {
    const valueType = typeof iso_code;
    throw new TypeError(
      `Expected 'iso_code' to be an ISO 3166-1 alpha-2 string, received '${valueType === 'string' ? iso_code : `type ${valueType}`}' instead.`,
    );
  }

  const emojiCodePoints = iso_code.toUpperCase().split('').map(char => char.codePointAt(0)! + UNICODE_OFFSET);

  return String.fromCodePoint(...emojiCodePoints);
};

export default isoCodeToFlagEmoji;