import { Request, Response } from 'express';
import { UpdateVisitationService } from '../../services/visitation/UpdateVisitationService';
import { validateData } from '../../validators/validateData';
import { validateId } from '../../validators/validateId';

class UpdateVisitationController {
    async handle(req: Request, res: Response) {
        const visitation_id = req.headers.visitation_id as string;
        const { data } = req.body;

        validateId(visitation_id);
        validateData(data);

        const updateVisitationService = new UpdateVisitationService();
        const visitation = await updateVisitationService.execute({ visitation_id, data });
        return res.json(visitation);
    }
}

export { UpdateVisitationController };