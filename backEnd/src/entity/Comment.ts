import { IsNotEmpty, Max, Min } from "class-validator";
import { Column, Entity, ManyToOne } from "typeorm";
import { Model } from "./Model";
import { Product } from "./Product";

@Entity("Comments")
export class Comment extends Model {
  @Column()
  sender: string;

  @Column("simple-array")
  media: string[];

  @Column()
  @IsNotEmpty()
  content: string;

  @Column()
  @Min(0)
  @Max(5)
  satisfied: number;

  @ManyToOne(() => Product, (product) => product.comments)
  product: Product;
}
