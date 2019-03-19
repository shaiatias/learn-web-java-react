import React, {Component} from "react";
import {connect} from "react-redux";
import HomepageLayout from "../Layouts/HomepageLayout";

class SingleItemPage extends Component {

    render() {

        return (
            <HomepageLayout>

                single item

                { JSON.stringify(this.props.match) }

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
)(SingleItemPage);

