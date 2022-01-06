const Block = require('./block');

describe('Block',()=>{
    
    let data, lastBlock, block;

    beforeEach(()=>{
        const data  = 'bar';
        const lastBlock = Block.genesis();
        const block = Block.mineBlock(lastBlock,data);
    });

    it('sets the `data` to match the input',()=>{
        expect(block.data).toEqual(data)
    });
    
    it('sets the `lasthash` to match the hash of the last block',()=>{
        expect(block.lastHash).toEqual(lastBlock.hash);
    });
    
});