import * as React from "react";
import { Mail } from "./EmailUtils";
export interface MailMasterProps {
    name: string,
    placeholder: string,
    required: boolean,
    title: string
}

export interface MailMasterState {
    value: string,
    valid: boolean,
    title?: string,
}


export class EmailInput extends React.Component<MailMasterProps,MailMasterState> {

    constructor(props: MailMasterProps) {
        super(props);

        this.state = {
            value: "",
            valid: false,
            title: "Contactez-nous!",
        };
    }

    _onChange = (e) => {
        let val = e.target.value;
        this.setState({value: val});
    }

    render() {
        return <div>
            <label>{this.props.title || this.state.title}</label>
            hello
            <input
                type="email"
                value={this.state.value}
                onChange={this._onChange}
            />
        </div>;
    }
}