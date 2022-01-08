const Block = require('./block');
const { GENESIS_DATA } = require('../config');

//Description--->>> Test 1.
//Explanation--->>> This tests the block class
describe('Block',()=>{
    
    const timeStamp = 2000;
    const lastHash = 'foo-hash';
    const hash = 'bar-hash';
    const data = ['blockchain', 'data'];
    const nonce = 1;
    const difficulty = 1;
    
    //Explanation--->>>Create a block with the above data from testing
    const block = new Block({ timeStamp, lastHash, hash, data, nonce, difficulty });
    
    it('TimeStamp test for the block', () => {
        expect(block.timeStamp).toEqual(timeStamp);
    });
    
    it('lastHash test for the block', () => {
        expect(block.lastHash).toEqual(lastHash);
    });
    
    it('hash test for the block', () => {
        expect(block.hash).toEqual(hash);
    });
    
    it('data test for the block', () => {
        expect(block.data).toEqual(data);
    });
    
    it('nonce test for the block', () => {
        expect(block.nonce).toEqual(nonce);
    });
    
    it('difficulty test for the block', () => {
        expect(block.difficulty).toEqual(difficulty);
    });
    
});


//Description--->>> Test 2.
//Explanation--->>> This tests the genesis block.
describe('genesis()', () => {

    const genesisBlock = Block.genesis();

    it('returns a Block instance', () => {
      expect(genesisBlock instanceof Block).toBe(true);
    });

    it('returns the genesis data', () => {
      expect(genesisBlock).toEqual({GENESIS_DATA});
    });
  });


//Description--->>> Test 3.
//Explanation--->>> This tests the Mine Block functionality.
describe('mineBLock()',()=>{

    const lastBlock = Block.genesis();

    const data = 'mined data';

    const minedBlock = Block.mineBlock({lastBlock,data});

    it('returns the Block instance',() =>{
        expect(minedBlock instanceof Block).toBe(true);
    });

    it('sets the lastHash to be the hash of the last block', () => {
        expect(minedBlock.lastHash).toEqual(lastBlock.hash);
      });

    it('sets the data',()=>{
        expect(minedBlock.data).toEqual(data);
    });

    it('sets the timestamp',()=>{
        expect(minedBlock.timeStamp).not.toEqual(undefined);
    });

});