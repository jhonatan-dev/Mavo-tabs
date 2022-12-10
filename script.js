
(async()=>{
    await Mavo.inited;
    await Mavo.all[0].dataLoaded;
    let blocks = JSON.parse(localStorage.blocks)
    Mavo.all[0].render(blocks);
    console.log(Mavo.mode)
})();

window.onload = (event) => {
	getData(function(res) {
        localStorage.blocks = JSON.stringify(res)
    });
};

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
