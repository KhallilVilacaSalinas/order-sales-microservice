import { Router } from "express";
import { OrderController } from "../Controller/orderController";

const orderRouter = Router();

const order = new OrderController();

orderRouter.get('/api/order/create', order.orderCreateAction);

export { orderRouter };
