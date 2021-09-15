import { Company } from 'src/company/entities/company.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({ nullable: true })
    photo_profile?: string;

    @Column()
    email: string;

    @Column({ nullable: true })
    phone: string;

    @Column()
    city: string;

    @Column()
    country: string;

    @CreateDateColumn()
    tgl_input: Date;

    @Column({ nullable: true, default: 'admin' })
    user_input: string;

    @UpdateDateColumn()
    tgl_update: Date;

    @Column({ nullable: true, default: 'admin' })
    user_update: string;

    @ManyToOne(() => Company, (company) => company.user ,{onDelete: 'SET NULL'})
    @JoinColumn()
    company: Company;
}
