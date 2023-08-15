const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let morseMap = new Map(Object.entries(MORSE_TABLE));
    let str = '';
    let allStr = '';
    let litter = '';

    for (let i = 0; i < expr.length; i += 10) {
        if (expr[i] === '*') {
            allStr = allStr + ' ';
        }
        else {
            for (let j = 0; j < 10; j += 2) {
                if (expr.slice(i + j, i + j + 2) === '10') {
                    str = str + '.';
                }
                else if (expr.slice(i + j, i + j + 2) === '11') {
                    str = str + '-';
                }
            }
            litter = morseMap.get(str);
            str = '';
            allStr = allStr + litter;
        }

    }

    return allStr;
}

module.exports = {
    decode
}