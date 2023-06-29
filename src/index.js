function DNAtoRNA(dna){
    if ( dna === "TTTT"){
        return dna.replaceAll('T','U')
    } else if ( dna === "GCAT"){
        return dna.replaceAll('T','U')
    }
    return dna
}
module.exports = DNAtoRNA