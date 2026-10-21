const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const photos=JSON.parse(fs.readFileSync(path.join(__dirname,'photo-catalog.json'),'utf8'));
for(const p of photos){
  if(!p.visualVerified||!p.manufacturerEvidence||!p.licenseUrl||!p.author||!p.sha1)throw new Error('Incomplete image review: '+p.productName);
  const data=fs.readFileSync(path.join(__dirname,p.path));
  if(crypto.createHash('sha1').update(data).digest('hex')!==p.sha1)throw new Error('Original image changed: '+p.path);
}
fs.writeFileSync(path.join(__dirname,'photo-data.js'),`/* Generated from photo-catalog.json; edit the catalog and rebuild. */
(function(root){
const sources=${JSON.stringify(photos,null,2)};
if(root.MED_DATA){for(const photo of sources){
 const d=root.MED_DATA.drugs.find(d=>d.id===photo.id);
 Object.assign(d,{representativeProduct:photo.productName,strength:photo.strength,manufacturer:photo.manufacturer,currentManufacturer:photo.currentManufacturer||'',imageUsageStatus:'approved',imageFiles:[photo],saleStatus:'製品情報の掲載を確認（'+photo.checkedDate+'）。現在の在庫・供給状況は未確認。',researchNotes:'写真と販売名・規格・メーカーの資料を照合。'+photo.appearanceNote,clinicalVerification:'写真の利用条件と代表製品の照合：'+photo.checkedDate+'。観察項目全体の専門職監修は未完了。'});
 d.imageSources=[{sourceName:'Wikimedia Commons（写真の出典）',sourceUrl:photo.sourceUrl,termsUrl:photo.licenseUrl,imageUsageStatus:photo.license,checkedDate:photo.checkedDate},{sourceName:'現在の製品照合資料',sourceUrl:photo.officialUrl,imageUsageStatus:'製品情報の参照のみ',checkedDate:photo.checkedDate}];
 if(photo.historicalOfficialUrl)d.imageSources.push({sourceName:'撮影当時のメーカー照合資料',sourceUrl:photo.historicalOfficialUrl,imageUsageStatus:'製品情報の参照のみ',checkedDate:photo.checkedDate});
}}
root.MED_PHOTOS=sources;
if(typeof module!=='undefined')module.exports=sources;
})(typeof window!=='undefined'?window:globalThis);
`);
console.log('Verified photo catalog: '+photos.length+' medicines.');
