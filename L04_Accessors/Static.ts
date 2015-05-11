/**
 * Created by cash on 2015/05/11.
 */

class Person{
    static name:string;
    tell(){
        alert("name:" + Person.name);
    }
}

var p = new Person();
Person.name = "cash";
p.tell();