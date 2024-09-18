import { MediasService } from './medias.service';
import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';
export declare class MediasController {
    private readonly mediasService;
    constructor(mediasService: MediasService);
    create(createMediaDto: CreateMediaDto): void;
    findAll(): void;
    findOne(id: string): void;
    update(id: string, updateMediaDto: UpdateMediaDto): void;
    remove(id: string): void;
}
