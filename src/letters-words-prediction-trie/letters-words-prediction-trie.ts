export class LettersWordsPredictionTrie {

    private brain: any = {}

    public learn(inputs: string[]): any {

        this.freeMyBrain()

        for (const input of inputs) {
            this.addInput(input, this.brain)
        }

    }

    public getBrain(): any {
        return this.brain
    }

    private addInput(input: string, brain: any): any {

        if (input.length == 0) return {}

        if (this.isCharacterInBrain(input[0], brain)) {
            this.incrementCountForCharacter(input[0], brain)
        } else {
            this.createNewNode(input[0], brain)
        }

        const theRestOfTheInput = input.substring(1)

        if (theRestOfTheInput !== '') {
            this.handleTheRestOfTheMessage(input[0], brain, theRestOfTheInput)
        }

        return brain
    }

    private createNewNode(character: string, brain: any): void {
        brain[character] = { value: character, count: 1, followables: {} }
    }

    private incrementCountForCharacter(character: string, brain: any): void {
        brain[character].count += 1
    }

    private handleTheRestOfTheMessage(character: string, brain: any, theRestOfTheMessage: string): void {
        brain[character].followables = this.addInput(theRestOfTheMessage, brain[character].followables)
    }

    private freeMyBrain(): void {
        this.brain = {}
    }

    private isCharacterInBrain(character: string, brain: any): boolean {
        return (brain[character] !== undefined)
    }

}
