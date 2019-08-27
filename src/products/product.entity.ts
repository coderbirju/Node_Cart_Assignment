import { PrimaryGeneratedColumn, Column, BaseEntity, Entity } from 'typeorm';
import { Cart } from '../cart/cart.entity';
@Entity()
export class Product extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    price: number;
}
