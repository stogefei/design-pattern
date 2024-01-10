// Description: 观察者模式
// 观察者模式定义了对象之间的一对多依赖，这样一来，当一个对象改变状态时，它的所有依赖者都会收到通知并自动更新。
class Subject {
    constructor() {
        this.state = 0;
        this.observers = [];
    }
    getState() {
        return this.state;
    }
    setState(state) {
        this.state = state;
        this.notifyAllObservers();
    }
    notifyAllObservers() {
        this.observers.forEach(observer => {
            observer.update();
        });
    }
    attach(observer) {
        this.observers.push(observer);
    }
}

// 观察者
class Observer {
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
        this.subject.attach(this);
    }
    update() {
        console.log(`${this.name} update, state: ${this.subject.getState()}`);
    }
}


const s = new Subject();

let o1 =  new Observer('o1', s);
let o2 =  new Observer('o2', s);

s.setState(1);
s.setState(1);
