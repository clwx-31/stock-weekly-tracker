# Northstar Weekly Stock Tracker

Published website: https://clwx-31.github.io/stock-weekly-tracker/

The website is read-only. Prices, shares and history come from the published
repository, with no browser overrides. Select a snapshot to review it, copy its
spreadsheet rows, or download CSV/JSON history. Updates are made in the repository.

The stock table and spreadsheet copy include company, symbol, previous price,
shares, current price, per-share profit/loss, current value and total profit/loss.
The table also shows previous project P/L, interval P/L and new project P/L.

## October 8, 2026

Today’s USD intraday quotes are from [Stock Analysis](https://stockanalysis.com/),
with per-stock times from 11:41–11:42 AM EDT (XOM’s $168.755 rounded to
$168.76). The previous Friday, October 2,
uses historical **Close**, not dividend-adjusted prices, from each symbol’s
`https://stockanalysis.com/stocks/<symbol>/history/` page. The comparison is
Friday’s close to today’s intraday quote; it is not a synchronized midday series.

Stocks: **$18,948.87**. Account including $1,522.24 cash: **$20,471.11**.
Gain since the $18,477.76 purchase basis: **+$471.11**. Dividends and fees are
excluded. Existing history is preserved; earlier same-day updates are in Git.

Run `node tests/math.cjs` to check exact totals, the last-week baseline,
13 rows and eight columns, spreadsheet output, balances and read-only controls.
See `AGENTS.md` for the requirements for future stock updates.
