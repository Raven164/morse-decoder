const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    secretArray = expr.match( /[\[0-1-*]{1,10}/g );
    let result = '';
    function decoder(element){
        if(element == "**********"){
            return ' '
        }
        else{
            element = element.match( /[\[0-1]{1,2}/g );
            for(let i = 0; i < element.length; i++){
                if(element[i] == '00'){element[i] = ''}
                else if(element[i] == '11'){element[i] = '-'}
                else if(element[i] == '10'){element[i] = '.'}
            }
        return element.join('')
        }
    }
    for(let i = 0; i < secretArray.length; i++){     
        (decoder(secretArray[i]) in MORSE_TABLE) ?  result += MORSE_TABLE[decoder(secretArray[i])] :  result += decoder(secretArray[i]);
    }
    return result;
}

module.exports = {
    decode
}