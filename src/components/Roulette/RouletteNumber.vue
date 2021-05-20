<template>
    <div class="roulette-number" :class="`background-${item.color}`">
        {{ item.number }}
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
    setup() {
        return {
            number: 1,
        }
    },
})
</script>
<style scoped lang="scss"></style>
