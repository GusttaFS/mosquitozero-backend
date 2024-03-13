import { Request, Response } from 'express';
import { CreateFormService } from '../../services/form/CreateFormService';
import { validateId } from '../../validators/validateId';
import { validateData } from '../../validators/validateData';


class CreateFormController {
    async handle(req: Request, res: Response) {
        const order_id = req.headers.order_id as string;
        const { data } = req.body;

        validateId(order_id);
        validateData(data);

        const createFormService = new CreateFormService;
        const form = await createFormService.execute({ order_id, data });
        return res.json(form);
    };
};

export { CreateFormController };