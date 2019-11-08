import React, { Component } from 'react';

import {
    endTyping,
    startTyping,
} from 'Store/action/chat';

class Input extends Component {
    constructor(props) {
        super(props);
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.onTimeout = this.onTimeout.bind(this);
        // this.timer = false;

        this.state = {
            // typing: false,
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
        const input = this.state.value;
        this.setState({ value: '' });
        console.log('sending', input);
    }

    /*
    onTimeout() {
        const {
            dispatch,
            user: {
                id,
            },
        } = this.props;

        if(this.state.value.toString().length) {
            dispatch( startTyping(id) );
        }
        else {
            dispatch( endTyping(id) );
        }
    }
    */

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
