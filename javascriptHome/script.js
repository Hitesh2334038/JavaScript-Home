// //function cunstructor
//
// var john={
//   name:'john',
//   year:1998,
//   job:'teacher'
// };
// //function constructor
// var Person=function(name,year,job){
//   this.name=name;
//   this.year=year;
//   this.job=job;
//   this.calcage=function(){
//     console.log(2016-this.year);
//   }
// }
// Person.prototype.calcage=function(){
//   console.log(2016-this.year);
// }
// Person.prototype.lastname='sonar';
// //instanchiation
// var john=new Person('john',1998,'Teacher');
// var jane=new Person('jane',1995,'drivr');
// //new mule empty obj creat hoto
//
// john.calcage();
// jane.calcage();
// console.log(john.lastname);
// console.log(jane.lastname);







//object.create
var personProto={
  calcullateage:function(){
    console.log(2016-this.year);
  }
};
var john=Object.create(personProto,
{
name:{value:'jane'}
});
