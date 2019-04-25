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

            <v-form v-model="valid" ref="form" lazy-validation>
                <v-container>
                <v-layout row wrap>
                    <v-flex xs12 sm4>
                        <p class="client-field">Matrícula</p>
                        <p v-if="!editing">{{this.client_mat}}</p>
                        <v-text-field
                            class="mt-0 pt-0"
                            v-else
                            v-model="matModel"
                            :rules="matRules"
                            :counter="6"
                            required
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm4>
                        <p class="client-field">CPF</p>
                        <p v-if="!editing">{{this.client_cpf}}</p>
                        <v-text-field
                            class="mt-0 pt-0"
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
                        class="mt-0 pt-0"
                        v-else
                        v-model="statusSelect"
                        :rules="[v => !!v || 'Status obrigatório']"
                        :items="statusItems"
                        ></v-combobox>
                    </v-flex>
                    <v-flex v-if="!client_ativo || this.client_status != ''" xs12>
                        <p class="client-field">Justificativa</p>
                        <p v-if="!editing">Lorem ipsum</p>
                        <v-text-field
                        class="mt-0 pt-0"
                            v-else
                            v-model="justiModel"
                            :rules="justiRules"
                            required
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm4>
                        <p class="client-field">Plano</p>
                        <p v-if="!editing">111111</p>
                        <v-combobox
                        class="mt-0 pt-0"
                        v-else
                        v-model="planoSelect"
                        :rules="[v => !!v || 'Plano obrigatório']"
                        :items="planoItems"
                        ></v-combobox>
                    </v-flex>
                    <v-flex xs12 sm4>
                        <p class="client-field">Telefone</p>
                        <p v-if="!editing">111111</p>
                        <v-text-field
                        class="mt-0 pt-0"
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
                        class="mt-0 pt-0"
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
                        class="mt-0 pt-0"
                            v-else
                            v-model="addressModel"
                            :rules="addressRules"
                            required
                        ></v-text-field>
                    </v-flex>
                </v-layout>
                </v-container>
                 <v-divider></v-divider>

            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="primary"
                depressed
                @click="closeModal()"
                class="cancel-btn"
            >
                Fechar
            </v-btn>
            <v-btn
                color="primary"
                depressed
                @click="saveModal()"
                class="save-btn"
            >
                Salvar
            </v-btn>
            </v-card-actions>
            </v-form>         

           
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
            valid: true,
            client_ativo: true,
            editing: false,
            matModel: '',
            matRules: [
                v => !!v || 'Matricula obrigatória',
                v => v.length == 6 || 'Matrícula deve conter 6 números'
            ],
            cpfModel: '',
            cpfRules: [
                v => !!v || 'CPF obrigatório',
                v => v.length == 12 || 'CPF deve conter 12 números'
            ],
            telModel: '',
            telRules: [
                v => !!v || 'Telefone obrigatório',
                v => v.length == 8 || 'Telefone deve conter 8 números'
            ],
            justiModel: '',
            justiRules: [
                v => !!v || 'Justificativa obrigatório'
            ],
            emailModel: '',
            emailRules: [
                v => !!v || 'E-mail obrigatório',
                v => /.+@.+/.test(v) || 'E-mail tem que ser válido'
            ],
            addressModel: '',
            addressRules: [
                v => !!v || 'Endereço obrigatório',
            ],
            planoSelect: '',
            planoItems: [
            'Simples',
            'Premium',
            'Gold'
            ],
            statusSelect: '',
            statusItems: [
            'Ativo',
            'Inativo'
            ]
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
        saveModal(){
            if (this.$refs.form.validate()) {
                this.editing = false;
            }
        },
        editBtn(){
            this.editing == false ? this.editing = true : this.editing = false;
        } 
    },
    watch : {
        statusSelect(val) {
            val == "Inativo" ? this.client_ativo = false : this.client_ativo = true;
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