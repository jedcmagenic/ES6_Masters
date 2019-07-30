/*
TEMPLATE LITERALS
*/

let phrase = '';

function getWordCount(str){
	let words = str.split(' ')
	return words.length;
}

function getVowelCount(str){
	let v = str.match(/[aeiou]/gi);
	return v === null ? 0 : v.length;
}

function getConsonantCount(str){
	let c = str.match(/[qwrtpsdfghjklzxcvbnm]/gi);
	return c === null ? 0 : c.length;
}

function formatTextOutput(str, inputPhrase, wordCount, vowelCount, consonantCount){
	var inputPhrase = `${str[0]}: "${inputPhrase}"`;
	var wordCountPhrase = `${str[1]}: ${wordCount}`;
	var vowelCountPhrase = vowelCount > 0 ? `${str[2]}: ${vowelCount}`: '';
	var consonantCountPhrase = consonantCount > 0 ? `${str[3]}: ${consonantCount}`: '';
	
	return `${inputPhrase}
${wordCountPhrase}
${vowelCountPhrase}
${consonantCountPhrase}`;

}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`Please input a phrase or sentence?`, (phrase) => {
	let wordCount = getWordCount(phrase);
	let vowelCount = getVowelCount(phrase);
	let consonantCount = getConsonantCount(phrase);
	let output = formatTextOutput`Input${phrase}Number of word(s) found${wordCount}Number of vowels found${vowelCount}Number of consonant(s) found${consonantCount}`
	console.log(output)
	readline.close()
})


