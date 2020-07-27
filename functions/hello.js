const api = require('../utils/api')
const setup = require('../utils/parser').setup
const parser = require('../utils/parser').parse
let moment = require('moment')

moment.locale('fr');

let now = moment.utc().add(2, 'h')
console.log(moment.utc());


exports.handler = async events => {
    let result = await api()
    setup(result.data)
    let data = []
    parser().map(res => {
        let to = moment(res.duree[0] ,"HH:mm").add(2, 'h')
        console.log(to)
        let passage = {hour : res.duree[0], passage: now.to(to)}
        data.push(passage)
    })    
    return {
        statusCode: 200, 
        body: JSON.stringify(data)
    }
}