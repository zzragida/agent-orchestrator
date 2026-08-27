const http = require('http');
const {spawn} = require('child_process');
const child = spawn(process.execPath, ['app/server.js'], {env:{...process.env, PORT:'3100', APP_VERSION:'test'}});
setTimeout(() => {
  http.get('http://127.0.0.1:3100/health', res => {
    let d=''; res.on('data', c=>d+=c); res.on('end', ()=>{
      const body=JSON.parse(d);
      const ok=res.statusCode===200 && body.status==='ok' && body.version==='test';
      child.kill();
      if(!ok) process.exit(1);
      console.log('smoke test passed');
    });
  }).on('error', e=>{ console.error(e); child.kill(); process.exit(1); });
}, 500);
