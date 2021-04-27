<template>
    <!-- Calling header imported component for the header part -->
        <Header />
    <!-- End component Code for header -->
  
    <!-- Code for buttons Login and Sign Up button for toggle  -->
        <div class="login-box">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <a v-on:click="buttonClick(1)" v-bind:class="{active: isActive == 1}" class="nav-link" id="signup-tab" data-toggle="tab" href="#signup" role="tab" aria-controls="home" aria-selected="true" >Sign Up</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a v-on:click="buttonClick(2)" v-bind:class="{active:isActive == 2}" class="nav-link" id="login-tab" data-toggle="tab" href="#login" role="tab" aria-controls="profile" aria-selected="false">Login</a>
                </li>
            </ul>
        </div>
    <!-- End code for buttons -->
    
    <!-- Start code for the login form calling by component -->
        <div v-if="isActive==2">
            <Login />
        </div>
    <!-- End code for the login form calling by component -->

    <!-- Start code for the login form calling by component -->
    <div v-if="isActive==1">
        <SignUp :SignUpinputValue=SignUpinputValue />
    </div>
    <!-- End code for the login form calling by component -->
    <router-view />
</template>

<script>
import Header from './components/Header.vue'
import Login from './components/Login.vue'
import SignUp from './components/SignUp.vue'

export default {
    name: 'App',
	data(){
		return{
			isActive: 1,
            email:'prem@gmail.com',
            SignUpinputValue:{
                email:'prem@gmail.com',
                username:'prempanwar',
                password:'12345',
                confirmPassword:'confirmPassword',
            }
		}
	},
    components: {
        Header,
        Login,
        SignUp,
    },
	methods:{
		buttonClick(val){
			console.log('click',val);
			this.isActive= val;
		}
	}
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /* margin-top: 60px; */
}
.login-box .nav-tabs {
    border: none;
    display: flex;
    width: 100%;
    justify-content: center;
}
.login-box .nav {
    text-align: center;
    margin-bottom: 42px;
}
.login-box .nav-tabs .nav-item .nav-link.active {
    background: #4d21ff;
    color: #fff;
    /* font-size: 14px; */
}
.login-box .nav-tabs .nav-item:first-child .nav-link {
    border-radius: 25px 0 0 25px;
    text-align: right;
	
}
li{
	list-style: none;
}
.login-box .nav-tabs .nav-item .nav-link {
    border: none;
    display: inline-block;
    color: #a4a4a4;
    background: #efeff1;
    font-size: 14px;
    line-height: 14px;
    padding: 9px 12px;
    min-width: 85px;
}

</style>
