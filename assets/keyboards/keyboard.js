export const adminKeyboard = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: "Загадать число", callback_data: "addnumber"}]
        ]
    })
}