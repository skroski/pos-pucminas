const mongoose = require("mongoose");

const user = "daniel";
const pass = "dan%40098765";
const database = "todo-sample";
const serverName = "cluster0.7ojjg.mongodb.net";

module.exports = {
    init: () => {
      mongoose
        .connect(
          `mongodb+srv://${user}:${pass}@${serverName}/${database}?retryWrites=true&w=majority`,
          {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          }
        )
        .then((res) => console.log(`Connection Succesful ${res}`))
        .catch((err) => console.log(`Error in DB connection ${err}`));
    },
  };
  