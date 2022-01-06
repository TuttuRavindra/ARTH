const Blockchain = require('./blockchain');
const Block = require('./block');

describe('Blockchain',()=>{
    
    let bc,bc2;

    beforeEach(()=>{
       bc = new Blockchain();
       bc2 = new Blockchain();
    });

    it('Start with the Genesis block',()=>{
        expect(bc.chain[0]).toEqual(Block.genesis())
    });
    
    it('adds a new Block',()=>{
        const data = 'foo';
        bc.addBlock(data);
        expect(bc.chain[chain.length-1].data).toEqual(data);
    });

    it('Validates a valid chain',()=>{
        bc2.addBlock('foo');
        expect(bc.isValidChain(bc2.chain)).toBe(true);
    });
    
});