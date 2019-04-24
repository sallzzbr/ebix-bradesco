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
                    <v-flex sm2 class="mt-3">
                        <v-btn small class="btn-inativos">
                            <v-icon class="mr-1">person_add</v-icon>Adicionar cliente
                        </v-btn>
                    </v-flex>
                    <v-flex sm3 class="mt-3">
                        <v-layout row wrap>
                            <v-flex sm2 class="mt-2">
                                <p class="filter">Filtro:</p>
                            </v-flex>
                            <v-flex sm5>
                                <v-btn v-if='!filter_ativos' depressed small class="btn-ativos-filter" @click="filter_ativos = true">
                                    <v-icon class="mr-1">check_box</v-icon>Ativos
                                </v-btn>
                                <v-btn v-if='filter_ativos' outline depressed small class="btn-ativos" @click="filter_ativos = false">
                                    <v-icon class="mr-1">check_box_outline_blank</v-icon>Ativos
                                </v-btn>
                            </v-flex>
                            <v-flex sm5>
                                <v-btn v-if='!filter_inativos' depressed small class="btn-inativos-filter" @click="filter_inativos = true">
                                    <v-icon class="mr-1">check_box</v-icon>Inativos
                                </v-btn>
                                <v-btn v-if='filter_inativos' outline depressed small class="btn-inativos" @click="filter_inativos = false">
                                    <v-icon class="mr-1">check_box_outline_blank</v-icon>Inativos
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
                            class="search-field"
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
                    <tr @click="openModal(props.item.name, props.item.matricula, props.item.cpf, props.item.status)">
                        <td>{{ props.item.name }}</td>
                        <td>{{ props.item.matricula }}</td>
                        <td>{{ props.item.cpf }}</td>
                        <td v-if="props.item.status == 'Ativo'" class="ativo-status">{{ props.item.status }}</td>
                        <td v-else class="inativo-status">{{ props.item.status }}</td>
                    </tr>
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
import ClientsJSON from '../data/data.json';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Common',
  data () {
      return {
        ClientsJSON,
        search: '',
        filter_ativos: false,
        filter_inativos: false,
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
    computed: {
        ...mapGetters([
            'dialog'
        ]),
    },
    methods: {
        ...mapActions([
            'updateDialog',
            'updateName',
            'updateMat',
            'updateCPF',
            'updateStatus'

        ]),
        openModal(name, mat, cpf, status) {
            this.updateDialog(true);
            this.updateName(name);
            this.updateMat(mat);
            this.updateCPF(cpf);
            this.updateStatus(status);
        }  
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.filter {
    font-weight: 700;
}

.btn-ativos {
    color: #009B54;
    border-color: #009B54;
}

.btn-inativos {
    color: #CE022A;
    border-color: #CE022A;
}

.btn-ativos-filter {
    color: white;
    background-color: #009B54 !important;
}

.btn-inativos-filter {
    color: white;
    background-color: #CE022A !important;
}

.ativo-status {
    font-weight: 600;
    color: #009B54;
}

.inativo-status {
    font-weight: 600;
    color: #CE022A;
}

tr {
    cursor: pointer;
}

</style>