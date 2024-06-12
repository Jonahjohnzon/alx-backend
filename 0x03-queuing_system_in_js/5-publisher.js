import redis from 'redis';

const cli = redis.createClient();

cli.on('connect', function() {
  console.log('Redis client connected to the server');
});

cli.on('error', function(err) {
  console.log('Redis client not connected to the server: ' + err);
});

cli.subscribe('holberton school channel');

cli.on('message', function(channel, message) {
  console.log('Message received on channel ' + channel + ': ' + message);
  if (message === 'KILL_SERVER') {
    cli.unsubscribe();
    cli.quit();
  }
});
