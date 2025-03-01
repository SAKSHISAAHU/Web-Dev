1️⃣ JS Engine (Yellow Box)

JavaScript is single-threaded, meaning it executes code one task at a time using the Call Stack.
The Call Stack (right inside the JS Engine) executes functions in order and removes them once finished.

2️⃣ Web API (Green Box)

JavaScript delegates certain tasks (like setTimeout, setInterval, fetch) to the Web API.
These asynchronous operations run outside the Call Stack in the browser.

3️⃣ Callback & Task Queue (Purple Box)

Once the Web API completes a task, it registers a callback function in the Task Queue.
If the task is a Promise, it goes to the  High Priority Queue.

4️⃣ Event Loop 

The Event Loop continuously checks if the Call Stack is empty.
It takes tasks from the high priority or Task Queue and pushes them to the Call Stack for execution.
