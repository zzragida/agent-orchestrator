const http = require('http');
const os = require('os');

const port = process.env.PORT || 3000;
const version = process.env.APP_VERSION || 'v1';

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, {'content-type':'application/json'});
    return res.end(JSON.stringify({status:'ok', version, hostname:os.hostname(), ts:new Date().toISOString()}));
  }
  if (req.url === '/fail') {
    res.writeHead(500, {'content-type':'application/json'});
    return res.end(JSON.stringify({status:'error', version, message:'intentional failure endpoint'}));
  }
  res.writeHead(200, {'content-type':'application/json'});
  res.end(JSON.stringify({service:'nu-openship-agent-lab', version, hostname:os.hostname()}));
});
server.listen(port, () => console.log(`listening on ${port}, version=${version}`));
