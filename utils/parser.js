const xml2js = require("xml2js").parseString

let parser = xml2js
let data = null

exports.setup = (xml) => {
    data = xml
}

exports.parse = () => {
    let dates = null
    parser(data, (err, result) => {
        if(err) return false
        dates = result.xmldata.horaires[0].horaire[0].passages[0].passage
    })
    return dates
}