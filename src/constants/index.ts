export const DEFAULT_CODE = `/* Enter your global variables here */


/** 
 * Enter your one-time code here. 
 * This function will run only once in the function's lifetime
 */
function init() {

}
  
/**
 * Enter your every-time code here.
 * This function will run every time when user performs some action.
 * You can remove "async" keyword if you don't have any await function inside this function
 */
async function respond(inputText) {
  // BOT LOGIC GOES HERE
  // 'inputText' is the text entered 
  // by the user speaking to your bot
  
  const language = 'French';
  const translatedOutput = await CampK12.translate(inputText, 'English', language);


  // When you are done, return a string
  // you want to send back to the user
  return 'Oh in ' + language + ' that is:\\n' + translatedOutput;
}`;

export const APPLY_SUCCESS_MESSAGE = 'Changes are applied.';
export const APPLY_FAILURE_MESSAGE = 'Resolve the errors first';
export const TRANSLATION_FAILURE_MESSAGE = 'Translation failed';
export const ERROR_BOUNDARY_MESSAGE = "Sorry! I'm broken inside 😔";

export const TRANSLATE_API_URL = 'http://3.15.188.11:8888';
export const DEBOUNCE_TIME = 300;
