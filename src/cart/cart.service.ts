import { Injectable } from '@nestjs/common';
import { Cart } from './cart.entity';
import { ProductsService } from '../products/products.service';

@Injectable()
export class CartService {
constructor(private readonly productsService: ProductsService){}
    async create(cart){
        const product = await this.productsService.findOne(cart.productId);
        cart.product=product;
        const Kart = Cart.create(cart);
        return await Cart.save(Kart); 
    }

    async findAll(){
        return await Cart.find();
    }

    async findOne(id){
        return await Cart.findOne(id);
    }

    async update(id,list){
        return await Cart.update(id,list);
    }

    async delete(id){
        return await Cart.delete(id);
    }
}
