const Block = require('./block');

describe('Block',()=>{
    
        const timestamp = 2000;
        const lastHash = 'foo-hash';
        const hash = 'bar-hash';
        const data = ['blockchain', 'data'];
        const nonce = 1;
        const difficulty = 1;
        const block = new Block({ timestamp, lastHash, hash, data, nonce, difficulty });

        it('TimeStamp test for the block', () => {
            expect(block.timestamp).toEqual(timestamp);
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