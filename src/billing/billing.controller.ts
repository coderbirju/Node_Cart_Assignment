import { Controller, Get, Param } from '@nestjs/common';
import { BillingService } from './billing.service';
@Controller('billing')
export class BillingController {

    constructor(private readonly billingService: BillingService) {}

    @Get(':id')
    getDets(@Param() params) {
        return this.billingService.getDiscount(params.id);
    }
}
