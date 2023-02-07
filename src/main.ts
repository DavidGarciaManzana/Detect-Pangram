const isPangram = (phrase: string): boolean => {
    const alphabet: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const arrayPhrase:string[] = Array.from(phrase.replace(/\W/g, '').toLowerCase())
    const existInYourString = (letter: string):boolean => {
        return arrayPhrase.includes(letter)
    }
    
    return alphabet.every(existInYourString);
}
// console.log(isPangram("The quick brown fox jumps over the lazy dog."))//, true);
// console.log(isPangram("This is not a pangram."))//, false);
// console.log(isPangram("abcdefghijklmnopqrstuvwxyz"))//, false);

// Time:40 mins