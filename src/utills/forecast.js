const request =  require('postman-request')
const forecast = (address,callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=46a282a2986c505c879485463507159b&query='+address

    request({url ,json: true},(error,{body})=>{
        if(error){
            callback('unable to connect with internet',undefined)
        } else if(body.error){
            callback('unable to find locaiton , try another serach',undefined)
        } else{
            callback(undefined, "  current weather is  " + body.current.temperature + " digree . and rain chance is " + body.current.precip + " % ")
        }
    })
}
module.exports =  forecast 
