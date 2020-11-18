type _Props = {
  selectedTabId: number;
};

type PropsFromConnect = {
  selectedTabId: number;
  code: string;
};
type ActionsFromConnect = {
  setCode: (code: string) => void;
  applyChanges: () => void;
};
export type Props = _Props & PropsFromConnect & ActionsFromConnect;
