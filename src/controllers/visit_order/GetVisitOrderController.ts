import { Request, Response } from 'express';

import { validateId } from '../../validators/validateId';
import { GetVisitOrderService } from '../../services/visit_order/GetVisitOrderService';


class GetVisitOrderController {
    async handle(req: Request, res: Response) {
        const visit_order_id = req.headers.visit_order_id as string;

        validateId(visit_order_id);

        const getVisitOrderService = new GetVisitOrderService();
        const visitOrder = await getVisitOrderService.execute({ visit_order_id });

        if (!visitOrder) {
            throw new Error('Visit order does not exist');
        }; return res.json(visitOrder);
    }
}

export { GetVisitOrderController };