/// <reference types="multer" />
import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    upload(file: Express.Multer.File, dto: any): Promise<void>;
    uploadMultiple(files: Array<Express.Multer.File>, dto: any): Promise<void>;
    uploadImage(file: Express.Multer.File, dto: any): Promise<{
        description: any;
        alt: any;
        extension: string;
        type: string;
        url: string;
    }>;
}
