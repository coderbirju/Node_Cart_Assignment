import { Entity, BaseEntity, Column, OneToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from '../products/product.entity';

@Entity()
export class Cart extends BaseEntity {
    @PrimaryGeneratedColumn()
    Cid: string;

    @OneToOne(type => Product,
        {eager: true
        })
@JoinColumn()
product: Product;

@Column()
Quantity: number;
}