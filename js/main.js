const {createApp} = Vue

createApp({
    data(){
        return{
            message: "Hello Vue"
        }
    }
}).mount("#app")

createApp({
    
    data: {
      
      imageSrc: './scott-estrada-developer.jpg'
    }
  });