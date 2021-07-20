import React from 'react'
import Birthday from './Birthday/Birthday'
import BirthdayData from './Birthday/data'

function BirthdayList() {
    const [birthdayList,setbirthdayList] = React.useState(BirthdayData)
    const removeBirthDay = (id) => {
        let newList = birthdayList.filter((birthday) => birthday.id !== id)
        setbirthdayList(newList)
        }
    return (
        <div className='birthdaycontainer'>
            <h3>{birthdayList.length} birthdays today</h3>
            {birthdayList.map((birthday) => {
                return (<div><Birthday key={birthday.id} name={birthday.name} age={birthday.age} image={birthday.image} />
                <a  onClick={()=> removeBirthDay(birthday.id)}>Remove</a></div>)
            })}
            
            <button className="clear btn" onClick={()=>setbirthdayList([])}>Clear All</button>
            {console.log(birthdayList)}
        </div>
        
    )
}

export default BirthdayList