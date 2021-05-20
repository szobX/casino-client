<template>
    <div class="roulette-summary">
        <div class="flex-item">
            <button class="roulette-cta background-red">WIN X2</button>
            <RouletteSummaryChoose type="red" />
        </div>
        <div class="flex-item">
            <button class="roulette-cta background-yellow">WIN X2</button>
            <RouletteSummaryChoose type="yellow" />
        </div>
        <div class="flex-item">
            <button class="roulette-cta background-blue">WIN X2</button>
            <RouletteSummaryChoose type="black" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import RouletteSummaryChoose from './RouletteSummaryChoose.vue'
export default defineComponent({
    components: { RouletteSummaryChoose },
    setup() {},
})
</script>
