let numbers = ['','one','two','three','four','five','six',
                    'seven','eight','nine','ten','eleven','twelve'];
let roots_number = ['','','twen','thir','for','fif','six','seven','eigh','nine'];
let output_number = '';
let digits_name = ['','','thousand','million','billion'];
const suffix_teen = 'teen';
const suffix_ty = 'ty';

module.exports = function toReadable (number) {    
    output_number = '';

    if(number == 0) 
      return 'zero';

    return recursion(number,0,number).trim();
}


function doubleFigures(number) {
    let input_number = number.toString().split('');
    
    if(number < 13) {
        return numbers[number];
    } else if(number == 14){  
        return 'fourteen';
    } else if (number < 20) {
        return roots_number[input_number[1]]+suffix_teen;
    }  else if (number < 100) {
        output_number = roots_number[input_number[0]]+suffix_ty;

        if(input_number[1] != '0')
            output_number += ' ' + numbers[input_number[1]];
        
        return output_number;
    }  
}

function recursion(integer, fractional, digit) {
    let hundreds = Math.floor(digit/100); 
    integer_part = Math.floor(integer/1000); 
    digit_part = integer%1000; 

    if (integer > 0)
        output_number = recursion(integer_part,fractional+1,digit_part);
    
    if (hundreds > 0 && fractional > 0)
        output_number += numbers[hundreds] + ' hundred ';
    
    /*if (output_number != '' && fractional > 0)
        output_number += 'and ';*/

    if (fractional > 0)
        output_number += doubleFigures(digit%100);

    return output_number += ' ' + digits_name[fractional] + ' ';        
}

