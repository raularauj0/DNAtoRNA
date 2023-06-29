const DNAtoRNA = require("../src/index.js")

test('Should return DNA', () => {
    const dna = 'dna'
    expect(DNAtoRNA(dna)).toBe("dna")
 })

 test('when dna is "TTTT" change to "UUUU"', () => {
    expect(DNAtoRNA("TTTT")).toBe("UUUU")
 })
 test('when dna is "GCAT" change to "GCAU"', () => {
    expect(DNAtoRNA("GCAT")).toBe("GCAU")
 })
 test('when dna does not constais thymine return dna', () => {
    const dna = 'dna'
    expect(DNAtoRNA(dna)).not.toMatch("T")
 })