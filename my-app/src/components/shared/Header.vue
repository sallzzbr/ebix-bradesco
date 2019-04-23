<template>
    <v-toolbar>
            <img src="../../assets/bradeslogo.png" alt="avatar" class="logo">
            <v-spacer></v-spacer>
            <p class="hidden-xs-only">Beltrano Silva de Souza</p>
            <v-avatar class="blue-grey lighten-4" size="38px">
                <img src="../../assets/user.png" onerror="../../assets/user.png">
            </v-avatar>

    </v-toolbar>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo {
    max-height: 60px;
    max-width: 20vw;
}

p {
    margin: 0 15px 0 0;
}

</style>