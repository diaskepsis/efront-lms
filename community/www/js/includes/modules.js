function activateModule(el, module) {
	if (el.className.match('red')) {
    	parameters = {activate_module:module, method: 'get'};
	} else {
		parameters = {deactivate_module:module, method: 'get'};
	}
    var url    = 'administrator.php?ctg=modules';
    ajaxRequest(el, url, parameters, onActivateModule);
}
function onActivateModule(el, response) {
    if (response == 0) {
    	setImageSrc(el, 16, "trafficlight_red.png");
        el.writeAttribute({alt:activate, title:activate});
    } else if (response == 1) {
    	setImageSrc(el, 16, "trafficlight_green.png");
        el.writeAttribute({alt:deactivate, title:deactivate});
    }
}

function deleteModule(el, module) {
	parameters = {delete_module:module, method: 'get'};
	var url    = 'administrator.php?ctg=modules';
	ajaxRequest(el, url, parameters, onDeleteModule);	
}
function onDeleteModule(el, response) {
	new Effect.Fade(el.up().up());
}