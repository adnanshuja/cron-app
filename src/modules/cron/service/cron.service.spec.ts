import { SchedulerRegistry } from '@nestjs/schedule';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Logger } from '@nestjs/common';
import * as sinon from 'sinon';
import { Repository, FindOneOptions, FindManyOptions, Connection } from 'typeorm';

import { Cron } from '../entities/cron.entity';
import { CreateCronDto } from '../dto/create-cron.dto';
import { CronService } from './cron.service';

describe("NoteService", () => {
    let cronService: CronService;
    let sandbox: sinon.SinonSandbox;
    beforeAll(async () => {
        sandbox = sinon.createSandbox();
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CronService,
                SchedulerRegistry,
                Logger,
                {
                    provide: getRepositoryToken(Cron),
                    useValue: sinon.createStubInstance(Repository),
                },
                Connection,
            ],
        }).compile();
        cronService = module.get<CronService>(CronService);
    })

    //    it('should call createCronJob method with expected params', async () => {
    //          const createNoteSpy = jest.spyOn(cronService, 'createCronJob');
    //          const dto = new CreateCronDto();
    //          cronService.createCronJob(dto);
    //          expect(createNoteSpy).toHaveBeenCalledWith(dto);
    //      });

    //    it('should call findOneNote method with expected param', async () => {
    //          const findOneNoteSpy = jest.spyOn(cronService, 'findOneNote');
    //          const findOneOptions: FindOneOptions = {};
    //          cronService.(findOneOptions);
    //          expect(findOneNoteSpy).toHaveBeenCalledWith(findOneOptions);
    //      });

    //  it('should call updateNote method with expected params', async () => {
    //      const updateNoteSpy = jest.spyOn(cronService, 'updateNote');
    //      const noteId = 'noteId';
    //      const dto = new UpdateNoteDto();
    //      cronService.updateNote(noteId, dto);
    //      expect(updateNoteSpy).toHaveBeenCalledWith(noteId, dto);
    //  });

    it('should call findAll cron job method with expected param', async () => {
        const deleteNoteSpy = jest.spyOn(cronService, 'findAll');
        const mockId: number = 1;
        cronService.findAll();
        expect(deleteNoteSpy).toHaveBeenCalledWith();
    });


    //  it('should call remove cron job method with expected param', async () => {
    //      const deleteNoteSpy = jest.spyOn(cronService, 'remove');
    //      const mockId: number = 1;
    //      cronService.remove(mockId);
    //      expect(deleteNoteSpy).toHaveBeenCalledWith(mockId);
    //  });

    afterAll(async () => {
        sandbox.restore();
    });
})