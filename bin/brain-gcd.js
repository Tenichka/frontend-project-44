const name = "NAME"
import readlineSync from 'readline-sync';


const NOD_num1 = Math.floor(Math.random() * 100+1)
const NOD_num2 = Math.floor(Math.random() * 100+1)
let NOD_result

function NOD (x, y) {
	if (y > x) return NOD(y, x);
	if (!y) return x;
	return NOD(y, x % y);
}

console.log(`Find the greatest common divisor of given numbers.`)
console.log(`Question: ${NOD_num1} ${NOD_num2}`)

const NOD_answer = readlineSync.question(`Your answer: `);

NOD_result=NOD(NOD_num1, NOD_num2)

if(NOD_answer===NOD_result.toString()){
    console.log("Correct!")
}
else{
    console.log(`'${NOD_answer}' is wrong answer ;(. Correct answer was '${NOD_result}'.
Let's try again, ${name}!`)
    process.exit()
}