import inquirer from 'inquirer';
import chalk from 'chalk';
import { ask_user, array} from './Ask_user.js';

export let avgerage = (array:number[]) => {
    let avg = array.reduce((accum,curretval,index,array)=>{
        let total =  accum + curretval;
        if (index === array.length-1) {
            return total/array.length
        }
        return total
    })
    console.log(avg);
}
ask_user()
console.log(array);

// avgerage(array)