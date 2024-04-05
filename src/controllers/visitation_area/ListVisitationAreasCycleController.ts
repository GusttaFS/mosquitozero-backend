import { Request, Response } from 'express';
import { ListVisitationAreasCycleService } from '../../services/visitation_area/ListVisitationAreasCycleService';
import { validateField } from '../../validators/validateField';


class ListVisitationAreasCycleController {
    async handle(req: Request, res: Response) {
        const user_id = req.user_id;
        const cycle_id = req.headers.cycle_id as string;

        validateField(user_id, 'user id');
        validateField(cycle_id, 'cycle id');

        const listVisitationAreasCycleService = new ListVisitationAreasCycleService();
        const visitationAreas = await listVisitationAreasCycleService.execute({
            user_id,
            cycle_id
        });

        return res.json(visitationAreas);
    }
}

export { ListVisitationAreasCycleController }