import { Controller, Get, Param, Post,Body } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './product.entity';

@Controller('products')
export class ProductsController {
    constructor(private readonly service: ProductsService) {}

    @Get()
    getAll(){
        return this.service.findAll();
    }

    @Get(':id')
    getOne(@Param() params) {
        return this.service.findOne(params.id);
    }

    @Post()
    putOnePdt(@Body() params ) {
        return this.service.create(params);
    }
}
