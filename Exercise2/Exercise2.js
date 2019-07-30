/*
DESTRUCTURING
*/

function rank(a, b){
  const scoreA = a.score;
  const scoreB = b.score;

  let rank = 0;
  if (scoreA > scoreB) {
    rank = -1;
  } else if (scoreA < scoreB) {
    rank = 1;
  }
  return rank;
}

function rankScores(arrScores){
	const sortedArrScores = arrScores.sort(rank);
	let [firstPlace, secondPlace, thirdPlace, ...rest] = sortedArrScores;
	return `The winners are: 

(1st) ${firstPlace.name} scored ${firstPlace.score} out of 10
(2nd) ${secondPlace.name} scored ${secondPlace.score} out of 10
(3rd) ${thirdPlace.name} scored ${thirdPlace.score} out of 10`
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`Please input the array of players in name and score format, example '[{ "name": "John", "score": 9}, {"name": "John", "score": 9}]'?`, (arrScoresString) => {
	if(arrScoresString === 'test'){
		//TEST DATA:
		let testData = '[{"name": "Jed", "score": 8}, {"name": "Joselle", "score": 9}, {"name": "Julius", "score": 7}, {"name": "Jambie", "score": 10}, {"name": "John", "score": 5}]';
		arrScoresString = testData;
	}

	let arrScores = JSON.parse(arrScoresString);
	let output = rankScores(arrScores)
	console.log(output)
	readline.close()
})