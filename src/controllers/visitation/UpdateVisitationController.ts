import { Request, Response } from 'express';
import { UpdateVisitationService } from '../../services/visitation/UpdateVisitationService';
import { validateData } from '../../validators/validateData';
import { validateField } from '../../validators/validateField';


class UpdateVisitationController {
    async handle(req: Request, res: Response) {
        const visitation_id = req.headers.visitation_id as string;
        const { data } = req.body;

        validateField(visitation_id, 'visitation id')
        validateData(data);

        const updateVisitationService = new UpdateVisitationService();
        const visitation = await updateVisitationService.execute({
            visitation_id,
            data
        });

        if (!visitation) {
            throw new Error('Visitation does not exist');
        };

        return res.json(visitation);
    }
}

export { UpdateVisitationController };