import { useEffect } from 'react';
import'./home.css'
import { useState } from 'react';
import Card from './Carts/Card';

const Home = () => {
const[allActors, setAllActors] = useState([])
const[selectedActors, setSelectedActors] = useState([])
const[remaining, setRemaining] =useState(0)
const[totalCost, setTotalCost] =useState(0)

    useEffect(() =>{
     fetch('./data.json')
     .then(res => res.json())
     .then(data => setAllActors(data))
    },[])

    const handleSelectActor = (actor) =>{
        const isExist = selectedActors.find(item => item.id == actor.id)

        let count = actor.salary
       if(isExist){
        return alert('already booked')
       }
       else{
        selectedActors.forEach(item =>{
            count = count + item.salary
        })
       const remainingTotal = 20000 - count
    
       if(count > 20000){
        return alert('you have not enough money')
       }
       else{
        setTotalCost(count)
       setRemaining(remainingTotal)
        setSelectedActors([...selectedActors,actor])
       }
       }
    
    }
    console.log(allActors)
    return (
        <div className='container'>
         <div className="home-container">
           <div className="card-container">
            {
                allActors.map((actor,idx) =>(
                    <div key={idx} className="card">
                <div className="card-img">
                    <img src={actor.image} alt="" />
                </div>
                    <h2>{actor.name}</h2>
                    <p><small>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, atque.</small></p>
                <div className='info'>
                    <p>Salary: {actor.salary}$</p>
                    <p>{actor.role}</p>
                </div>
                <button onClick={() => handleSelectActor(actor)} className='card-btn'>select</button>
            </div>
                ))
            }
           </div>
            <div className="cart">
               <Card
               totalCost = {totalCost}
               remaining ={remaining}
               selectedActors = {selectedActors}></Card>
            </div>
         </div>
        </div>
    );
};

export default Home;