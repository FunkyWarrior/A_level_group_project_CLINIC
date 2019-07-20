import React from 'react';
import Input from './Input'

export default class ChangeDoctor extends React.Component {


    render() {
        const {changeInputValues,postDoctors,postNewDoctor} = this.props;
        return (
            <div style={{display:'flex',flexDirection:'column', width:'200px', margin:'10px 20px'}}>
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    console.log(postNewDoctor)
                }}>
                {
                    postNewDoctor.map(el => (
                        <Input
                            key={el.id}
                            id={el.id}
                            el={el}
                            changeInputValues={changeInputValues}
                        />
                    ))
                }
                <input
                    type='submit'
                    value='Post new doctor'
                />
                </form>
            </div>
        );
    }
}
