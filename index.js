const tx2 = require('tx2');
const axios = require('axios');

require('dotenv').config();

let activeTx = {};

const heartbeat = function() {

}

const { RPCClient } = require('ocpp-rpc');

let OCPP_TAG = process.env.OCPP_TAG;

const ocpp = new RPCClient({
    endpoint: process.env.OCPP_BACKEND,
    identity: process.env.OCPP_CHARGEPOINT,
    protocols: ['ocpp1.6'],
    strictMode: true,
});

ocpp.connect();

tx2.action('StartTransaction', (OCPP_TAG,cb) => {
  if((typeof OCPP_TAG == 'object')||(OCPP_TAG == null)) { OCPP_TAG = process.env.OCPP_TAG; }
  const atomicStartTransaction = async function() {
    let reading = await axios.get("https://api.discovergy.com/public/v1/last_reading?meterId="+process.env.DGY_METERID,{
      auth:{
        username:process.env.DGY_USERNAME,
        password:process.env.DGY_PASSWORD
      }
    });

    let tx = await ocpp.call('StartTransaction',{
      connectorId:0,
      idTag:OCPP_TAG,
      meterStart:Math.round(reading.data.values.energy/1000000),
      timestamp:new Date(reading.data.time).toISOString()
    });
    return tx;
  }
  atomicStartTransaction().then(function(res) {
    activeTx = res;
    cb(res);
  })
})

tx2.action('StopTransaction', (OCPP_TAG,cb) => {
  if((typeof OCPP_TAG == 'object')||(OCPP_TAG == null)) { OCPP_TAG = process.env.OCPP_TAG; }
  const atomicStopTransaction = async function() {
    let reading = await axios.get("https://api.discovergy.com/public/v1/last_reading?meterId="+process.env.DGY_METERID,{
      auth:{
        username:process.env.DGY_USERNAME,
        password:process.env.DGY_PASSWORD
      }
    });

    let tx = await ocpp.call('StopTransaction',{
      idTag:OCPP_TAG,
      meterStop:Math.round(reading.data.values.energy/1000000),
      transactionId:activeTx.transactionId,
      timestamp:new Date(reading.data.time).toISOString()
    });
    return tx;
  }
  atomicStopTransaction().then(function(res) {
    cb(res);
  })
})



setInterval(heartbeat, 1000)
