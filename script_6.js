function getCodons(arn) {
    arnArray = arn.split('')
    codons = []
    while(arnArray.length != 0){
        console.log(codon = arnArray.splice(0,3).join(""))
        codons.push(codon)
    }
    console.log(codons)
    return codons
}

function getProtein(codons) {
    proteins = []
    codons.forEach(codon => {
        console.log(codon)
        switch (codon) {
            case "UCU": case "UCC": case "UCA": case "UCG": case "AGU": case "AGC" : 
                proteins.push("Sérine"); 
                break;
            case "CCU": case "CCC": case "CCA": case "CCG" :
                proteins.push("Proline"); 
                break;
            case "UUA": case "UUG" : 
                proteins.push("Leucine"); 
                break;
            case "UUU": case "UUC" : 
                proteins.push("Phénylalanine"); 
                break;
            case "CGU": case "CGC": case "CGA": case "CGG": case "AGA": case "AGG" : 
                proteins.push("Arginine");
                 break;
            case "UAU": case "UAC" : 
            proteins.push("Tyrosine"); 
            break;
        }

        console.log(proteins[proteins.length - 1])
    });
    return proteins.join('-')
}

console.log('réponse: ' + getProtein(getCodons(prompt('Entrez une chaine arn'))))
/*
UCU ou UCC ou UCA ou UCG ou AGU ou AGC => Sérine
CCU ou CCC ou CCA ou CCG => Proline
UUA ou UUG => Leucine
UUU ou UUC => Phénylalanine
CGU ou CGC ou CGA ou CGG ou AGA ou AGG => Arginine
UAU ou UAC => Tyrosine
*/
//Notre exemple d'ARN "UUA-CGC-AGU-AGA" donnerait donc la protéine suivante : "Leucine-Arginine-Sérine-Arginine" 
//UUACGCAGUAGA

//réponse: Leucine-Phénylalanine-Arginine-Tyrosine