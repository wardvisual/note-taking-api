import { ObjectId } from "mongodb";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, ObjectIdColumn } from "typeorm";

@Entity()
export class Notes {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  title: string;

  @Column()
  createdAt: string;

  @Column()
  content: string;

  @ManyToOne(() => User, (user) => user.id)
  userId: User;
}
