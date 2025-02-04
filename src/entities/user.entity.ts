import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import * as bcrpyt from 'bcrypt';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ nullable: false })
  password: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrpyt.hash(this.password, 10);
  }
}
