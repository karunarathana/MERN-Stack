import React from 'react'
import GoogleLogo from '../../assets/google.png'
import AppleLogo from '../../assets/apple-logo.png'
import '../../style.css'
import Axios from 'axios';
import Swal from 'sweetalert2';
import { useState } from 'react'
function Froget() {
    const[userFEmail,setUserFEmail] = useState("");
    async function sendEmailRequest() {
        if(userFEmail==""){
            document.getElementById('frogetEmail').style.border='1px solid red'
        }else{
            const response = await Axios.post(`http://localhost:3000/api/user/frogetpassword?useremail=${userFEmail}`);
            if(response.data == "reg40010"){
             Swal.fire({
                 title: "Email send Successfull!",
                 text: "You clicked the button!",
                 icon: "success"
               });
            }else{
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Email Not Exist",
                  });
            }
        }
    }
  return (
    <>
        <div class="main_wrapper_login_page">
            <div class="main_wrapper_login_interface_c1">
                <h2>Froget Password!</h2>
                <div class="login_interface_c1_user_details_block_const">
                    <p>Enter your Email</p>
                    <input id='frogetEmail' onChange={(e)=>setUserFEmail(e.target.value)} type="text" placeholder="Enter Email"/>
                </div>
                <p id="mm1025_pid">Back to <a href="">Sign in</a></p>
                <div class="login_interface_c1_user_froget_password_link" >
                    {/* <!-- <a href="">Froget Password?</a> --> */}
                </div>
                <span id="m02_free_space"></span>
                <div class="login_btn_user_inputbtn_c025">
                    <button onClick={sendEmailRequest}><a href="verify.html">Send</a></button>
                </div>
                <div class="style_sologo_text_c035">
                    <div class="item"></div>
                    <p id="m03_add_custom_css">Or Sign in</p>
                    <div class="item"></div>
                </div>
                <span id="m03_free_space"></span>
                <div class="login_interface_c1_user_clickable_btn">
                    <button type="button">
                        <div class="google_btn_m02">
                            <img src={GoogleLogo} width="20" height="20" alt="" srcset=""/>
                            <p>Log in with Google</p>
                        </div>
                    </button>
                    <button type="button">
                        <div class="apple_btn_m02">
                            <img src={AppleLogo} width="20" height="20" alt="" srcset=""/>
                            <p>Log in with Apple</p>
                        </div>
                    </button>
                </div>
                <p id="frogetpassword_user_slogon">Do you have account <a href="registe.html">Log in</a></p>
            </div>
        </div>
    </>
  )
}

export default Froget