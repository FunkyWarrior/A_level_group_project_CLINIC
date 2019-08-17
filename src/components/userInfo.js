import React from 'react';
import Input from './Admin/Input'


class UserInfo extends React.Component {

    changeItem = (e) => {
 
    }
    render() { 
        const { form, user, putItem,postItem, changeInputValues} = this.props
        // console.log('putItem', putItem)
        return ( 
            <div>
                <div className="admin-item">
                    <form className="form-doctors" onSubmit={this.changeItem}>
                        {
                            form.map(el => {
                                
                                    return (
                                        <Input
                                            key={el.id}
                                            id={el.id}
                                            el={el}
                                            changeInputValues={changeInputValues}
                                        />
                                    )
                            })
                        }
                        <input className="btn link"
                               type='submit'
                               value= 'Изменить'
                        />
                    </form>
                </div>
            </div>
        );
    }
}
 
export default UserInfo;