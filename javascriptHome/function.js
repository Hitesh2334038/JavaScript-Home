// var function whatdoyoudo(job,firstname)
// {
//
// }
var whatdoyoudo=function(job,firstname){
  switch(job){
    case 'techer':
    return firstname+'teches how to code';
    case 'driver':
return firstname+'driving very slow';
    case 'swimmer':
return firstname+'design beautiful web site';
    default:
    return firstname+'does something';
  }
}
console.log(whatdoyoudo('techer','hitesh'));
