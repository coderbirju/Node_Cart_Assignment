import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { CartService } from './cart.service';
@Controller('cart')
export class CartController {

    constructor(private readonly Cservice: CartService) { }

    @Get()
    getAll() {
        return this.Cservice.findAll();
    }

    @Get(':id')
    getOne(@Param() params ){
        return this.Cservice.findOne(params.id);
    }

    @Post()
    putCart(@Body() Cart){
        this.Cservice.create(Cart);
    }
    @Delete(':id')
    Delete(@Param() params){
        this.Cservice.delete(params.id);
    }
}
