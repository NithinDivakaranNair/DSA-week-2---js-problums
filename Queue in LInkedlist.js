class Node {
    constructor(val) {
        this.val = val;
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.length = 0
    }

    Enqueue(val) {
        var newnode = new Node(val)
        if (!this.first) {
            this.first = newnode
            this.last = newnode
        } else {
            this.last.next = newnode
            this.last = newnode
        }
        return this.length++

    }

    Dequeue() {
        if (!this.first) return null
        var current = this.first
        if (this.first === this.last) {
            this.last = null
        }
        this.first = this.first.next
        this.length--
        return current.val
    }

    print() {
        var arr1 = []
        var current = this.first;
        while (current) {
            arr1.push(current.val)
            current = current.next
        }
        console.log(arr1);
        return arr1
    }
}

var list = new Queue()
list.Enqueue('nithin')
list.Enqueue('niin')
list.Enqueue('ni')
list.print()
list.Dequeue()
list.print()