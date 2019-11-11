import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
    typingEnd,
    typingStart,
    send,
} from 'Store/action/chat';

class Input extends Component {
    constructor(props) {
        super(props);
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            value: '',
        };
    }

    handleChange(e) {
        const value = e.target.value.toString();
        const {
            dispatch,
            user: {
                id,
            },
        } = this.props;

        this.setState({
            value,
        });

        if(value.length === 0) {
            dispatch( typingEnd(id) );
        }
        // else if(value.length === 1) {
        else {
            dispatch( typingStart(id) );
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        
        const message = this.state.value;
        const {
            dispatch,
            user: {
                id,
            },
        } = this.props;
        const timestamp = new Date().getTime();

        this.setState({ value: '' });
        dispatch( send(id, message, timestamp) );
    }

    render() {
        return (
            <form className='input' onSubmit={this.handleSubmit}>
                <input
                    onChange={this.handleChange}
                    placeholder='// type message'
                    type='text'
                    value={this.state.value}
                />
                <button type='submit'>send</button>
            </form>
        );
    }
}

Input.propTypes = {
    dispatch: PropTypes.func.isRequired,
    user: PropTypes.shape({
        id: PropTypes.number.isRequired,
    }).isRequired,
};

export default Input;
