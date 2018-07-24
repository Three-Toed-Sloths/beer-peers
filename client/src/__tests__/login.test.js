var Nightmare = require("nightmare");

var nightmare = Nightmare({ show: true });

nightmare
  .goto("http://localhost:3000/")
  .type("#loginUsername", "fakeuser")
  .type("#loginPassword", "whatever")
  .wait(1000)
  .click("#loginBtn")
  .wait(2000)
  .type("#loginUsername", "nmclear")
  .type("#loginPassword", "test123")
  .wait(1000)
  .click("#loginBtn")
  .wait(5000)
  // .wait("#links a")
  // .evaluate(() => {
  //   return document.querySelector("#links a").href;
  // })
  .end()
  .then(function(result) {
    console.log(result);
  })
  .catch(function(error) {
    console.error("Search failed:", error);
  });