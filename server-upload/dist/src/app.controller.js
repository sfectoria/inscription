"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const path_1 = require("path");
const fs_1 = require("fs");
const config_1 = require("../constants/config");
const multerConfig = {
    dest: 'upload',
};
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
    async upload(file, dto) {
        const originalExtension = (0, path_1.extname)(file.originalname);
        const detectedExtension = originalExtension || `.${file.mimetype.split('/')[1]}` || '.dat';
        const filenameWithExtension = file.filename.includes('.')
            ? file.filename
            : `${file.filename}${detectedExtension}`;
        let data = {
            description: dto.description,
            alt: dto.alt,
            extension: detectedExtension.substring(1),
            type: file.mimetype,
            path: process.env.SERVER_UPLOAD_CONFIG + 'upload/' + filenameWithExtension,
        };
    }
    async uploadMultiple(files, dto) {
        const mediaData = files.map((file) => {
            const originalExtension = (0, path_1.extname)(file.originalname);
            const detectedExtension = originalExtension || `.${file.mimetype.split('/')[1]}` || '.dat';
            const filenameWithExtension = file.filename.includes('.')
                ? file.filename
                : `${file.filename}${detectedExtension}`;
            let data = {
                description: dto.description,
                alt: dto.alt,
                extension: detectedExtension.substring(1),
                type: file.mimetype,
                path: process.env.SERVER_UPLOAD_CONFIG + 'upload/' + filenameWithExtension,
            };
            return data;
        });
    }
    async uploadImage(file, dto) {
        const extension = (0, path_1.extname)(file.originalname) || '.jpg';
        const filenameWithExtension = file.filename.includes('.')
            ? file.filename
            : `${file.filename}${extension}`;
        let data = {
            description: dto.description,
            alt: dto.alt,
            extension: extension.substring(1),
            type: file.mimetype,
            url: config_1.serverUploadConfig +
                'upload/ugte-images/' +
                filenameWithExtension,
        };
        return data;
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.Post)('upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: (req, file, cb) => {
                const uploadPath = multerConfig.dest;
                if (!(0, fs_1.existsSync)(uploadPath)) {
                    (0, fs_1.mkdirSync)(uploadPath);
                }
                cb(null, uploadPath);
            },
            filename: (req, file, cb) => {
                const randomName = Array(32)
                    .fill(null)
                    .map(() => Math.round(Math.random() * 16).toString(16))
                    .join('');
                const originalExtension = (0, path_1.extname)(file.originalname);
                const detectedExtension = originalExtension || `.${file.mimetype.split('/')[1]}` || '.dat';
                cb(null, `${randomName}${detectedExtension}`);
            },
        }),
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "upload", null);
__decorate([
    (0, common_1.Post)('uploads'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('files', 10, {
        storage: (0, multer_1.diskStorage)({
            destination: (req, file, cb) => {
                const uploadPath = multerConfig.dest;
                if (!(0, fs_1.existsSync)(uploadPath)) {
                    (0, fs_1.mkdirSync)(uploadPath);
                }
                cb(null, uploadPath);
            },
            filename: (req, file, cb) => {
                const randomName = Array(32)
                    .fill(null)
                    .map(() => Math.round(Math.random() * 16).toString(16))
                    .join('');
                const originalExtension = (0, path_1.extname)(file.originalname);
                const detectedExtension = originalExtension || `.${file.mimetype.split('/')[1]}` || '.dat';
                cb(null, `${randomName}${detectedExtension}`);
            },
        }),
    })),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "uploadMultiple", null);
__decorate([
    (0, common_1.Post)('image'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', {
        storage: (0, multer_1.diskStorage)({
            destination: (req, file, cb) => {
                const uploadPath = multerConfig.dest + '/ugte-images';
                if (!(0, fs_1.existsSync)(uploadPath)) {
                    (0, fs_1.mkdirSync)(uploadPath, { recursive: true });
                }
                cb(null, uploadPath);
            },
            filename: (req, file, cb) => {
                const randomName = Array(32)
                    .fill(null)
                    .map(() => Math.round(Math.random() * 16).toString(16))
                    .join('');
                cb(null, `${randomName}${(0, path_1.extname)(file.originalname) || '.jpg'}`);
            },
        }),
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "uploadImage", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map