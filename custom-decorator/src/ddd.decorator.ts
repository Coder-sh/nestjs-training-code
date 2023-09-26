import { Controller, SetMetadata, applyDecorators } from '@nestjs/common';

export const Ddd = (path, metadata) =>
  applyDecorators(Controller(path), SetMetadata('ddd', metadata));
