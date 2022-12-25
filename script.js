
(async()=>{
    await Mavo.inited;
    await Mavo.all[0].dataLoaded;
    // let blocks = JSON.parse(localStorage.blocks)
    // Mavo.all[0].render(blocks)
})();

const searching = () => {
	getData(function(res) {
		console.log('OK')
        localStorage.blocks = JSON.stringify(res)
		Mavo.all[0].render(res)
    });
}

const getData = (callback) => {
	var settings = {
		url: "https://jhonatan-dev.github.io/Mavo-tabs/tabs.json",
		method: "GET",
		timeout: 0
	};

	$.ajax(settings).done(function (response) {
		callback(response)
	});
};
