import redis from 'redis';
import { promisify } from 'util';

const cli = redis.createClient();

cli.on('connect', () => {
  console.log('Redis client connected to the server');
});

cli.on('error', (err) => {
  console.log(`Redis client not connected to the server: ${err}`);
});

cli.subscribe('holberton school channel');

cli.on('message', (channel, message) => {
  console.log(message);
  if (message === 'KILL_SERVER') {
    cli.unsubscribe();
    cli.quit();
  }
});

async function publishMessage(message, time) {
  setTimeout(() => {
    console.log(`About to send ${message}`);
    cli.publish('holberton school channel', message);
  }, time);
}

publishMessage("Holberton Student #1 starts course", 100);
publishMessage("Holberton Student #2 starts course", 200);
publishMessage("KILL_SERVER", 300);
publishMessage("Holberton Student #3 starts course", 400);
