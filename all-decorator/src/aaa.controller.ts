import { Controller, Get, HostParam, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller({ host: ':host.0.0.1', path: 'aaa' })
export class AaaController {
  @Get('bbb')
  hello(@HostParam('host') host) {
    return host;
  }

  @Get('ccc')
  ccc(@Req() req: Request) {
    console.log(req.hostname);
    console.log(req.url);
  }

  @Get('ddd')
  ddd(@Res({ passthrough: true }) res: Response) {
    return 'ddd';
    res.send('ddd');
  }
}
