import GoogleLogo from '../../assets/google.png'
import AppleLogo from '../../assets/apple-logo.png'
import '../../style.css'


import React from 'react'

function Verify() {
  return (
    <>
        <div class="main_wrapper_login_page">
            <div class="main_wrapper_login_interface_c1">
                <h2>Verification!</h2>
                <div class="vericatioin_interface_c1_user_details_block_const">
                    <p id="verify_sologon_m500">Enter Verifycation Code</p>
                    <div class="verification_user_input_otp_code_block">
                        <input type="text" placeholder=""/>
                        <input type="text" placeholder=""/>
                        <input type="text" placeholder=""/>
                        <input type="text" placeholder=""/>
                    </div>
                </div>
                <p id="verify_sologon_m501">If you didn't receive code.<a href="">Resend</a></p>
                <div class="login_interface_c1_user_froget_password_link" >
                    {/* <!-- <a href="">Froget Password?</a> --> */}
                </div>
                <span id="m02_free_space"></span>
                <div class="login_btn_user_inputbtn_c025">
                    <button><a href="newPassword.html">Check OTP</a></button>
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
                <p id="footer_m504_zmy">Do you have account?<a href="registe.html">Log in</a></p>
            </div>
        </div> 
    </>
  )
}

export default Verify