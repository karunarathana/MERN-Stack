import React from 'react'
import GoogleLogo from '../../assets/google.png'
import AppleLogo from '../../assets/apple-logo.png'
import '../../style.css'
import Axios from 'axios';
import Swal from 'sweetalert2';
import { useState } from 'react'

function Register() {
    const[userREmail,setUserREmail] = useState("");
    const[userRPassword,setUserRPassword] = useState("");
    const[userRConfirmPassword,setUserRConfirmPassword] = useState("");

    async function registerUser() {
        if(userREmail ==""){
            document.getElementById('email').style.border="1px solid red";
        }
        if(userRPassword ==""){
            document.getElementById('password').style.border="1px solid red";
        }
        if(userRConfirmPassword == ""){
            document.getElementById('confpassword').style.border="1px solid red";
        }
        if(userRPassword == userRConfirmPassword){
                try {
                    const response = await Axios.post(`http://localhost:3000/api/user/register?useremail=${userREmail}&password=${userRPassword}`);
                    if(response.data == "reg40010"){
                     Swal.fire({
                         title: "Register Successfull!",
                         text: "You clicked the button!",
                         icon: "success"
                       });
                    }else{
                     Swal.fire({
                         icon: "error",
                         title: "Oops...",
                         text: "Register Unsuccessfull!",
                       });
                    }
        
                } catch (error) {
                  console.log(error);
                }
        }else{
            document.getElementById('password').style.border="1px solid red";
            document.getElementById('confpassword').style.border="1px solid red";
            document.getElementById('errorH').style.display='block';
            document.getElementById('errorH').innerHTML="Password Does'nt match";
        }
     }

  return (
    <>
        <div className="main_wrapper_login_page">
            <div className="main_wrapper_login_interface_c1">
                <h2>Hi Welcome!</h2>
                <div className="login_interface_c1_user_details_block_const">
                    <input id='email' onChange={(e)=>setUserREmail(e.target.value)} type="text" placeholder="Enter Email"/>
                    <input id='password' onChange={(e)=>setUserRPassword(e.target.value)} type="text" placeholder="Password"/>
                    <input id='confpassword' onChange={(e)=>setUserRConfirmPassword(e.target.value)} type="text" placeholder="Confirm Password"/>
                </div>
                <p id='errorH' className='error_handle'>Password doesnt match</p>
                <span id="m02_free_space"></span>
                <div className="login_btn_user_inputbtn_c025">
                    <button onClick={registerUser}>Sign in</button>
                </div>
                <div className="style_sologo_text_c035">
                    <div className="item"></div>
                    <p id="m03_add_custom_css">Or login with</p>
                    <div className="item"></div>
                </div>
                <span id="m03_free_space"></span>
                <div className="login_interface_c1_user_clickable_btn">
                    <button type="button">
                        <div className="google_btn_m02">
                            <img src={GoogleLogo} width="20" height="20" alt="" srcset=""/>
                            <p>Sign in with Google</p>
                        </div>
                    </button>
                    <button type="button">
                        <div className="apple_btn_m02">
                            <img src={AppleLogo}width="20" height="20" alt="" srcset=""/>
                            <p>Sign in with Apple</p>
                        </div>
                    </button>
                </div>
                <p id='Register_footer_phara' >Have you account <a href="index.html">Login</a></p>
            </div>
        </div>
    </>
  )
}

export default Register