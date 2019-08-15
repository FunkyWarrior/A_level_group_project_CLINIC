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
    deleteServices,
    changeSpecialityArray
} from "../../actions/actions";

import {
    changeFindUserInput,
    findUser,
    deleteUser,
    changeInputValueUserForm
} from "../../actions/user"

import Shedule from './Shedule'
import ChangeUser from './ChangeUser'
import ChangeServicesDoctors from './ChangeServices-Doctors'



export class Admin extends React.Component {

    render() {
        const {
            doctors,
            postNewShedule,
            postNewDoctor,
            postNewService,
            changeDoctorId,
            changeServiceId,
            services,
            categories,
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
            postServices,
            changeSpecialityArray,
            specialityArray,
            user,
            findUserInput,
            changeFindUserInput,
            findUser,
            deleteUser,
            userError,
            changeUserForm,
            changeInputValueUserForm
        } = this.props;

        return (
            <div className="main">
                <div className="info-wrap">
                    <div className = " btn-box">
                        <Link to='/admin/change-shedule' className = "btn link admin">Расписание</Link>
                        <Link to='/admin/change-doctors' className = "btn link admin">Сотрудники</Link>
                        <Link to='/admin/change-services' className = "btn link admin">Сервисы</Link>
                        <Link to='/admin/change-user' className = "btn link admin">Пользователи</Link>
                    </div>
                    <Switch>
                        <Route path='/admin/change-shedule' render={() => <Shedule
                            doctors={doctors}
                            postNewShedule={postNewShedule}
                            setSheduleDoctor={setSheduleDoctor}
                            postShedule={postShedule}
                        />} />
                        <Route path='/admin/change-doctors' render={() => <ChangeServicesDoctors
                            categories={categories}
                            data={doctors}
                            specialityArray={specialityArray}
                            itemId={changeDoctorId}
                            changeId={changeSelectedDoctorId}
                            form={postNewDoctor}
                            postItem={postDoctors}
                            putItem={putDoctors}
                            deleteItem={deleteDoctors}
                            changeInputValues={changeInputValueDoctorForm}
                            changeSpecialityArray={changeSpecialityArray}
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
                        <Route path='/admin/change-user' render={() => <ChangeUser
                            user={user}
                            findUserInput={findUserInput}
                            changeFindUserInput={changeFindUserInput}
                            findUser={findUser}
                            deleteUser={deleteUser}
                            error={userError}
                            changeUserForm={changeUserForm}
                            changeInputValueUserForm={changeInputValueUserForm}
                        />} />
                    </Switch>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        doctors:state.app.doctors,
        postNewShedule:state.app.postNewShedule,
        postNewDoctor:state.app.postNewDoctor,
        postNewService:state.app.postNewService,
        changeDoctorId:state.app.changeDoctorId,
        changeServiceId:state.app.changeServiceId,
        specialityArray:state.app.specialityArray,
        services: state.services.services,
        categories: state.services.categories,
        user:state.user.user,
        findUserInput:state.user.findUserInput,
        userError:state.user.error,
        changeUserForm:state.user.changeUserForm,
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
    deleteServices,
    changeSpecialityArray,
    changeFindUserInput,
    findUser,
    deleteUser,
    changeInputValueUserForm
};

export default connect (mapStateToProps,mapDispatchToProps)(Admin)