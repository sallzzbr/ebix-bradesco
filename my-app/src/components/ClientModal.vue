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
            <v-spacer>
            </v-spacer>
            <v-btn flat icon @click="editBtn()">
                <v-icon>edit</v-icon>
            </v-btn>
            </v-card-title>

            <v-form v-model="valid">
                <v-container>
                <v-layout row wrap>
                    <v-flex xs12 sm4>
                        <p class="client-field">Matrícula</p>
                        <p v-if="!editing">{{this.client_mat}}</p>
                        <v-text-field
                            v-else
                            v-model="matModel"
                            :rules="matrulesRules"
                            :counter="6"
                            required
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm4>
                        <p class="client-field">CPF</p>
                        <p v-if="!editing">{{this.client_cpf}}</p>
                        <v-text-field
                            v-else
                            v-model="cpfModel"
                            :rules="cpfRules"
                            :counter="12"
                            required
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm4>
                        <p class="client-field">Status</p>
                        <p v-if="!editing">{{this.client_status}}</p>
                        <v-combobox
                        v-else
                        v-model="statusSelect"
                        :items="items"
                        ></v-combobox>
                    </v-flex>
                    <v-flex xs12 sm4>
                        <p class="client-field">Plano</p>
                        <p v-if="!editing">111111</p>
                        <v-combobox
                        v-else
                        v-model="planoSelect"
                        :items="items"
                        ></v-combobox>
                    </v-flex>
                    <v-flex xs12 sm4>
                        <p class="client-field">Telefone</p>
                        <p v-if="!editing">111111</p>
                        <v-text-field
                            v-else
                            v-model="telModel"
                            :rules="telRules"
                            :counter="8"
                            required
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm4>
                        <p class="client-field">E-mail</p>
                        <p v-if="!editing">111111</p>
                        <v-text-field
                            v-else
                            v-model="emailModel"
                            :rules="emailRules"
                            required
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                        <p class="client-field">Endereço</p>
                        <p v-if="!editing">111111</p>
                        <v-text-field
                            v-else
                            v-model="addressModel"
                            :rules="adressRules"
                            required
                        ></v-text-field>
                    </v-flex>
                </v-layout>
                </v-container>
            </v-form>         

            <v-divider></v-divider>

            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="primary"
                depressed
                @click="closeModal()"
                class="cancel-btn"
            >
                Cancelar
            </v-btn>
            <v-btn
                color="primary"
                depressed
                @click="closeModal()"
                class="save-btn"
            >
                Salvar
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
            editing: false
        }
    },
    computed: {
        ...mapGetters([
            'dialog',
            'client_name',
            'client_mat',
            'client_cpf',
            'client_status'
        ]),
    },
    methods: {
        ...mapActions([
            'updateDialog'
        ]),
        closeModal(){
            this.updateDialog(false);
        },
        editBtn(){
            this.editing == false ? this.editing = true : this.editing = false;
        } 
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.client-field {
    font-weight: 600;
}

.cancel-btn {
    background-color: #E98C9F !important;
}

.save-btn {
    background-color: #CE022A !important;
}


</style>