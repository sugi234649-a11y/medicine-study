(function(root){
  const fresh=()=>({attempts:0,correct:0,incorrect:0,unsure:0,streak:0,level:0,last:0,next:0,skills:{category:0,action:0,care:0,recall:0}});
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
  function answer(d,mode){return mode==='category'?d.subCategory:mode==='action'?d.shortAction:d.carePoints.join('・');}
  function choices(d,mode,drugs,count){
    const correct=answer(d,mode);
    // Observation distractors must not contain any of this drug's observation points.
    const alternatives=[...new Set(drugs.filter(x=>mode!=='care'||!x.carePoints.some(p=>d.carePoints.includes(p))).map(x=>answer(x,mode)))].filter(a=>a!==correct);
    return shuffle([correct,...shuffle(alternatives).slice(0,count-1)]);
  }
  root.MED_LOGIC={fresh,weak,update,today,shuffle,answer,choices};
  if(typeof module!=='undefined')module.exports=root.MED_LOGIC;
})(typeof window!=='undefined'?window:globalThis);
