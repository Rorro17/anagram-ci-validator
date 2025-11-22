export interface AnagramOptions {
    ignoreCase?: boolean;
    ignoreWhitespace?: boolean;
    normalizeUnicode?: boolean;
}

/**
 * Return true if `a` and `b` are anagrams (same characters with the same
 * multiplicities). Order does not matter.
 */
export function isAnagram(a: string, b: string, options: AnagramOptions = {}): boolean {
    let strA = a;
    let strB = b;

    if (options.normalizeUnicode) {
        strA = strA.normalize("NFC");
        strB = strB.normalize("NFC");
    }

    if (options.ignoreCase) {
        strA = strA.toLowerCase();
        strB = strB.toLowerCase();
    }

    if (options.ignoreWhitespace) {
        strA = strA.replace(/\s+/g, '');
        strB = strB.replace(/\s+/g, '');
    }

    if (strA.length !== strB.length) {
        return false;
    }

    const charMap = new Map<string, number>();

    for (const char of strA) {
        charMap.set(char, (charMap.get(char) || 0) + 1);
    }

    for (const char of strB) {
        if (!charMap.has(char)) {
            return false;
        }

        const count = charMap.get(char);

        if (count === undefined || count - 1 < 0) {
            return false;
        }

        charMap.set(char, count - 1);
    }

    return true;
}