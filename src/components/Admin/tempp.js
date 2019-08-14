import React from 'react';


import Input from "./Input"

export default class Tempp extends React.Component {

    changeUserInput = (e) => {
    this.props.changeFindUserInput(e.target.value)
    };

    findUser = () => {
        this.props.findUser(this.props.findUserInput.includes('@') ? '?email='+this.props.findUserInput : this.props.findUserInput)
    };

    enterPressed = (e) => {
        if (e.key === 'Enter') {
            this.findUser();
        }
    };

    render(){
        const {
            user,
            findUserInput,
            changeFindUserInput,
            findUser,
            deleteUser,
            changeUserForm,
            error
        } = this.props;
        return (
           <div>
                <input type='text' name='find_user' onKeyDown={this.enterPressed} onChange={this.changeUserInput} ></input>
                {findUserInput && 
                    <button id='enter' addEvent onClick={this.findUser}>Find User</button>
                }
                {user &&
                <div>

                    {changeUserForm.map(el => <Input key={el.id} el={el} changeInputValues={console.log} className={'hello'}/>)}
                </div>

                }
               {error &&
                   <div>
                       <p>User not found</p>
                   </div>
               }
           </div>
        );
    }
};

