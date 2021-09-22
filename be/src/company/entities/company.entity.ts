import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, OneToMany } from 'typeorm';
@Entity()
export class Company {
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    company_name: string;

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

    @OneToMany(() => User, (user) => user.company, {onDelete: 'SET NULL'})
    @JoinColumn()
    user: User[];

}
