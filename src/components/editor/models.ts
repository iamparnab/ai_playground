import { EachTabType } from '../tabs/models';

type _Props = {};

export type Props = _Props & PropsFromConnect & ActionsFromConnect;

type ActionsFromConnect = {
  addNewTab: (tabName: string) => void;
  selectTab: (tabId: number) => void;
  applyChanges: () => void;
  removeTab: (tabId: number) => void;
};
type PropsFromConnect = {
  tabs: EachTabType[];
  selectedTabId: number;
  code: string;
  codeToEvaluate: string;
};
