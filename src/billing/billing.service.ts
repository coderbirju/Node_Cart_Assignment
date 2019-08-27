import { Injectable } from '@nestjs/common';
import { ProductsService } from '../products/products.service';
import { CartService } from '../cart/cart.service';
@Injectable()
export class BillingService {
    constructor(private readonly productsService: ProductsService, private readonly cartService: CartService) {}

    async getDiscount(id){
        let x= await this.cartService.findOne(id);
        let quantity = x.Quantity;
        let product_arr = x.product;
        let price = product_arr.price;

        return quantity*price;
    }
}
