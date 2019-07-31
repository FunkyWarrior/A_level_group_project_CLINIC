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

            <div className = "change-services-doctors">
                <div className="admin-item">
                    <form className ="form-doctors"   onSubmit={(e)=>{
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
                        <input className = "btn link" 
                            type='submit'
                            value='Добавить '
                        />
                    </form>
                </div>

                <div className="admin-item">
                    <select  className = "appointment admin-form"  onChange={(e)=>changeId(e.target.value)} defaultValue='Выбрать'>
                        <option disabled >Выбрать</option>
                        {
                            data.map(el=> (
                                <option key={el._id}>{el.name}</option>
                            ))
                        }
                    </select>
                    {itemId &&
                    <button className = "btn link" onClick={()=>deleteItem(itemId)} style={{backgroundColor:"#ff9774"}}>Удалить карточку сотрудника</button>
                    }

                    {
                        <form  onSubmit={(e)=>{
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
                                className = "btn link"
                                type='submit'
                                value='Изменить выбранный элемент'
                            />
                        </form>
                    }
               </div>
            </div>
        );
    }
}
