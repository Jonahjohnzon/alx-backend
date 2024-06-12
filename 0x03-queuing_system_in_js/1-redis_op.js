import redis from 'redis';

const cli = redis.createClient();

cli.on('connect', () => {
  console.log('Redis client connected to the server');
});

cli.on('error', (err) => {
  console.error(`Redis client not connected to the server: ${err}`);
});

function setNewSchool(schoolName, value) {
  cli.set(schoolName, value, redis.print);
}

function displaySchoolValue(schoolName) {
  cli.get(schoolName, (err, reply) => {
    console.log(reply);
  });
}

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
