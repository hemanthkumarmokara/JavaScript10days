function getPromise() {
        return new Promise((resolve, reject) => {
                setTimeout(() => {
                        const num = 8;
                        if (num % 2 == 0){
                                resolve("data fetched using promise");
                        }
                        else{
                                reject("failed to fetch data using promise");
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


async function getAsync() {	
	try{
		const res = await getPromise();  // below lines code executed when await gives true means resoved		
		console.log("data retrieved using async or await");
		console.log("inside try", res);
	}
	catch(err){
			console.error(err);
		}
	}


getAsync()
