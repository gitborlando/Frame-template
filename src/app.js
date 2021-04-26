const template = `
div .app 
    helloWorld @component=>helloWorld prop{{ <prop> }} 
`

import helloWorld from './component/helloWorld'

export default {
    template,
    data: {
        prop: 'Start with your Frame app'
    },
    component:{
        helloWorld
    },
    style: {
        '.app':`
        height: 100%;
        `
    }
}