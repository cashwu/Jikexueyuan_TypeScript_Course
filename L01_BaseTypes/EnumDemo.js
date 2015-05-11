/**
 * Created by cash on 2015/05/11.
 */
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var colorName = Color[0];
var c = 1 /* Green */;
function tell() {
    alert(c);
    alert(colorName);
}
tell();
//# sourceMappingURL=EnumDemo.js.map