// const Blockchain = require('./blockchain');
// const Block = require('./block');

// describe('Blockchain',()=>{
    
//     let bc,bc2;

//     beforeEach(()=>{
//        bc = new Blockchain();
//        bc2 = new Blockchain();
//     });

//     it('Start with the Genesis block',()=>{
//         expect(bc.chain[0]).toEqual(Block.genesis())
//     });
    
//     it('adds a new Block',()=>{
//         const data = 'foo';
//         bc.addBlock(data);
//         expect(bc.chain[chain.length-1].data).toEqual(data);
//     });

//     it('Validates a valid chain',()=>{
//         bc2.addBlock('foo');
//         expect(bc.isValidChain(bc2.chain)).toBe(true);
//     });

//     it('It invalidates a chain with corrupt genesis block',()=>{
//         bc2.chain[0].data = 'bad data';
//         expect(bc.isValidChain(bc2.chain)).toBe(false);
//     });

//     it('It invalidates a Corrupt chain ',()=>{
//         bc2.addBlock('foo');
//         bc.chain[1].data = 'Not Foo'
//         expect(bc.isValidChain(bc2.chain)).toBe(false);
//     });

//     it('It Replaces a chain with a valid chain ',()=>{
//         bc2.addBlock('goo');
//         bc.replaceChain(bc2.chain);
//         expect(bc.chain).toEqual(bc2.chain);
//     });

//     it('It does not Replaces the  chain with one or less that or equal to length  ',()=>{
//         bc.addBlock('foo');
//         bc.replaceChain(bc2.chain);
//         expect(bc.chain).not.toEqual(bc2.chain);
//     });
    
// });