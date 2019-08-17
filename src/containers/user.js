import React, { Component } from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {Switch, Route} from "react-router-dom";

import UserInfo from '../components/userInfo'
import UserOrders from '../components/userOrders'

import { getOrders,getUserOrders } from "../actions/orders"

class UserContainer extends Component {

    componentDidMount() {
        this.props.getOrders(this.props.currentUser);
        this.props.getUserOrders(this.props.currentUser)
       
    }
   
    // componentDidUpdate(){
        
    //     // orders ? action(currentUser) : null
    // }

    render() { 
        // const {currentUser, dataOrders, getUserOrders} = this.props
        const { currentUser } = this.props
        // console.log('user',currentUser)
        // console.log('Orders',dataOrders)
        return (
            <div className="main">
                <div className="info-wrap">
                 <div className="btn-box">
                    <Link to='/user/orders' className = "btn link admin" >Мои заказы</Link>
                    <Link to='/user/info' className = "btn link admin">Редактировать профиль</Link>
                 </div>
                 <Switch>
                    <Route path='/user/orders' component={ UserOrders } />
                    <Route path='/user/info' render={() => <UserInfo
                            user={currentUser}
                        />} />
                 </Switch>
                </div>
            </div>

              );
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.auth.user,
        dataOrders: state.orders,
        changeUserForm: state.auth.changeUserForm
    }
}
export default connect(mapStateToProps, { getOrders,getUserOrders })(UserContainer);