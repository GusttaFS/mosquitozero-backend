import { Request, Response } from 'express';
import { PatchCycleService } from '../../services/cycle/PatchCycleService';
import { validateField } from '../../validators/validateField';


class PatchCycleController {
    async handle(req: Request, res: Response) {
        const cycle_id = req.headers.cycle_id as string;

        validateField(cycle_id, 'id');

        const patchCycleService = new PatchCycleService();
        const cycle = await patchCycleService.execute({
            cycle_id
        });

        if (!cycle) {
            throw new Error('Cycle does not exist');
        }

        return res.json(cycle);
    }
}

export { PatchCycleController };