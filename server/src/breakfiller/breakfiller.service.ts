import { Injectable } from '@nestjs/common';

@Injectable()
export class BreakfillerService {
    getStart() {
        return 'this is working app!';
    }
}
