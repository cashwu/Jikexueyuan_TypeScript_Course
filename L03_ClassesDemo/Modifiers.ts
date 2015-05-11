/**
 * Created by cash on 2015/05/11.
 */

//public
//private

class People {
    public name:string;
    age:number;
    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }
    print(){
        return this.name + ":" + this.age;
    }
}

class Teacher extends People {
    school : string;
    constructor(school:string){
        this.school = school;
        super("cash", 10000);
    }
    print(){
        return this.name + ":" + this.age + ":" + this.school;
    }
}

var t = new Teacher("schools ss");
//t.name = "cash";
//t.age = 120;
//t.school = "school";
alert(t.print());