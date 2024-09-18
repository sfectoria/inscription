import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';
export declare class MediasService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateMediaDto): void;
    createMany(data: CreateMediaDto[]): Promise<any[]>;
    findAll(): void;
    findOne(id: string): void;
    update(id: string, data: UpdateMediaDto): void;
    remove(id: string): void;
}
