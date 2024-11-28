import {welcome} from './src/cli.js'
import readlineSync from 'readline-sync'

const name=welcome()

for (let i = 0; i < 3; i++) {
  function isPrime(n) {
    if (!Number.isInteger(n)) return false;
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  const prime_value = Math.floor(Math.random() * 100+1)

console.log(`Answer "yes" if given number is prime. Otherwise answer "no".`)
console.log(`Question: ${prime_value}`)


const prime_answer = readlineSync.question(`Your answer: `);

//console.log('debug', isPrime(prime_value))

if(prime_answer.toLowerCase() ==="yes" && isPrime(prime_value) || prime_answer.toLowerCase() ==="no" && !isPrime(prime_value)){
  console.log("Correct!")
}
else{
  console.log(
    `'${prime_answer}' is wrong answer ;(. Correct answer was '${prime_answer.toLowerCase()==="yes" ? "no":"yes"}'.
    Let's try again, ${name}!`)
    process.exit()
  }
}
  
console.log(`Congratulations, ${name}!`)