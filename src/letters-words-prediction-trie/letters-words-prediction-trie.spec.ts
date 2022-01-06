
import { assertEquals } from "https://deno.land/std@0.106.0/testing/asserts.ts"
import { LettersWordsPredictionTrie } from "./letters-words-prediction-trie.ts"

Deno.test("should build a data structure optimized for letters and words prediction", async () => {

    const lettersWordsPredictionTrie = new LettersWordsPredictionTrie()

    lettersWordsPredictionTrie.learn(['ether', 'eth', 'ethereum', 'super'])

    const brain = lettersWordsPredictionTrie.getBrain()

    assertEquals(JSON.stringify(brain).length, 575) // better assertion follows --> search / query ... 
})

