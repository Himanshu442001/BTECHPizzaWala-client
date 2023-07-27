import React, { useState } from 'react'
import {Country,State} from "country-state-city"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const Delivery = () => {

  const {deliveryInfo} = useSelector((state)=>state.cart);

const [hNo,setHNo] = useState(deliveryInfo.hNo);
const [city,setCity] = useState(deliveryInfo.city);
const [country,setCountry] = useState(deliveryInfo.country);
const [state,setState] = useState(deliveryInfo.state);
const [phoneNo,setPhoneNo] = useState(deliveryInfo.phoneNo);
const [pincode,setPinCode] = useState(deliveryInfo.pincode);


const dispatch = useDispatch();


const navigate = useNavigate();
const submitHandler = (e)=>{
e.preventDefault();
// console.log(hNo,city,state,country,phoneNo,pinCode);
dispatch({
  type:"addDeliveryInfo",
  payload:{
    hNo,city,state,country,phoneNo,pincode
  },
});

localStorage.setItem("deliveryInfo",JSON.stringify(
  {
    hNo,city,state,country,phoneNo,pincode
  }
));
navigate("/confirmorder");
};

  return <section className='delivery'>
  <main>
  <h1>Delivery Details</h1>
  <form onSubmit={submitHandler}>
    <div>
    <label>H.No.</label>
    <input type='text' placeholder='Enter House No.' value={hNo} required onChange={(e)=>setHNo(e.target.value)}/>
    </div>

    <div>
    <label>City</label>
    <input type='text' placeholder='Enter your City' value={city} required onChange={(e)=>setCity(e.target.value)}/>
    </div>


    <div>
    <label>Country</label>
    <select value={country} required onChange={(e)=>setCountry(e.target.value)}>
    <option value="">Country</option>
  

    {
      Country && Country.getAllCountries().map(i=>(
        <option value={i.isoCode} key={i.isoCode
        }>{i.name}</option>

      ))
    }

    </select>
   </div>
   {
    country && (
      <div>
    <label>State</label>
     <select value={state} required onChange={(e)=>setState(e.target.value)}>
    <option value="">State</option>
    {/* <option value="">Uttar Pradesh</option> */}

    {
      State && State.getStatesOfCountry(country).map(i=>(
        <option value={i.isoCode} key={i.isoCode
        }>{i.name}</option>

      ))
    
    }
    </select>
    
   
   </div>
    )
   }

   




    <div>
    <label> Pincode</label>
    <input type='number' placeholder='Enter Pincode' value={pincode} required onChange={(e)=>setPinCode(e.target.value)}/>
    </div>

    <div>
    <label>Phone No.</label>
    <input type='number' placeholder='Enter Phone No.' value={phoneNo} required onChange={(e)=>setPhoneNo(e.target.value)}/>
    </div>

    {/* <div>
    <label>H.No.</label>
    <input type='text' placeholder='Enter House No.'/>
    </div> */}

    <button type='submit'> Confirm Order</button>

  </form>

  </main>

  </section>
}

export default Delivery
