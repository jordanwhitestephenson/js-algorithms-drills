export default class {
    constructor(iterable) {
        this.data = [];
        if (iterable) {
            for (const item of iterable) {
                this.push(item);
            }
        }
    }
    push(item) {
        this.data.push(item);
    }
    pop() {
        return this.data.pop();
    }
    peek() {
        return this.data[this.data.length - 1];
    }
    clear() {
        this.data = [];
    }
}