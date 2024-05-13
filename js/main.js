const {createApp} = Vue

createApp({
    data(){
        return{
            message: "Hello Vue",
            url: 'image/scott-estrada-developer.jpg'
        }
    }
}).mount("#app")
