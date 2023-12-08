import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { Department } from './Department'

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    length: 50,
  })
  name: string

  @JoinColumn({
    name: 'd_id',
  })
  @ManyToOne(() => Department, {
    // cascade: true,
    onDelete: 'CASCADE'
  })
  department: Department
}
