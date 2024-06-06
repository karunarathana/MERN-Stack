import React, { useState } from 'react'
import Axios from 'axios';
import Swal from 'sweetalert2';
import GoogleLogo from '../../assets/google.png'
import AppleLogo from '../../assets/apple-logo.png'
import '../../style.css'

function ULoging() {
    const[userEmail,setUserEmail] = useState("");
    const[userPassword,setUserPassword] = useState("");

    async function sendRequest() {
       try {
           const response = await Axios.get(`http://localhost:3000/api/user/log?useremail=${userEmail}&password=${userPassword}`);
           if(response.data == "correct4005"){
            Swal.fire({
                title: "Loging Successfull!",
                text: "You clicked the button!",
                icon: "success"
              });
           }else if(response.data == "incorrect4002"){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Password Not Match!",
              });
           }else if(response.data == "notexist4001"){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Email Not Exist!",
              });
           }else{

           }

       } catch (error) {
         console.log(error);
       }
    }

  return (
   <>
    <div className="main_wrapper_login_page">
        <div className="main_wrapper_login_interface_c1">
            <h2>Welcome Back!</h2>
            <div className="login_interface_c1_user_details_block_const">
                <input onChange={(e)=>setUserEmail(e.target.value)}  type="email" placeholder="JhonSmith@gmail.com"/>
                <input onChange={(e)=>setUserPassword(e.target.value)}  type="password" placeholder="Password"/>
            </div>
            <div className="login_interface_c1_user_froget_password_link" >
                <a href="frogetPassword.html">Froget Password?</a>
            </div>
            <span id="m02_free_space"></span>
            <div className="login_btn_user_inputbtn_c025">
                <button onClick={sendRequest}>Log in</button>
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
                        <p>Log in with Google</p>
                    </div>
                </button>
                <button type="button">
                    <div className="apple_btn_m02">
                        <img src={AppleLogo} width="20" height="20" alt="" srcset=""/>
                        <p>Log in with Apple</p>
                    </div>
                </button>
            </div>
            <p id="index_footer_solog">Don't have your account <a href="registe.html">Create?</a></p>
        </div>
    </div>
   </>
  )
}

export default ULoging