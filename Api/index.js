const express = require('express');
const bodyParser = require('body-parser');
const BlockChain = require('../Chain/blockchain');
const P2pServer = require('./p2p-server');


const HTTP_PORT = process.env.HTTP_PORT || 3001;

const app = express();

const bc = new BlockChain();

const P2pServer = new P2pServer(bc);

app.use(bodyParser.json());

app.get('/blocks',(req,res)=>{
    res.json(bc.chain);
});

app.post('/mine',(req,res)=>{
    const block = bc.addBlock();
    console.log(`New Block was added:${block.toString()}`);

    P2pServer.syncChain();
    
    res.redirect('/blocks');

});

app.listen(HTTP_PORT,()=>console.log(`Listening on port ${HTTP_PORT}`));
P2pServer.listen();