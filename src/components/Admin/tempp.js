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

    changeUser = (e) => {
        const obj = {}
        e.preventDefault()
        this.props.changeUserForm.map(el => {
            obj[el.name] = el.type === 'radio' ? el.checked ? el.value : !el.value : el.value
        });
        console.log(obj)
    };

    render(){
        const {
            user,
            findUserInput,
            changeFindUserInput,
            findUser,
            deleteUser,
            changeInputValueUserForm,
            changeUserForm,
            error
        } = this.props;
        console.log(this.props)
        return (
           <div>
                <input type='text' name='find_user' onKeyDown={this.enterPressed} onChange={this.changeUserInput} />
                {findUserInput && 
                    <button id='enter' onClick={this.findUser}>Find User</button>
                }
                {user &&
                    <div>
                        <form onSubmit={this.changeUser} className="form-doctors">
                            {changeUserForm.map(el =>
                                <Input
                                    key={el.id}
                                    el={el}
                                    changeInputValues={changeInputValueUserForm}
                                    className={el.className}
                                />
                            )}
                            <button type='submit'>Change</button>
                        </form>
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

