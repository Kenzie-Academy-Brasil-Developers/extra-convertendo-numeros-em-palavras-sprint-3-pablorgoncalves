function numbersToWords(number) {
    const fromZeroToNine = ['zero','um','dois','três',
    'quatro','cinco','seis','sete','oito','nove']

    const fromElevenToNineteen = ['','onze','doze','treze',
    'quatorze','quinze','dezesseis','dezessete',
    'dezoito','dezenove']

    const tenMultiple = ['','dez','vinte','trinta',
    'quarenta','cinquenta','sessenta','setenta',
    'oitenta','noventa']

    const hundredMultiple = ['','cento','duzentos','trezentos',
    'quatrocentos','quinhentos','seiscentos','setecentos',
    'oitocentos','novecentos']

    if (number <= 9) {
        writtenForm = fromZeroToNine[number]
    } else if (number % 10 === 0 && number < 100) {
        writtenForm = tenMultiple[number / 10]
    } else if (number >= 11 && number <= 19) {
        writtenForm = fromElevenToNineteen[number - 10]
    } else if (number % 10 !== 0 && number < 100) {
        numberTostring = `${number}`
        ten = tenMultiple[numberTostring[0]]
        unit = fromZeroToNine[numberTostring[1]]
        writtenForm = `${ten} e ${unit}`
    } else if (number === 100) {
        writtenForm = 'cem'
    } else if (number === 1000) {
        writtenForm = 'mil'
    } else if (number % 100 === 0) {
        writtenForm = hundredMultiple[number / 100]
    } else if (number % 100 !== 0 && number < 1000) {
        numberTostring = `${number}`
        hundred = hundredMultiple[numberTostring[0]]
        ten = tenMultiple[numberTostring[1]]
        unit = fromZeroToNine[numberTostring[2]]
            if (ten === '') {
                writtenForm = hundred + ' e ' + unit
            } else if (ten !== 0) {
                writtenForm = hundred + ' e ' + ten + ' e ' + unit
            }
    }
    return writtenForm
}

console.log(numbersToWords())