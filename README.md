# Northstar Weekly Stock Tracker

Published website: https://clwx-31.github.io/stock-weekly-tracker/

The website is read-only. Prices, shares and history come from the published
repository, with no browser overrides. Select a snapshot to review it, copy its
spreadsheet rows, or download CSV/JSON history. Updates are made in the repository.

The stock table and spreadsheet copy include company, symbol, previous price,
shares, current price, per-share profit/loss, current value and total profit/loss.
The table also shows previous project P/L, interval P/L and new project P/L.

## October 19, 2026

All 13 USD quotes were checked on October 19, 2026. These are intraday
prices from 10:39–11:08 AM EDT, with different timestamps per stock, not closing
prices or a simultaneous snapshot. The previous prices are the exact saved
October 14 update; its prices and project balance remain unchanged.

| Symbol / source | October 14 saved | October 19 intraday | Quote time (EDT) |
|---|---:|---:|---|
| [NVDA](https://stockanalysis.com/stocks/nvda/history/) | $224.09 | $218.07 | 11:08 AM |
| [AVGO](https://stockanalysis.com/stocks/avgo/history/) | $350.77 | $337.35 | 10:48 AM |
| [MSFT](https://stockanalysis.com/stocks/msft/history/) | $539.32 | $534.72 | 11:04 AM |
| [GOOGL](https://stockanalysis.com/stocks/googl/history/) | $354.41 | $345.55 | 11:00 AM |
| [META](https://stockanalysis.com/stocks/meta/history/) | $745.39 | $703.01 | 11:05 AM |
| [AMZN](https://stockanalysis.com/stocks/amzn/history/) | $256.27 | $262.60 | 11:04 AM |
| [ISRG](https://stockanalysis.com/stocks/isrg/history/) | $417.47 | $429.50 | 10:43 AM |
| [ABBV](https://stockanalysis.com/stocks/abbv/history/) | $281.90 | $283.67 | 10:49 AM |
| [V](https://stockanalysis.com/stocks/v/history/) | $392.54 | $402.25 | 10:42 AM |
| [GE](https://stockanalysis.com/stocks/ge/history/) | $310.86 | $310.95 | 10:39 AM |
| [CEG](https://stockanalysis.com/stocks/ceg/history/) | $282.26 | $263.37 | 10:57 AM |
| [WMT](https://stockanalysis.com/stocks/wmt/history/) | $114.05 | $118.50 | 10:54 AM |
| [XOM](https://stockanalysis.com/stocks/xom/history/) | $175.39 | $177.42 | 11:05 AM |

Stocks: **$18,927.98**. Account including $1,522.24 cash: **$20,450.22**.
Previous stock value: **$19,084.19**. Interval P/L: **-$156.21**.
Project P/L reconciles: **$606.43 - $156.21 = $450.22**.
Purchase basis remains $18,477.76. Dividends and fees are excluded.
The complete record, including source links and integer-cent totals, is archived
in `records/2026-10-19.json`.

## October 14, 2026

Today's USD intraday quotes were checked on October 14, 2026. Source quote times
range from 10:34–11:02 AM EDT; these are not closing prices or a simultaneous
snapshot. The comparison is the saved October 8 weekly record, with quotes from
11:41–11:42 AM EDT. October 9 closing prices were mistakenly inserted as the
baseline in the first October 14 update; they remain reference-only data and
are excluded from the weekly record. Source links document today's quotes.

| Symbol / source | October 8 saved | October 14 intraday | Quote time (EDT) |
|---|---:|---:|---|
| [NVDA](https://stockanalysis.com/stocks/nvda/history/) | $235.58 | $224.09 | 10:51 AM |
| [AVGO](https://stockanalysis.com/stocks/avgo/history/) | $371.23 | $350.77 | 11:02 AM |
| [MSFT](https://stockanalysis.com/stocks/msft/history/) | $530.79 | $539.32 | 11:01 AM |
| [GOOGL](https://stockanalysis.com/stocks/googl/history/) | $348.80 | $354.41 | 10:51 AM |
| [META](https://stockanalysis.com/stocks/meta/history/) | $719.23 | $745.39 | 10:36 AM |
| [AMZN](https://stockanalysis.com/stocks/amzn/history/) | $257.81 | $256.27 | 10:51 AM |
| [ISRG](https://stockanalysis.com/stocks/isrg/history/) | $414.35 | $417.47 | 10:34 AM |
| [ABBV](https://stockanalysis.com/stocks/abbv/history/) | $266.51 | $281.90 | 10:44 AM |
| [V](https://stockanalysis.com/stocks/v/history/) | $375.40 | $392.54 | 10:58 AM |
| [GE](https://stockanalysis.com/stocks/ge/history/) | $300.70 | $310.86 | 10:46 AM |
| [CEG](https://stockanalysis.com/stocks/ceg/history/) | $292.70 | $282.26 | 10:56 AM |
| [WMT](https://stockanalysis.com/stocks/wmt/history/) | $110.30 | $114.05 | 10:48 AM |
| [XOM](https://stockanalysis.com/stocks/xom/history/) | $168.76 | $175.39 | 11:01 AM |

Stocks: **$19,084.19**. Account including $1,522.24 cash: **$20,606.43**.
Previous saved stocks: **$18,948.87**. Interval change: **+$135.32**.
Previous project P/L: **+$471.11**; new project P/L:
**+$606.43**, against the $18,477.76 purchase basis.
Dividends and fees are excluded. Holdings, cash and existing history are preserved.

Run `node tests/math.cjs` to check exact totals, the last-week baseline,
13 rows and eight columns, spreadsheet output, balances and read-only controls.
See `AGENTS.md` for the requirements for future stock updates.

## Saved weekly records and correction

`records/2026-10-08.json` preserves the final October 8 publication from commit
`d005b8a`: all holdings, prices, quote times and totals. New weekly records have
an explicit comparison date and their own archive. Tests compare published data
against these archives and reconcile the balances in integer cents.

October 14 carries forward October 8: **$471.11 + $135.32 = $606.43**.
The earlier **-$5.01** interval used the wrong October 9 comparison.
Today's recorded prices and $19,084.19 stock value have not changed in this correction.

Historical reconciliation: September 28 project P/L was -$26.78. October 2
project P/L was -$91.14. The final October 8 publication gained $562.25 against
October 2, so **-$91.14 + $562.25 = $471.11**. Against September 28, the gain
was $497.89. Mixing September 28's balance with October 2's interval would not
reconcile. Prior published records remain unchanged.
