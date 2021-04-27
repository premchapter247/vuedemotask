<template>

    <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade  active show " id="signup" role="tabpanel" aria-labelledby="signup-tab">
            <div class="loginForm">
                <form>
                    <div class="form-group ">
                        
                        <label for="email">Email</label>
                        {{email}}
                        <input v-model="email" type="email" class="form-control" id="email" name="email"  required="">
                        <p id="email_error" class="error" style="color:red"></p>
                    </div>                     

                    <div class="form-group">
                        <label for="username">Username 
                            <!-- <span class="formInfo">
                                <i class="fas fa-info-circle"></i>
                                <span class="infoText">
                                    Your unique URL:<br>
                                    vizzual.io/user-name
                                </span>
                            </span> -->
                        </label>
                        <div class="input-group">									
                            <!-- <span class="input-group-text url-group-text">vizzual.io/</span> -->
                            <input v-model="username" type="text" class="form-control pl-5" id="username" name="username" required="">
                        </div>
                        <p id="username_error" class="error" style="color:red"></p>
                    </div>

                    <div class="form-group ">
                        <label for="password">Password</label>
                        <input v-model="password" type="password" class="form-control showPwd" id="password" name="password" required="">
                        <p id="password_error" class="error" style="color:red"></p>
                    </div>

                    <div class="form-group  mb-25">
                        <label for="confirmPassword">Confirm Password</label>
                        <input v-model="confirmPassword" type="password" class="form-control showPwd" id="confirmPassword" name="confirmPassword" required="">
                        <p id="confirmpassword_error" class="error" style="color:red"></p>                                       
                    </div>

                    <div class="form-group">
                        <div id="error" style="color:red;display:none">
                            Password and confirm password not matched
                        </div>
                    </div>
                    <div class="form-group mb-0 ">
                        <label class="term-checkbox-block">
                            <span class="position-relative">
                                <input v-model="termsCondition" type="checkbox" name="terms" id="terms" required="" class="checkbox">
                                <small><i class="fas fa-check"></i></small>
                            </span>
                            <span class="terms-text">I have read and agree to Vizzual's <a href="#terms_and_conditions" target="_blank">Terms &amp; Conditions</a>.</span>
                            <p id="terms_error" class="error" style="color:red"></p>
                        </label>
                    </div>

                    <div class="signUpBtn">
                        <button v-on:click="getSignUpData()" id="form1submit" type="button" class="btn btn-rounded min-width-220">Sign Up</button>
                    </div>
                </form>
            </div>  
        </div>
    </div>
</template>
<script>
export default{
    name:'SignUp',
    data(){
        return{
            email:'',
            username:'',
            password:'',
            confirmPassword:'',
            termsCondition:true
        }
    },
    props:{
        SignUpinputValue:Object,
    },
    methods:{
        getSignUpData(){
            let formData={};
            formData.email = this.email;
            formData.username = this.username;
            formData.password = this.password;
            formData.confirmPassword = this.confirmPassword;
            formData.termsCondition = this.termsCondition;
            console.log(formData);
        }
    }
} 
</script>
<style scoped>
.tab-content>.active {
    display: block;
}
.text-decoration-underline {
    text-decoration: underline!important;
}

a, a:hover {
    transition: 0.3s;
    text-decoration: none;
}
a {
    color: #007bff;
    text-decoration: none;
    background-color: transparent;
}
.loginForm .form-group {
    margin-bottom: 16px;
    position: relative;
}
.loginForm label {
    font-size: 16px;
    color: #000;
    font-weight: 800;
    margin-bottom: 5px;
}

label {
    display: inline-block;
    margin-bottom: .5rem;
}
.loginForm .form-control {
    padding: 0 15px;
    background: #f8f8f8;
    color: #000;
    border: 1px solid transparent;
    font-size: 14px;
    height: 40px;
    border-radius: 7px;
    box-shadow: none;
    transition: none;
    font-weight: 200;
}

.form-control {
    display: block;
    width: 100%;
    height: calc(1.5em + .75rem + 2px);
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
.error {
    color: #FF0000 !important;
    font-weight: 200;
    margin-top: 2px;
    margin-bottom: 0;
    border-radius: .25rem;
}

p {
    font-size: 14px;
    margin-bottom: 8px;
    font-weight: 200;
}
.loginForm .form-group {
    margin-bottom: 16px;
    position: relative;
}
.forget-password {
    text-align: right;
}
.signUpBtn {
    text-align: center;
    margin-top: 30px;
    display: inline-block;
    width: 100%;
}
.btn:not([href]):hover {
    color: #fff;
}

.btn:not(:disabled):not(.disabled) {
    cursor: pointer;
}
.signUpBtn .btn {
    min-width: 225px;
}
.btn:hover {
    background: linear-gradient(
180deg
, #ff534f 0%, #a73836 100%);
    transition: 0.6s;
    color: #fff;
}
.btn {
    background: linear-gradient(
180deg
, #ff534f 0%, #ff534f 100%);
    border-radius: 7px !important;
    color: #fff;
    border: none;
    padding: 8px 20px;
    transition: 0.6s;
    min-width: 106px;
    font-weight: 600;
}
#myTabContent{
    max-width: 450px;
    margin: auto;
    text-align: left;
}
</style>