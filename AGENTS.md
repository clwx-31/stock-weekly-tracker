# Stock website updates

This repository owns https://clwx-31.github.io/stock-weekly-tracker/.

- Keep the website read-only. No stock/price/share editing, saves, imports, drafts,
  or browser-storage overrides. Snapshot review, copying and downloads are allowed.
- When asked to update stocks, verify the actual current date and source quotes
  for all 13 existing holdings. Preserve shares, buy prices, cash and history.
- Show last week's prices beside the requested day's prices. Use the previous
  Friday baseline; retrieve missing prices rather than substituting an older
  snapshot. Label dates and whether prices are intraday or closing prices.
- Preserve all eight columns in both the website and spreadsheet copy: company,
  symbol, previous price, shares, current price, per-share P/L, current value,
  total P/L. Preserve previous project P/L, interval P/L and new project P/L.
- Use integer cents for calculations. Verify row P/L sums, portfolio values,
  cash-inclusive account value and cumulative gain against purchase basis.
- Run `node tests/math.cjs` and `git diff --check`, commit coherent changes, push
  the authorized website update, and confirm the live page contains the update.
