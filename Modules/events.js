const EventEmitter = require("events");

const event = new EventEmitter();
event.on("sayMyName", (msg) => {
  console.log(`My name is : ${msg}`);
});
event.emit("sayMyName", "Rahul Shinde");
