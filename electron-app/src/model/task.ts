export interface Task<T> {
  readonly id: number;
  readonly type: TaskType;
  readonly meta: T;
}

export interface TaskMeta {
  readonly description: string;
  readonly ignoreResult: boolean;
}

export interface ExchangeMeta extends TaskMeta {
  readonly name: string;
}

export const createTask: <T extends TaskMeta>(
  id: number,
  type: TaskType,
  meta: T
) => Task<T> = (id, type, meta) => ({
  id,
  type,
  meta
});

export enum TaskType {
  TRADE_HISTORY = 'process_trade_history',
  QUERY_BLOCKCHAIN_BALANCES = 'query_blockchain_balances_async',
  QUERY_EXCHANGE_BALANCES = 'query_exchange_balances_async',
  USER_SETTINGS_QUERY_BLOCKCHAIN_BALANCES = 'user_settings_query_blockchain_balances',
  QUERY_BALANCES = 'query_balances_async'
}
