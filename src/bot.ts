require("dotenv").config();

import {hydrate, HydrateFlavor} from "@grammyjs/hydrate";
import {Bot, Context} from "grammy";

if (!process.env.BOT_TOKEN) {
    throw Error("Не обнаружен токен бота");
}

type MyContext = HydrateFlavor<Context>;

// Создание экземпляра бота
const bot = new Bot<MyContext>(process.env.BOT_TOKEN);

bot.use(hydrate());

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
