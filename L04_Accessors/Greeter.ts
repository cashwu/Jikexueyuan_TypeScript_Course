/**
 * Created by cash on 2015/05/11.
 */

class Greeter{
    greeting:string;
    constructor(message:string){
        this.greeting = message;
    }

    greet(){
        return "hello," + this.greeting;
    }
}

var green:Greeter;

green = new Greeter("cash");
alert(green.greet());
