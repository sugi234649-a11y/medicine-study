const {test}=require('node:test');
const assert=require('node:assert/strict');
const {drugs,categories}=require('../dist/data.js');
const L=require('../dist/logic.js');
test('52 unique entries cover 15 categories with complete learning data',()=>{
  assert.equal(drugs.length,52);assert.equal(new Set(drugs.map(d=>d.id)).size,52);assert.equal(categories.length,15);
  for(const c of categories)assert.ok(drugs.some(d=>d.category===c));
  for(const d of drugs){assert.ok(d.genericName&&d.subCategory&&d.shortAction&&d.note);assert.ok(d.carePoints.length>=3);}
});
test('all choice sets include one exact answer with requested size',()=>{
  for(const d of drugs)for(const mode of ['category','action','care'])for(const count of [2,4]){
    const c=L.choices(d,mode,drugs,count);assert.equal(c.length,count);assert.equal(new Set(c).size,count);assert.ok(c.includes(L.answer(d,mode)));
  }
});
test('category answers alone cannot establish complete mastery',()=>{
  let p;for(let i=0;i<20;i++)p=L.update(p,'category',2,1000);assert.equal(p.level,2);
  p=L.update(p,'recall',2,1000);assert.equal(p.level,2);p=L.update(p,'recall',2,1000);assert.equal(p.level,5);
  p=L.update(p,'recall',0,1000);assert.ok(p.level<5);assert.equal(p.streak,0);assert.equal(p.next,301000);
});
test('spaced review, weak detection, and no duplicate daily items',()=>{
  let p=L.update(undefined,'care',2,0);assert.equal(p.next,86400000);p=L.update(p,'care',2,0);assert.equal(p.next,3*86400000);
  let wrong;for(let i=0;i<3;i++)wrong=L.update(wrong,'care',0,0);assert.equal(L.weak(wrong),true);
  const progress={1:wrong,2:p};const plan=L.today(drugs,progress,5*86400000);assert.equal(new Set(plan.all.map(d=>d.id)).size,plan.all.length);assert.equal(plan.unseen.length,5);assert.equal(plan.difficult.length,1);assert.equal(plan.due.length,1);
});
