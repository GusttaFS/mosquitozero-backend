import { Request, Response } from 'express';
import { CreateFormService } from '../../services/form/CreateFormService';

class CreateFormController {
    async handle(req: Request, res: Response) {
        const { data } = req.body;
        const createFormService = new CreateFormService;
        const form = await createFormService.execute({ data });
        return res.json(form);
    };
};

export { CreateFormController };