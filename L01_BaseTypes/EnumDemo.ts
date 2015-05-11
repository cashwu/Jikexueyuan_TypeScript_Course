/**
 * Created by cash on 2015/05/11.
 */

enum Color { Red, Green, Blue };

var colorName:string = Color[0];

var c:Color = Color.Green;

function tell(){
    alert(c);
    alert(colorName);
}

tell();