//% weight=100 color=#0fbc11 icon=""
namespace BitSci{
    //% block
    export function Typewriter (text: string) {
    for (let index = 0; index <= text.length - 1; index++) {
        basic.showString(text.charAt(index))
    }
    }
    //% block
    export function Pauseinseconds (time: number){
    basic.pause((time * 1000))
    }
}