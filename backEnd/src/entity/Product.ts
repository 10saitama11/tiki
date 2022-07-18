import { Column, Entity } from "typeorm";
import { Length } from "class-validator";

import { Model } from "./Model";

@Entity("Product")
export class Product extends Model {
  @Column()
  @Length(5, 20)
  name: string;

  @Column()
  price: number;

  @Column()
  discount: number;

  @Column({ type: "int", default: 0 })
  quantity_sold: number;

  @Column({ type: "int", default: 0 })
  order_count: number;

  @Column()
  sku: string;

  @Column()
  short_description: string;

  @Column({ type: "int", default: 0 })
  discount_rate: number;
}
