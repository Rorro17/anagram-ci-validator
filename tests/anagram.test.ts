import { isAnagram } from '../src/anagram';

test('determines if two strings are anagrams', () => {

    expect(isAnagram('listen', 'silent')).toBe(true);
    
});