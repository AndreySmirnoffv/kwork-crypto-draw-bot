import { prisma } from "../services/prisma.js"

export class User{
    async createUser(data){
        const { chatId, username } = data
        return await prisma.users.create({
            data: {
                chatId,
                username,
            }
        }) 
    }

    async findUser(chatId){
        return await prisma.users.findFirst({
            where: { chatId }
        })
    }
}