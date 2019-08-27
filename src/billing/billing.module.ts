import { Module } from '@nestjs/common';
import { BillingController } from './billing.controller';
import { BillingService } from './billing.service';
import { CartService } from '../cart/cart.service';
import { ProductsService } from '../products/products.service';

@Module({
  controllers: [BillingController],
  providers: [BillingService,ProductsService,CartService]
})
export class BillingModule {}
