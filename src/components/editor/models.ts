import { EachTabType } from '../tabs/models';

type _Props = {};
export type State = {};

export type Props = _Props & PropsFromConnect & ActionsFromConnect;

type ActionsFromConnect = { addNewTab: (tabName: string) => void };
type PropsFromConnect = { tabs: EachTabType[] };
