import { Request, Response } from 'express';
import { PatchVisitationAreaService } from '../../services/visitation_area/PatchVisitationAreaService';
import { validateField } from '../../validators/validateField';


class PatchVisitationAreaController {
    async handle(req: Request, res: Response) {
        const visitation_area_id = req.headers.visitation_area_id as string;

        validateField(visitation_area_id, 'visitation area id');

        const patchVisitationAreaService = new PatchVisitationAreaService();
        const visitationArea = await patchVisitationAreaService.execute({
            visitation_area_id
        });

        if (!visitationArea) {
            throw new Error('Visitation area does not exist');
        }

        return res.json(visitationArea);
    }
}

export { PatchVisitationAreaController };