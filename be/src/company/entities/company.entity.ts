import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from 'typeorm';
@Entity()
export class Company {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    company_name: string;

    @CreateDateColumn()
    tgl_input: Date;

    @Column({ nullable: true })
    user_input: string;

    @UpdateDateColumn()
    tgl_update: Date;

    @Column({ nullable: true })
    user_update: string;

    @OneToOne(() => User, (user) => user.company)
    @JoinColumn()
    user: User

}
