export default class List {
    constructor() {
        this.container = document.querySelector('.tasks');
        this.child = this.container.children;
        this.low = [];
        this.medium = [];
        this.high = [];
    }

    remeberTask() {
        for (let i = 1; i < this.child.length; i++) {
            const task = this.child[i];
            const priority = task.querySelector('.bi-circle').dataset.priority;

            switch (priority) {
                case 'low':
                    this.lowPriority(task);
                    break;
                
                case 'medium':
                    this.mediumPriority(task);
                    break;
                
                case 'high':
                    this.highPriority(task);
                    break;
                
                default:
                    break;
            }
           
        }
    }

    lowPriority(task) {
        this.low.push(task);
    }

    mediumPriority(task) {
        this.medium.push(task);
    }

    highPriority(task) {
        this.high.push(task);
    }
}