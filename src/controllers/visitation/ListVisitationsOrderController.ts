import { Request, Response } from 'express';
import { ListVisitationsOrderService } from '../../services/visitation/ListVisitationsOrderService';
import { validateId } from '../../validators/validateId';


class ListVisitationsOrderController {
    async handle(req: Request, res: Response) {
        const visit_order_id = req.headers.visit_order_id as string;

        validateId(visit_order_id);
        
        const listVisitationsOrderService = new ListVisitationsOrderService();
        const visitations = await listVisitationsOrderService.execute({ visit_order_id });
        return res.json(visitations);
    }
}

export { ListVisitationsOrderController };