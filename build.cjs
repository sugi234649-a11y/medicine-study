const fs=require('node:fs'),path=require('node:path');
const root=__dirname,dist=path.join(root,'dist');
fs.mkdirSync(dist,{recursive:true});
for(const f of ['index.html','app.js','data.js','research-data.js','photo-data.js','logic.js','style.css','sw.js','manifest.webmanifest','icon-192.svg','icon-512.svg'])fs.copyFileSync(path.join(root,f),path.join(dist,f));
fs.cpSync(path.join(root,'images'),path.join(dist,'images'),{recursive:true});
console.log('Static app and licensed photos copied to dist.');
