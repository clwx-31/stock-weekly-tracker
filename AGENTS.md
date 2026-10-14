# Stock website updates

This repository owns https://clwx-31.github.io/stock-weekly-tracker/.

- Keep the website read-only. No stock/price/share editing, saves, imports, drafts,
  or browser-storage overrides. Snapshot review, copying and downloads are allowed.
- When asked to update stocks, verify the actual current date and source quotes
  for all 13 existing holdings. Preserve shares, buy prices, cash and history.
- Compare with the user's last saved weekly record, not a newly fetched Friday
  close. Set previousDate explicitly on each new snapshot. Carry forward that
  record's exact prices and project P/L. Label dates and intraday/closing times.
- Archive each published weekly record in records/ with holdings, prices, quote
  times, comparison date and integer-cent totals. Never overwrite a prior week's
  archive to match new market data. Corrections require a documented revision.
  Keep supplemental market observations out of the weekly comparison chain.
- Before publishing, reconcile previous project P/L + interval P/L = new
  project P/L and check the prior snapshot against its saved archive.
- Preserve all eight columns in both the website and spreadsheet copy: company,
  symbol, previous price, shares, current price, per-share P/L, current value,
  total P/L. Preserve previous project P/L, interval P/L and new project P/L.
- Use integer cents for calculations. Verify row P/L sums, portfolio values,
  cash-inclusive account value and cumulative gain against purchase basis.
- Run `node tests/math.cjs` and `git diff --check`, commit coherent changes, push
  the authorized website update, and confirm the live page contains the update.
