require("dotenv").config();

import {Bot} from "grammy";

if (!process.env.BOT_TOKEN) {
    throw Error("Не обнаружен токен бота");
}

// Создание экземпляра бота
const bot = new Bot(process.env.BOT_TOKEN);

bot.use();

/** Добавление меню с командами */
bot.api.setMyCommands([
    {
        command: "aboutme",
        description: "Обо мне",
    },
    {
        command: "services",
        description: "Услуги и цены",
    },
    {
        command: "photostudios",
        description: "Фотостудии",
    },
    {
        command: "contacts",
        description: "Контакты",
    },
]);

export {bot};
