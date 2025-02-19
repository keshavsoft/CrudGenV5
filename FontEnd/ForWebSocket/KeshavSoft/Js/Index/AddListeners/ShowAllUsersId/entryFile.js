import { StartFunc as StartFuncFromButtonClickFunc } from './ButtonClickFunc.js';

let StartFunc = () => {
	const jVarLocalHtmlId = 'ShowAllUsersId';
	const button = document.getElementById(jVarLocalHtmlId);

	button.addEventListener('click', StartFuncFromButtonClickFunc);
};

export { StartFunc };