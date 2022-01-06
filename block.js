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

    static genesis(){
        return new this('genesis timestamp','genesis hash','genesis last hash','genesis data', 'genesis nonce','genesis difficulty');
    }

    static mineBlock(lastBlock,Data){

        const timestamp = Date.now();
        const lastHash = lastBlock.hash;
        const hash = 'dummy generated hash for the current block';


        return new this(timestamp,hash,lastHash,Data);

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