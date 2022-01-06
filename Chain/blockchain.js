// const Genesis = require('./genesis');
// const MineBlock = require('./mineBlock');
// const cryptoHash = require('./cryto-hash');
const Block = require('./block');

class BlockChain{
    
        constructor(){
            this.chain = [Block.genesis()];
        }

        addBlock(data){
            const block = Block.mineBlock(this.chain[this.chain.length-1],data);
            this.chian.push(block);
            return block;
        }

        isValidChain(chain){
            if(JSON.stringify(chain[0]) !== JSON.stringify(BLock.genesis())) return false;

            for (let i =1; i<chain.length;i++){
                const block =chain[i];
                const lastBlock = chain[i-1]; 

                if(block.lastHash !== lastBlock.hash || block.hash !== Block.blockHash(block)){
                    return false
                }
            }

            return true;

        }

        replaceChain(newChain){
            if(newChain.length <= this.chain.length){
                console.log('received chain is not longer than the current chain');
                return;
            }else if(!this.isValidChain(newChain)){
                console.log('The Received chain is not valid.');
                return;
            }


            console.log('Replacing the current chain with new chain');
            this.chian = newChain;
        }


        

    }

// class BlockChain{
    
//     constructor(){
//         this.chain = [Genesis.genesis()];
//     }

//     addBlock(data){
//         const newBlock = MineBlock.mineBlock(data,this.chain[this.chain.length-1]);
//         this.chain.push(newBlock);
//     }


//     replaceChain(chain){

//         if(chain.length <= this.chain.length){
//             console.error('Incoming Blockchain should be longer the the existing Blockchain');
//             return;
//         }
        
//         if(!BlockChain.isValidChain(chain)){
//             console.error('Incoming Blockchain should a valid Blockchain');
//             return;
//         }

//         console.log('Warning-->>REPLACING BLOCKCHAIN<<-- with',chain);

//         this.chain = chain;
//     }
 


//     static isValidChain(chain){

//         if(JSON.stringify(chain[0]) !== JSON.stringify(Genesis.genesis())) {
//             return false;
//             console.log('you entered here');
//         };

//         for(let i=1;i<chain.length;i++){

//             const block = chain[i];
      
//             const actualLastHash = chain[i-1].hash;
//             const timestamp  = block.timeStamp;
//             const lastdifficulty = chain[i-1].difficulty;
//             const lastHash  = block.lashHash;
//             const hash  = block.hash;
//             const data  = block.data;
//             const nonce  = block.nonce;
//             const difficulty  = block.difficulty;
//             const validatedHash = cryptoHash([timestamp,lastHash,data,nonce,difficulty]);

//             if(lastHash !== actualLastHash){
//                     return false;
//             }

//             if(hash !== validatedHash){
//                 return false;
//             }   

//             if(Math.abs(lastdifficulty - difficulty) > 1){
//                 return false;
//             }

//         }

//     }


// }




module.exports = BlockChain;