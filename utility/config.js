const MINE_RATE = 1000;

const INITIAL_DIFFICULTY = 3;

//Explanation--->>>Initial genesis block values are defined below.
const GENESIS_DATA = {
    timeStamp: 1,
    lastHash: 'Kilwish',
    hash: 'Kilwish hash',
    difficulty: INITIAL_DIFFICULTY,
    nonce: 0,
    data: []
  };

module.export = GENESIS_DATA,MINE_RATE;