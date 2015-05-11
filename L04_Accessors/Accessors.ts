/**
 * Created by cash on 2015/05/11.
 */

class Hello {
    private _age:number;
    tell(){
        return this._age;
    }

    get age():number{
        return this._age;
    }

    set age(newage:number){

        if(newage > 200 || newage < 0){
            alert("age error");
        }else{
            this._age = newage;
        }


        this._age = newage;
    }
}

var h = new Hello();
h.age = 2000;
alert(h.tell());