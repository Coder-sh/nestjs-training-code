import { Injectable } from '@nestjs/common';

@Injectable()
export class AaaService {
  findAll() {
    return `This action returns all aaa`;
  }

  findOne(id: number) {
    return `This action returns a #${id} aaa`;
  }

  remove(id: number) {
    return `This action removes a #${id} aaa`;
  }
}
