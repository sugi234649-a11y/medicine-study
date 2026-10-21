const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const data=require('../dist/data.js');require('../dist/research-data.js');const photos=require('../dist/photo-data.js');const L=require('../dist/logic.js');
test('licensed photographs match products and unmodified source file hashes',()=>{
 assert.equal(photos.length,7);
 assert.deepEqual(data.drugs.filter(d=>L.approvedImages(d).length).map(d=>d.id),[14,23,33,36,44,45,49]);
 for(const i of photos){const d=data.drugs.find(d=>d.id===i.id);assert.equal(d.representativeProduct,i.productName);const b=fs.readFileSync(path.join(__dirname,'../dist',i.path));assert.equal(crypto.createHash('sha1').update(b).digest('hex'),i.sha1);assert.equal(b[0],0xff);assert.ok(i.author&&i.licenseUrl&&i.permissionEvidence);}
 const d=data.drugs[13];assert.equal(L.approvedImages({...d,imageUsageStatus:'unconfirmed'}).length,0);
 assert.equal(L.approvedImages({...d,imageFiles:[{...d.imageFiles[0],manufacturer:'別メーカー'}]}).length,0);
 assert.equal(L.approvedImages({...d,imageFiles:[{...d.imageFiles[0],path:'images/../secret.jpg'}]}).length,0);
});
test('historical packages retain photographed manufacturer separately from current manufacturer',()=>{
 for(const id of [33,36,49]){const p=photos.find(p=>p.id===id),d=data.drugs.find(d=>d.id===id);assert.ok(p.historicalOfficialUrl&&p.currentManufacturer&&p.visualVerified);assert.ok(d.manufacturer.includes('撮影当時'));assert.equal(d.currentManufacturer,p.currentManufacturer);assert.equal(d.imageFiles[0].manufacturer,d.manufacturer);}
 assert.equal(data.drugs[43].manufacturer,'メディサ新薬株式会社');
 assert.ok(photos.find(p=>p.id===44).historicalOfficialUrl);
});
test('all approved photos are included in offline shell',()=>{
 const sw=fs.readFileSync(path.join(__dirname,'../dist/sw.js'),'utf8');
 for(const p of photos)assert.ok(sw.includes('./'+p.path));
});
test('photo purpose and report questions provide four distinct answers',()=>{
 for(const mode of ['photo','report'])for(const d of data.drugs){const choices=L.choices(d,mode,data.drugs,4);assert.equal(choices.length,4);assert.equal(new Set(choices).size,4);assert.ok(choices.includes(L.answer(d,mode)));const p=L.update(undefined,mode,2);assert.equal(p.skills[mode],1);}
});
test('v1 migration never transfers changed medicine records',()=>{
 const old=Object.fromEntries(Array.from({length:52},(_,i)=>[i+1,{marker:i+1}]));const p=L.migrateProgress(old,1);
 assert.equal(p[14],undefined);assert.equal(p[47].marker,48);assert.equal(p[48].marker,49);assert.equal(p[49].marker,50);assert.equal(p[50],undefined);assert.equal(p[51],undefined);assert.equal(p[52],undefined);assert.equal(p[46].marker,46);
});
