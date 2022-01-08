const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const BlockChain = require('../chain/blockchain');
const PubSub = require('../pubsub/pubsub');
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

    
    
    res.redirect('api/blocks');

});

const syncChains =() =>{
    request({url:`${ROOT_NODE_ADDRESS}/api/blocks`},(error,response,body=>{
        if(!error && response.statusCode === 200){
            const rootChain = JSON.parse(body);

            console.log(`replace chain on sync with `,rootChain);
            blockchain.replaceChain(rootChain);
        }
    }))
}

const DEFAULT_PORT = 3000;
let PEER_PORT;

if (process.env.GENERATE_PEER === 'true'){
    PEER_PORT = DEFAULT_PORT + Math.ceil(Math.random()*1000)
}

const PORT = PEER_PORT || DEFAULT_PORT;

app.listen(PORT,()=>{
    console.log(`Listening on port at localhost:${PORT}`)

    if(PORT !== DEFAULT_PORT) {
        syncChains();
    }  
});