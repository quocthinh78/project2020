<template>
    <div>
        Well come {{username}}
        <button @click="logout">Logout</button>
    </div>
</template>

<script>
// import store from "@/store.js";
export default {
    data(){
        return {
            username : localStorage.getItem("username"),
        }
    },
    methods : {
        logout(){
            localStorage.removeItem('email');
            localStorage.removeItem('password');
            this.$router.push('/login');
        }
    },
}
</script>