import { assertEquals } from "https://deno.land/std@0.86.0/testing/asserts.ts"
import { Trie } from "./trie.ts"

const trie = new Trie()

const exampleSequence1 = "be"
const exampleSequence2 = "bet"
const exampleSequence3 = "bed"
const exampleSequence4 = "justice"

trie.insert(exampleSequence1)
trie.insert(exampleSequence3)
trie.insert(exampleSequence2)
trie.insert(exampleSequence4)


Deno.test("should check if sequence is available", async () => {

    assertEquals(trie.hasSequence(exampleSequence3), true)
    assertEquals(trie.hasSequence(exampleSequence4), true)
    assertEquals(trie.hasSequence("missing"), false)

})

Deno.test("should getChildValues", async () => {

    const childValues = trie.getChildValues(trie.getRoot())
    assertEquals(childValues, ["b", "j"])

})

Deno.test("should getNextNodes", async () => {

    const nextNodes = trie.getChildNodes(trie.getRoot())
    assertEquals(nextNodes.length, 2)
    assertEquals(nextNodes[0].value, "b")
    assertEquals(nextNodes[1].value, "j")

})

Deno.test("should getNextNodeWithValue", async () => {

    const nextNodeWithValueB = trie.getNextNodeWithValue(trie.getRoot(), "b")
    const nextNodeWithValueJ = trie.getNextNodeWithValue(trie.getRoot(), "j")
    assertEquals(nextNodeWithValueB.value, "b")
    assertEquals(nextNodeWithValueJ.value, "j")
})




