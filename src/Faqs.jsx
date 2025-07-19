import React, { useState } from 'react'
import { questions } from './Data/FaqQueations';

export default function Faqs() {
  let [currentId, setcurrentId] = useState(questions[0].id)
  

 let itemsm = questions.map((itemsdata, i) =>{
  let itemsDetails = {
    itemsdata,
    currentId,
    setcurrentId

  }
  
  return (
    <Faqsitems itemsDetails ={itemsDetails} key={i}/>
  ) 
 })

  return (
    <div>   <h1>Frequently Asked Question</h1>
      <div className='faqouter w-[1320px] m-auto'>
        {itemsm}
      </div>

    </div>
  )
}

function Faqsitems ({itemsDetails}){
    let  { itemsdata, currentId, setcurrentId } = itemsDetails;
  return (
    <div className='faqitems m-3 '>
          <h3 onClick={()=>setcurrentId(itemsdata.id)}>{itemsdata.question}</h3>
          <p className={currentId===itemsdata.id ? 'showfqaans' : "" }>{itemsDetails.itemsdata.answer}</p>
          
        </div>
  )
}