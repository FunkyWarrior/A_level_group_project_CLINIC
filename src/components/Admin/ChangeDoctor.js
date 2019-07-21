import React from 'react';
import Input from './Input'

export default class ChangeDoctor extends React.Component {


    render() {
        const doc = {};
        const {changeInputValues,postDoctors,postNewDoctor,changeSelectedDoctor,doctors,changeDoctor,putDoctors} = this.props;
        return (
            <div style={{display:'flex',flexDirection:'column', width:'400px', margin:'10px 20px'}}>
                <form style={{display:"flex",flexDirection:"column"}} onSubmit={(e)=>{
                    e.preventDefault();
                    // eslint-disable-next-line array-callback-return
                    postNewDoctor.map(el => {
                        doc[el.name] = el.value
                    });
                    postDoctors(doc)
                }}
                >
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

                <select  onChange={(e)=>changeSelectedDoctor(e.target.value)} defaultValue='choose doctor'>
                    <option disabled >choose doctor</option>
                    {
                        doctors.map(el=> (
                            <option key={el._id}>{el.name}</option>
                        ))
                    }
                </select>

                {
                    <form style={{display:"flex",flexDirection:"column",margin:"20px 0"}} onSubmit={(e)=>{
                        e.preventDefault();
                        // eslint-disable-next-line array-callback-return
                        postNewDoctor.map(el => {
                            if (el.value !== '')
                                doc[el.name] = el.value
                        });
                        putDoctors({data:doc,id:changeDoctor})

                    }}>
                        {changeDoctor &&
                        postNewDoctor.map(el => {
                            el.required = false;
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
                        <input
                            type='submit'
                            value='Change Selected Doctor'
                        />
                    </form>
                }
            </div>
        );
    }
}
