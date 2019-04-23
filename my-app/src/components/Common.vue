<template>
    <v-container fluid class="mt-3">
        <v-layout row wrap>
            <v-flex xs12>
            <v-card>
                <v-card-title>
                <v-layout row wrap>
                    <v-flex sm3>
                        <h3>Gerenciamento de clientes</h3>
                    </v-flex>
                    <v-spacer></v-spacer>
                    <v-flex sm3 class="mt-3">
                        <v-layout row wrap>
                            <v-flex sm2 class="mt-2">
                                <p>Filtro:</p>
                            </v-flex>
                            <v-flex sm5>
                                <v-btn depressed small>
                                    Ativos
                                </v-btn>
                            </v-flex>
                            <v-flex sm5>
                                <v-btn depressed small @click="teste">
                                    Inativos
                                </v-btn>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                    <v-flex sm3>
                        <v-text-field
                            v-model="search"
                            append-icon="search"
                            label="Search"
                            single-line
                            hide-details
                        ></v-text-field>
                    </v-flex>
                </v-layout>
                </v-card-title>
                <v-data-table
                :headers="headers"
                :items="ClientsJSON.clients"
                :search="search"
                >
                <template v-slot:items="props">
                    <td>{{ props.item.name }}</td>
                    <td>{{ props.item.matricula }}</td>
                    <td>{{ props.item.cpf }}</td>
                    <td>{{ props.item.status }}</td>
                </template>
                <template v-slot:no-results>
                    <v-alert :value="true" color="error" icon="warning">
                    Your search for "{{ search }}" found no results.
                    </v-alert>
                </template>
                </v-data-table>
            </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import ClientsJSON from '../data/data.json'

export default {
  name: 'Common',
  data () {
      return {
        ClientsJSON,
        search: '',
        headers: [
          {
            text: 'Nome',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Matrícula', value: 'matricula' },
          { text: 'CPF', value: 'cpf' },
          { text: 'Status', value: 'status' }
        ],
        clients: []
      }
    },
    methods: {
        teste() {
            console.log(ClientsJSON);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>