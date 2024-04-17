import { Request, Response } from 'express';
import { CompleteVisitationService } from '../../services/visitation/CompleteVisitationService';
import { validateField } from '../../validators/validateField';


class CompleteVisitationController {
    async handle(req: Request, res: Response) {
        const visitation_id = req.headers.visitation_id as string;
        const visitation_area_id = req.headers.visitation_area_id as string;

        validateField(visitation_id, 'visitation id')
        validateField(visitation_area_id, 'visitation area id')

        const completeVisitationService = new CompleteVisitationService();
        const visitation = await completeVisitationService.execute({
            visitation_id,
            visitation_area_id
        });
        
        return res.json(visitation);
    }
}

export { CompleteVisitationController };