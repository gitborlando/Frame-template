const template = `
div .helloWorld style{{margin-top: 20px}}
    h1 {{ <prop> }} style{{color: rgb(243, 180, 243);}}
    h3 {{ <value> }} 
    input {{ <value> }} @input=>inputEvent 
    div .mySite style{{margin-top: 40px}}
        a {{offical site}} href{{https://gitborlando.cn}} target{{ blank }}`

export default {
    template,
    data: {
        prop: '',
        value: 'Enter some words',
    },
    method: {
        inputEvent(){
            this.data.value = this.curent.value
        }
    },
    style: {
        '.helloWorld': `
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;`
        ,
        input: `
            width: 216px;
            height: 24px;
            border-radius: 18px;
            border: 1px solid rgb(243, 180, 243);
            outline: none;
            padding: 6px 12px;
            font-size: 16px;
            font-weight: 100;
            color: rgb(82, 82, 82);`
        ,
        h3: `
            color: rgb(122, 122, 122);
            font-weight: 500;`
        ,
        a: `
            color: rgb(233, 164, 233)`
    }
}