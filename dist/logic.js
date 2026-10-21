(function(root){
  const fresh=()=>({attempts:0,correct:0,incorrect:0,unsure:0,streak:0,level:0,last:0,next:0,skills:{category:0,action:0,care:0,recall:0,report:0,photo:0}});
  function weak(p){return !!p && (p.incorrect>=3||p.unsure>=2||(p.attempts>=3&&p.correct/p.attempts<=0.6));}
  function update(previous,mode,rating,now=Date.now()){
    const p={...fresh(),...previous,skills:{...fresh().skills,...previous?.skills}};
    p.attempts++; p.last=now;
    if(rating===2){p.correct++;p.streak++;p.skills[mode]=Math.min(3,p.skills[mode]+1);}
    else{p.streak=0;if(rating===1)p.unsure++;else p.incorrect++;p.skills[mode]=Math.max(0,p.skills[mode]-1);}
    p.level=p.skills.recall>=2?5:p.skills.care>0?4:p.skills.action>0?3:p.skills.category>0?2:1;
    if(rating<2)p.level=Math.min(p.level,4);
    const days=[0,1,3,7,14,30];
    p.next=rating===2?now+days[Math.min(p.streak,5)]*86400000:now+5*60000;
    return p;
  }
  function today(drugs,progress,now=Date.now()){
    const difficult=drugs.filter(d=>weak(progress[d.id])).slice(0,3);
    const used=new Set(difficult.map(d=>d.id));
    const due=drugs.filter(d=>progress[d.id]?.attempts&&progress[d.id].next<=now&&!used.has(d.id)).sort((a,b)=>progress[a.id].next-progress[b.id].next).slice(0,8);
    due.forEach(d=>used.add(d.id));
    const unseen=drugs.filter(d=>!progress[d.id]?.attempts&&!used.has(d.id)).slice(0,5);
    return {difficult,due,unseen,all:[...due,...difficult,...unseen]};
  }
  function shuffle(items){const a=[...items];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
  function answer(d,mode){return mode==='report'?d.reportExample:mode==='category'?d.subCategory:['action','photo'].includes(mode)?d.shortAction:d.carePoints.join('・');}
  function choices(d,mode,drugs,count){
    const correct=answer(d,mode);
    if(mode==='report')return shuffle([correct,...['「なんか変です」とだけ伝える。','薬の副作用だと断定し、観察した時刻や状態は伝えない。','測っていない値を推測して、測定値として伝える。'].slice(0,count-1)]);
    // Observation distractors must not contain any of this drug's observation points.
    const alternatives=[...new Set(drugs.filter(x=>mode!=='care'||!x.carePoints.some(p=>d.carePoints.includes(p))).map(x=>answer(x,mode)))].filter(a=>a!==correct);
    return shuffle([correct,...shuffle(alternatives).slice(0,count-1)]);
  }
  function migrateProgress(progress,version){
    if(version===2)return progress||{};
    if(version!==1)return {};
    const result={};
    for(const [key,value] of Object.entries(progress||{})){
      const id=Number(key);
      // Changed content is reset, not attributed to a different medicine.
      if(id===14||id===47||id===51||id===52)continue;
      if(id>=1&&id<=50)result[id>=48?id-1:id]=value;
    }
    return result;
  }
  function approvedImages(d){return d.imageUsageStatus==='approved'&&d.representativeProduct&&d.representativeProduct!=='未確認'?(d.imageFiles||[]).filter(i=>i.usageStatus==='approved'&&i.productName===d.representativeProduct&&i.strength===d.strength&&i.manufacturer===d.manufacturer&&i.sourceUrl&&i.permissionEvidence&&i.checkedDate&&/^images\/[a-zA-Z0-9_./-]+\.(png|jpg|jpeg|webp)$/.test(i.path)&&!i.path.includes('..')):[];}
  root.MED_LOGIC={fresh,weak,update,today,shuffle,answer,choices,migrateProgress,approvedImages};
  if(typeof module!=='undefined')module.exports=root.MED_LOGIC;
})(typeof window!=='undefined'?window:globalThis);
