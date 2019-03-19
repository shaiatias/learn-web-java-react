import React, {Component} from "react";

class ErrorBoundary extends Component {

    state = { hasError: false };

    componentDidCatch(error, info) {

        // send error stack to server
        console.error(info.componentStack);

        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h1>Something went wrong.</h1>
                </div>
            );
        }
        return this.props.children;
    }

}

export default ErrorBoundary;
