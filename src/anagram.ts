export interface AnagramOptions {
    ignoreCase?: boolean;
    ignoreWhitespace?: boolean;
    normalizeUnicode?: boolean;
}

/**
 * Return true if `a` and `b` are anagrams (same characters with the same multiplicities).
 * Order does not matter.
 */
function preprocess(str: string, options: AnagramOptions): string {
    if (options.normalizeUnicode) str = str.normalize("NFC");
    if (options.ignoreCase) str = str.toLowerCase();
    if (options.ignoreWhitespace) str = str.replace(/\s+/g, '');
    return str;
}

export function isAnagram(a: string, b: string, options: AnagramOptions = {}): boolean {
    const strA = preprocess(a, options);
    const strB = preprocess(b, options);
    if (strA.length !== strB.length) return false;

    const charMap = new Map<string, number>();
    for (const char of strA) charMap.set(char, (charMap.get(char) || 0) + 1);
    for (const char of strB) {
        const count = charMap.get(char);
        if (!count) return false;
        charMap.set(char, count - 1);
    }
    return true;
}