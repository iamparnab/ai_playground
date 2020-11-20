export interface WindowExtended extends Window {
  CampK12: {
    init: Function;
    respond: (inputText: string) => string;
    translate: (
      text: string,
      source: string,
      target: string
    ) => Promise<string>;
  };
}
