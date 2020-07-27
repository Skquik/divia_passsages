const axios = require('axios')

async function api(){
    let result = await axios.get("http://timeo3.keolis.com/relais/217.php?xml=3&refs=274498567&ran=1")
    return result
}

module.exports = api