import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Length, Max, Min } from "class-validator";
import { Category } from "./Category";
import { Comment } from "./Comment";

@Entity("Product")
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  @Length(5, 20)
  name: string;

  @Column("simple-array")
  images: string[];

  @Column()
  price: number;

  @Column()
  initialPrice: number;

  @Column()
  discount: string;

  @Column({ type: "int", default: 0 })
  sold: number;

  @Column({ type: "int", default: 0 })
  @Min(0)
  @Max(5)
  rating: number;

  @Column()
  description: string;

  @Column()
  detail: string;

  @ManyToOne(() => Category, (category) => category.products)
  category: Category;

  @OneToMany(() => Comment, (comment) => comment.product)
  comments: Comment[];

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;
}
