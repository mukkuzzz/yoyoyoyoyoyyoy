const { default: randomMeow } = require('random-meow');
var cat = require('random-meow');

module.exports = {
    name: 'cat',
    usage: ' ',
    description: 'gets u a cat pic',
    async execute(message, args){
        cat().then(url => message.channel.send(url));      
    }
}