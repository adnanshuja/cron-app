import { SchedulerRegistry } from '@nestjs/schedule';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { Logger } from '@nestjs/common';
import * as sinon from 'sinon';
import { Repository, FindOneOptions, FindManyOptions, Connection } from 'typeorm';

import { Cron } from '../entities/cron.entity';
import { CreateCronDto } from '../dto/create-cron.dto';
import { CronService } from './cron.service';

describe("NoteService", () => {
    let cronService: CronService;
    let scheduleRegistry: SchedulerRegistry;
    let sandbox: sinon.SinonSandbox;
    let connection: Connection;
    beforeAll(async () => {
        sandbox = sinon.createSandbox();
        const module: TestingModule = await Test.createTestingModule({
            imports: [
                TypeOrmModule.forRoot({
                    type: 'mysql',
                    host: 'localhost',
                    port: 3306,
                    username: 'root',
                    password: 'admin',
                    database: 'cron_db',
                    entities: [Cron],
                    synchronize: true,
                }),
                TypeOrmModule.forFeature([Cron])
            ],
            providers: [
                CronService,
                SchedulerRegistry,
                Logger,
                {
                    provide: getRepositoryToken(Cron),
                    useValue: sinon.createStubInstance(Repository),
                },
            ],
        }).compile();
        cronService = module.get<CronService>(CronService);

    })

       it('should call createCronJob method with expected params', async () => {
             const createNoteSpy = jest.spyOn(cronService, 'createCronJob');
             const dto = new CreateCronDto();
             cronService.createCronJob(dto);
             expect(createNoteSpy).toHaveBeenCalledWith(dto);
         });

    it('should call findAll cron job method with expected param', async () => {
        const findAllCronsSpy = jest.spyOn(cronService, 'findAll');
        const mockId: number = 1;
        cronService.findAll();
        expect(findAllCronsSpy).toHaveBeenCalledWith();
    });


     it('should call remove cron job method with expected param', async () => {
         const deleteNoteSpy = jest.spyOn(cronService, 'remove');
         const mockId: number = 1;
         cronService.remove(mockId);
         expect(deleteNoteSpy).toHaveBeenCalledWith(mockId);
     });

    afterAll(async () => {
        sandbox.restore();
    });
})