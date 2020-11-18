export type PayloadType = NewTabType;

export type NewTabType = {
  tabName: string;
};

export enum Actions {
  ADD_NEW_TAB,
}

export type ActionType = { type: Actions; payload: PayloadType };
