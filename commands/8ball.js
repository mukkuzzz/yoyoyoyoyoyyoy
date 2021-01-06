module.exports = {
    name: '8ball',
    usage: '<question>',
    description: 'predicts the answer for quetion ps:dont sent some kinda withchery',
    args:'true',
    execute(message,args){
        var outcomes = ["nope","probably","never","idk","u dum"];
        return message.channel.send(outcomes[outcomes.length * Math.random() | 0]); 
    }


}