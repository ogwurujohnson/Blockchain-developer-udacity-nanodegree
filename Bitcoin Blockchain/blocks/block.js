const {SHA256} = require('crypto-js');

class Block {
    constructor(data){
		this.id = 0;
        this.nonce = 144444;
        this.body = data;
        this.hash = "";
    }

    async generateHash() {
        let self = this;
        try {
            const stringifyObj = JSON.stringify(self.body);
            self.hash = SHA256(stringifyObj);
            return {
                hash: self.hash
            };
        } catch(err) {
            console.log(err)
        }
        
    }
}

module.exports.Block = Block;