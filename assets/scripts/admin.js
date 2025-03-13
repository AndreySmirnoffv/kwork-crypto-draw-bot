import { bot } from "../../index.js";
import { waitForText } from "../utils/waitForText.js";
import { Admin } from "../models/Admin.js";

export async function addNumber(chatId){
    await bot.sendMessage(chatId, "Загадайте число")

    const number = Number(await waitForText(bot, chatId))

    return await new Admin().addNumber(number)
}