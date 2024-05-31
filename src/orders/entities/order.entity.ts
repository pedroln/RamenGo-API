import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'varchar', length: 200 })
    description: string;

    @Column({ type: 'varchar', length: 3000 })
    image: string;
}
