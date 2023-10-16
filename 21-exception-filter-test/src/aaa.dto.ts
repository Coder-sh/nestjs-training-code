import { IsEmail, IsNotEmpty, IsNumber } from 'class-validator';

export class AaaDto {
  @IsNotEmpty({ message: 'aaa不能为空' })
  @IsEmail({}, { message: 'aaa 不是邮箱格式' })
  aaa: string;

  @IsNumber({}, { message: 'bbb不是数字' })
  @IsNotEmpty({ message: 'bbb不能为空' })
  bbb: number;
}
