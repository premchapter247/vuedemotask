<template>
    <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade active show" id="login" role="tabpanel" aria-labelledby="login-tab">
            <div class="loginForm">
                <div class="mt-5 alert alert-warning text-center" role="alert">
                    We upgraded our system. If you face problems logging in, please  
                    <a href="#forgotpassword" class="text-decoration-underline">reset your password</a>.
                </div>
                <form>
                    <div class="form-group">
                        <label for="Email">Email</label>
                        <input v-model="email" type="email" class="form-control" id="email1" name="email" required="">
                        <p id="email1_error" class="error" style="color:red"></p>
                    </div>
                    <div class="form-group mb-8">
                        <label for="Password">Password</label>
                        <input v-model="password" type="password" class="form-control showPwd" id="password1" name="password" required="">
                        <p id="password1_error" class="error" style="color:red"></p>
                    </div>
                    <div class="forget-password">
                        <!-- <router-link to="/">Home</router-link> -->
                        <router-link to="/forgotpassword">Forgot My Password
                        </router-link>
                    </div>
                    <div class="signUpBtn">
                        <button v-on:click="getLoginData()" type="button" id="loginSubmit" class="btn btn-rounded">Log In</button>
                    </div>
                </form>
            </div>                           
        </div>
    </div>
</template>
<script>
export default {
   name:"Login",
   data(){
       return{
           'email':'',
           'password':'',
       }
   },
   methods:{
       getLoginData(){
           let loginData = {};
           loginData.email=this.email;
           loginData.password=this.password;
           console.log(loginData);
       }
   }
};
</script>
<style scoped>
.text-center {
    text-align: center!important;
}
.tab-content>.active {
    display: block;
}

.tab-content>.active {
    display: block;
}
.text-center {
    text-align: center!important;
}

.mt-5, .my-5 {
    margin-top: 3rem!important;
}
.alert-warning {
    color: #856404;
    background-color: #fff3cd;
    border-color: #ffeeba;
}
.alert {
    position: relative;
    padding: .75rem 1.25rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: .25rem;
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