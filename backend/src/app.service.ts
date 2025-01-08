import { Injectable } from '@nestjs/common';
import { PrismaService } from 'shared/prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}
  async getHello(): Promise<string> {
    await this.prisma.user.findMany().then((res) => console.log(res));
    return 'Hello World!';
  }
}
