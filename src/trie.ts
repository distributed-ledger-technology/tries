import { Node } from "./node.ts"

export class Trie {

    private root: Node

    constructor() {
        this.root = new Node("/");
    }


    public insert(sequence: string): Node {

        let currentNode = this.root;

        for (const token of sequence) {
            let preparedToken = token.toLowerCase()
            if (!currentNode.children.has(preparedToken)) {
                currentNode.children.set(preparedToken, new Node(preparedToken));
            }
            currentNode = currentNode.children.get(preparedToken);
        }

        currentNode.endOfSequence = true

        return currentNode;
    }


    public hasSequence(sequence: string, start: Node = this.root): boolean {

        let currentNode = start;
        for (const token of sequence) {
            if (!currentNode.children.has(token)) return false;

            currentNode = currentNode.children.get(token);
        }

        return currentNode.endOfSequence;
    }


    public getNextNodeWithValue(startingNode: Node, value: string): Node {
        let nextNode = startingNode.children.get(value)
        return nextNode
    }


    public getChildValues(startingNode: Node): string[] {
        let childValues: string[] = []
        startingNode.children.forEach((element: any) => {
            childValues.push(element.value)
        })

        return childValues
    }


    public getChildNodes(startingNode: Node): Node[] {

        let childNodes: Node[] = []

        for (const child of startingNode.children) {
            console.log(child[1])
            if (child[1] !== undefined) {
                childNodes.push(child[1])
            }
        }


        return childNodes
    }


    public getRoot() {
        return this.root
    }

}