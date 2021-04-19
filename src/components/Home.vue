<template>
    <div>
         <h1>home</h1>
         <User #user="{ user }">
             <div v-if="user">
                <UserProfile :user="user" />
             </div>
                  <Login v-else />
         </User>
    </div>
</template>

<script>
import Login from './Login'
import User from './User'
import UserProfile from './UserProfile'
export default {
    components:{
        Login,
        User,
        UserProfile
    }
}
</script>
