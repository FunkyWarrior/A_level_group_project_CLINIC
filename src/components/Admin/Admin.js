import React from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Switch, Route} from "react-router-dom";
import {
    setSheduleDoctor,
    postShedule,
    changeInputValueDoctorForm,
    changeInputValueServiceForm,
    postDoctors,
    changeSelectedDoctorId,
    changeSelectedServiceId,
    putDoctors,
    deleteDoctors,
    postServices,
    putServices,
    deleteServices
} from "../../actions/actions";

import Shedule from './Shedule'
import ChangeServicesDoctors from './ChangeServices-Doctors'



export class Admin extends React.Component {

    render() {
        const {
            doctors,
            services,
            postNewShedule,
            postNewDoctor,
            postNewService,
            changeDoctorId,
            changeServiceId
        } = this.props.app;
        const {
            setSheduleDoctor,
            postShedule,
            changeInputValueDoctorForm,
            changeInputValueServiceForm,
            postDoctors,
            changeSelectedDoctorId,
            changeSelectedServiceId,
            putDoctors,
            deleteDoctors,
            putServices,
            deleteServices,
            postServices
        } = this.props;

        return (
            <div className="main">
                <div className="info-wrap">
                    <div className = " btn-box">
                        <Link to='/admin/change-shedule' className = "btn link admin">Shedule</Link>
                        <Link to='/admin/change-doctors' className = "btn link admin">Doctors</Link>
                        <Link to='/admin/change-services' className = "btn link admin">Services</Link>
                    </div>
                    <Switch>
                        <Route path='/admin/change-shedule' render={() => <Shedule
                            doctors={doctors}
                            postNewShedule={postNewShedule}
                            setSheduleDoctor={setSheduleDoctor}
                            postShedule={postShedule}
                        />} />
                        <Route path='/admin/change-doctors' render={() => <ChangeServicesDoctors
                            data={doctors}
                            itemId={changeDoctorId}
                            changeId={changeSelectedDoctorId}
                            form={postNewDoctor}
                            postItem={postDoctors}
                            putItem={putDoctors}
                            deleteItem={deleteDoctors}
                            changeInputValues={changeInputValueDoctorForm}
                        />} />
                        <Route path='/admin/change-services' render={() => <ChangeServicesDoctors
                            data={services}
                            itemId={changeServiceId}
                            changeId={changeSelectedServiceId}
                            form={postNewService}
                            postItem={postServices}
                            putItem={putServices}
                            deleteItem={deleteServices}
                            changeInputValues={changeInputValueServiceForm}
                        />} />
                    </Switch>
                </div>
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
    changeInputValueDoctorForm,
    changeInputValueServiceForm,
    postDoctors,
    changeSelectedDoctorId,
    changeSelectedServiceId,
    putDoctors,
    deleteDoctors,
    postServices,
    putServices,
    deleteServices
};

export default connect (mapStateToProps,mapDispatchToProps)(Admin)