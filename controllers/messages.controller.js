const path = require("path");
// /folder/files.jpg \folder\files.jpg

function getMessages(req, res) {
  res.render("messages", {
    title: "Messages to my friends!",
    friend: "New Friend",
  });
  // res.sendFile(
  //   path.join(__dirname, "..", "public", "images", "skimountain.jpg")
  // );
  // res.send("<ul><li>Hello</li></ul>");
}

function postMessages(req, res) {
  console.log("Updating messages...");
}

module.exports = {
  getMessages,
  postMessages,
};
