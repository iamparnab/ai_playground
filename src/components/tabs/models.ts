export type Props = {
  availiableTabs: EachTabType[];
  selectedTabId: number;
  onSelect: (tabId: number) => void;
  onCreate: (tabName: string) => void;
  onRemove: (tabId: number) => void;
};

export type EachTabType = {
  tabName: string;
  tabId: number;
};
