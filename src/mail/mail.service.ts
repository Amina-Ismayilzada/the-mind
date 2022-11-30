import { Injectable } from '@nestjs/common';
import { CreateConfirmMailDto } from './dto/createConfirmMail.dto';
import { MailerService } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MailService {
  constructor(
    private readonly mailerService: MailerService,
    private readonly configService: ConfigService,
  ) {}

  async sendEmailConfirmationMail(createConfirmMailDto: CreateConfirmMailDto) {
    const url =this.configService.get('emailConfirmUrl') + createConfirmMailDto.token;

    const text = `Hello ${createConfirmMailDto.firstName} ! <br/> \
                    We got a registration request from you. If you did not \
                    pass any registration stage on our page, please simply ignore this message. <br/> \
                    Follow this link to confirm your email: <br/>
                    <a href="${url}"> Click me! </a>`;

    return await this.mailerService.sendMail({
      to: createConfirmMailDto.email,
      from: this.configService.get('mailFrom'),
      subject: 'Email confirmation',
      text,
    });
  }
  async sendResetPasswordMail(createConfirmMailDto: CreateConfirmMailDto) {
    
    const url = this.configService.get('passwordConfirmUrl') + createConfirmMailDto.token;
    const text = `Hello ${createConfirmMailDto.firstName} ! <br/> \
                    We got a reset password request from you. <br/> \
                    Follow this link to confirm your email: <br/>
                    <a href="${url}"> Click me! </a>`;

    return await this.mailerService.sendMail({
      to: createConfirmMailDto.email,
      from: this.configService.get('mailFrom'),
      subject: 'Reset password',
      text,
    });
  }
}
