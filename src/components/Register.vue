<template>
    <div class="Register">
        <form class="registerForm">
            <h2 class="registartion">Registration</h2>
            <br/>
            <div class="form-group">
                <label class="inputType">First Name</label>
                <input type="text" class="Input" placeholder="Enter First Name"/>
            </div>

            <br/>

            <div class="form-group">
                <label class="inputType">Last Name</label>
                <input type="text" class="Input" placeholder="Enter Last Name"/>
            </div>

            <br/>

            <div class="form-group">
                <label class="inputType">User Role</label>
                <input type="text" class="Input" placeholder="Enter User Role"/>
            </div>

            <br/>

            <div class="form-group">
                <label class="inputType">Email Id</label>
                <input type="email" class="Input" placeholder="Enter Email Address"/>
            </div>

            <br/>

            <div class="form-group">
                <label class="inputType">Password</label>
                <input type="password" class="Input" placeholder="Enter Password"/>
            </div>

            <br/>
            <div class="Button">
                <button  class="signButton">Login</button>
                <button type="submit" class="signUp">Sign Up</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>

<style lang="scss" scoped>
    .Register{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .registartion{
        color: #913C4D;
        font-size: 26px;
        font-weight: bold;
    }
    .registerForm{
        padding-top: 3%;
        padding-bottom: 5%;
        width: 100%;
        max-width:530px;
        border: 1px solid #913C4D;  
        border-radius: 5px; 
        margin-top: 5%;
        margin-bottom: 5%; 
    }
    .form-group{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .inputType{
        width: 70%;
        font-size: 18px;
        font-weight: bold;
        color: #6E6360;
        margin-bottom: 7px;
        padding-right: 50%;
    }
    .Input{
        width: 70%;
        padding: 13px 15px 13px 15px;
        border-radius: 5px;
        border: 1px solid #DDACBE;
        outline: none;
    }
    .Button{
        display: flex;
        justify-content: space-around;
        flex-direction: row;
        align-items: center;
        margin-top: 3%;
    }
    .signButton{
        padding: 10px 18px 10px 18px;
        border-radius: 5px;
        outline: none;
        border: none;
        border-color: #3371b5;
        background-color: #3371b5;
        color: white;
        font-weight: bold;
        font-size: 16px;
    }
    .signUp{
        padding: 10px 18px 10px 18px;
        border-radius: 5px;
        outline: none;
        border: none;
        font-size: 16px;
    }
    @media screen and (max-width: 1024px) {
        .registerForm{
            padding-bottom: 5%;
            margin-top: 30%;
        }
    }
    @media screen and (max-width: 768px) {
        .registerForm{
            margin-top: 15%;
        }
    }
    @media screen and (max-width: 540px) {
        .registerForm{
            margin-top: 0%;
            padding-top: 0%;
            border: none;
        }
        .Button{
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .signUp{
            margin-top: 4%;
            width: 180px;
        }
        .signButton{
            width:180px;
        }
    }
     @media screen and (max-width: 360px) {
        .Form{
            margin-top: 0%;
        }
     }
</style>
