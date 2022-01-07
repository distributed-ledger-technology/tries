import { Trie } from "https://deno.land/x/tries/mod.ts"
// import { Trie } from "./src/trie.ts"

const trie = new Trie()

const exampleSequence1 = "be"
const exampleSequence2 = "bet"
const exampleSequence3 = "bed"
const exampleSequence4 = "bed and breakfast"
const exampleSequence5 = "justice"

trie.insert(exampleSequence1)
trie.insert(exampleSequence3)
trie.insert(exampleSequence2)
trie.insert(exampleSequence5)
trie.insert(exampleSequence4)

console.log(trie.hasSequence(exampleSequence3)) // true
console.log(trie.hasSequence(exampleSequence4)) // true
console.log(trie.hasSequence("breakfast")) // false because it is not added as a discrete sequence
console.log(trie.hasSequence("missing")) // false 