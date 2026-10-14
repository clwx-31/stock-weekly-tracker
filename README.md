# Northstar Weekly Stock Tracker

Published website: https://clwx-31.github.io/stock-weekly-tracker/

The website is read-only. Prices, shares and history come from the published
repository, with no browser overrides. Select a snapshot to review it, copy its
spreadsheet rows, or download CSV/JSON history. Updates are made in the repository.

The stock table and spreadsheet copy include company, symbol, previous price,
shares, current price, per-share profit/loss, current value and total profit/loss.
The table also shows previous project P/L, interval P/L and new project P/L.

## October 14, 2026

Today's USD intraday quotes were checked on October 14, 2026. Source quote times
range from 10:34–11:02 AM EDT; these are not closing prices or a simultaneous
snapshot. The previous Friday, October 9, uses historical **Close**, not
adjusted close. Each linked source supplies both the quote and historical row.

| Symbol / source | October 9 close | October 14 intraday | Quote time (EDT) |
|---|---:|---:|---|
| [NVDA](https://stockanalysis.com/stocks/nvda/history/) | $229.28 | $224.09 | 10:51 AM |
| [AVGO](https://stockanalysis.com/stocks/avgo/history/) | $361.54 | $350.77 | 11:02 AM |
| [MSFT](https://stockanalysis.com/stocks/msft/history/) | $535.07 | $539.32 | 11:01 AM |
| [GOOGL](https://stockanalysis.com/stocks/googl/history/) | $351.66 | $354.41 | 10:51 AM |
| [META](https://stockanalysis.com/stocks/meta/history/) | $718.67 | $745.39 | 10:36 AM |
| [AMZN](https://stockanalysis.com/stocks/amzn/history/) | $262.43 | $256.27 | 10:51 AM |
| [ISRG](https://stockanalysis.com/stocks/isrg/history/) | $423.96 | $417.47 | 10:34 AM |
| [ABBV](https://stockanalysis.com/stocks/abbv/history/) | $276.47 | $281.90 | 10:44 AM |
| [V](https://stockanalysis.com/stocks/v/history/) | $385.45 | $392.54 | 10:58 AM |
| [GE](https://stockanalysis.com/stocks/ge/history/) | $308.20 | $310.86 | 10:46 AM |
| [CEG](https://stockanalysis.com/stocks/ceg/history/) | $298.07 | $282.26 | 10:56 AM |
| [WMT](https://stockanalysis.com/stocks/wmt/history/) | $111.35 | $114.05 | 10:48 AM |
| [XOM](https://stockanalysis.com/stocks/xom/history/) | $168.94 | $175.39 | 11:01 AM |

Stocks: **$19,084.19**. Account including $1,522.24 cash: **$20,606.43**.
Previous Friday stocks: **$19,089.20**. Interval change: **$-5.01**.
Previous project P/L: **$+611.44**; new project P/L:
**$+606.43**, against the $18,477.76 purchase basis.
Dividends and fees are excluded. Holdings, cash and existing history are preserved.

Run `node tests/math.cjs` to check exact totals, the last-week baseline,
13 rows and eight columns, spreadsheet output, balances and read-only controls.
See `AGENTS.md` for the requirements for future stock updates.
