type _Props = {
  selectedTabId: number;
};

type PropsFromConnect = {
  selectedTabId: number;
  code: string;
};
type ActionsFromConnect = {
  setCode: (code: string) => void;
  // noShow will control whether to
  // silently apply changes
  applyChanges: (noShow: boolean) => void;
};
export type Props = _Props & PropsFromConnect & ActionsFromConnect;
