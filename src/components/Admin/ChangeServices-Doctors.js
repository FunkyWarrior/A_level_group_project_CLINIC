import React from 'react';
import Input from './Input'
import Reviews from "../Reviews";

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
        this.props.postItem(obj)
    };

    changeItem = (e) => {
        const obj = {};
        e.preventDefault();
        // eslint-disable-next-line array-callback-return
        this.props.form.map(el => {
            if (el.value !== '') obj[el.name] = el.value
        });
        this.props.putItem({data: obj, id: this.props.itemId})

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
            data,
            itemId,
            form,
            changeInputValues,
        } = this.props;
        let doctor = data.find(el => el._id === itemId);
        if (doctor) doctor = doctor.speciality;
        return (
            <div className="change-services-doctors">
                {this.state.flag && <Reviews doctor={doctor} changeFlag={this.changeFlag}/>}
                <div className="admin-item">
                    <form className="form-doctors" onSubmit={this.postNewItem}>
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
                        <button onClick={this.changeFlag}>Choose Services</button>
                        <input className="btn link"
                               type='submit'
                               value='Добавить '
                        />
                    </form>
                </div>
                <div className="admin-item">
                    <select className="appointment admin-form" onChange={this.changeId} defaultValue='Выбрать'>
                        <option disabled>Выбрать</option>
                        {
                            data.map(el => (
                                <option key={el._id}>{el.name}</option>
                            ))
                        }
                    </select>

                    <form onSubmit={this.props.changeItem}>
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
                            className="btn link"
                            type='submit'
                            value='Изменить выбранный элемент'
                        />
                    </form>
                    {itemId &&
                    <button className="btn link" onClick={this.deleteItem} style={{backgroundColor: "#ff9774"}}>Удалить выбранный элемент</button>
                    }
                </div>
            </div>
        );
    }
}
