import { ref, computed } from 'vue'
import { inputObject } from '../types'
export default function userInputClicker(currentBalance: number) {
    let balance = ref(0)
    balance.value = currentBalance
    let value = ref('3')
    const options: inputObject[] = [
        {
            value: 1,
            type: 'ADD',
            label: '+1',
        },
        {
            value: 10,
            type: 'ADD',
            label: '+10',
        },
        {
            value: 100,
            type: 'ADD',
            label: '+100',
        },
        {
            value: 1000,
            type: 'ADD',
            label: '+1000',
        },
        {
            value: 2,
            type: 'DIVIDE',
            label: '1/2',
        },
        {
            value: 1,
            type: 'DIVIDE',
            label: 'ALL IN',
        },
    ]
    function setValue(option: inputObject) {
        const old = parseInt(value.value)

        console.log(balance.value)
        switch (option.type) {
            case 'ADD': {
                const curr = old + option.value
                value.value =
                    curr > balance.value ? String(balance.value) : String(curr)
                break
            }
            case 'DIVIDE': {
                const t = Math.round(balance.value / option.value)
                value.value = String(t)
                break
            }
        }
    }
    return {
        value,
        setValue,
        options,
    }
}
