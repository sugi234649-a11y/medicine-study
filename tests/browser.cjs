const { chromium, webkit } = require('C:/Users/nao/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const {pathToFileURL}=require('node:url');
const path=require('node:path');
const fs=require('node:fs');
const assert=require('node:assert/strict');
const url=pathToFileURL(path.resolve(__dirname,'../dist/index.html')).href;
const out=path.resolve(__dirname,'../test-output');fs.mkdirSync(out,{recursive:true});
(async()=>{
  const browser=await chromium.launch({headless:true,channel:'chrome'});
  try{
    const context=await browser.newContext({viewport:{width:390,height:844},deviceScaleFactor:1,isMobile:true,hasTouch:true});
    await context.addInitScript(()=>{window.audioStarts=0;const start=OscillatorNode.prototype.start;OscillatorNode.prototype.start=function(...args){window.audioStarts++;return start.apply(this,args);};});
    const page=await context.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
    await page.goto(url);await page.evaluate(()=>{localStorage.clear();});await page.reload();
    await page.getByRole('heading',{name:'今日の学習',exact:true}).waitFor();
    async function overflow(){assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,'horizontal overflow');}
    await overflow();await page.screenshot({path:path.join(out,'mobile-home.png'),fullPage:true});
    await page.getByRole('button',{name:'効果音をオンにする'}).click();
    assert.equal(await page.getByRole('button',{name:'効果音をオフにする'}).getAttribute('aria-pressed'),'true');
    assert.equal(await page.evaluate(()=>audioStarts),2);
    await page.getByRole('button',{name:'効果音をオフにする'}).click();
    assert.equal(await page.evaluate(()=>audioStarts),2,'muting produces no sound');
    await page.getByRole('button',{name:'効果音をオンにする'}).click();
    await page.getByRole('button',{name:'5項目を学ぶ',exact:true}).click();
    await page.locator('.answer').first().waitFor();
    let answered=0;
    while(await page.locator('.answer').count()){
      const correct=await page.evaluate(()=>{
        const h=document.querySelector('.study h1').textContent;
        const d=MED_DATA.drugs.find(d=>d.genericName===h||d.brandNames.includes(h));
        return MED_LOGIC.answer(d,'category');
      });
      const opts=await page.locator('.answer').allTextContents();
      const idx=opts.findIndex(t=>t.includes(correct));
      await page.locator('.answer').nth(answered===0?1-idx:idx).click();
      await page.locator('.feedback').waitFor();
      if(answered===0){await overflow();await page.screenshot({path:path.join(out,'mobile-quiz.png'),fullPage:true});}
      await page.getByRole('button',{name:/次の問題へ|結果を見る/}).click();
      answered++;assert.ok(answered<15,'unbounded retry loop');
    }
    assert.ok(answered>5,'wrong answer gets retried');
    await page.getByRole('heading',{name:'おつかれさまでした'}).waitFor();
    await page.reload();
    assert.ok(await page.evaluate(()=>Object.keys(JSON.parse(localStorage.getItem('care-medicine-52-v1')).progress).length===5));
    await page.locator('[data-page=list]').click();
    await page.locator('#search').fill('らしっくす');
    assert.equal(await page.locator('.drug-row').count(),1);
    await page.locator('.drug-row').click();await page.getByRole('heading',{name:'フロセミド',exact:true}).waitFor();
    await page.getByRole('button',{name:'暗記カードで学ぶ'}).click();
    await page.getByRole('button',{name:'答えを見る',exact:true}).waitFor();
    assert.equal(await page.locator('.detail-rows').count(),0);
    await page.getByRole('button',{name:'答えを見る',exact:true}).click();
    await page.getByRole('button',{name:'設定',exact:true}).click();
    await page.locator('#dark-setting').check();
    await page.getByRole('button',{name:'閉じる',exact:true}).click();
    await overflow();await page.screenshot({path:path.join(out,'mobile-recall-dark.png'),fullPage:true});
    await page.locator('[data-rating="2"]').click();
    await page.getByRole('heading',{name:'おつかれさまでした'}).waitFor();
    await page.locator('[data-page=home]').click();
    await page.getByRole('button',{name:'01 分類を覚える'}).click();
    await page.locator('#difficulty').selectOption('hint');
    await page.getByRole('button',{name:'学習を始める'}).click();
    await page.getByRole('button',{name:'ヒントを見る'}).click();
    await page.getByRole('button',{name:'答えを見る',exact:true}).click();
    await page.locator('[data-rating="1"]').click();
    await page.goto(url+'#stats');
    await overflow();
    for(const mode of ['action','care']){
      await page.goto(url+'#home');await page.locator(`[data-mode="${mode}"]`).click();
      await page.locator('#difficulty').selectOption('4');await page.getByRole('button',{name:'学習を始める'}).click();
      await page.locator('.answer').first().waitFor();
      assert.equal(await page.locator('.answer').count(),4);await page.locator('.answer').first().click();await page.locator('.feedback').waitFor();await overflow();
    }
    await page.goto(url+'#home');await page.evaluate(()=>document.documentElement.style.fontSize='200%');await overflow();await page.evaluate(()=>document.documentElement.style.fontSize='');
    await page.setViewportSize({width:320,height:640});
    for(const hash of ['home','list','drug/29','stats','safety']){
      await page.goto(url+'#'+hash);await overflow();
    }
    await page.setViewportSize({width:1440,height:1000});
    await page.goto(url+'#home');
    await page.getByRole('button',{name:'設定',exact:true}).click();await page.locator('#dark-setting').uncheck();await page.getByRole('button',{name:'閉じる',exact:true}).click();
    await overflow();await page.screenshot({path:path.join(out,'desktop-home.png'),fullPage:true});
    assert.deepEqual(errors,[]);
    console.log(JSON.stringify({chromium:'passed',answersIncludingRetries:answered,screenshots:out,errors}));
    await context.close();
  }finally{await browser.close();}
  try{
    const b=await webkit.launch({headless:true});
    try{const p=await b.newPage({viewport:{width:390,height:844}});await p.goto(url);await p.getByRole('heading',{name:'今日の学習',exact:true}).waitFor();console.log('WebKit basic render passed');}finally{await b.close();}
  }catch(e){console.log('WebKit verification unavailable: '+e.message.split('\n')[0]);}
})().catch(e=>{console.error(e);process.exitCode=1;});
