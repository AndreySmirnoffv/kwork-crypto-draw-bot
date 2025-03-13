import { prisma } from "../services/prisma"

export class User{
    async createUser(data){
        const { chatId, username } = data
        return await prisma.users.create({
            data: {
                chatId,
                username
            }
        }) 
    }

    async checkAdmin(chatId){
        return await prisma.users.findFirst({
            where: { chatId }
        })
    }
}