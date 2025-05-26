import React, { createContext, useState } from 'react'

export const  userDatacontext = createContext()


const Usercontext = ({children}) => {

const [user ,setUser] = useState({
    email:'',
    fullName:{
        firstName:'',
        lastName:''
    }
})   
  return (
    <div>
        <userDatacontext.Provider value={[user,setUser]}>
            {children}
        </userDatacontext.Provider>
    </div>
  )
}

export default Usercontext;
