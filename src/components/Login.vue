<template>
    <div class="vue-tempalte">
        <form class="Form">
            <h2 class="signIn">Sign In</h2>

            <img alt="Login logo" class="logo" src="../assets/LoginLogo.jpg">
            <br/><br/>

            <div class="form-group">
                <label class="inputType">Email Id</label>
                <input type="email" class="Input" placeholder="Enter Email Address"/>
            </div>
    
            <br/>

            <div class="form-group">
                <label class="inputType">Password</label>
                <input type="password" class="Input" placeholder="Enter a Password"/>
            </div>

            <br/>
            <div class="Button">
                <button class="signUp"> Create new Account</button>
                <button type="submit" class="signButton">Sign In</button>
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
    .vue-tempalte{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .logo{
        width: 120px;
        height: 120px;
        border-radius: 50px;
    }
    .signIn{
        color: #913C4D;
        font-size: 26px;
        font-weight: bold;
    }
    .Form{
        padding-top: 1%;
        padding-bottom: 3%;
        width: 100%;
        max-width:500px;
        border: 1px solid #913C4D;  
        border-radius: 10px;  
        margin-top: 5%;
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
        margin-right: 50%;
    }
    .Input{
        width: 75%;
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
    }
    .signButton{
        padding: 10px 10px 10px 10px;
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
        padding: 10px 10px 10px 10px;
        border-radius: 5px;
        outline: none;
        border: none;
        font-size: 16px;
    }
    @media screen and (max-width: 1024px) {
        .Form{
            padding-bottom: 5%;
            margin-top: 30%;
        }
    }
    @media screen and (max-width: 540px) {
        .Form{
            margin-top: 10%;
            border: none;
        }
        .Button{
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .signUp{
            margin-top: 2%;
        }
        .signButton{
            margin-top: 4%;
            width:180px;
        }
    }
     @media screen and (max-width: 360px) {
        .Form{
            margin-top: 0%;
        }
     }
</style>