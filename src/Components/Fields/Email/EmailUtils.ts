export class Mail {
    mail: string;
    mailState: boolean;
    constructor(mail: string) {
        this.mail = mail;
        this.validate();
    }
    validate = (): boolean => {
        this.mailState = true;
        return true;
    }

}
