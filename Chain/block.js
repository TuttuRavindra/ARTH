const SHA256 = require('crypto-js/sha256');
const { GENESIS_DATA } = require('./config');

//Description--->> BLOCK-CLASS
class Block{
    
    //Description--->> TIMESTAMP, HASH, LASTHASH, DATA, NONCE, DIFFICULTLY
    //Description--->> This creates an object with the above values.
    constructor({timeStamp,hash,lashHash,data,nonce, difficulty}){

        this.timeStamp = timeStamp;

        this.hash = hash;

        this.lashHash = lashHash;
        
        this.data = data;
        
        this.nonce = nonce;
        
        this.difficulty = difficulty;

    }

    static genesis() {
        return new Block(GENESIS_DATA);
    }

    // static genesis(){
    //     return new this('genesis timestamp','genesis hash','genesis last hash','genesis data', 'genesis nonce','genesis difficulty');
    // }

    // static mineBlock(lastBlock,Data){

    //     const timestamp = Date.now();
    //     const lastHash = lastBlock.hash;
    //     const hash = Block.hash(lastHash,lastHash,Data);
    //     return new this(timestamp,hash,lastHash,Data);

    // }

    // static hash(timestamp,lasthash,data){

    //     return SHA256(`${timestamp}${lasthash}${data}`).toString();

    // }

    // static blockHash(block){

    //     const {timeStamp,lastHash,data} = block ;
    //     return Block.hash(timeStamp,lastHash,data);

    // }



    // toString(){
    //     return `Block -

    //         Timestamp :${this.timeStamp}
    //         Last Hash :${this.lashHash}
    //         Hash      :${this.hash}
    //         Data      :${this.data}
    //         Difficulty:${this.difficulty}
    //         Nonce     :${this.nonce}  
            
    //         `;
    // }

}

module.exports = Block;