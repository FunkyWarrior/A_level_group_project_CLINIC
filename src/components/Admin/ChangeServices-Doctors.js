import React from 'react';
import Input from './Input'

export default class ChangeServicesDoctors extends React.Component {


    render() {
        const obj = {};
        const {
            data,
            itemId,
            form,
            postItem,
            putItem,
            deleteItem,
            changeId,
            changeInputValues,
        } = this.props;
        return (
            
            <div style={{display:'flex',flexDirection:'column', width:'400px', margin:'10px 20px'}}>
                <form style={{display:"flex",flexDirection:"column"}} onSubmit={(e)=>{
                    e.preventDefault();
                    // eslint-disable-next-line array-callback-return
                    form.map(el => {
                        obj[el.name] = el.value
                    });
                    postItem(obj)
                }}
                >
                    {
                        form.map(el => (
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
                        value='Post New Item'
                    />
                </form>

                <select  onChange={(e)=>changeId(e.target.value)} defaultValue='choose item'>
                    <option disabled >choose item</option>
                    {
                        data.map(el=> (
                            <option key={el._id}>{el.name}</option>
                        ))
                    }
                </select>
                {itemId &&
                <button onClick={()=>deleteItem(itemId)} style={{backgroundColor:"red"}}>DELETE Item</button>
                }
                {
                    <form style={{display:"flex",flexDirection:"column",margin:"20px 0"}} onSubmit={(e)=>{
                        e.preventDefault();
                        // eslint-disable-next-line array-callback-return
                        form.map(el => {
                            if (el.value !== '')
                                obj[el.name] = el.value
                        });
                        putItem({data:obj,id:itemId})

                    }}>
                        {itemId &&
                        form.map(el => {
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
                            value='Change Selected Item'
                        />
                    </form>
                }
            </div>
        );
    }
}
