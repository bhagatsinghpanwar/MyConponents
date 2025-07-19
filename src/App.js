import logo from './logo.svg';
import './App.css';
import weblogo from './1.png';
import Header from './Header';
import btnModule from './button.module.css';
import { useState } from 'react';
import 'react-notifications/lib/notifications.css';
import { questions } from './Data/FaqQueations';
import Faqs from './Faqs';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

function App() {





  // let n = 12;
  let [count, setCount] = useState(1);

  let displayButton = () => {
    setCount(38)

    console.log("Button Clicked");
    // alert("The button is clicked");
  }

  let addData = (a, b) => {
    console.log("the parameters are added", a + b);
    alert(a + b);

  }



  // hide show password 
  let [pstatus, setPstatus] = useState(false)
  // Menu bar

  let [menustatus, setmenustatus] = useState(false)


  // for popup
  let [modelStatus, setModalStatus] = useState(false)



  // faq 

  let [faqstatus, setfaqstatus] = useState(questions[0].id)


  let NotificationShow = ()=> {
    return (
      toast.loading("notification is shown")
    )
  }



  return (

    <div className="App">

    {/* notification code start */}
      <ToastContainer/>   
      <button onClick={NotificationShow}>Save</button>
    {/* notification code end */}


      {/* Start Menu Bar  */}
      <button className='micon' onClick={() => setmenustatus(!menustatus)}>
        {
          menustatus ?
            <span>&times;</span>
            :
            <span>&#9776;</span>
        }

      </button>

      <div className={`menu ${menustatus ? "activemenu" : ''}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Course</li>
        </ul>
      </div>
      {/* End menu bar */}
      {/* Start popup */}

      <button className='en' onClick={() => setModalStatus(true)} >Inquiry now</button>
      <div className={`ModelOverlay ${modelStatus ? "ShowModel" : ""} `}></div>
      <div className={`Modelcover ${modelStatus ? "ShowModelCover" : ''}`}>
        <h3>Inquiry Form <span onClick={() => setModalStatus(false)} >&times;</span></h3>
      </div>
      {/* End Popup */}




      {/* Start hide and show password */}
      <div>
        <h4>show and hide password</h4>
        <input type={pstatus ? 'text' : 'password'} className='mt-5 input ' /> <button onClick={() => setPstatus(!pstatus)} > {pstatus ? 'hide' : 'show'} </button>
      </div>

      {/* End hide and show password */}

      {/* start Faq */}
      <div>
        <h1>Frequently Asked Question</h1>
        <div className='faqouter w-[1320px] m-auto'>

          {
            questions.map((faqitems, i) => {
              return (
                <div className='faqitems mb-4' key={i}>
                  <h3 onClick={() => setfaqstatus(faqitems.id)} >{faqitems.question}</h3>
                  <p className={faqstatus == faqitems.id ? 'showfqaans' : ''}>{faqitems.answer}</p>
                </div>
              )

            })}

        </div>

      </div>
      {/* End Faq */}

      {/* Start Faq through prop drilling  */}

      <Faqs />
      {/* End Faq through prop drilling  */}






    </div>
  );
}

export default App;

let Card = () => {
  return (

    <h1>welcome to my react project</h1>
  )
}
