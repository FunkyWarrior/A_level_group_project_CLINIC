import React from 'react';

export default class Input extends React.Component {
    render(){
        return (
            <input
                className = "appointment admin-form"
                id={this.props.el.id}
                type={this.props.el.type}
                name={this.props.el.name}
                value={this.props.el.value}
                placeholder={this.props.el.placeholder}
                minLength={this.props.el.minLength}
                maxLength={this.props.el.maxLength}
                required={this.props.el.required}
                pattern={this.props.el.pattern}
                onChange={(e) => this.props.changeInputValues(e)}
            />
        );
    }
};
