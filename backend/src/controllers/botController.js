/**
 * BOT TASK — Candidate must implement all functions below.
 *
 * Do NOT change function signatures or route bindings.
 * You may add helper functions, utilities, or additional files as needed.
 */

/**
 * POST /api/bot/signal
 *
 * Accepts an array of OHLCV candles and returns a trading signal.
 *
 * Request body:
 * {
 *   symbol: string,          // e.g. "BTC/USDT"
 *   candles: Array<{
 *     timestamp: number,     // Unix ms
 *     open: number,
 *     high: number,
 *     low: number,
 *     close: number,
 *     volume: number
 *   }>
 * }
 *
 * Expected response:
 * {
 *   symbol: string,
 *   signal: "BUY" | "SELL" | "HOLD",
 *   confidence: number,      // 0–1
 *   indicators: {
 *     sma_fast: number,      // e.g. 9-period SMA of close
 *     sma_slow: number,      // e.g. 21-period SMA of close
 *     rsi: number,           // 14-period RSI
 *     [key: string]: number  // any additional indicators you compute
 *   },
 *   reasoning: string        // brief human-readable explanation
 * }
 *
 * Signal logic (minimum requirement):
 *   - BUY  when sma_fast crosses above sma_slow AND rsi < 70
 *   - SELL when sma_fast crosses below sma_slow AND rsi > 30
 *   - HOLD otherwise
 */
const getSignal = async (req, res) => {
  // TODO: implement
  res.status(501).json({ error: 'Not implemented' });
};

/**
 * POST /api/bot/backtest
 *
 * Runs a simple backtest of the SMA crossover strategy on the provided candles.
 *
 * Request body:
 * {
 *   symbol: string,
 *   candles: OHLCV[],        // same shape as above, minimum 50 candles
 *   initial_capital: number  // e.g. 10000
 * }
 *
 * Expected response:
 * {
 *   symbol: string,
 *   total_trades: number,
 *   winning_trades: number,
 *   losing_trades: number,
 *   win_rate: number,        // 0–1
 *   profit_factor: number,
 *   max_drawdown: number,    // as a positive decimal, e.g. 0.12 = 12%
 *   final_capital: number,
 *   total_return: number,    // e.g. 0.25 = 25%
 *   trades: Array<{
 *     entry_time: number,
 *     exit_time: number,
 *     side: "LONG" | "SHORT",
 *     entry_price: number,
 *     exit_price: number,
 *     pnl: number,
 *     pnl_pct: number
 *   }>
 * }
 */
const runBacktest = async (req, res) => {
  // TODO: implement
  res.status(501).json({ error: 'Not implemented' });
};

/**
 * GET /api/bot/risk
 *
 * Calculates position size based on account risk parameters.
 *
 * Query params:
 *   capital      — total account capital (number)
 *   risk_pct     — max risk per trade as decimal, e.g. 0.01 = 1% (number)
 *   entry_price  — planned entry price (number)
 *   stop_loss    — stop loss price (number)
 *
 * Expected response:
 * {
 *   position_size: number,   // units to buy/sell
 *   risk_amount: number,     // capital at risk in USD
 *   risk_reward_ratio: number | null  // null if take_profit not provided
 * }
 *
 * Bonus: accept optional query param `take_profit` and include risk/reward ratio.
 */
const getRiskParams = async (req, res) => {
  // TODO: implement
  res.status(501).json({ error: 'Not implemented' });
};

module.exports = { getSignal, runBacktest, getRiskParams };
