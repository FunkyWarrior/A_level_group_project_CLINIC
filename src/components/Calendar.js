import React, {Component} from 'react';

class Calendar extends Component {

    componentDidMount() {

    }
    setDate = (e) => {
        console.log(`${new Date().getFullYear()}-${new Date().getMonth() < 10 ? '0' + new Date().getMonth() : new Date().getMonth()}-${e.target.id < 10 ? '0' + e.target.id : e.target.id}`)
        document.getElementById('inp_date').value=`${new Date().getFullYear()}-${new Date().getMonth() < 10 ? '0' + new Date().getMonth() : new Date().getMonth()}-${e.target.id < 10 ? '0' + e.target.id : e.target.id}`
    }

    render() {
        const date = new Date();
        const start = new Date(2019, 6, 1);
        const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        const currentMonth = [];
        const week = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
        for (let x = 1; x <= month[date.getMonth()]; x++) currentMonth.push(x);
        const startOfMonth = week.indexOf(week.find(el => el === 'чт'));
        console.log(date.getDate());

        return (
            <div>
                <table cols={7}>
                    <caption><button>{'<'}</button>{start.toLocaleString('ru', {month: 'short'})}<button>{'>'}</button></caption>
                    <tbody>
                    <tr>
                        {week.map(el => (<th key={el}>{el}</th>))}
                    </tr>
                    <tr >
                        {currentMonth.map(el=> (el >startOfMonth && el<=7) ? <td key={el} className='cal__td'><button id={el -  startOfMonth} onClick={this.setDate}>{el -  startOfMonth}</button></td> : el <=7 ? <td key={el}><button id={el} disabled>none</button></td> : null) }
                    </tr>
                    <tr >
                        {currentMonth.map(el=> (el > 7-startOfMonth && el <= 14-startOfMonth)?(<td key={el} className='cal__td'><button id={el} onClick={this.setDate}>{el}</button></td>):null)}
                    </tr>
                    <tr >
                        {currentMonth.map(el=> (el > 14-startOfMonth && el <= 21-startOfMonth)?(<td key={el} className='cal__td' ><button id={el} onClick={this.setDate}>{el}</button></td>):null)}
                    </tr>
                    <tr >
                        {currentMonth.map(el=> (el > 21-startOfMonth && el <= 28-startOfMonth)?(<td key={el} className='cal__td'><button id={el}  onClick={this.setDate}>{el}</button></td>):null)}
                    </tr>
                    <tr >
                        {currentMonth.map(el=> el > 28-startOfMonth?(<td key={el} className='cal__td'><button id={el} onClick={this.setDate}>{el}</button></td>):null)}
                    </tr>
                    </tbody>
                </table>
                <input type="date" id='inp_date'/>
            </div>
        );
    }
}

export default Calendar
