/**
 * Created by cash on 2015/05/12.
 */
//---- JS 的程式
//interface StringValidator{
//    isAcceptable(s:string):boolean;
//}
//
//var letterRegexp = /^[A-Za-z]+$/;
//var numberRegexp = /^[0-9]+$/;
//
//class LettersOnlyValidator implements StringValidator{
//
//    isAcceptable(s:string):boolean {
//        return letterRegexp.test(s);
//    }
//}
//
//class ZipCodeValidator implements StringValidator{
//
//    isAcceptable(s:string):boolean {
//        return s.length === 5 && numberRegexp.test(s);
//    }
//}
//---- typescript 寫法
var Validation;
(function (Validation) {
    var letterRegexp = /^[A-Za-z]+$/;
    var numberRegexp = /^[0-9]+$/;
    var LettersOnlyValidator = (function () {
        function LettersOnlyValidator() {
        }
        LettersOnlyValidator.prototype.isAcceptable = function (s) {
            return letterRegexp.test(s);
        };
        return LettersOnlyValidator;
    })();
    Validation.LettersOnlyValidator = LettersOnlyValidator;
    var ZipCodeValidator = (function () {
        function ZipCodeValidator() {
        }
        ZipCodeValidator.prototype.isAcceptable = function (s) {
            return s.length === 5 && numberRegexp.test(s);
        };
        return ZipCodeValidator;
    })();
    Validation.ZipCodeValidator = ZipCodeValidator;
})(Validation || (Validation = {}));
//# sourceMappingURL=TSModules.js.map