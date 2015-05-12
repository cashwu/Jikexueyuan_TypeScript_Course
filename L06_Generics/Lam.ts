/**
 * Created by cash on 2015/05/12.
 */


var myfunc:(a:number) => string = function(a:number) : string{
    return "Hello" + a;
};

//簡化寫法
//var myfunc = function(a:number) : string{
//    return "Hello" + a;
//};

alert(myfunc(2));