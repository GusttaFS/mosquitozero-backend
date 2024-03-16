import { Request, Response } from 'express';
import { CreateVisitationService } from '../../services/visitation/CreateVisitationService';
import { validateId } from '../../validators/validateId';
import { validateData } from '../../validators/validateData';


class CreateVisitationController {
    async handle(req: Request, res: Response) {
        const visit_order_id = req.headers.visit_order_id as string;
        const { data } = req.body;

        validateId(visit_order_id);
        validateData(data);

        const createVisitationService = new CreateVisitationService;
        const visitation = await createVisitationService.execute({ visit_order_id, data });
        return res.status(201).json(visitation);
    };
};

export { CreateVisitationController };