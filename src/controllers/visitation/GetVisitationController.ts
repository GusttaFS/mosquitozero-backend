import { Request, Response } from 'express';
import { GetVisitationService } from '../../services/visitation/GetVisitationService';
import { validateId } from '../../validators/validateId';


class GetVisitationController {
    async handle(req: Request, res: Response) {
        const visitation_id = req.headers.visitation_id as string;

        validateId(visitation_id);

        const getVisitationService = new GetVisitationService();
        const visitation = await getVisitationService.execute({ visitation_id });

        if (!visitation) {
            throw new Error('Visitation does not exist');
        }; return res.json(visitation);
    }
}

export { GetVisitationController };