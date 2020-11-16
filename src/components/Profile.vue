<template>
    <div class="profile">
        <div>`${localStorage.getItem("firstName")}`+`${localStorage.getItem("lastName")}`</div>
        <div><button class="logout">Log Out</button></div>
    </div>
</template>

<style scoped>
.profile{
    display: flex;
    margin-top:20%;
    padding: 20px 20px 20px 20px;
}
</style>