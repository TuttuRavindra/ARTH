const { GENESIS_DATA } = require('./config');

//Description--->> BLOCK-CLASS
class Block{

    
    //Description--->> TIMESTAMP, HASH, LASTHASH, DATA, NONCE, DIFFICULTLY
    //Description--->> This creates an object with the above values.
    //Explanation--->>>Constructor which initialized the below object with Block Parameters
    constructor({timeStamp,lastHash,hash,data,nonce, difficulty}){
        
        //Explanation--->>>timeStamp is the time at which the transaction has to be performed for a particular entity.
        this.timeStamp = timeStamp;
        
        //Explanation--->>>lastHash is the hash code for the last blocks transaction.
        this.lastHash = lastHash;
        
        //Explanation--->>>hash is the unique hash code generated for the current transaction.
        this.hash = hash;
        
        //Explanation--->>>data is the actual amount of information which has to be processed/registered in the Block.
        this.data = data;
        
        //Explanation--->>>TBD.
        this.nonce = nonce;
        
        //Explanation--->>>difficulty is the rate at which the miner should be able to mine the block, if more hash power is added to the network then the difficulty has to be increased in order to maintain the rate of block transaction. 
        this.difficulty = difficulty;
        
    }
    
    //Description--->> genesis is the first block and has the data predefined by the developer of the Blockchain
    static genesis() {

        //Explanation--->>>Returns a new block and this block can be considered as the first block in the Block chain.
        return new Block({GENESIS_DATA});
    }

}

module.exports = Block;