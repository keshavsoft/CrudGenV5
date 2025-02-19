import { StartFunc as StartFuncFromFormLoad } from "./FormLoad/entryFile.js";
import { StartFunc as StartFuncAddListeners } from "./AddListeners/entryFile.js";

const StartFunc = () => {
    StartFuncFromFormLoad();
    StartFuncAddListeners();

    // const button = document.getElementById('ShowAllUsersId');

    // button.addEventListener('click', function () {
    //     // code to run when button is clicked
    //     // console.log('button clicked',button);
    //     webSocket.send("returnOnlineClients");

    // });
}

StartFunc();