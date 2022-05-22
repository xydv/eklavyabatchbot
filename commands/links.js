const fetch = require("cross-fetch");
const mode = {parse_mode : "Markdown", disable_web_page_preview : true};
// Exporting Links Command
module.exports = async (ctx) => {
  ctx.telegram.sendChatAction(ctx.chat.id, "typing");
  let response = await fetch("https://eklavya.deta.dev/socials");
  let data = await response.json();
  ctx.reply(`*All Links*
• [Instagram](${data.instagram})
• [Telegram](${data.telegram})
• [Website](${data.website})`, mode);
}