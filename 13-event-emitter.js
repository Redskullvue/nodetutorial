const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log("Data Received (Response)", name, id);
});
customEmitter.on("response", () => {
  console.log("Data Received (Response 2)");
});

customEmitter.emit("response", "john", 34);
