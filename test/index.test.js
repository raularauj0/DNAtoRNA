const DNAtoRNA = require("../src/index.js")

test('Should return DNA', () => {
    const dna = 'dna'
    expect(DNAtoRNA(dna)).toBe("dna")
 })

 test('when dna is "TTTT" change to "UUUU"', () => {
    expect(DNAtoRNA("TTTT")).toBe("UUUU")
 })