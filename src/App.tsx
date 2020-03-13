import * as React from "react";

export interface AppProps { appType: string }

export class App extends React.Component<AppProps, {}> {
    renderApplicationType = (): object => {
        if(this.props.appType === "mailing"){
            return <h1>Mailing</h1>;
        }
        return <h1>My App</h1>
    };

    render() {
        let App = this.renderApplicationType();
        return <div>{App}</div>;
    }
}