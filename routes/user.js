const router = require("express").Router();


router.get("/myuser", (req, res) => {
  res.send("user test is success");
});


router.post("/user1", (req, res) => {
  const username = req.body.username;
  console.log(username);
});


module.exports = router;