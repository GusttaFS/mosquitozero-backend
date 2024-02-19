import { Router, Request, Response } from 'express';

const router = Router();

router.get('/form', (req: Request, res: Response) => {
    return res.json({ ok: true })
});

export { router };