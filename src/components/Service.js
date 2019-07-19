import React from 'react';


export default class Service extends React.Component {


    render() {
        const {his,data} = this.props;
        const path = his.match.params.service;
        return (
            <div >
                {data[path].name}
                {data[path].description}
                {data[path].price}
            </div>
        );
    }
}