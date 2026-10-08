# Northstar Weekly Stock Tracker

A standalone browser-based tracker for the year-long business class stock
project. It compares last week's prices with this week's entry, calculates the
portfolio results, and stores future weeks in the browser.

## Weekly use

1. Open the live site in the same browser used previously.
2. Enter all 13 Friday prices around 11:20 AM Eastern.
3. Save the week.
4. Copy the calculated rows into the class spreadsheet.
5. Occasionally download a CSV or JSON backup, especially before switching
   browsers or devices.

No account, server, analytics, or third-party JavaScript is used. Browser data
is stored under the `northstar-weekly-history-v1` local-storage key.

## October 8, 2026 update

Added all 13 USD intraday quotes from [Stock Analysis](https://stockanalysis.com/).
Each ticker’s source is `https://stockanalysis.com/stocks/<lowercase-ticker>/`.
Individual quote times appear beside each symbol and in the snapshot’s
`quoteTimes` metadata: 10:55–11:22 AM EDT. This is not a synchronized 11:20
reading or a closing-price snapshot. The comparison is against September 28,
a ten-calendar-day interval.

Verified stocks: **$18,975.96**; account with cash: **$20,498.20**; change from
September 28: **+$524.98**; gain since purchase: **+$498.20**. Returns exclude
dividends and fees; cash remains $1,522.24. Historical entries and browser
corrections are preserved.

Prices are converted to integer cents before multiplication and aggregation.
Fractional-cent inputs are rejected. Run `node tests/math.cjs` to check all
historical totals, rendered metrics, row P/L sums, cash, basis, and invalid
prices.
