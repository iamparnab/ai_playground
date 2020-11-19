type PropsFromConnect = {
  text: string;
  isVisible: boolean;
};
type ActionsFromConnect = {
  hideToaster: Function;
};

export type Props = PropsFromConnect & ActionsFromConnect;
