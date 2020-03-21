import * as React from "react";
import { EmailInput }  from './Fields/Email/EmailInput';
export interface MailMasterProps {}

export interface MailMasterState {
    valid: boolean,
    title?: string,
}


export class MailMaster extends React.Component<MailMasterProps,MailMasterState> {

    constructor(props: MailMasterProps) {
        super(props);

        this.state = {
            valid: false,
            title: "Contactez-nous!"
        };
    }

    render() {
        let emailProps = {
            name: "email",
            required: true,
            placeholder: "john@doe.ch"
        }
        return <div>
            {this.state.title} <EmailInput title="votre email" />
        </div>;
    }
}