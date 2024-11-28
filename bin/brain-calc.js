const name = "NAME"
import readlineSync from 'readline-sync';


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

if(calc_answer === `${calc_result}`){
    console.log("Correct!")
}
else{
    console.log(`'${calc_answer}' is wrong answer ;(. Correct answer was '${calc_result}'.
Let's try again, ${name}!`)
    process.exit()
}