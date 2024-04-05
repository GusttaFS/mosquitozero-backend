import { Request, Response } from 'express';
import { CreateVisitationAreaService } from '../../services/visitation_area/CreateVisitationAreaService';
import { validateData } from '../../validators/validateData';
import { validateField } from '../../validators/validateField';


class CreateVisitationAreaController {
    async handle(req: Request, res: Response) {
        const user_id = req.headers.user_id as string;
        const cycle_id = req.headers.cycle_id as string;
        const { data } = req.body;

        validateField(user_id, 'user id');
        validateField(cycle_id, 'cycle id');
        validateData(data);

        const createVisitationAreaService = new CreateVisitationAreaService();
        const visitationArea = await createVisitationAreaService.execute({
            user_id,
            cycle_id,
            data
        });

        return res.status(201).json(visitationArea);
    }
}

export { CreateVisitationAreaController }