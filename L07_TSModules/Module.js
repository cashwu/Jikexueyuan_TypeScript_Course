/**
 * Created by cash on 2015/05/12.
 */


/*
 Module 模式
 1、模組化，可重用
 2、封裝變量和函數
 */

//----閉包

(function(){
    //內部代碼
}());

var a; //全局
function hello(){
    var b; //局部的
    c; //全局
}

// 使用全局
(function($, w){

}(jQuery, window));

