const Block = require('./block');

const block = new Block('testTimeStamp','testhash','testlastHash','testData','test Nounce','testDifficulty');

console.log(block.toString());