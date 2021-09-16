import { Company } from 'src/company/entities/company.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, ManyToOne, BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcryptjs';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    firstName?: string;

    @Column({ nullable: true })
    lastName?: string;

    @Column({ nullable: true })
    photo_profile?: string;

    @Column()
    email: string;

    @Column({ nullable: true })
    phone?: string;

    @Column({ nullable: true })
    city?: string;

    @Column({ nullable: true })
    country?: string;

    @Column({ nullable: true })
    jwt_token?: string;

    @Column({default: 'Admin12345'})
    password?: string;

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
    nama: any;
}
