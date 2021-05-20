<template>
    <div class="roulette-form">
        <div class="roulette-form-top">
            <div>lorem ipsum</div>
            <div class="balance">
                Balance:
                <span class="text--semiBold text--gold"> {{ balance }} </span>
            </div>
        </div>
        <div class="roulette-input-wrapper">
            <input
                type="number"
                v-model="value"
                :max="balance"
                class="roulette-input"
            />
            <span class="roulette-input-clear"> Clear</span>
        </div>
        <div class="roulette-form-buttons">
            <div
                class="roulette-form-buttons-item"
                :key="id"
                v-for="(option, id) in options"
                @click="setValue(option)"
            >
                {{ option.label }}
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import useInputClicker from '../../composables//use-Input-clicker'
export default defineComponent({
    setup() {
        const balance = Math.floor(Math.random() * 10000)
        const { options, value, setValue } = useInputClicker(balance)
        return {
            balance,
            options,
            setValue,
            value,
        }
    },
})
</script>
