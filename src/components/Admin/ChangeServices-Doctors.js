import React from 'react';
import Input from './Input'

export default class ChangeServicesDoctors extends React.Component {

    postNewItem = (e) => {
        const obj = {};
        e.preventDefault();
        this.props.form.map(el => {
            obj[el.name] = el.value
        });
        this.props.postItem(obj)
    };

    changeItem = (e) => {
        const obj = {};
        e.preventDefault();
        this.props.form.map(el => {
            if (el.value !== '')
                obj[el.name] = el.value
        });
        this.props.putItem({data:obj,id:this.props.itemId})

    };

    deleteItem = () => {
        this.props.deleteItem(this.props.itemId)
    };

    changeId = (e) => {
        this.props.changeId(e.target.value)
    };

    render() {
        const {
            data,
            itemId,
            form,
            changeInputValues,
        } = this.props;
        return (
            <div className = "change-services-doctors">
                <div className="admin-item">
                    <form className ="form-doctors" onSubmit={this.postNewItem}>
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
                    <select  className = "appointment admin-form"  onChange={this.changeId} defaultValue='Выбрать'>
                        <option disabled >Выбрать</option>
                        {
                            data.map(el=> (
                                <option key={el._id}>{el.name}</option>
                            ))
                        }
                    </select>

                    <form  onSubmit={this.props.changeItem}>
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
                    {itemId &&
                    <button className = "btn link" onClick={this.deleteItem} style={{backgroundColor:"#ff9774"}}>Удалить выбранный элемент</button>
                    }
                </div>
            </div>
        );
    }
}
