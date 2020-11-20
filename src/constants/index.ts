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
  
  // When you are done, return a string
  // you want to send back to the user
  return await new Promise(res => {
    setTimeout(() => res('Hello ' + inputText), 1000)
  });
}`;

export const APPLY_SUCCESS_MESSAGE = 'Changes are applied.';
export const APPLY_FAILURE_MESSAGE = 'Resolve the errors first';
