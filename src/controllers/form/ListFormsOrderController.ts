import { Request, Response } from 'express';
import { ListFormsOrderService } from '../../services/form/ListFormsOrderService';
import { validateId } from '../../validators/validateId';


class ListFormsOrderController {
    async handle(req: Request, res: Response) {
        const order_id = req.headers.order_id as string;

        validateId(order_id);
        
        const listFormsOrderService = new ListFormsOrderService();
        const forms = await listFormsOrderService.execute({ order_id });
        return res.json(forms);
    }
}

export { ListFormsOrderController };