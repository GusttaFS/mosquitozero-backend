import { Request, Response } from 'express';
import { CreateOrderService } from '../../services/order/CreateOrderService';
import { validateId } from '../../validators/validateId';
import { validateData } from '../../validators/validateData';


class CreateOrderController {
    async handle(req: Request, res: Response) {
        const user_id = req.headers.user_id as string;
        const { data } = req.body;

        validateId(user_id);
        validateData(data);

        const createOrderService = new CreateOrderService();
        const order = createOrderService.execute({ user_id, data });
        return res.json(order);
    }
}

export { CreateOrderController }