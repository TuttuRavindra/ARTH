const express = require('express');
const bodyParser = require('body-parser');
const BlockChain = require('../chain/blockchain');

const app = express();

const blockchain = new BlockChain();

app.use(bodyParser.json());

app.get('api/blocks',(req,res)=>{
    res.json(blockchain.chain);
});

app.post('api/mine',(req,res)=>{
    const {data} = req.body;

    const block = blockchain.addBlock({data});

    // console.log(`New Block was added:${block.toString()}`);
    
    res.redirect('api/blocks');

// });
const PORT =3000;
app.listen(PORT,()=>console.log(`Listening on port at localhost:${PORT}`));
// P2pServer.listen();