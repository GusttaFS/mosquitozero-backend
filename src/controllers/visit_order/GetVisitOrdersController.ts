import { Request, Response } from 'express';
import { GetVisitOrdesService } from '../../services/visit_order/GetVisitOrdesService';
import { validateId } from '../../validators/validateId';


class GetVisitOrdersController {
    async handle(req: Request, res: Response) {
        const user_id = req.user_id;

        validateId(user_id);

        const getVisitOrdesService = new GetVisitOrdesService();
        const visitOrders = await getVisitOrdesService.execute({ user_id });
        return res.json(visitOrders);
    }
}

export { GetVisitOrdersController }