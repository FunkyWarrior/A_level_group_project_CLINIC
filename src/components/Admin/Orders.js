import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Orders extends Component {

    componentDidMount() {
        this.props.getUsers();
        this.props.getOrders({doctors:this.props.doctors,services:this.props.services,users:this.props.users});
    }

    changeInputFindOrder = (e) => {
        this.props.changeInputFindOrder(e.target.value)
    };

    findOrders = () => {
        this.props.findOrdersArray()
    };

    enterPressed = (e) => {
        if (e.key === 'Enter') {
            this.findOrders();
        }
    };

    render() {
        const{findOrderInput,ordersArray,searching,orders} = this.props;
        console.log(this.props);
        return (
            <div style={{
                display:'flex',
            }}>
                <div style={{
                    width:'50%'
                }}>
                    <input type="text" onKeyDown={this.enterPressed} onChange={this.changeInputFindOrder}/>
                    {findOrderInput &&
                    <button id='enter' onClick={this.findOrders}>Find User</button>
                    }
                    {searching && ordersArray.length === 0 && <p>Order not found</p>}
                    {ordersArray.map(el => (
                        <div key={el._id} style={{
                            display:'flex',

                        }}>
                            <Link to={`/order/${el._id}`}>{el.orderNumber}</Link>
                            <div>
                                <p>{el.date.split('T')[0]}</p>
                                <p>{el.time}</p>
                            </div>
                            <Link to={`/user/${el.user._id}`}>{el.user.email}</Link>
                            <Link to={`/doctors/${el.doctor._id}`}>{el.doctor.name}</Link>
                            <Link to={`/services/${el.spec._id}`}>{el.spec.name}</Link>
                        </div>
                    ))}
                </div>
                <div style={{
                    display:'flex',
                    flexDirection:'column',
                    width:'50%'
                }}>
                    {orders.map(el => (
                        <div key={el._id} style={{
                            display:'flex',

                        }}>
                            <Link to={`/order/${el._id}`}>{el.orderNumber}</Link>
                            <div>
                                <p>{el.date.split('T')[0]}</p>
                                <p>{el.time}</p>
                            </div>
                            <Link to={`/user/${el.user._id}`}>{el.user.email}</Link>
                            <Link to={`/doctors/${el.doctor._id}`}>{el.doctor.name}</Link>
                            <Link to={`/services/${el.spec._id}`}>{el.spec.name}</Link>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Orders;