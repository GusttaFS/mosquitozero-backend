import { Request, Response } from 'express';
import { CreateVisitationService } from '../../services/visitation/CreateVisitationService';
import { validateData } from '../../validators/validateData';
import { validateField } from '../../validators/validateField';


class CreateVisitationController {
    async handle(req: Request, res: Response) {
        const visitation_area_id = req.headers.visitation_area_id as string;
        const { data, deposito, amostra, tratamento } = req.body;

        validateField(visitation_area_id, 'visitation area id')
        validateData(data);
        validateData(deposito);
        validateData(amostra);
        validateData(tratamento);

        const createVisitationService = new CreateVisitationService;
        const visitation = await createVisitationService.execute({ 
            visitation_area_id, 
            data,
            deposito,
            amostra,
            tratamento
        });
        
        if (!visitation) {
            throw Error('visitation area does not exist');
        }
        
        return res.status(201).json(visitation);
    };
};

export { CreateVisitationController };