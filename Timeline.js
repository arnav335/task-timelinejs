class Timeline {
    constructor() {
        this.tasks = [];
    }

    async delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async timeout(delay, cb) {
        await this.delay(delay);
        await cb();
    }

    add(task) {
        this.tasks.push(task);
    }

    async execute() {
        for (const task of this.tasks) {
            if (typeof task === 'function') {
                await task();
            } else if (task.delay && task.cb) {
                await this.timeout(task.delay, task.cb);
            }
        }
    }
}

export default Timeline
