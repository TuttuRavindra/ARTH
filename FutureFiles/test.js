const Block = require('../Chain/block');

const block = new Block('testTimeStamp','testhash','testlastHash','testData','test Nounce','testDifficulty');

console.log(block.toString());
console.log(Block.genesis().toString());

const fooBlock = Block.mineBlock(Block.genesis(),'foodata');

console.log(fooBlock.toString());