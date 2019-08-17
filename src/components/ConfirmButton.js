import React, {Component} from 'react';

class ConfirmButton extends Component {
    render(){
        const {yes,no,text} = this.props;
        return(
            <>
                <div style={{
                    position:'fixed',
                    backgroundColor: 'tomato',
                    left:'0',
                    right:'0',
                    width: '300px',
                    height: '150px',
                    margin: 'auto',
                    zIndex:'2'
                }}>
                    <div>{text}</div>
                    <button onClick={() => yes()}>Yes</button>
                    <button onClick={() => no()}>No</button>
                </div>
                <div className = "wrap-check-off"  onClick={no}/>
            </>
        )
    }
}

export default ConfirmButton;