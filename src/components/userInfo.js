import React from 'react';
import Input from './Admin/Input'


class UserInfo extends React.Component {

    changeUser = (e) => {
        e.preventDefault();
        const obj = {};
        this.props.changeUserUserForm.map(el => {
           return  obj[el.name] =  el.value
        });
        // console.log(obj)
        // console.log(this.props.user._id)
        this.props.putUser({data:obj,path:this.props.user._id})
    };
    render() { 
        const { changeUserUserForm, changeInputValueUserUserForm} = this.props
        console.log('user',this.props.user)
        console.log('form', changeUserUserForm)
        return ( 
            <div>
                <div className="admin-item">
                    <form className="form-doctors" >
               {changeUserUserForm.map(el =>
                <Input
                key={el.id}
                el={el}
                changeInputValues={changeInputValueUserUserForm}
                className={el.className}
            /> )}
                    </form>
                    <button onClick={this.changeUser} className="btn link admin">Изменить</button>
                </div>
            </div>
        );
    }
}
 
export default UserInfo;