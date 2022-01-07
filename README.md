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

## Letters and Words Prediction Tries

```ts

import { LettersWordsPredictionTrie } from "https://deno.land/x/tries/mod-letters-and-word-prediction.ts"

const lettersWordsPredictionTrie = new LettersWordsPredictionTrie()

lettersWordsPredictionTrie.learn(['ether', 'eth', 'ethereum', 'super'])

const brain = lettersWordsPredictionTrie.getBrain()

console.log(JSON.stringify(brain, undefined, 2))


```

## PATRICIA Tries
**P** Practical  
**A** Algorithm  
**T** To   
**R** Retrieve   
**I** Information  
**C** Coded  
**I** In   
**A** Alphanumeric  

PATRICIA Tries are Radix Trees with the [radix 2](https://cs.stackexchange.com/questions/63048/what-is-the-difference-between-radix-trees-and-patricia-tries). They became especially famous because in the Ethereum Blockchain pretty much everything (state trie, transaction trie, receipt trie, ...) is stored in PATRICIA Tries. For details I can recommend [this video](https://www.youtube.com/watch?v=OxofT39TJgg).

### Usage Examples
... Under Construction ...

## Unit Tests
For further usage examples etc. please check the [unit tests](https://github.com/distributed-ledger-technology/tries/blob/main/src/trie.spec.ts).

## Contribute
Contributions / Pull Requests are welcome.



