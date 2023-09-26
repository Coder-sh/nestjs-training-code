import { Get, UseGuards, applyDecorators } from '@nestjs/common';
import { AaaGuard } from './aaa.guard';
import { Aaa } from './aaa.decorator';

export const Bbb = (path, role) =>
  applyDecorators(Get(path), Aaa(role), UseGuards(AaaGuard));
