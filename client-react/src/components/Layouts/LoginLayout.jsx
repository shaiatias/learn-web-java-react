import React, {Component} from "react";

class LoginLayout extends Component {

    render() {

        const {children} = this.props;

        return (
            <div>
                <h1>Login layout</h1>
				
                <section>
                    {children}
                </section>
            </div>
        )
    }

}

export default LoginLayout;
