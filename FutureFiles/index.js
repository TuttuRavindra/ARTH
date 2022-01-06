// //Description--->>>IMPORTS
// const express = require('express');

// //Description--->>>PACKAGE IMPORTS
// const BlockChain = require('./blockchain');

// //Description--->>>PACKAGE IMPORTS
// const request = require('request');

// const PubSub = require('./pubsub');
// //Description--->>>BODY PARSER

// const bodyparser = require('body-parser');

// //Description--->>>APPLICATION
// const app = express();

// // const DEFAULT_PORT = 3001;
// // const ROOT_NODE_ADDRESS = `http://localhost:${DEFAULT_PORT}`;


// const kilwish = new BlockChain();

// kilwish.addBlock('fewfee');

// console.log(kilwish.chain);

// // const pubsub = new PubSub(kilwish);

// // setTimeout(()=>pubsub.brodcastChain(),1000) 

// // app.use(bodyparser.json());

// // app.get('/api/block',(req,res)=>{
// //     res.json(kilwish.chain);
// // });


// // app.post('/api/mine',(req,res)=>{
// //     const {data} =  req.body;
// //     kilwish.addBlock(data);
// //     pubsub.brodcastChain();
// //     res.redirect('/api/block');
// // });

// // const syncChains = () =>{
// //     request({url:`${ROOT_NODE_ADDRESS}/api/blocks`},(error,response,body)=>{
// //         if(!error && response.statusCode === 200){
// //             const rootChain=JSON.parse(body);
// //             console.log('replace chain on sync with', rootChain);
// //             blockchain.replaceChain(rootChain);

// //         }
// //     })

// // };

// // let PEER_PORT ;

// // if(process.env.GENERATE_PEER_PORT === 'true'){
// //     PEER_PORT = 3911;
// // }

// // const PORT = PEER_PORT || DEFAULT_PORT;

// // app.listen(PORT,()=>{
// //     console.log(`Listening on port :${PORT}`);
// //     syncChains();
// // });




