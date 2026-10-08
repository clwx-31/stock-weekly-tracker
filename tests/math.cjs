const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const html=fs.readFileSync(`${__dirname}/../index.html`,'utf8');
assert(!/<input\b/.test(html),'No stock editing or import inputs');
assert(!/localStorage|saveWeek|saveDraft|importFile/.test(html),'No browser overrides or editing handlers');
const elements=new Map();
const el=selector=>{if(!elements.has(selector))elements.set(selector,{value:'',innerHTML:'',textContent:'',classList:{add(){},remove(){}},addEventListener(){}});return elements.get(selector);};
const context=vm.createContext({Intl,Date,JSON,Number,Math,document:{querySelector:el,addEventListener(){}}});
vm.runInContext(html.split('<script>')[1].split('</script>')[0],context);
vm.runInContext(`
if(invested!==18477.76)throw Error('Incorrect basis');
for(const snapshot of history){
 if(HOLDINGS.some(h=>!(snapshot.prices[h.ticker]>0)))throw Error('Missing prices');
 const exact=HOLDINGS.reduce((sum,h)=>sum+BigInt(snapshot.prices[h.ticker].toFixed(2).replace('.',''))*BigInt(h.shares),0n);
 if(cents(valueOf(snapshot))!==Number(exact))throw Error('Incorrect total');
 const previous=previousFor(snapshot.date);
 if(previous){const sum=HOLDINGS.reduce((sum,h)=>sum+cents(rowValues(h,snapshot,previous).change),0);if(sum!==cents(valueOf(snapshot))-cents(valueOf(previous)))throw Error('Row P/L mismatch');}
}
if(previousFor('2026-10-08').date!=='2026-10-02')throw Error('Wrong last-week baseline');
`,context);
assert.equal(el('#latestValue').textContent,'$18,948.87');
assert.equal(el('#latestAccount').textContent,'$20,471.11');
assert.equal(el('#newBalance').textContent,'+$471.11');
assert.equal((el('#editorBody').innerHTML.match(/<tr /g)||[]).length,13);
assert.equal((el('#editorBody').innerHTML.match(/<td[ >]/g)||[]).length,13*8);
const rows=vm.runInContext("sheetRows('2026-10-08')",context).split('\n');
assert.equal(rows[0].split('\t').length,8);
assert.equal(rows.slice(1,14).every(row=>row.split('\t').length===8),true);
vm.runInContext("renderEditor('2026-08-19')",context);
assert(el('#editorBody').innerHTML.includes('$1,755.04'),'Opening position value retained');
console.log('Passed: all historical totals, last-week baseline, 13 rows × 8 columns, exports, balances, and read-only controls.');
console.log('Last-week change:',el('#latestWeekly').textContent);
