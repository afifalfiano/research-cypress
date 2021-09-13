import { Company } from 'src/company/entities/company.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    photo_profile?: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    city: string;

    @Column()
    country: string;

    @CreateDateColumn()
    tgl_input: Date;

    @Column({ nullable: true })
    user_input: string;

    @UpdateDateColumn()
    tgl_update: Date;

    @Column({ nullable: true })
    user_update: string;

    @OneToOne(() => Company, (company) => company.id)
    company: Company;
}
