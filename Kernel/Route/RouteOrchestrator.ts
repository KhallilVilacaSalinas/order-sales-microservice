import { Router } from "express";

import { orderRouter } from "../../src/Order/Route/routes";

export class RouteOrchestrator {

    public generate(): Router[] {
        return [
            orderRouter
        ];
    }
}