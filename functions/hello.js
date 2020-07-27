const api = require('../utils/api')
const setup = require('../utils/parser').setup
const parser = require('../utils/parser').parse
const moment = require('moment')
moment.locale('fr');


exports.handler = async events => {
    let result = await api()
    setup(result.data)
    let data = []
    parser().map(res => {
        let passage = {hour : res.duree[0], text:moment(res.duree[0], 'hh:mm').fromNow()}
        data.push(passage)
    })
    console.log(data);
    
    
    return {
        statusCode: 200, 
        body: JSON.stringify(data)
    }
}