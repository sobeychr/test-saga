import React, { Component } from 'react';

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
        this.setState({ value: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const input = this.state.value;
        this.setState({ value: '' });
        console.log('sending', input);
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
