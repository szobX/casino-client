import { ref, computed } from 'vue'
import { RouletteNumber } from '../../types.ts'
export default function useCarousel() {
    let wheel: any = ref(null)
    const offset: number = ref(0)
    const windowSize: number = ref(11)
    const numberOfRows: number = ref(29)
    let arrLength: number = ref(0)
    const animationTime: number = ref(6)
    const side: number = ref(65)
    const margin: number = ref(3)
    const paginationFactor: number = ref(200)
    let items: RoulleteNumber[] = ref([])
    function setWheel(ref) {
        wheel = ref
    }
    function goAnimation(object, position, card, random, landingPosition) {
        wheel.value.style.transitionTimingFunction =
            'cubic-bezier(0,' + object.x + ',' + object.y + ',1)'

        wheel.value.style.transitionDuration = '6s'
        wheel.value.style.transform =
            'translate3d(-' + landingPosition + 'px, 0px, 0px)'

        setTimeout(function () {
            wheel.value.style.transitionTimingFunction = ''
            wheel.value.style.transitionDuration = ''
            const resetTo = -(position * card + random)
            wheel.value.style.transform = `translate3d(${resetTo}px,0px,0px)`
        }, 6 * 1000)
    }
    function spinRoullete(roll) {
        console.log(items)
        const order = [0, 11, 5, 10, 6, 9, 7, 8, 1, 14, 2, 13, 3, 12, 4]
        const position = order.indexOf(
            order[order[Math.floor(Math.random() * order.length)]]
        )
        const rows = 12

        const card = side.value + margin.value * 2 // width + margin-left + margin-right

        let landingPosition = rows * arrLength * card + position * card
        // debugger
        const random = Math.floor(Math.random() * side.value) - side.value / 2
        console.log(random)

        landingPosition = landingPosition + random
        const object = {
            x: Math.floor(Math.random() * 50) / 100,
            y: Math.floor(Math.random() * 20) / 100,
        }
        console.log(object, position, card, random, landingPosition)
        goAnimation(object, position, card, random, landingPosition)
    }
    function setItems(numbers) {
        items = [...numbers]
        arrLength = items.length
    }
    function shuffle(items: Array): Array {
        return items.sort(() => 0.5 - Math.random())
    }
    return {
        setWheel,
        numberOfRows,
        offset,
        windowSize,
        paginationFactor,
        setItems,
        shuffle,
        spin: spinRoullete,
        items: computed(() => items),
    }
}
