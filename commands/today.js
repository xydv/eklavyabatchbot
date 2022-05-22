const fetch = require("cross-fetch");
const mode = {parse_mode : "HTML"};
// Exporting Today Command
module.exports = async (ctx) => {
  ctx.telegram.sendChatAction(ctx.chat.id, "typing");
  let response = await fetch("https://eklavya.deta.dev/today");
  let data = await response.json();
  if(data.key == "0"){
    ctx.reply(`<b>No Mock Tests Today!!</b>`, html);
  } else {
    ctx.reply(`<b>Today's Mock Test Details</b>
• Subject : ${data.subject}
• Chapter : ${data.chapter}`, mode);
}
}