export const DEFAULT_CODE = `/* Enter your global variables here */
let greeting;

/** 
 * Enter your one-time code here. 
 */
function init() {
  greeting = 'Hello';
}

/**
 * Enter your every-time code here.
 */
async function respond(inputText) {
  return await new Promise(res => {
    setTimeout(() => {
      res(greeting + ' ' +  inputText);
    }, 1000);
  })
}`;

export const APPLY_SUCCESS_MESSAGE = 'Changes are applied.';
export const APPLY_FAILURE_MESSAGE = 'Resolve the errors first';
export const TRANSLATION_FAILURE_MESSAGE = 'Translation failed';
export const ERROR_BOUNDARY_MESSAGE = "Sorry! I'm broken inside 😔";

export const TRANSLATE_API_URL = 'http://3.15.188.11:8888';
export const DEBOUNCE_TIME = 300;
