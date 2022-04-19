import React, { Component } from 'react';
import 'canvas-toBlob';
import { connect } from 'react-redux';
import "babel-polyfill";

import Food from './src/pages/Food/food';
import Loader from 'react-loader-advanced';
import { spinner } from './src/const';
import { getUserDetails } from './src/services/userDetails';

import 'jquery';
import 'bootstrap';
import 'assets/scss/bootstrap.scss';
import 'assets/scss/core_ui.scss';
import 'assets/scss/bootstraptable.scss';
import 'assets/commonStyles/style.scss';
import 'assets/scss/styles.scss';
import 'assets/scss/react_datepicker.scss';
import 'assets/scss/react-timeline.scss';
import 'assets/scss/timeline_min.scss';
import 'assets/scss/reactTabs.scss';
import 'react-circular-progressbar/dist/styles.css';
import 'assets/commonStyles/loader.scss'

class App extends Component {

    componentWillMount = () => {
        const { getUserDetails } = this.props;
        getUserDetails()
    }

    render() {
        const { userInformation: { requesting, response } } = this.props;
        return (
            <div className="app">
                <div className="app-body">
                    <div>
                        {requesting && <Loader show={true} message={spinner} />}
                        {response.meals && <Food randomMeal={response.meals[0]}/>}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ userInformation }) => {
    return { userInformation }
}

export default connect(mapStateToProps, { getUserDetails })(App)
