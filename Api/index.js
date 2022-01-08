const express = require('express');
const bodyParser = require('body-parser');
const BlockChain = require('../chain/blockchain');

const app = express();

const blockchain = new BlockChain();

app.use(bodyParser.json());

app.get('api/blocks',(req,res)=>{
    res.json(blockchain.chain);
});

// app.post('/mine',(req,res)=>{
//     const block = bc.addBlock();
//     console.log(`New Block was added:${block.toString()}`);

//     P2pServer.syncChain();
    
//     res.redirect('/blocks');

// });
const PORT =3000;
app.listen(PORT,()=>console.log(`Listening on port at localhost:${PORT}`));
// P2pServer.listen();