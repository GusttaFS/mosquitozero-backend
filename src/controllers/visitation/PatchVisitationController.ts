import { Request, Response } from 'express';
import { PatchVisitationService } from '../../services/visitation/PatchVisitationService';
import { validateField } from '../../validators/validateField';


class PatchVisitationController {
    async handle(req: Request, res: Response) {
        const visitation_id = req.headers.visitation_id as string;
        const visitation_area_id = req.headers.visitation_area_id as string;

        validateField(visitation_id, 'visitation id')
        validateField(visitation_area_id, 'visitation area id')

        const patchVisitationService = new PatchVisitationService();
        const visitation = await patchVisitationService.execute({
            visitation_id,
            visitation_area_id
        });
        
        return res.json(visitation);
    }
}

export { PatchVisitationController };