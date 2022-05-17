export interface SendMailData {
    subject: string,
    body: string
}

export interface MailAdapter {
    sentMail: (data: SendMailData) => Promise<void>
}