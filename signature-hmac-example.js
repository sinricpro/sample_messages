const crypto = require('crypto');
const APP_SECRET  = "a751abdb-e260-4bfd-a42c-60660561123d-3d8e6a30-0f39-42f0-a1ec-e47d47fb1392";

function getSignature(message, appsecert) {
    return crypto.createHmac('sha256', appsecert).update(message).digest('base64');
}

// Remove new line breaks and spaces and sort the payload by key 
const payload = {action:"setPowerState",clientId:"alexa-skill",createdAt:1567852244,deviceAttributes:[],deviceId:"5d737888aea17c30a056d759",replyToken:"6ec1f778-e92f-487c-9818-bdbe3438f30e",type:"request",value:{state:"On"}}
const HMAC = getSignature(JSON.stringify(payload), APP_SECRET);
const signature = { "HMAC": HMAC };
const header = { "payloadVersion": 2, "signatureVersion" : 1 };

const event = {
  header: header,
  payload: payload,
  signature : signature
}

console.log(event)

/*
{ header: { payloadVersion: 2, signatureVersion: 1 },
  payload:
   { action: 'setPowerState',
     clientId: 'alexa-skill',
     createdAt: 1567852244,
     deviceAttributes: [],
     deviceId: '5d737888aea17c30a056d759',
     replyToken: '6ec1f778-e92f-487c-9818-bdbe3438f30e',
     type: 'request',
     value: { state: 'On' } },
  signature:
   { HMAC: 'e5a479747b953ce6f5ad8ad623349bc2a257ea658c947d4496e4363e5eec3c38' } }
*/
