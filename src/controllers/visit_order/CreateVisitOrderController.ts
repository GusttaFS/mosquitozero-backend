import { Request, Response } from 'express';
import { CreateVisitOrderService } from '../../services/visit_order/CreateVisitOrderService';
import { validateId } from '../../validators/validateId';
import { validateData } from '../../validators/validateData';


class CreateVisitOrderController {
    async handle(req: Request, res: Response) {
        const user_id = req.headers.user_id as string;
        const { data } = req.body;

        validateId(user_id);
        validateData(data);

        const createVisitOrderService = new CreateVisitOrderService();
        const visitOrder = createVisitOrderService.execute({ user_id, data });
        return res.json(visitOrder);
    }
}

export { CreateVisitOrderController }