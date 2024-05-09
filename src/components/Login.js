import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase"
import { useNavigate } from "react-router-dom";


const Login = ()=>{ 
  const navigate = useNavigate();
  const [values , setValues] = useState({
      
      email:"",
      pass:"",
  });

  const [errorMsg , setErrorMsg] = useState("");
  const [submitButtonDisabled , setSubmitbuttonDisabled] = useState(false);

  const handleSubmission = ()=>{
    event.preventDefault(); // Prevents form from reloading the page
      console.log(values);
     if( !values.email || !values.pass)
      {
          setErrorMsg("Fill all fields");
          return;
      }
      setErrorMsg("");
      setSubmitbuttonDisabled(true);
     signInWithEmailAndPassword(auth , values.email , values.pass).then( async(res)=>{
          setSubmitbuttonDisabled(false);
        
         // redirection
         navigate("/");
         
      }).catch((err)=>
          {    setSubmitbuttonDisabled(false);
              console.log("Error - " , err.message);
              setErrorMsg(err.message); 
          })
  }
    return(
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    {/* <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"/> */}
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmission}>
      <div>
        <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div className="mt-2">
          <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          onChange={event => setValues(prev =>({...prev , email: event.target.value}))}
          />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
          <div className="text-sm">
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
          </div>
        </div>
        <div className="mt-2">
          <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          onChange={event => setValues(prev =>({...prev , pass: event.target.value}))}
          />
        </div>
      </div>

      <div>
      <b className="font-bold text-red-600 ">{errorMsg}</b>   

        <button type="submit" className={`w-full text-center py-3 rounded text-white focus:outline-none my-1 ${
                            submitButtonDisabled
                              ? 'bg-gray-400 cursor-not-allowed'
                              : 'bg-green-600 hover:bg-green-700'
                          }`} 
        disabled={setSubmitbuttonDisabled}
        onClick={handleSubmission}
        >Log in</button>
      </div>
    </form>

    <p class="mt-10 text-center text-sm text-gray-500">
       do not have an account?
      <a href="/signup" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Sign UP</a>
    </p>
  </div>
</div>
    )
}

export default Login;