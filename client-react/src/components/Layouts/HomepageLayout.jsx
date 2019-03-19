import React, {Component} from "react";

import Header from "../Header";
import Footer from "../Footer";

class HomepageLayout extends Component {

    render() {

        const { children } = this.props;

        return (
            <div>

                <Header />

                {children}

                <Footer />

            </div>
        )
    }

}

export default HomepageLayout;
