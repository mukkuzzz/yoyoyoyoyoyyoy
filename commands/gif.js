giphy=require('giphy-api')('rUdHoMUEVgFa1kcH5SVVvUFNLr3cmq5w');
module.exports = {
    name:"gif",
    description:"Gets you a meme",
    args:"true",
    usage:`<query>`,
    execute(message,args){
        query = args[0];
        giphy.random(query,function(err,ress){
            message.channel.send(ress.data.url);       
        });
    }
}