function getPromise() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const num = 8;
			if (num % 2 == 0){
				resolve("data fetched using promise");
			}
			else{
				reject("failed to fetch data");
			}
		}, 2000);
	});
}

getPromise()
	.then(res => {
		console.log(res);
	})
	.catch(res => {
		console.log(res);
	});
