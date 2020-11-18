export type NewTabType = {
  tabName: string;
};

export type SelectTabType = {
  tabId: number;
};

export type SetCodeType = {
  code: string;
};

export type RunQueryType = {
  query: string;
};
export type ChatInputType = {
  chatInput: string;
};
export type BotResponseType = {
  response: string;
};
export enum Actions {
  ADD_NEW_TAB,
  SELECT_TAB,
  SET_CODE,
  APPLY_CHANGES,
  UPDATE_CHAT_INPUT,
  RUN_QUERY,
  ADD_BOT_RESPONSE,
}

export type PayloadType =
  | BotResponseType
  | ChatInputType
  | NewTabType
  | SelectTabType
  | SetCodeType
  | RunQueryType;

export type ActionType = { type: Actions; payload?: PayloadType };
