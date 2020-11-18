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
export type RemoveTabType = {
  tabId: number;
};

export enum Actions {
  ADD_NEW_TAB,
  SELECT_TAB,
  SET_CODE,
  APPLY_CHANGES,
  UPDATE_CHAT_INPUT,
  RUN_QUERY,
  ADD_BOT_RESPONSE,
  REMOVE_TAB,
}

export type PayloadType =
  | RemoveTabType
  | BotResponseType
  | ChatInputType
  | NewTabType
  | SelectTabType
  | SetCodeType
  | RunQueryType;

export type ActionType = { type: Actions; payload?: PayloadType };
