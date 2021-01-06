const { argv } = require("process");

module.exports = {
    name:'add',
    args: 'true',
    usage:'<num> <num>',
    description:'add to numbers',
    execute(message,args){
        if(!args.length >= 2){
            message.channel.send("What do u want to add lol");
        }
        else{
            args[0].toString();
            args[1].toString();
            sum = args[1] + args[0];
            message.channel.send(sum);
        }


    }

}