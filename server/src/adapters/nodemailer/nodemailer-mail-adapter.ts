import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "1b50c7daae41b3",
        pass: "270e0667b3f1cd"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sentMail({subject, body}: SendMailData) {
        transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Alexandre Lira <alexandrelira112@gmail.com>',
            subject,
            html: body
        })
    }
}