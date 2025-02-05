function mapLetters(str) {
	let obj={};
	for(let i=0;i<str.length;i++){
		if(obj.str.charAt(i))
		   {
				obj.str.charAt(i).push(i);
		}else{
			obj.str.charAt(i) = [i];
		}
		   
		
	}
	return obj;
	
}