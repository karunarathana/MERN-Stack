import React from 'react'

function NewPassword() {
  return (
    <>
        <div class="main_wrapper_login_page">
            <div class="main_wrapper_login_interface_c1">
                <h2>New Password!</h2>
                <div class="new_password_Image">
                    {/* <!-- <img src="../assert/Secure login-pana.svg" " alt="" srcset=""> --> */}
                </div>
                <div className="newpassword_interface_c1_user_details_block_const">
                    <input type="text" placeholder="Enter New Password"/>
                    <input type="text" placeholder="Confirm Passowrd"/>
                </div>
                <div class="login_interface_c1_user_froget_password_link" >
                    {/* <!-- <a href="">Froget Password?</a> --> */}
                </div>
                <div class="update_btn_user_inputbtn_c025">
                    <button>Update</button>
                </div>
                {/* <!-- <div class="style_sologo_text_c035">
                    <div class="item"></div>
                    <p id="m03_add_custom_css">Or login with</p>
                    <div class="item"></div>
                </div>
                <span id="m03_free_space"></span>
                <div class="login_interface_c1_user_clickable_btn">
                    <button type="button">
                        <div class="google_btn_m02">
                            <img src="../assert/google.png" width="20" height="20" alt="" srcset="">
                            <p>Log in with Google</p>
                        </div>
                    </button>
                    <button type="button">
                        <div class="apple_btn_m02">
                            <img src="../assert/apple-logo.png" width="20" height="20" alt="" srcset="">
                            <p>Log in with Apple</p>
                        </div>
                    </button>
                </div>
                <p>Don't have your account <a href="registe.html">Create</a></p> --> */}
            </div>
        </div>
    </>
  )
}

export default NewPassword