import { Module } from '@nestjs/common';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';
import { ProductsService } from '../products/products.service';

@Module({
  controllers: [CartController],
  providers: [CartService,ProductsService]
})
export class CartModule {}
