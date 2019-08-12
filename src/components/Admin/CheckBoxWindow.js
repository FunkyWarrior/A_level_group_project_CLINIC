import React from 'react';


class CheckBoxWindow extends React.Component {
    changeSpecialityArray = (e) => {
        this.props.changeSpecialityArray(e.target)
    };

    render() {
        const {categories, changeFlag,specialityArray} = this.props;
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
                                                defaultChecked={specialityArray.find(el => el === item._id)}
                                                onChange={this.changeSpecialityArray}
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

export default CheckBoxWindow;