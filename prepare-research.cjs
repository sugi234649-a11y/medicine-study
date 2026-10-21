const fs=require('node:fs');
const rows=[...require('./research-1-26.json'),...require('./research-27-52.json')];
const text=`/* Official source review records dated 2026-10-13; clinical review is incomplete. */
(function(root){const rows=${JSON.stringify(rows)};
for(const r of rows){const d=root.MED_DATA.drugs.find(d=>d.id===r.id);if(!d)continue;Object.assign(d,{representativeProduct:r.productName||'未確認',strength:r.strength||'未確認',manufacturer:r.manufacturer||'未確認',saleStatus:r.saleStatus||'販売・供給状況未確認',researchNotes:Array.isArray(r.notes)?r.notes.join(' '):r.notes||'',clinicalVerification:'公式出典に基づく調査記録あり（2026-10-13）。確認範囲：'+(r.verifiedFields||[]).join('・')+'。効能・観察全項目の最終確認・専門職監修は未完了。',imageSources:[r],imageUsageStatus:'unconfirmed'});}
})(typeof window!=='undefined'?window:globalThis);`;
fs.writeFileSync(__dirname+'/research-data.js',text);
