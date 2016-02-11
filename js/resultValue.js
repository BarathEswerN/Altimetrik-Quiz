// {
//     getValue: function(){
//         return this._value;
//     },
//     setValue: function(val){
//         this._value = val * 10;
//         console.log(this._value);
//     }
// }
function Score()
{
 var mark ;
this.setValue=function(count) {
	mark = count*20;
	console.log("set value js function");
	console.log(mark);
};

this.getValue=function() {
	console.log("get value js function");
	console.log(mark);
	return mark;
};
	
}