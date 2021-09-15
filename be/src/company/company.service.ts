import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { Company } from './entities/company.entity';

@Injectable()
export class CompanyService {
  constructor(@InjectRepository(Company) private companyRepository: Repository<Company>) {}
  async create(createCompanyDto: CreateCompanyDto): Promise<Company> {
    return await this.companyRepository.save(createCompanyDto);
  }

  async findAll(): Promise<Company[]> {
    return await this.companyRepository.find({relations: ['user']});
  }

  async findOne(id: number): Promise<Company> {
    return await this.companyRepository.findOne(id);
  }

  async update(id: number, updateCompanyDto: UpdateCompanyDto): Promise<any> {
    return await this.companyRepository.update(id, updateCompanyDto);
  }

  async remove(id: number): Promise<any> {
    return await this.companyRepository.delete(id);
  }
}
