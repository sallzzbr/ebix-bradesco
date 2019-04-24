<template>
    <v-container>
    <div class="text-xs-center">
        <v-dialog
        v-model="this.dialog"
        max-width="812"
        persistent
        >
        <v-card>
            <v-card-title
            primary-title
            >
            <h3>{{this.client_name}}</h3>
            </v-card-title>

            <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="primary"
                flat
                @click="closeModal()"
            >
                I accept
            </v-btn>
            </v-card-actions>
        </v-card>
        </v-dialog>
    </div>
    </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'ClientModal',
    data () {
        return {
        
        }
    },
    computed: {
        ...mapGetters([
            'dialog',
            'client_name'
        ]),
    },
    methods: {
        ...mapActions([
            'updateDialog'
        ]),
        closeModal(){
            this.updateDialog(false);
        } 
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>