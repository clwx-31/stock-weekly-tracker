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
if(history.at(-1).date!=='2026-10-14')throw Error('Wrong latest date');
if(previousFor('2026-10-14').date!=='2026-10-08')throw Error('Wrong October 14 baseline');
if(valueOf(previousFor('2026-10-14'))!==18948.87)throw Error('Wrong saved prior total');
if(previousFor('2026-10-08').date!=='2026-10-02')throw Error('Wrong last-week baseline');
`,context);
assert.equal(el('#latestValue').textContent,'$19,084.19');
assert.equal(el('#latestAccount').textContent,'$20,606.43');
assert.equal(el('#latestWeekly').textContent,'+$135.32');
assert.equal(el('#previousBalance').textContent,'+$471.11');
assert.equal(el('#newBalance').textContent,'+$606.43');
assert.equal((el('#editorBody').innerHTML.match(/<tr /g)||[]).length,13);
assert.equal((el('#editorBody').innerHTML.match(/<td[ >]/g)||[]).length,13*8);
const rows=vm.runInContext("sheetRows('2026-10-14')",context).split('\n');
assert.equal(rows[0].split('\t').length,8);
assert.equal(rows.slice(1,14).every(row=>row.split('\t').length===8),true);
vm.runInContext("renderEditor('2026-08-19')",context);
assert(el('#editorBody').innerHTML.includes('$1,755.04'),'Opening position value retained');
console.log('Passed: all historical totals, last-week baseline, 13 rows × 8 columns, exports, balances, and read-only controls.');
console.log('Last-week change:',el('#latestWeekly').textContent);

for(const name of fs.readdirSync(`${__dirname}/../records`).filter(name=>name.endsWith('.json'))){
 const saved=JSON.parse(fs.readFileSync(`${__dirname}/../records/${name}`,'utf8'));
 context.saved=saved;
 vm.runInContext(`
 { const record=history.find(s=>s.date===saved.snapshot.date);
 if(JSON.stringify(record)!==JSON.stringify(saved.snapshot))throw Error('Saved snapshot changed');
 if(JSON.stringify(HOLDINGS)!==JSON.stringify(saved.holdings)||cents(CASH)!==saved.cashCents)throw Error('Saved holdings changed');
 const prior=previousFor(record.date);
 if((prior?.date||null)!==saved.previousDate)throw Error('Saved baseline changed');
 const total=cents(valueOf(record)),balance=total-cents(invested);
 const previousBalance=prior?cents(valueOf(prior))-cents(invested):0;
 const interval=prior?total-cents(valueOf(prior)):0;
 if(total!==saved.stockValueCents||balance!==saved.projectProfitCents||previousBalance!==saved.previousProjectProfitCents||interval!==saved.intervalProfitCents)throw Error('Archived totals changed');
 if(previousBalance+interval!==balance)throw Error('Balance does not carry forward'); }
 `,context);
}
assert(rows.includes('Previous snapshot project P/L\t471.11'));
assert(rows.includes('Snapshot total P/L\t135.32'));
assert(rows.includes('New project P/L balance\t606.43'));
console.log('Passed: saved weekly archives and carried-forward spreadsheet balances.');
