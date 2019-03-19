import React, {Component} from "react";
import {connect} from "react-redux";
import HomepageLayout from "../Layouts/HomepageLayout";

class HomePage extends Component {

    render() {
        return (
            <HomepageLayout>

                content with basic layout

            </HomepageLayout>
        )
    }

}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);

