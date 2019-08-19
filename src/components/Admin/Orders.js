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
            <div className = "orders-container">
                <div className = "orders-item find-order">
                    <input className = " appointment admin-form" type="text" onKeyDown={this.enterPressed} onChange={this.changeInputFindOrder}/>
                    {findOrderInput &&
                    <button className = "btn service-btn"  id='enter' onClick={this.findOrders}>Найти</button>
                    }
                    {searching && ordersArray.length === 0 && <p>Заказ не найден</p>}
                    {ordersArray.map(el => (
                        <div className = "order"  key={el._id}>
                            <div className = "order-date">
                                <Link to={`/order/${el._id}`} className = "order-info">{el.orderNumber}</Link>
                                <p>{el.date.split('T')[0]}</p>
                                <p>{el.time}</p>
                            </div>
                            <div className="name-info">
                                 <div className="info-serv-doc">
                                    <Link to={`/user/${el.user._id}`} className = "order-info">{`${el.user.firstName} ${el.user.lastName}`}</Link>
                                    <Link to={`/doctors/${el.doctor._id}`} className = "order-info">{el.doctor.name}</Link>
                                    <Link to={`/services/${el.spec._id}`} className = "order-info">{el.spec.name}</Link>
                                </div>                                
                            </div>
                        </div>
                    ))}
                </div>
                <div className = "orders-item" style={{
                    display:'flex',
                    flexDirection:'column',
                }}>
                    {orders.map(el => (
                        <div  className = "order"  key={el._id} >
                            <div className = "order-date">
                                <Link to={`/order/${el._id}`} className = "order-info">{el.orderNumber}</Link>
                                <p>{el.date.split('T')[0]}</p>
                                <p>{el.time}</p>
                            </div>
                            <div className="name-info">
                                <div className="info-serv-doc">
                                    <Link to={`/user/${el.user._id}`} className = "order-info">{`${el.user.firstName} ${el.user.lastName}`}</Link>
                                    <Link to={`/doctors/${el.doctor._id}`} className = "order-info">{el.doctor.name}</Link>
                                    <Link to={`/services/${el.spec._id}`} className = "order-info">{el.spec.name}</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Orders;