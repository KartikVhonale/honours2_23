var events = require('events')

var eventEmitter = new events.EventEmitter();

var ringBell = function(){
    console.log('Ring ring ring ...!');
    eventEmitter.emit('bellTIngs','welcome');
}

eventEmitter.on('doorOpen',ringBell);
eventEmitter.on('bellRings',function(message){
    console.log(message);
})
eventEmitter.emit('doorOpen');