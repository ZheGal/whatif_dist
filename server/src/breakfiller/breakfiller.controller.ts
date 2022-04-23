import { Controller, Get } from '@nestjs/common';
import { BreakfillerService } from './breakfiller.service';

@Controller('breakfiller')
export class BreakfillerController {
    constructor(private breakfillerService: BreakfillerService) {}

    @Get()
    getStart() {
        return this.breakfillerService.getStart();
    }
}
