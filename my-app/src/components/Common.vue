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
                    <v-flex sm4>
                        <v-layout row wrap>
                            <v-flex sm2>
                                <p>Filtro:</p>
                            </v-flex>
                            <v-flex sm5>
                                <v-btn depressed small>
                                    <v-icon right dark>cloud_upload</v-icon>
                                    Normal
                                </v-btn>
                            </v-flex>
                            <v-flex sm5>
                                <v-btn depressed small>
                                    <v-icon right dark>cloud_upload</v-icon>
                                    Normal
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
                :items="desserts"
                :search="search"
                >
                <template v-slot:items="props">
                    <td>{{ props.item.name }}</td>
                    <td class="text-xs-right">{{ props.item.calories }}</td>
                    <td class="text-xs-right">{{ props.item.fat }}</td>
                    <td class="text-xs-right">{{ props.item.carbs }}</td>
                    <td class="text-xs-right">{{ props.item.protein }}</td>
                    <td class="text-xs-right">{{ props.item.iron }}</td>
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
export default {
  name: 'Common'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>