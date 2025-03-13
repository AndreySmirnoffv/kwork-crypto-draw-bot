import { prisma } from "../services/prisma.js";

export class Admin{
    async addNumber(number){
        return await prisma.numbers.create({
            data: {
                number
            }
        })
    }
}