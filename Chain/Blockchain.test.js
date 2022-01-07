const Blockchain = require('./blockchain');
const Block = require('./block');

//Description--->>> Test 1.
//Explanation--->>> This tests the genesis block.
describe('Blockchain', () => {

    const blockchain = new Blockchain();

    it('contanins a chain array', () => {
      expect(blockchain.chain instanceof Array).toBe(true);
    });

    it('Blockchain starts with the geneseis block', () => {
      expect(blockchain.chain[0]).toEqual(Block.genesis());
    });

    it('adds new block to the chain', () => {
        const  newData = 'foo bar'
        blockchain.addBlock({data:newData});
        expect(blockchain.chain[0]).toEqual(Block.genesis());
      });
      
  });