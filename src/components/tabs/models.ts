export type Props = {
  availiableTabs: EachTabType[];
  onCreate: (tabName: string) => void;
};

export type EachTabType = {
  tabName: string;
  tabId: number;
};
export type State = {};
