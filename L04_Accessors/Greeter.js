/**
 * Created by cash on 2015/05/11.
 */
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "hello," + this.greeting;
    };
    return Greeter;
})();
var green;
green = new Greeter("cash");
alert(green.greet());
//# sourceMappingURL=Greeter.js.map