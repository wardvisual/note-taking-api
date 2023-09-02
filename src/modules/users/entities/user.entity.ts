import { ObjectId } from "mongodb";
import { Notes } from "src/modules/notes/entities/notes.entity";
import { Column, Entity, ObjectIdColumn, OneToMany } from "typeorm";

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

  @OneToMany(() => Notes, (note) => note.userId)
  notes: Notes[];
}
