export interface WindowExtended extends Window {
  Editor: {
    init: Function;
    respond: (inputText: string) => any;
    translate: (
      text: string,
      source: string,
      target: string
    ) => Promise<string>;
  };
}
