import type { Response } from 'express';

export function successResponse(res: Response, data: any, message: string = 'success') {
  return res.status(200).json({ success: true, message, data });
}

export function errorResponse(res: Response, status: number, message: string) {
  return res.status(status).json({ success: false, message });
}
