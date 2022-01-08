const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const BlockChain = require('../chain/blockchain');
const PubSub = require('../pubsub');
const { response } = require('express');

const app = express();

const blockchain = new BlockChain();

const pubsub = new PubSub({blockchain});

const ROOT_NODE_ADDRESS =  `http://localhost:${DEFAULT_PORT}`

app.use(bodyParser.json());

app.get('api/blocks',(req,res)=>{
    res.json(blockchain.chain);
});

app.post('api/mine',(req,res)=>{
    const {data} = req.body;

    const block = blockchain.addBlock({data});

    pubsub.broadcastChain();

    // console.log(`New Block was added:${block.toString()}`);
    
    res.redirect('api/blocks');

});

const syncChains =() =>{
    request({url:`${ROOT_NODE_ADDRESS}/api/blocks`},(error,response,body))=>{};
}

const DEFAULT_PORT = 3000;
let PEER_PORT;

if (process.env.GENERATE_PEER === 'true'){
    PEER_PORT = DEFAULT_PORT + Math.ceil(Math.random()*1000)
}

const PORT = PEER_PORT || DEFAULT_PORT;

app.listen(PORT,()=>console.log(`Listening on port at localhost:${PORT}`));