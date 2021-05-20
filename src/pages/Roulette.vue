<template>
    <div class="roulette">
        <h1>{{ users.join(' -#- ') }}</h1>

        <RouletteBoard :numbers="arr" />
        <roulette-form />
        <roulette-summary />
    </div>
</template>
<script lang="ts">
import RouletteBoard from '../components/Roulette/RouletteBoard.vue'
import RouletteForm from '../components/Roulette/RouletteForm.vue'
import RouletteSummary from '../components/Roulette/RouletteSummary.vue'

import { defineComponent, ref, onMounted, inject } from 'vue'
import { Socket } from 'socket.io-client'
export default defineComponent({
    components: { RouletteBoard, RouletteForm, RouletteSummary },

    setup() {
        //@ts-ignore
        const socket: Socket = inject('socket')
        const users = ref([])
        socket.on('connection', (e) => {
            console.log(e)
        })
        socket.emit('new user', `User${Math.floor(Math.random() * 1000000)}`)
        socket.on('new user', function (data) {
            users.value = data
        })
        const arr = ref(
            [1, 14, 2, 13, 3, 12, 4, 0, 11, 5, 10, 6, 9, 7, 8].map((v, i) => ({
                number: v,
                color: v === 0 ? 'yellow' : i % 2 === 0 ? 'red' : 'blue',
            }))
        )
        console.log(arr)
        return {
            arr,
            users,
        }
    },
})
</script>

<style lang="scss" scoped>
.roulette {
    flex-direction: column;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
