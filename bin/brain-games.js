import readlineSync from 'readline-sync';
//#!/usr/bin/env node


console.log("Welcome to the Brain Games!")


const name = readlineSync.question('May I have your name?: ');
console.log(`Hello, ${name}!`)


const honest_rand = Math.floor(Math.random() * 100+1)

console.log(`Answer "yes" if the number is even, otherwise answer "no".`)
console.log(`Question: ${honest_rand}`)

const honest = readlineSync.question(`Your answer: `);

if(honest ==="yes" && honest_rand % 2 === 0){
    console.log("Correct!")
        }
else if(honest ==="no" && honest_rand % 2 !== 0){
    console.log("Correct!")
}
    
else{
    console.log(
`'${honest}' is wrong answer ;(. Correct answer was '${honest==="yes" ? "no":"yes"}'.
Let's try again, ${name}!`)
    process.exit()
}


const calc_rand_1st_num = Math.floor(Math.random() * 100+1)
const calc_rand_2nd_num = Math.floor(Math.random() * 100+1)
let calc_result

console.log(`What is the result of the expression?`)

switch(Math.floor(Math.random() * 3 + 1)){
    case 1: // +
        calc_result = calc_rand_1st_num+calc_rand_2nd_num
        console.log(`Question: ${calc_rand_1st_num}+${calc_rand_2nd_num}`)
        break
    
    case 2: // -
        calc_result = calc_rand_1st_num-calc_rand_2nd_num
        console.log(`Question: ${calc_rand_1st_num}-${calc_rand_2nd_num}`)
        break
    
    case 3: // *
        calc_result = calc_rand_1st_num*calc_rand_2nd_num
        console.log(`Question: ${calc_rand_1st_num}*${calc_rand_2nd_num}`)
        break
}

const calc_answer = readlineSync.question(`Your answer: `);

if(calc_answer === calc_result){
    console.log("Correct!")
}
else{
    process.exit()
}


/*

NOD

*/


console.log(`Congratulations, ${name}!`)