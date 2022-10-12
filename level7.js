const EventEmitter = require("events");
class ConnectionStatus extends EventEmitter {}

const connectionStatus = new ConnectionStatus();

var status = [];

connectionStatus.on("status", (user) => {
  const foundUser = status.find((object) => object.name === user);

  if (foundUser !== undefined) {
    status.map((item) => {
      if (item.name === user && item.status) {
        item.status = false;
        console.log(`${user} disconnected`);
      } else if (item.name === user && item.status == false) {
        item.status = true;
        console.log(`${user} connected`);
      }
    });
  } else {
    status.push({
      name: user,
      status: true,
    });
    console.log(`${user} connected`);
  }
});

connectionStatus.emit("status", "Kayseri");
connectionStatus.emit("status", "Diego");
connectionStatus.emit("status", "Kayseri");
connectionStatus.emit("status", "Diego");
connectionStatus.emit("status", "Kayseri");
connectionStatus.emit("status", "Diego");
connectionStatus.emit("status", "Diego");
connectionStatus.emit("status", "Diego");
