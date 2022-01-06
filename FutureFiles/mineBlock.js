// const hexToBinary = require('hex-to-binary');
// const Block = require("./block");
// const cryptoHash = require('./cryto-hash');

// const MINE_RATE = 1000;
    
//     class MineBlock{

//     //Description--->> MINE BLOCK
//     static mineBlock(data,lastBlock){

//         let hash;

//         let timestamp;

//         const lastHash = lastBlock.hash;

//         let difficulty = lastBlock.difficulty;
        
//         let nonce =0;

//         console.log(`Difficulty :${difficulty}`);

//         do{

//             nonce++;
//             timestamp = Date.now();
//             difficulty = MineBlock.adjustDifficulty(lastBlock,timestamp);
//             hash = cryptoHash([timestamp,lastHash,data,nonce,difficulty]);

//         }while(hexToBinary(hash).substring(0,difficulty) !=='0'.repeat(difficulty));

        

//         return new Block(timestamp,hash,lastHash,data,nonce,difficulty);

//     }

//     static adjustDifficulty(LastBlock,timestamp){

//         const difficulty = LastBlock.difficulty;

//         if(difficulty<1){
//             return 1;
//         }
        
//         if((timestamp - LastBlock.timeStamp) > MINE_RATE){
//             return difficulty - 1;
//         }
        
//         if((timestamp - LastBlock.timeStamp) < MINE_RATE){
//             return difficulty + 1;
//         }
//         console.log(`timestamp - LastBlock.timeStamp `,(timestamp - LastBlock.timeStamp));
//         return difficulty;
//     }
    
//     }


//     module.exports = MineBlock;
    