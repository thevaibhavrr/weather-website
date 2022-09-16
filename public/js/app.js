const weatherfome = document.querySelector('form')
const search = document.querySelector('input')
const messageone = document.querySelector('#message-1')
const messagetwo = document.querySelector('#message-2')

weatherfome.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location = search.value

    messageone.textContent = 'loading...'
    messagetwo.textContent = ''

    fetch('http://localhost:4000/weatherr?address='+ location).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                messageone.textContent = data.error
            } else{
                messageone.textContent = location
                messagetwo.textContent = data.forecast
            }
        })
    })
})