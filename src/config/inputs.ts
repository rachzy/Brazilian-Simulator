import { Input, Control, Controls } from '@rpgjs/types'

export const inputs: Controls = {
    [Control.Up]: {
        repeat: true,
        bind: [Input.Up, Input.W]
    },
    [Control.Down]: {
        repeat: true,
        bind: [Input.Down, Input.S]
    },
    [Control.Right]: {
        repeat: true,
        bind: [Input.Right, Input.D]
    },
    [Control.Left]: {
        repeat: true,
        bind: [Input.Left, Input.A]
    },
    [Control.Action]: {
        bind: [Input.Space, Input.Enter, Input.E]
    },
    [Control.Back]: {
        bind: Input.Escape
    }
}