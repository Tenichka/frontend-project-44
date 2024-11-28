const name = "NAME"
import readlineSync from 'readline-sync';


const honest_rand = Math.floor(Math.random() * 100+1)

console.log(`Answer "yes" if the number is even, otherwise answer "no".`)
console.log(`Question: ${honest_rand}`)

const honest_answer = readlineSync.question(`Your answer: `);

if(honest_answer.toLowerCase() ==="yes" && honest_rand % 2 === 0 || honest_answer.toLowerCase() ==="no" && honest_rand % 2 !== 0){
    console.log("Correct!")
        }
else{
    console.log(
`'${honest_answer}' is wrong answer ;(. Correct answer was '${honest_answer.toLowerCase()==="yes" ? "no":"yes"}'.
Let's try again, ${name}!`)
    process.exit()
}