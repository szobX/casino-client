import { VueInstance } from '@vueuse/core'
import { io, Socket } from 'socket.io-client'

export default {
    install: (app: VueInstance, { connection, options }: any) => {
        const socket = io(connection, options)
        app.config.globalProperties.$socket = socket

        app.provide('socket', socket)
    },
}
