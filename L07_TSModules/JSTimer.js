/**
 * Created by cash on 2015/05/12.
 */

var div = document.createElement("div");

document.body.appendChild(div);

var obj = new Time.Test(div);
var startBtn = document.createElement("Button");
startBtn.innerHTML = "start";
startBtn.onclick = function(){
    obj.start();
};

document.body.appendChild(startBtn);

var stopBtn = document.createElement("Button");
stopBtn.innerHTML = "stop";
stopBtn.onclick = function () {
    obj.stop();
};

document.body.appendChild(stopBtn);