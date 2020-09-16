//% weight=100 color=#0fbc11 icon=""
namespace BitSci{
    //% block
    export function Typewriter (text: string) {
    for (let index = 0; index <= text.length - 1; index++) {
        basic.showString(text.charAt(index))
    }
    basic.clearScreen()
    }
    //% block
    export function Pauseinseconds (seconds: number){
    basic.pause((seconds * 1000))
    }
    
}