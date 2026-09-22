// ✅ MegaTron Bot Stylish Configuration – by 𝗟𝗢𝗩𝗘𝗥 ❦ ✓

const ownerNumber = require('./Owner/owner'); // 🔗 Example: ['919064331725']

const config = {
  // 👑 Owner Info
  ownerNumber,                          // 🔹 Array of Owner Numbers
  ownerName: '𓆩 𝗦𝗢𝗨𝗗𝗜𝗣 ❦︎𓆪',              // 🔹 Displayed in Greetings
  botName: '🤖 𝗟𝗢𝗩𝗘𝗥 𝑩𝑶𝑻 ⚡',           // 🔹 Bot Display Name
  signature: '> 𝗟𝗢𝗩𝗘𝗥 ❦ ✓',               // 🔹 Footer on Bot Replies
  youtube: 'https://www.youtube.com/@TayyabExploitZ', // 🔹 Optional YouTube

  // ⚙️ Feature Toggles
  autoTyping: false,        // ⌨️ Fake Typing
  autoReact: false,         // 💖 Auto Emoji Reaction
  autoStatusView: false,    // 👁️ Auto-View Status
  public: true,             // 🌍 Public or Private Mode
  antiLink: false,          // 🚫 Delete Links in Groups
  antiBug: false,           // 🛡️ Prevent Malicious Crashes
  greetings: true,          // 🙋 Welcome/Farewell Messages
  readmore: false,          // 📜 Readmore in Long Replies
  ANTIDELETE: true          // 🗑️ Anti-Delete Messages
};

// ✅ Register owner(s) globally in WhatsApp JID format
global.owner = (
  Array.isArray(ownerNumber) ? ownerNumber : [ownerNumber]
).map(num => num.replace(/\D/g, '') + '@s.whatsapp.net');

// ⚙️ Export Settings Loader
function loadSettings() {
  return config;
}

module.exports = { loadSettings };