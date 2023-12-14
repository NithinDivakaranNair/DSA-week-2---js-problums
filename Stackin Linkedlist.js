class Node {
    constructor(val) {
        this.val = val;
        this.next = null
    }

}

class stack {
    constructor() {
        this.start = null;
        this.end = null
        this.length = 0
    }

    push(val) {
        var newnode = new Node(val)
        if (!this.start) {
            this.start = newnode;
            this.end = newnode
        } else {
            let temp = this.start
            this.start = newnode
           this.start.next = temp

        }

     return   this.length++
 
    }

    pop() {
        if (!this.start) return undefined
        let temp = this.start
       
        if (this.start === this.last) {
            this.last = null
        }
        this.start = this.start.next
        this.length--;
        return temp.val
    }

    print() {
        var arr1 = []
        var current = this.start
        while (current) {
            arr1.push(current.val)
            current = current.next
        }
        console.log(arr1);
        return arr1

    }

}

var list = new stack()
list.push('a')
list.push('s')
list.push('d')
list.push('n')
list.push('m')
list.pop()
list.print()