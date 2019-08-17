import React from 'react';

class User extends React.Component {
    state = {  }
    render() { 
        return ( 
        <div className = "main">
            <div className="info-wrap">
                <h2>User Name</h2>
                <div classdescription = "reviews-container">
                    <p>Это страница авторизованого пользователя</p>
                </div>
            </div>
        </div>
        );
    }
}
 
export default User;