import React, { Component } from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {Switch, Route} from "react-router-dom";

import UserInfo from '../components/userInfo'
import UserOrders from '../components/userOrders'

import { getOrders,getUserOrders } from "../actions/orders"
import { changeInputValueUserUserForm } from '../actions/auth'
import {putUser} from '../actions/user'

class UserContainer extends Component {

    componentDidMount() {
        this.props.getOrders(this.props.currentUser);
        this.props.getUserOrders(this.props.currentUser)
       
    }

    render() { 
        // const {currentUser, dataOrders, getUserOrders} = this.props
        const { currentUser,changeUserUserForm, changeInputValueUserUserForm,putUser } = this.props
        return (
            <div className="main">
                <div className="info-wrap">
                <h2>Добро пожаловать в личный кабинет, {currentUser.firstName}!</h2>
                 <div className="btn-box">
                    <Link to='/user/orders' className = "btn link admin" >Мои заказы</Link>
                    <Link to='/user/info' className = "btn link admin">Редактировать профиль</Link>
                 </div>
                 <Switch>
                    <Route path='/user/orders' component={ UserOrders } />
                    <Route path='/user/info' render={() => <UserInfo
                            user={currentUser}
                            changeUserUserForm = {changeUserUserForm}
                            changeInputValueUserUserForm={changeInputValueUserUserForm}
                            putUser= {putUser}
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
        changeUserUserForm: state.auth.changeUserForm
    }
}
export default connect(mapStateToProps, { getOrders,getUserOrders, changeInputValueUserUserForm, putUser })(UserContainer);