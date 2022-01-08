const redis = require('redis');

const CHANNELS = {
    TEST: 'TEST',
    BLOCKCHAIN: 'BLOCKCHAIN',
    TRANSACTION: 'TRANSACTION'
  };



class pubSub{
    constructor({blockchain}){

        this.blockchain = blockchain;

        this.publisher = redis.createClient();

        this.subscriber = redis.createClient();

        this.subscribeToChannels();

        this.subscriber.on_connect('message', (channel,message)=> this.handleMessage(channel,message))

    }

    handleMessage(channel, message) {
        console.log(`Message received. Channel: ${channel}. Message: ${message}.`);
    
        const parsedMessage = JSON.parse(message);
    
        switch(channel) {
          case CHANNELS.BLOCKCHAIN:
            this.blockchain.replaceChain(parsedMessage, true, () => {
              this.transactionPool.clearBlockchainTransactions({
                chain: parsedMessage
              });
            });
            break;
          case CHANNELS.TRANSACTION:
            this.transactionPool.setTransaction(parsedMessage);
            break;
          default:
            return;
        }
      }

    subscribeToChannels() {
        Object.values(CHANNELS).forEach(channel =>{
            this.subscriber.subscriber(channel);
        })
    }

    publish({channel,message}){
        this.subscriber.unsubscribe(channel,()=>{
            this.publisher.publish(channel,message,()=>{
                this.subscriber.subscribe(channel);
            });
        });   
    }

    broadcastChain() {
        this.publish({
          channel: CHANNELS.BLOCKCHAIN,
          message: JSON.stringify(this.blockchain.chain)
        });
    }


}

module.export = pubSub;