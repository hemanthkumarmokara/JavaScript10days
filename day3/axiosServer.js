const ax = require("axios")

ax.get('https://api.github.com/users/hemanthkumarmokara')
.then(res => {
	console.log(res.data);
})
.catch(err => {
	console.error(err);
});
