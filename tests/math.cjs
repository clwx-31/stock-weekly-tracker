const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const html = fs.readFileSync(`${__dirname}/../index.html`, 'utf8');
const script = html.split('<script>')[1].split('</script>')[0];
const core = script.slice(0, script.indexOf("    document.querySelector('#weekDate').addEventListener"));
const elements = new Map();
const element = selector => {
  if (!elements.has(selector)) elements.set(selector, {textContent:'', value:'', classList:{remove(){},add(){}}, querySelector: child => element(`${selector} ${child}`)});
  return elements.get(selector);
};
const context = vm.createContext({Intl, Date, JSON, Number, Math, Map, localStorage:{getItem(){return null;}}, document:{querySelector:element}});
vm.runInContext(core, context);
vm.runInContext(`
  const exactValue = snapshot => HOLDINGS.reduce((sum,h)=>sum+BigInt(String(snapshot.prices[h.ticker].toFixed(2)).replace('.',''))*BigInt(h.shares),0n);
  for (const snapshot of history) {
    if (cents(valueOf(snapshot)) !== Number(exactValue(snapshot))) throw Error('Incorrect snapshot total');
  }
  if (invested !== 18477.76) throw Error('Incorrect basis');
  if (validPrices({...history.at(-1).prices,NVDA:236.101})) throw Error('Fractional cents accepted');
  if (validPrices({...history.at(-1).prices,NVDA:0})) throw Error('Zero accepted');
  if (validPrices({...history.at(-1).prices,NVDA:Infinity})) throw Error('Infinity accepted');
  currentValues = () => history.at(-1).prices;
  document.querySelector('#weekDate').value = '2026-10-08';
  renderHero(); renderDraft(); renderHistory();
`, context);
const expected = vm.runInContext(`({value:valueOf(history.at(-1)),prior:valueOf(history.at(-2)),account:valueOf(history.at(-1))+CASH,pl:valueOf(history.at(-1))-invested})`,context);
assert.equal(element('#latestValue').textContent, '$18,975.63');
assert.equal(element('#latestAccount').textContent, '$20,497.87');
assert.equal(element('#newBalance').textContent, '+$497.87');
assert.equal(element('#latestWeekly').textContent, element('#weeklyProfit').textContent);
let rowSum = 0;
for (const [selector, item] of elements) if(selector.endsWith(' [data-change]')) rowSum += Number(item.textContent.replace(/[+$,]/g,'').replace('−','-'));
assert.equal(Math.round(rowSum*100), Math.round((expected.value-expected.prior)*100));
console.log('All historical totals, latest display, row P/L sum, cash, cost basis, and price validation passed.', expected);
