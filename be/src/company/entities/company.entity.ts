import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, OneToMany } from 'typeorm';
@Entity()
export class Company {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    company_name: string;

    @CreateDateColumn()
    tgl_input: Date;

    @Column({ nullable: true, default: 'admin' })
    user_input: string;

    @UpdateDateColumn()
    tgl_update: Date;

    @Column({ nullable: true, default: 'admin' })
    user_update: string;

    @OneToMany(() => User, (user) => user.company, {onDelete: 'SET NULL'})
    @JoinColumn()
    user: User[];

}
