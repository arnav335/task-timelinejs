
# task-timeline

Say goodbye to the hassle of default async behaviors in JavaScript! timed-tasks.js introduces the Timeline class, liberating you from the complexities of managing delays. Easily organize tasks with precision, breaking free from the limitations of functions like setTimeout. This module simplifies timed programming, providing a straightforward way to create sequenced actions with optional pauses. Whether you're a beginner or an experienced developer, timed-tasks.js offers a clear departure from the usual async headaches, making your code organized and easy to understand.",
  "main": "Timeline.js


# Documentation

## Installation

To use the `Timeline` module in your project, you can install it using npm:

```bash
npm install your-timeline-module
```
## Breakdown
Importing the module
```
import Timeline from 'your-timeline-module';
```
Creating a Timeline Instance
```
const myTimeline = new Timeline();
```
Adding Tasks to the Timeline
Tasks can be added to the timeline using the add method. Tasks can be either functions or objects with delay and cb properties.
```
// Adding a function task
myTimeline.add(() => console.log('Task 1 executed'));

// Adding a delayed task
myTimeline.add({
  delay: 2000, // delay in milliseconds
  cb: () => console.log('Task 2 executed after 2 seconds'),
});
```
Executing Tasks 

To execute the tasks in the timeline, call the execute method. This will run each task in the order they were added.

```
myTimeline.execute();
```
## Example

```
const myTimeline = new Timeline();

myTimeline.add(() => console.log('Task 1 executed'));

myTimeline.add({
  delay: 2000,
  cb: () => console.log('Task 2 executed after 2 seconds'),
});

myTimeline.execute();
```
This will output:
```
Task 1 executed
Task 2 executed after 2 seconds
```

Feel free to explore and adapt the Timeline module to suit your project's needs. If you encounter any issues or have suggestions for improvements, please refer to the [issues](https://github.com/arnav335/task-timeline/issues) to report any issues.
