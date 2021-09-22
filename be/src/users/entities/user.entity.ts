import { Company } from 'src/company/entities/company.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, ManyToOne, BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @ApiPropertyOptional()
    @Column({ nullable: true })
    firstName?: string;

    @ApiPropertyOptional()
    @Column({ nullable: true })
    lastName?: string;

    @ApiPropertyOptional()
    @Column({ nullable: true })
    photo_profile?: string;

    @ApiProperty()
    @Column()
    email: string;

    @ApiPropertyOptional()
    @Column({ nullable: true })
    phone?: string;

    @ApiPropertyOptional()
    @Column({ nullable: true })
    city?: string;

    @ApiPropertyOptional()
    @Column({ nullable: true })
    country?: string;

    @ApiPropertyOptional()
    @Column({ nullable: true })
    jwt_token?: string;

    @ApiProperty()
    @Column({default: 'Admin12345'})
    password?: string;

    @ApiPropertyOptional()
    @CreateDateColumn()
    tgl_input: Date;

    @ApiPropertyOptional()
    @Column({ nullable: true, default: 'admin' })
    user_input: string;

    @ApiPropertyOptional()
    @UpdateDateColumn()
    tgl_update: Date;

    @ApiPropertyOptional()
    @Column({ nullable: true, default: 'admin' })
    user_update: string;

    @ApiPropertyOptional()
    @ManyToOne(() => Company, (company) => company.user ,{onDelete: 'SET NULL'})
    @JoinColumn()
    company: Company;
    nama: any;
}
