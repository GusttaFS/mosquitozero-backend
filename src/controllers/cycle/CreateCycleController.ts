import { Request, Response } from 'express';
import { CreateCycleService } from '../../services/cycle/CreateCycleService';
import { validateData } from '../../validators/validateData';


class CreateCycleController {
    async handle(req: Request, res: Response) {
        const { data } = req.body;

        validateData(data);

        const createCycleService = new CreateCycleService();
        const cycle = await createCycleService.execute({
            data
        }); 

        return res.status(201).json(cycle);
    }
}

export { CreateCycleController }