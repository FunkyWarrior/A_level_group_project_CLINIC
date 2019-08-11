import React from 'react';
// import {Link} from 'react-router-dom';
// import Button from "../buttons/button";
// import { postServices} from "../../store/app/actions";
import {connect} from 'react-redux'
import {
    changeInputValueDoctorForm,
} from "../actions/actions";


export class Reviews extends React.Component {


    render() {
        const {doctor, categories, changeFlag} = this.props

        // let doctor
        // if (doctors[0]) {
        //     doctor = doctors[2].speciality
        // }
        console.log(this.props)
        return (
            <>
                <div style={{
                    position: 'fixed',
                    right: '0',
                    left: '0',
                    display: 'flex',
                    justifyContent:'center',
                    backgroundColor: 'black',
                    margin: '5% auto',
                    width: '80%',
                    fontSize: '12px',
                    zIndex: '2'
                }}>
                    {categories.map(el => (
                        <div key={el._id} style={{
                            display: 'flex',
                            flexDirection: 'column',
                            wrap: 'nowrap',
                            textAlign:'start',
                            width:'20%'
                        }}>
                            <p>{el.name}</p>
                            {
                                el.services.map(item => (
                                    <div key={item._id} >
                                        <label>
                                            <input
                                                type="checkbox"
                                                value={item._id}
                                                defaultChecked={doctor ? doctor.find(spec => spec._id === item._id) : false}
                                            />
                                            {item.name}
                                        </label>
                                    </div>
                                ))
                            }
                        </div>
                    ))
                    }
                </div>
                <div style={{
                    position: 'fixed',
                    top: '0',
                    left: "0",
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'black',
                    opacity: '0.5'
                }} onClick={changeFlag}></div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        categories: state.services.categories
    }
};

const mapDispatchToProps = {
    changeInputValueDoctorForm,
};

export default connect(mapStateToProps, mapDispatchToProps)(Reviews)

// <div className = "main">
//     <div className="info-wrap">
//     <h2>Отзывы</h2>
// <div classdescription = "reviews-container">
//     ЗДЕСЬ БУДУТ ОТЗЫВЫ ПОСЕТИТЕЛЕЙ
// </div>
// </div>
//
// </div>