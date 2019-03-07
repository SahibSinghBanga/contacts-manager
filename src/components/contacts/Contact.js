import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Contact extends Component {

    state = { showContactInfo: false };

    showInfo = () => {
        this.setState({ showContactInfo: !this.state.showContactInfo });
    }

    // #2. Delete Request To Context API

    deleteInfo = async (id, dispatch) => {
        try {
            await axios.delete(`http://jsonplaceholder.typicode.com/users/${id}`);
            // .then(res => dispatch({ type: 'DELETE_CONTACT', payload: id }));
            dispatch({ type: 'DELETE_CONTACT', payload: id });
        } catch (e) {
            dispatch({ type: 'DELETE_CONTACT', payload: id });
        }
    }

    render(props) {
        const { id, name, email, phone } = this.props.contact;
        const { showContactInfo } = this.state;
        return (

            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card card-body mb-3">
                            <h4>{name} {' '}
                                <i onClick={this.showInfo} className="fas fa-sort-down"
                                    style={{ cursor: 'pointer' }}></i>
                                <i onClick={this.deleteInfo.bind(this, id, dispatch)} className="fas fa-times"
                                    style={{ cursor: 'pointer', float: 'right', color: 'red' }}></i>
                                <Link to={`contact/edit/${id}`} >
                                    <i className="fas fa-pencil-alt"
                                        style={{ cursor: 'pointer', float: 'right', color: 'black', marginRight: '1rem' }}
                                    ></i>
                                </Link>
                            </h4>
                            {showContactInfo ? (
                                <ul className="list-group">
                                    <li className="list-group-item">Email: {email}</li>
                                    <li className="list-group-item">Phone : {phone}</li>
                                </ul>
                            ) : null}
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
}

export default Contact;