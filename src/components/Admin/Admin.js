import React from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Switch, Route} from "react-router-dom";
import {
    setSheduleDoctor,
    postShedule,
    changeInputDoctorForm,
    postDoctors
} from "../../actions/actions";

import Shedule from './Shedule'
import ChangeDoctor from './ChangeDoctor'



export class Admin extends React.Component {


    render() {
        const {doctors,postNewShedule,sheduleMonthArray,postNewDoctor} = this.props.app;
        const {setSheduleDoctor,postShedule,changeInputDoctorForm,postDoctors} = this.props;
        return (
            <div style={{display:'flex',flexDirection:'column', width:'200px', margin:'100px 20px'}}>
                <div>
                    <Link to='/admin/change-shedule'>Shedule</Link>
                    <Link to='/admin/change-doctors'>Doctors</Link>
                    <Link to='/admin/change-services'>Services</Link>
                </div>
                <Switch>
                    <Route path='/admin/change-shedule' render={() => <Shedule
                        doctors={doctors}
                        postNewShedule={postNewShedule}
                        sheduleMonthArray={sheduleMonthArray}
                        setSheduleDoctor={setSheduleDoctor}
                        postShedule={postShedule}
                    />} />
                    <Route path='/admin/change-doctors' render={() => <ChangeDoctor
                        changeInputValues={changeInputDoctorForm}
                        postDoctors={postDoctors}
                        postNewDoctor={postNewDoctor}
                    />} />
                    <Route path='/admin/change-services' render={() => <div>Services</div>} />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        app:state.app,
    }
};

const mapDispatchToProps = {
    setSheduleDoctor,
    postShedule,
    changeInputDoctorForm,
    postDoctors


};

export default connect (mapStateToProps,mapDispatchToProps)(Admin)