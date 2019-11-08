import React, { Component } from 'react';

import {
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
        this.setState({
            value: e.target.value
        });
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

export default Input;
