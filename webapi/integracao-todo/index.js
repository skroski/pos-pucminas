const axios = require("axios");

getTodos();

async function getTodos() {
  try {
    const response = await axios.get("http://localhost:3005/todos");
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
