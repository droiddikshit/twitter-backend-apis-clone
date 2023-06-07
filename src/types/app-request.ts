import { Request } from 'express';
import User from '../database/model/User';

export declare interface PublicRequest extends Request {
    apiKey: string;
}

export declare interface ProtectedRequest extends PublicRequest{
    user: User;
    accessToken: string;
}

export declare interface Tokens{
    accessToken: string;
    refreshToken: string;
}