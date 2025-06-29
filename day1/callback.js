function asyncDemo(cb){
	setTimeout (() => {
		cb("callback funtion ")
	},10000);
}

asyncDemo((res) => {
	console.log(res);
});

