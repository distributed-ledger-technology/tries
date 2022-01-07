import { LettersWordsPredictionTrie } from "https://deno.land/x/tries/mod-letters-and-word-prediction.ts"

const lettersWordsPredictionTrie = new LettersWordsPredictionTrie()

lettersWordsPredictionTrie.learn(['ether', 'eth', 'ethereum', 'super'])

const brain = lettersWordsPredictionTrie.getBrain()

console.log(JSON.stringify(brain, undefined, 2))
