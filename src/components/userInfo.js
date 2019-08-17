import React from 'react';
// import Input from './Admin/Input'


class UserInfo extends React.Component {

    changeItem = (e) => {
 
    }
    render() { 
        const { } = this.props
        // console.log('putItem', putItem)
        return ( 
            <div>
                <div className="admin-item">
                    <form className="form-doctors" onSubmit={this.changeItem}>
               <div>Change user</div>
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