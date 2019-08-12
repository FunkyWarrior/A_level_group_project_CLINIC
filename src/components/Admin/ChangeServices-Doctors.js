import React from 'react';
import Input from './Input'
import CheckBoxWindow from "./CheckBoxWindow";

export default class ChangeServicesDoctors extends React.Component {
    state = {
        flag: false,
    };

    componentDidUpdate(prevProps) {
        if (this.props.data !== prevProps.data) this.setState({flag: false})
    };

    changeFlag = (e) => {
        e.preventDefault();
        this.setState({flag: !this.state.flag})
    };

    postNewItem = (e) => {
        const obj = {};
        e.preventDefault();
        // eslint-disable-next-line array-callback-return
        this.props.form.map(el => {
            obj[el.name] = el.value
        });
        this.props.postItem(this.props.categories? {
            ...obj,
            speciality:this.props.specialityArray
        } : obj)
    };

    changeItem = (e) => {
        const obj = {};
        e.preventDefault();
        // eslint-disable-next-line array-callback-return
        this.props.form.map(el => {
            if (el.value !== '') obj[el.name] = el.value
        });
        this.props.putItem({
            data: this.props.categories? {
                ...obj,
                speciality:this.props.specialityArray
            } : obj,
            id: this.props.itemId
        })

    };

    deleteItem = () => {
        this.props.deleteItem(this.props.itemId)
    };

    changeId = (e) => {
        this.props.changeId({
            item: e.target.value,
            data: this.props.data
        })
    };

    render() {
        const {
            categories,
            data,
            itemId,
            form,
            changeInputValues,
            changeSpecialityArray,
            specialityArray
        } = this.props;
        let doctor = data.find(el => el._id === itemId);
        if (doctor) doctor = doctor.speciality;
        console.log(data,specialityArray)
        return (
            <div className="change-services-doctors">
                {this.state.flag &&
                <CheckBoxWindow categories={categories} specialityArray={specialityArray} changeFlag={this.changeFlag} changeSpecialityArray={changeSpecialityArray}/>}
                <div className="admin-item">
                    <form className="form-doctors" onSubmit={itemId ? this.changeItem : this.postNewItem}>
                        {
                            form.map(el => {
                                el.required = !itemId;
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
                        {categories && <button onClick={this.changeFlag}>Choose Services</button>}
                        <input className="btn link"
                               type='submit'
                               value={itemId ? 'Изменить'  : 'Добавить'}
                        />
                    </form>
                </div>
                <div className="admin-item">
                    <select className="appointment admin-form" onChange={this.changeId} defaultValue='Выбрать'>
                        <option >Выбрать</option>
                        {
                            data.map(el => (
                                <option key={el._id}>{el.name}</option>
                            ))
                        }
                    </select>


                    {itemId &&
                    <button className="btn link" onClick={this.deleteItem} style={{backgroundColor: "#ff9774"}}>Удалить
                        выбранный элемент</button>
                    }
                </div>
            </div>
        );
    }
}