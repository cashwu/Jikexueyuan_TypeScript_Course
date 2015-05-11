/**
 * Created by cash on 2015/05/11.
 */
var Person = (function () {
    function Person() {
    }
    Person.prototype.tell = function () {
        alert("name:" + Person.name);
    };
    return Person;
})();
var p = new Person();
Person.name = "cash";
p.tell();
//# sourceMappingURL=Static.js.map