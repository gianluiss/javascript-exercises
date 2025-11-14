function isValidChar(char) {
    return /^[a-zA-Z0-9]$/.test(char)  //checks if char is a letter or a number
}

const palindromes = function (word) {
    let cleanWord = "";
    for(let i = 0; i < word.length; i++) {
        if(isValidChar(word[i]))
            cleanWord += word[i].toLowerCase();
    }
    //console.log(cleanWord);

    let reversedWord = "";
    for(let i = 0; i < cleanWord.length; i++) {
        reversedWord += cleanWord.at(cleanWord.length - 1 - i);
    }
    //console.log(reversedWord);

    return cleanWord === reversedWord;
};

/*
let name = "Gian";
let reverseName = "";

console.log(name.at(-1));
console.log(name.slice(-1));

for(let i = 0; i < name.length; i++) {
    reverseName += name.at(name.length - 1 - i);
}
console.log(reverseName);
*/

// Do not edit below this line
module.exports = palindromes;