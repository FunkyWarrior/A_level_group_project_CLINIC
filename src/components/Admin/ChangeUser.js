import React from 'react';


import Input from "./Input"

export default class ChangeUser extends React.Component {

    changeUserInput = (e) => {
        this.props.changeFindUserInput(e.target.value)
    };

    findUser = () => {
        this.props.findUser(this.props.findUserInput.includes('@') ? '?email=' + this.props.findUserInput : this.props.findUserInput)
    };

    enterPressed = (e) => {
        if (e.key === 'Enter') {
            this.findUser();
        }
    };

    changeUser = (e) => {
        e.preventDefault();
        const obj = {};
        // eslint-disable-next-line array-callback-return
        this.props.changeUserForm.map(el => {
            obj[el.name] = el.type === 'radio' ? el.checked ? el.value : !el.value : el.value
        });
        console.log(obj) //заменить на putUsers
    };

    deleteUser = () => {
        console.log(this.props.user._id) // заменить на deleteUser
    };

    render() {
        const {
            user,
            findUserInput,
            changeInputValueUserForm,
            changeUserForm,
            error
        } = this.props;
        return (
            <div
                style={{
                    display:'flex'
                }}
            >
                <div>
                    <input type='text' name='find_user' onKeyDown={this.enterPressed} onChange={this.changeUserInput}/>
                    {findUserInput &&
                    <button id='enter' onClick={this.findUser}>Find User</button>
                    }
                    {user &&
                    <div>
                        <form
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                width: '400px'
                            }}
                        >
                            {changeUserForm.map(el =>
                                <label
                                    key={el.id}>{el.name === 'role' || el.name === 'doctor' ? `${el.name} ${el.value}` : el.name}
                                    {el.name !== 'role' && el.name !== 'doctor' && <br/>}
                                    <Input
                                        el={el}
                                        changeInputValues={changeInputValueUserForm}
                                        className={el.className}
                                    />
                                </label>
                            )}
                        </form>
                        <button onClick={this.changeUser}>Change</button>
                        <button onClick={this.deleteUser}>DELETE</button>
                    </div>
                    }

                    {error &&
                    <div>
                        <p>User not found</p>
                    </div>
                    }
                </div>
                <div>
                    <p>User List will be here</p>
                </div>
            </div>
        );
    }
};

