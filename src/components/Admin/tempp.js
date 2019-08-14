import React from 'react';

export default class Tempp extends React.Component {

changeUserInput = (e) => {
    this.props.changeFindUserInput(e.target.value)
}

findUser = () => {
    this.props.findUser(this.props.findUserInput.includes('@') ? '?email='+this.props.findUserInput : this.props.findUserInput)
}

    render(){
        const {
            user,
            findUserInput,
            changeFindUserInput,
            findUser,
            deleteUser
        } = this.props
        console.log(this.props)
        return (
           <div>
                <input type='text' onChange={this.changeUserInput}></input>
                {findUserInput && 
                    <button onClick={this.findUser}>Find User</button>
                }
                {user && 
                    <div>
                        <p>{user.firstName}</p>
                        <p>{user.lastName}</p>
                        <p>{user.email}</p>
                        <p>{user.role}</p>
                        <p>{user.doctor}</p>
                        <p>{user.createdAt}</p>
                        <p>{user._id}</p>
                    </div>
                }
           </div>
        );
    }
};
