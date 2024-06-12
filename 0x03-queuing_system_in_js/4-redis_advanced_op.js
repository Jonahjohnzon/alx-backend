import redis from 'redis';

const cli = redis.createClient();

cli.hset("HolbertonSchools", "Portland", 50, redis.print);
cli.hset("HolbertonSchools", "Seattle", 80, redis.print);
cli.hset("HolbertonSchools", "New York", 20, redis.print);
cli.hset("HolbertonSchools", "Bogota", 20, redis.print);
cli.hset("HolbertonSchools", "Cali", 40, redis.print);
cli.hset("HolbertonSchools", "Paris", 2, redis.print);

cli.hgetall("HolbertonSchools", function(err, reply) {
  console.log(reply);
});
