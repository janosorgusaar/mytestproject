import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  firstName: string;
  @Column()
  middleName: string;
  @Column()
  lastName: string;
  @Column()
  mobile: string;
  @Column()
  email: string;
  @Column()
  registeredAt: Date;
  @Column()
  lastLogin: Date;
  @Column()
  intro: string;
  @Column()
  profile: string;
}
const myFunction = (input: { isString: boolean }) => {
  let variable = input.isString ? 'Hello' : 123;
  return input;
};
export default User;