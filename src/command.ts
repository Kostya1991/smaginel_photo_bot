import {InlineKeyboard, InputFile, Keyboard} from "grammy";
import {bot} from "./bot";

export function initCommand() {
    // Обработка команды /start.
    bot.command("start", async (ctx) => {
        await ctx.reply(
            `
            Привет!\nВ данном боте ты найдешь информацию обо мне, о моих услугах и основных студиях, в которых я работаю🌸, а также актуальных ценах.
            `,
        );
    });

    // Обработка команды /aboutme.
    bot.command("aboutme", async (ctx) => {
        await ctx.replyWithPhoto(new InputFile("./assets/avatar.jpg"));
        await ctx.reply(
            `
            Меня зовут Дарья Лысóва. Я семейный фотограф.\nСоздаю истории о вас настоящих🤍\n\nСнимаю в студии, на природе или у вас дома. Также снимаю таинство крещения и венчания.\nЯ помогу с подбором образов, локации, а так же помогу с позингом на фотосессии.\n\nПосле фотосессии я отдаю фото в авторской обработке (цветокоррекция, кадрирование) в течение 10 дней. Первые фото вы получаете в день съемки.\nЗа час съемки вы получаете 60-100 фото в обработке и 8-10 фото в детальной ретуши.\n\nОбращаю ваше внимание, что после съемки я оставляю за собой право использовать ваши фотографии в своем портфолио, если мы не обговорили иные условия.
    `,
            {parse_mode: "HTML"},
        );
    });

    // Обработка команды /contacts.
    bot.command("contacts", async (ctx) => {
        await ctx.reply(
            `
                Мобильный телефон +7 (910) 444-09-82\nНаписать в <a href="https://t.me/Darya_Lysova">Телеграм</a>\nПрофиль в <a href="https://www.instagram.com/smaginel_photo?igsh=OXpuZWVkN2VlODN0&utm_source=qr">Инстаграм</a>
            `,
            {parse_mode: "HTML", link_preview_options: {is_disabled: true}},
        );
    });

    // Обработка команды /services.
    bot.command("services", async (ctx) => {
        await ctx.reply(
            `
            Услуги и прайс:\n\nСемейная, детская, индивидуальная фотосессия <b>5000/час</b>\nТаинство крещения <b>5000 за услугу</b>\nТаинство венчания <b>5000 за услугу</b>\n\nФотостудия при необходимости оплачивается отдельно.\n\nТакже вы можете приобрести подарочный сертификат на фотосессию
            `,
            {parse_mode: "HTML"},
        );
    });

    const keyboardStudios = new Keyboard()
        .text("Фотостудия SPACENOIRART")
        .row()
        .text("Фотостудия Малина")
        .row()
        .text("Фотостудия Ptichka")
        .row()
        .text("Уютный фотодом в г. Пушкино")
        .row()
        .resized()
        .oneTime();

    // Обработка команды /photostudios.
    bot.command("photostudios", async (ctx) => {
        await ctx.reply(`Фотостудии`, {reply_markup: keyboardStudios});
    });

    bot.on("message:text", async (ctx) => {
        if (ctx.message.text === "Фотостудия SPACENOIRART") {
            await getSpacenoirart(ctx);
            return;
        }
        if (ctx.message.text === "Фотостудия Малина") {
            await getMalina(ctx);
            return;
        }
        if (ctx.message.text === "Фотостудия Ptichka") {
            await getPtichka(ctx);
            return;
        }
        if (ctx.message.text === "Уютный фотодом в г. Пушкино") {
            await getPushkinoHouse(ctx);
            return;
        }
    });
}

async function getSpacenoirart(ctx: any) {
    await ctx.replyWithPhoto(new InputFile("./assets/SPACENOIRART.jpg"));
    await ctx.reply(
        `Фотостудия SPACENOIRART\n\nПросторная светлая фотостудия в Мытищах. Минималистичный дизайн без декораций. Отлично подойдет для женской, семейной или детской фотосессии.\n\n<a href="https://www.instagram.com/spacenoirart?igsh=NmljOWhrN3hhM2o=">Инстаграм</a>`,
        {parse_mode: "HTML"},
    );
}

async function getMalina(ctx: any) {
    await ctx.replyWithPhoto(new InputFile("./assets/malina.jpg"));
    await ctx.reply(
        `Фотостудия Малина\n\nФотостудия с различными декорациями. Подходит для семейных и детских фотосессий.\n\n<a href="https://www.instagram.com/foto.malina?igsh=cmpybWtkM2J3czJr">Инстаграм</a>`,
        {parse_mode: "HTML"},
    );
}

async function getPtichka(ctx: any) {
    await ctx.replyWithPhoto(new InputFile("./assets/ptichka.jpg"));
    await ctx.reply(
        `Фотостудия Ptichka\n\nСветлая фотостудия, отлично подойдет для семейных и детских фотосессий.\n\n<a href="https://www.instagram.com/ptichkamytyshi?igsh=MWsybzhyY2Z3bmx4Yw==">Инстаграм</a>`,
        {parse_mode: "HTML"},
    );
}

async function getPushkinoHouse(ctx: any) {
    await ctx.replyWithPhoto(new InputFile("./assets/dom-pushkino.jpg"));
    await ctx.reply(
        `Уютный фотодом в г. Пушкино\n\nУютный фотодом в г. Пушкино. Отлично подойдет для семейных и детских фотосессий\n\n<a href="https://www.instagram.com/dom_ellie?igsh=eGprYmgwNGo5a2F0">Инстаграм</a>`,
        {parse_mode: "HTML"},
    );
}
