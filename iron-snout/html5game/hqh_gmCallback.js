var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

//======= GM Callback v1.1 ========
//By JacksonYarr
//Website: http://JacksonYarr.com/
//License: Creative Commons Attribution 3.0 Unported License
//=================================

var gmCallback = new Object();

function callback_script(extname,numargs)
{
	if(gmCallback[extname] != undefined)
	{return true;}
	
	var obFunc = window["callback_script"].caller.name;

	if(obFunc == undefined) //IE always makes things difficult.
	{obFunc = arguments.callee.caller.toString().match(/function ([^\(]+)/)[1];}
	
	var args = "";
	var gmres = "0,0";
	
	if(numargs > 0)
	{
		while(numargs > 0)
		{
			args = "arg"+numargs+","+args;
			numargs--;
		}
		
		args = args.slice(0,-1);
		gmres = gmres+",";
	}
	
	gmCallback[extname] = eval("(function("+ args +"){"+ obFunc +"("+ gmres + args +");})");
	
	return false;
}

function callback_define_script(extname,gmscript)
{
	if(gmCallback[extname] != undefined)
	{return true;}
	
	return false;
}

}
/*
     FILE ARCHIVED ON 20:35:21 Sep 21, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:29:32 Oct 23, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 89.52
  exclusion.robots: 0.13
  exclusion.robots.policy: 0.12
  cdx.remote: 0.082
  esindex: 0.011
  LoadShardBlock: 48.995 (3)
  PetaboxLoader3.datanode: 76.062 (4)
  CDXLines.iter: 29.676 (3)
  load_resource: 74.718
  PetaboxLoader3.resolve: 26.314
*/
