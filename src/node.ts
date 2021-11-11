
export class Node {

    public children: any
    public value: any
    public endOfSequence: any

    constructor(value = '') {
        this.children = new Map()
        this.value = value
        this.endOfSequence = false
    }

}