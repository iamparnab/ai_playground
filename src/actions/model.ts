export type PayloadType = NewTabType | SelectTabType;

export type NewTabType = {
  tabName: string;
};

export type SelectTabType = {
  tabId: number;
};
export enum Actions {
  ADD_NEW_TAB,
  SELECT_TAB,
}

export type ActionType = { type: Actions; payload: PayloadType };
