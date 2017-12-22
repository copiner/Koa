var Redis = require('ioredis');
var redis = new Redis();// Connect to 127.0.0.1:6379  本地安装redis

// var redis = new Redis(6379, '192.168.1.1')        // 192.168.1.1:6379
// var redis = new Redis({
//   port: 6379,          // Redis port
//   host: '127.0.0.1',   // Redis host
//   family: 4,           // 4 (IPv4) or 6 (IPv6)
//   password: 'auth',
//   db: 0
// })

redis.set('foo', 'bar');
redis.get('foo', function (err, result) {
  console.log(result);
});

// Or using a promise if the last argument isn't a function

// redis.get('foo').then(function (result) {
//   console.log(result);
// });

// Arguments to commands are flattened, so the following are the same:

// redis.sadd('set', 1, 3, 5, 7);
// redis.sadd('set', [1, 3, 5, 7]);

// All arguments are passed directly to the redis server:

// redis.set('key', 100, 'EX', 10);
