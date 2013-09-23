/***
 *     __   ___ ___ ___ ___ __     _   _        __   _      ___ 
 *     )_)  )_   )   )  )_  )_)   / ` / ) )\ ) (_ ` / ) )   )_  
 *    /__) (__  (   (  (__ / \   (_. (_/ (  ( .__) (_/ (__ (__  
 *             
 *		By Scott Roepnack                                                 
 */



//Get console if the current browser has one
//set windows.console and console to be accessible through _console
var _console = (window.console = window.console || {});

//repalce stanard console with the better console
window.console = function() {

	/****************************************************************
	 *********************** @ PUBLIC @ *****************************
	 ****************************************************************/

	//Mode functions
	function setSiteLivePublic() {
		setInDevelopmentMode(false);
		return 'Console in Development Mode.';
	}
	function setSiteInDevelopmentPublic() {
		setInDevelopmentMode(true);
		return 'Console in Live Site Mode.';
	}

	//Log functions
	function debugPublic(text) {
		_write(_console.debug, arguments.callee.caller, text);
	}
	function logPublic(text) {
		_write(_console.log, arguments.callee.caller, text);
	}
	function warnPublic(text) {
		_write(_console.warn, arguments.callee.caller, text);
	}
	function errorPublic(text) {
		_write(_console.error, arguments.callee.caller, text);
	}


	/****************************************************************
	 *********************** @ PRIVATE @ ****************************
	 ****************************************************************/

	//Save the time of load
	var loadTime = Date.now();

	//mode for display and functionality
	devMode = true;
	//development mode setter
	function setInDevelopmentMode(mode) {
		devMode = mode;
	}

	//Get the current seconds since page load
	function secondsSincePageLoad(time) {
		return (Date.now() - time)/1000;
	}

	//write to the console with appropriate information
	function _write(fn, caller, text) {
		if( devMode == true && typeof(fn) === 'function'){
			if( caller !== null) {
				eval('_console.' + fn.name + '("' 
								+ caller.name  + ' fired ' + fn.name + ' ' + secondsSincePageLoad(loadTime) + ' seconds after page load" '
					 + ')');
			} else {
				eval('_console.' + fn.name + '("' 
								 + 'fired ' + fn.name + ' ' + secondsSincePageLoad(loadTime) + ' seconds after page load"' 
					+ ')');
			}			
		}
		//write to the console as nomral no matter what mode we are in.
		eval('_console.' + fn.name + '("' + text.replace('"', '\\"') + '")');	
	}	

	/****************************************************************
	************* Pass Through Methods - To Main Console ************
	*****************************************************************/
	function assertPublic(params) { _console.assert(params); }
	function clearPublic(params) { _console.assert(params); }
	function constructorPublic(params) { _console.assert(params); }
	function dirPublic(params) { _console.assert(params); }
	function dirxmlPublic(params) { _console.assert(params); }
	function groupPublic(params) { _console.assert(params); }
	function groupCollapsedPublic(params) { _console.assert(params); }
	function groupEndPublic(params) { _console.assert(params); }
	function hasOwnPropertyPublic(params) { _console.assert(params); }
	function isPrototypeOfPublic(params) { _console.assert(params); }
	function markTimelinePublic(params) { _console.assert(params); }
	function memoryPublic(params) { _console.assert(params); }
	function profilePublic(params) { _console.assert(params); }
	function profileEndPublic(params) { _console.assert(params); }
	function propertyIsEnumerablePublic(params) { _console.assert(params); }
	function tablePublic(params) { _console.assert(params); }
	function timeEndPublic(params) { _console.assert(params); }
	function timeStampPublic(params) { _console.assert(params); }
	function toLocaleStringPublic(params) { _console.assert(params); }
	function toStringPublic(params) { _console.assert(params); }
	function tracePublic(params) { _console.assert(params); }
	function valueOfPublic(params) { _console.assert(params); }

	/****************************************************************
	 ****************** @ Revealing Module @ ************************
	 ************** Allows access to public methods only ************
	 ****************************************************************/
	return {
		debug:             debugPublic,
		error:             errorPublic,
		log:               logPublic,
		warn:              warnPublic,
		siteLive:          setSiteLivePublic,
		siteInDevelopment: setSiteInDevelopmentPublic,

		//pass throughs
		assert: assertPublic,
		clear: clearPublic,
		constructor: constructorPublic,
		dir: dirPublic,
		dirxml:  dirxmlPublic,
		group: groupPublic,
		groupCollapsed: groupCollapsedPublic,
		groupEnd: groupEndPublic,
		hasOwnProperty: hasOwnPropertyPublic,
		isPrototypeOf: isPrototypeOfPublic,
		markTimeline: markTimelinePublic,
		memory: memoryPublic,
		profile: profilePublic,
		profileEnd: profileEndPublic,
		propertyIsEnumerable: propertyIsEnumerablePublic,
		table: tablePublic,
		timeEnd: timeEndPublic,
		timeStamp: timeStampPublic,
		toLocaleString: toLocaleStringPublic,
		toString: toStringPublic,
		trace: tracePublic,
		valueOf: valueOfPublic
	};
}();
