import { Length } from "class-validator";
import { Column, Entity, OneToMany } from "typeorm";
import { Model } from "./Model";
import { Product } from "./Product";

@Entity("Categories")
export class Category extends Model {
  @Column({ type: "text" })
  @Length(2, 20)
  name: string;

  @OneToMany(() => Product, (product) => product.category)
  products: Product[];
}
