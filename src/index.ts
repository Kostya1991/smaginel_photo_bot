require("dotenv").config();
import {bot} from "./bot";
import {initCommand} from "./command";
import {initErrorHandler} from "./error";

/** Инициализация обработки команд */
initCommand();
/** Инициализация обработки ошибок */
initErrorHandler();

// Запуск бота
bot.start();
