let fs = require("fs");

class Handle {
    constructor (archivo){
        thiss.archivo = archivo;
    }
    async getProductos(){
        let producto = await fs.promises.readFile(`${this.archivo}`, 'utf-8')
        return (JSON.parse(objeto))
    }
}

module.exports = Handle