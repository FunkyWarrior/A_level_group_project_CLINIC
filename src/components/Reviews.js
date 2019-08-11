import React from 'react';
// import {Link} from 'react-router-dom';
// import Button from "../buttons/button";
// import { postServices} from "../../store/app/actions";
import {connect} from 'react-redux'
import {
    changeInputValueDoctorForm,
} from "../actions/actions";



export class Reviews extends React.Component {


    render( ) {
        const {postNewDoctor,doctors,servicesArray} = this.props.app
        const servArray =  Object.keys(servicesArray).map(key => {
            return [key, servicesArray[key]];
        })
        let doctor
        if (doctors[0]) {
            doctor = doctors[2].speciality
        }
        console.log(doctor)
        console.log(servArray)

        return (
           <div style={{display:'flex',margin:'100px 5px'}}>
               {doctor &&
                   servArray.map(el => (
                       <div key={[el[0]]}>
                           <p>{el[0]}</p>

                            {
                                el[1].map(item => (
                                    <div key={item._id} style={{display:'flex',margin:'5px 5px',flexDirection:'column',width:'200px'}}>
                                        <label >
                                            <input
                                                type="checkbox"
                                                value={item._id}
                                                defaultChecked={doctor.find(spec => spec._id === item._id)}
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
        ) 
    }
}

const mapStateToProps = state => {
    return {
        app:state.app,
    }
};

const mapDispatchToProps = {
    changeInputValueDoctorForm,
};

export default connect (mapStateToProps,mapDispatchToProps)(Reviews)

// <div className = "main">
//     <div className="info-wrap">
//     <h2>Отзывы</h2>
// <div classdescription = "reviews-container">
//     ЗДЕСЬ БУДУТ ОТЗЫВЫ ПОСЕТИТЕЛЕЙ
// </div>
// </div>
//
// </div>