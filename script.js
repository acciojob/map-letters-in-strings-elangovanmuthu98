//your JS code here. If required.
let str=prompt();
let obj={};
let n=str.length;
for(int i=0;i<n;i++)
{
	if(obj.str.charAt(i).length!=0)
	{
		obj.str.charAt(i).push(i);
	}
	else{
	obj.str.charAt(i)=[i];
	}
}
console.log(obj);