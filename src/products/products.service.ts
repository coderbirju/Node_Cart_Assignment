import { Injectable } from '@nestjs/common';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
    async create(prod){
        const product = Product.create(prod);
        return await Product.save(product);
    }

    async findAll() {
        return await Product.find();
    }

    async findOne(id) {
        return await Product.findOne(id);
    }

    async update(id, list){
        return await Product.update(id,list);
    }

    async delete(id) {
        return await Product.delete(id);
    }
}
