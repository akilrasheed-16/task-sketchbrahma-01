import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import API_CALL from '../../services';

import './food.scss';

class Food extends Component {
    constructor() {
        super();
        this.state = {
            fullDetails: null,
        };
    }

    getDetails = () => {
        const { randomMeal } = this.props
        API_CALL('get', `lookup.php?i=${randomMeal.idMeal}`, null, null, (response)=>{
            this.setState({
                fullDetails: response.data.meals[0]
            })
        });
    }

    render() {
        const { randomMeal } = this.props
        const { fullDetails } = this.state
        return (
            <section className="login">
                <div className='container-fluid'>
                    <div className="row image-wrap">
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6 text-center">
                            <img className="login-logo" src={randomMeal.strMealThumb} />
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="col-12">
                                <div className="card-block">
                                    <h2>{randomMeal.strMeal}</h2>
                                    <div>
                                        <span><b>CATAGORY: </b></span>
                                        <span>{randomMeal.strCategory}</span>
                                    </div>
                                    <div>
                                        <span><b>AREA: </b></span>
                                        <span>{randomMeal.strArea}</span>
                                    </div>
                                    {fullDetails ? <div style={{margin: '20px 0'}}>
                                        <div>
                                            <span><b>INSTRUCTIONS: </b></span>
                                            <span>{fullDetails.strInstructions}</span>
                                        </div>
                                        <div style={{margin: '20px 0'}}>
                                            <button className="btn btn-sm btn-ems-primary" onClick={()=>this.setState({fullDetails: null})}>Close Instructions</button>
                                        </div>
                                    </div>
                                    :
                                        <div style={{margin: '20px 0'}}>
                                            <button className="btn btn-sm btn-ems-primary" onClick={this.getDetails}>View Instructions</button>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        );
    }
}

export default reduxForm({
    form: 'logInForm'
})(connect(null, {})(Food));