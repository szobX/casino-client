<template>
    <div class="roulette-container">
        <div class="roulette-indicator"></div>
        <div class="roulette-wrapper" ref="wheel">
            <div class="row" :key="num" v-for="num in numberOfRows">
                <RouleteNumber
                    :key="idx"
                    :item="number"
                    v-for="(number, idx) in items"
                />
            </div>
        </div>
    </div>
    <button @click="spin">spin</button>
</template>
<script lang="ts">
import RouleteNumber from './RouletteNumber.vue'
import useCarousel from '../../composables/use-carousel'
import { defineComponent, computed, toRefs, onMounted, ref } from 'vue'
export default defineComponent({
    props: {
        numbers: {
            type: Array,
            default: () => [],
        },
    },
    components: { RouleteNumber },
    setup(props) {
        const wheel: any = ref(null)
        const {
            setItems,
            items,
            offset,
            shuffle,
            numberOfRows,
            spin,
            setWheel,
        } = useCarousel()
        setItems(props.numbers)
        onMounted(() => {
            setWheel(wheel)
        })
        return {
            wheel,
            offset,
            props,
            items,
            shuffle,
            numberOfRows,
            spin,
        }
    },
})
</script>

<style scoped lang="scss">
$side: 65px;
</style>
