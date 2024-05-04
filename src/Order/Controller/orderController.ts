import { Request, Response } from "express";

export class OrderController {

    public orderCreateAction = async (req: Request, res: Response) => {
        console.log('cheguei');
    }
}