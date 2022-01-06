//Description--->> BLOCK-CLASS
class Block{
    
    //Description--->> TIMESTAMP,HASH,LASTHASH,DATA
    constructor(timeStamp,hash,lashHash,data,nonce, difficulty){

        this.timeStamp = timeStamp;

        this.hash = hash;

        this.lashHash = lashHash;
        
        this.data = data;
        
        this.nonce = nonce;
        
        this.difficulty = difficulty;

    }

    toString(){
        return `Block -

            Timestamp :${this.timeStamp}

            Last Hash :${this.lashHash}

            Hash      :${this.hash}

            Data      :${this.data}

            Difficulty:${this.difficulty}
            
            Nonce     :${this.nonce}  
            
            `;
    }

}

module.exports = Block;