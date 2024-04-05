import { Request, Response } from 'express';
import { GetVisitationAreaService } from '../../services/visitation_area/GetVisitationAreaService';
import { validateField } from '../../validators/validateField';


class GetVisitationAreaController {
    async handle(req: Request, res: Response) {
        const visitation_area_id = req.headers.visitation_area_id as string;

        validateField(visitation_area_id, 'visitation area id');

        const getVisitationAreaService = new GetVisitationAreaService();
        const visitationArea = await getVisitationAreaService.execute(visitation_area_id);

        if (!visitationArea) {
            throw new Error('Visitation area does not exist');
        }

        return res.json(visitationArea);
    }
}

export { GetVisitationAreaController };