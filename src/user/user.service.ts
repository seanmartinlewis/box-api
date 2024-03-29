import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async all(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async create(data: any): Promise<User> {
    return this.userRepository.save(data);
  }

  async findOne(data: any): Promise<User> {
    return this.userRepository.findOne({ where: { email: data.email } });
  }
}
