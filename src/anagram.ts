export interface AnagramOptions {
    ignoreCase?: boolean;
    ignoreWhitespace?: boolean;
    normalizeUnicode?: boolean;
}

/**
 * Return true if `a` and `b` are anagrams (same characters with the same multiplicities).
 * Order does not matter.
 */
function preprocess(input: string, options: AnagramOptions): string {
    let processed = input;
    if (options.normalizeUnicode) processed = processed.normalize("NFC");
    if (options.ignoreCase) processed = processed.toLowerCase();
    if (options.ignoreWhitespace) processed = processed.replace(/\s+/g, '');
    return processed;
}

export function isAnagram(first: string, second: string, options: AnagramOptions = {}): boolean {
    const normalizedFirst = preprocess(first, options);
    const normalizedSecond = preprocess(second, options);
    if (normalizedFirst.length !== normalizedSecond.length) return false;

    const characterCounts = new Map<string, number>();
    for (const character of normalizedFirst) {
        characterCounts.set(character, (characterCounts.get(character) || 0) + 1);
    }
    for (const character of normalizedSecond) {
        const count = characterCounts.get(character);
        if (!count) return false;
        characterCounts.set(character, count - 1);
    }
    return true;
}