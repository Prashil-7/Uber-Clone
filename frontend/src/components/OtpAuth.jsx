
import  { useRef, useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';

function OtpAuth(props) {
  
  const [otp ,setOtp] =useState();
    
 const navigate = useNavigate();

  const inputs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (value.length > 1) {
      e.target.value = value.charAt(0);
    }

    if (value && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !e.target.value && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  const otp = inputs.current.map(input => input.value).join('');
  if (otp.length === 6) {
    // You can add real OTP validation here
    navigate('/captain-Riding');
  } else {
    alert("Please enter all 6 digits of the OTP.");
  }
};



  return (

 <div  className='h-screen'>

<h2 onClick={()=>{ 
 props.setRidePopUpPanel(false)
props.setConfirmRidePopUp(false)
props.setOptAuth(false)
            }} 
            className='top-0 text-center  '>
             <i className=" text-gray-400  ri-arrow-down-s-line text-2xl"></i>
             </h2>



          
              <div>
             
  <h1 className='text-xl text-yellow-400 flex  justify-center items-center mt-20'>Enter the OTP</h1>

    <div className="flex justify-center gap-3  mt-4">
    
      {Array(6).fill(0).map((_, i) => (
        <input
        value={otp}
          key={i}
          type="text"
          maxLength="1"
          onChange={(e) => {handleChange(e, i) ,setOtp(e.target.value)}}
          onKeyDown={(e) => handleKeyDown(e, i)}
          ref={(el) => (inputs.current[i] = el)}
          className="w-10 h-12 text-center text-yellow-500 text-xl border-b-2 border-black focus:outline-none focus:border-blue-500"
        />
      ))}
    </div>
        <div className="flex  justify-center gap-6 mt-20">
          <button onClick={(e)=>{handleSubmit(e)}}
          
            className="bg-yellow-400 text-black px-8 rounded-full py-3 text-lg rounded font-semibold hover:bg-yellow-500 transition"
          >
            Submit
          </button>
          <button
            className="bg-gray-200 text-black px-8 rounded-full py-3  text-lg font-semibold hover:bg-gray-300 transition"
            onClick={() => {
              props.setRidePopUpPanel(false);
              props.setConfirmRidePopUp(false);
              props.setOptAuth(false);
            }}
          >
            Cancel
          </button>
        </div>
        </div>
     </div>
   );
}


  


 export default OtpAuth




// const OtpAuth = () => {
//   const inputs = useRef([]);

//   const handleChange = (e, index) => {
//     const value = e.target.value;
//     if (value.length > 1) {
//       e.target.value = value.charAt(0);
//     }

//     if (value && index < 5) {
//       inputs.current[index + 1].focus();
//     }
//   };

//   const handleKeyDown = (e, index) => {
//     if (e.key === 'Backspace' && !e.target.value && index > 0) {
//       inputs.current[index - 1].focus();
//     }
//   };

//   return (
//     <div className="flex justify-center gap-3 h-screen mt-45">
//       {Array(6).fill(0).map((_, i) => (
//         <input
//           key={i}
//           type="text"
//           maxLength="1"
//           onChange={(e) => handleChange(e, i)}
//           onKeyDown={(e) => handleKeyDown(e, i)}
//           ref={(el) => (inputs.current[i] = el)}
//           className="w-10 h-12 text-center text-xl border-b-2 border-black focus:outline-none focus:border-blue-500"
//         />
//       ))}
//     </div>
//   );
// };


