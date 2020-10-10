require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TELEGRAM_BOT_PASSWORD;

const bot = new TelegramBot(token, { polling: true, autoStart: true });

bot.on('new_chat_members', (msg) => {
	bot.sendMessage(msg.chat.id, JSON.stringify(msg, undefined, 2));
});
