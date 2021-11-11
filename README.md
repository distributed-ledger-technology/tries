# Tries
[Tries](https://www.youtube.com/watch?v=3CbFFVHQrk4) are data structures that can be used to store sequences - e.g. words as sequences of letters.  
Tries support faster and more precise query executions related to those sequences.  

## Classical Tries 
### Usage Examples

```ts  

import { Trie } from "https://deno.land/tries/mod.ts"

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

```


## Patricia Tries
### Usage Examples
[Patricia Tries](https://de.wikipedia.org/wiki/Patricia-Trie) ...

## Unit Tests
For further usage examples etc. please check the [unit tests](https://github.com/distributed-ledger-technology/tries/blob/main/src/trie.spec.ts).

## Contribute
Contributions / Pull Requests are welcome.



