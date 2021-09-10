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
        hundredStg = hundredMultiple[numberTostring[0]]
        tenStg = tenMultiple[numberTostring[1]]
        unitStg = fromZeroToNine[numberTostring[2]]
        exception = numberTostring[1] + numberTostring[2]
        tenNum = numberTostring[1]
        
        if (tenStg === '') {
            writtenForm = hundredStg + ' e ' + unitStg
        } 
        else if (unitStg === 'zero' ) {

            writtenForm = hundredStg + ' e ' + tenMultiple[tenNum]
        }
        
        else if (tenStg !== 0) {
            writtenForm = hundredStg + ' e ' + tenStg + ' e ' + unitStg
        }
        

        if (exception >= 11 && exception <= 19) {
            writtenForm = hundredStg + ' e ' + fromElevenToNineteen[exception - 10]
        }
    }
    return writtenForm
}

console.log(numbersToWords(550))