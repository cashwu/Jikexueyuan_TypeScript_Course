/**
 * Created by cash on 2015/05/11.
 */
var Hello = (function () {
    function Hello() {
    }
    Hello.prototype.tell = function () {
        return this._age;
    };
    Object.defineProperty(Hello.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (newage) {
            if (newage > 200 || newage < 0) {
                alert("age error");
            }
            else {
                this._age = newage;
            }
            this._age = newage;
        },
        enumerable: true,
        configurable: true
    });
    return Hello;
})();
var h = new Hello();
h.age = 2000;
alert(Person.tell());
//# sourceMappingURL=Accessors.js.map