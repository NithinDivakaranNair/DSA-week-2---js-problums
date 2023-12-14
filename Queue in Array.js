class Queue{
    constructor(){
        this.iteam=[]
    }

Enqueue(val){
    return this.iteam.push(val)
}

Dequeue(){
    if(this.iteam.length===0){
        return 'underflow'
    }
    return this.iteam.shift()
}

front(){
    return this.iteam[0]
}

empty(){
    return this.iteam.length===0
}

size(){
    return this.iteam.length
}
}

let que=new Queue()

que.Enqueue("helo")
que.Enqueue("he")
que.Enqueue("hel00o")
que.Dequeue()
console.log(que.iteam);
console.log(que.front());