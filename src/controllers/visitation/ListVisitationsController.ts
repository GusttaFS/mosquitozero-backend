import { Request, Response } from 'express';
import { ListVisitationsService } from '../../services/visitation/ListVisitationsService';
import { validateField } from '../../validators/validateField';


class ListVisitationsController {
    async handle(req: Request, res: Response) {
        const visitation_area_id = req.headers.visitation_area_id as string;

        validateField(visitation_area_id, 'visitation area id')

        const listVisitationsService = new ListVisitationsService();
        const visitations = await listVisitationsService.execute({
            visitation_area_id
        });

        return res.json(visitations);
    }
}

export { ListVisitationsController };