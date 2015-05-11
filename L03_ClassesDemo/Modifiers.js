/**
 * Created by cash on 2015/05/11.
 */
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
//public
//private
var People = (function () {
    function People(name, age) {
        this.name = name;
        this.age = age;
    }
    People.prototype.print = function () {
        return this.name + ":" + this.age;
    };
    return People;
})();
var Teacher = (function (_super) {
    __extends(Teacher, _super);
    function Teacher(school) {
        this.school = school;
        _super.call(this, "cash", 10000);
    }
    Teacher.prototype.print = function () {
        return this.name + ":" + this.age + ":" + this.school;
    };
    return Teacher;
})(People);
var t = new Teacher("schools ss");
//t.name = "cash";
//t.age = 120;
//t.school = "school";
alert(t.print());
//# sourceMappingURL=Modifiers.js.map