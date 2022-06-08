import { Test, TestingModule } from '@nestjs/testing';
import { CronController } from './cron.controller';
import { CronService } from '../service/cron.service';
import { CreateCronDto } from '../dto/create-cron.dto';

describe("Cron Controller Unit Tests", () => {
    let cronController: CronController;
    let spyService: CronService
    beforeAll(async () => {
        const ApiServiceProvider = {
            provide: CronService,
            useFactory: () => ({
                createCronJob: jest.fn(() => []),
                findAll: jest.fn(() => []),
                remove: jest.fn(() => { }),
                startCronJob: jest.fn(() => []),
                stopCronJob: jest.fn(() => { })
            })
        }
        const app: TestingModule = await Test.createTestingModule({
            controllers: [CronController],
            providers: [CronService, ApiServiceProvider],
        }).compile();

        cronController = app.get<CronController>(CronController);
        spyService = app.get<CronService>(CronService);
    })
    it("returns a not-null result", () => {
        const dto = new CreateCronDto();
        expect(cronController.create(dto)).not.toEqual(null);
    })

    it("calls createCronJob function from Cron service", () => {
        const dto = new CreateCronDto();
        cronController.create(dto);
        expect(spyService.createCronJob).toHaveBeenCalled();
        expect(spyService.createCronJob).toHaveBeenCalledWith(dto);
    })

    it("calls findAll function from Cron Service", () => {
        cronController.findAll();
        expect(spyService.findAll).toHaveBeenCalled();
    })

    it("calls remove function from Cron Service", () => {
        const cronId: string = '1';
        cronController.remove(cronId);
        expect(spyService.remove).toHaveBeenCalled();
        expect(spyService.remove).toHaveBeenCalledWith(Number(cronId));
    })

    it("calls startCronJob Service function from startCronJob Controller", () => {
        const cronId: string = '1';
        cronController.startCronJob(cronId);
        expect(spyService.startCronJob).toHaveBeenCalled();
        expect(spyService.startCronJob).toHaveBeenCalledWith(Number(cronId));
    })

    it("calls stopCronJob function from Cron Service", () => {
        const cronId: string = '1';
        cronController.stopCronJob(cronId);
        expect(spyService.stopCronJob).toHaveBeenCalled();
        expect(spyService.stopCronJob).toHaveBeenCalledWith(Number(cronId));
    })
});

