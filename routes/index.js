var express = require('express');
const models = require("../models");

var router = express.Router();
const VoiceResponse = require('twilio').twiml.VoiceResponse;

/* GET home page. */
router.post('/voice', async function(req, res) {
  try{

    // res.type('xml')

    const twiml = new VoiceResponse();
  
    function gather() {
      const gatherNode = twiml.gather({ numDigits: 1 });
      gatherNode.say('Press 1 for Call forwarding to an other Person. Press 2 For leave a voicemail');
      twiml.redirect('/result');
    
    }
    
    // console.log("req.body.Digits 1",JSON.stringify(req.body.Digits))
    if (req.body.Digits) {
      switch (req.body.Digits) {
        case '1':
          twiml.say('Your Call forwarding to an other Person!');
          twiml.dial('+923331478581');
          twiml.say('Good Bye!');
          req.body.CallStatus = 'completed';
          break;
        case '2':
          twiml.say('Kindly leave a voicemail!')
          twiml.record({
            timeout: 5,
            transcribe: true
          });
          break;
        default:
          twiml.say("Sorry, I don't understand that choice.");
          twiml.pause();
          gather();
          break;
      }
    } else {  
      gather();
    }
    if(req.body && req.body.CallStatus == 'completed'){
      await models.call.create(req.body)
    }
        res.type('text/xml');
        res.writeHead(200, { 'Content-Type': 'text/xml' });
        res.end(twiml.toString());
}catch(err){
    console.log("err",err)
}
});

router.all('/result',function(req, res){  
    console.log("req.body.Digits 2",JSON.stringify(req.body.Digits))

})

router.get('/getCallLogs',async function(req, res){

  try{
    const data = await models.call.findAll({})
    console.log("data",data)
    if(!data){
      res.status(401).send({
        message: "Data Empty",
    });
    }
    res.status(200).send({
        message: "succesfully Recvied",
        data
    });

}catch(err){
    res.status(401).send({
      message: "Error Occured",
  });
}
})

module.exports = router;
