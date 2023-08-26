import { ObjectId } from "mongodb";
import { Column, Entity, ObjectIdColumn } from "typeorm";

@Entity()
export class User {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  emailAddress: string;

  @Column()
  password: string;
}
