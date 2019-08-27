import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'CodeStation',
    password: '',
    database: 'ecommerce_dev',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  }), ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
