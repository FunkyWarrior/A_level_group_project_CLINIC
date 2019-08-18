import React, { Component } from 'react';

class UserOrders extends Component {
    render() { 
        const { data } = this.props
        console.log(data)
        return ( <div>
            {data.map(el =>  
                     <div key={el._id}>
                        <p>Номер заказа: {el.orderNumber}</p>
                        <p>Дата заказа: {el.date.split('T')[0]}</p>
                        <p>Время заказа: {el.time}</p>
                        </div>)}
        </div> );
    }
}
 
export default UserOrders;