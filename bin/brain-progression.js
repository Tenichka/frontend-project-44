import {welcome} from './src/cli.js'
import readlineSync from 'readline-sync'

const name=welcome()

for (let i = 0; i < 3; i++) {
    const prog_len = Math.floor(Math.random() * 5+5)
    const prog_step = Math.floor(Math.random() * 100+1)
    let prog_chain = []
    let prog_tmp_chain
    
    prog_chain[0] = Math.floor(Math.random() * 100+1)
    
    //console.log("debug:",prog_len, prog_step, prog_chain)
    
    for(let i = 0; i <prog_len; i++){
        
        prog_chain.push(prog_chain[prog_chain.length-1]+prog_step)
    }
    
    const prog_hidden_num = Math.floor(Math.random() * prog_chain.length)
    
    prog_tmp_chain=prog_chain.slice()
    prog_tmp_chain[prog_hidden_num]=".."
    
    //console.log("debug:", prog_chain)
    
    console.log("What number is missing in the progression?")
    console.log(`Question: ${prog_tmp_chain.join(" ")}`)
    
    const prog_answer = readlineSync.question(`Your answer: `);
    
    if(prog_answer === prog_chain[prog_hidden_num].toString()){
        console.log("Correct!")
    }
else{
    console.log(`'${prog_answer}' is wrong answer ;(. Correct answer was '${prog_chain[prog_hidden_num]}'.
Let's try again, ${name}!`)
    process.exit()
}
}

console.log(`Congratulations, ${name}!`)