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

function configureAvailableCustomDimensions01(json)
{
    gameanalytics.GameAnalytics.configureAvailableCustomDimensions01(JSON.parse(json));
}

function configureAvailableCustomDimensions02(json)
{
    gameanalytics.GameAnalytics.configureAvailableCustomDimensions02(JSON.parse(json));
}

function configureAvailableCustomDimensions03(json)
{
    gameanalytics.GameAnalytics.configureAvailableCustomDimensions03(JSON.parse(json));
}

function configureAvailableResourceCurrencies(json)
{
    gameanalytics.GameAnalytics.configureAvailableResourceCurrencies(JSON.parse(json));
}

function configureAvailableResourceItemTypes(json)
{
    gameanalytics.GameAnalytics.configureAvailableResourceItemTypes(JSON.parse(json));
}

function configureBuild(build)
{
    gameanalytics.GameAnalytics.configureBuild(build);
}

function configureSdkGameEngineVersion(version)
{
    gameanalytics.GameAnalytics.configureSdkGameEngineVersion(version);
}

function configureGameEngineVersion(version)
{
    gameanalytics.GameAnalytics.configureGameEngineVersion(version);
}

function configureUserId(uId)
{
    gameanalytics.GameAnalytics.configureUserId(uId);
}

function initialize(gameKey, gameSecret)
{
    gameanalytics.GameAnalytics.initialize(gameKey, gameSecret);
}

function addBusinessEvent(currency, amount, itemType, itemId, cartType)
{
    gameanalytics.GameAnalytics.addBusinessEvent(currency, amount, itemType, itemId, cartType);
}

function addResourceEvent(flowType, currency, amount, itemType, itemId)
{
    gameanalytics.GameAnalytics.addResourceEvent(parseInt(flowType), currency, amount, itemType, itemId);
}

function addProgressionEvent(status, progression1, progression2, progression3)
{
    gameanalytics.GameAnalytics.addProgressionEvent(parseInt(status), progression1, progression2, progression3);
}

function addProgressionEventWithScore(status, progression1, progression2, progression3, score)
{
    gameanalytics.GameAnalytics.addProgressionEvent(parseInt(status), progression1, progression2, progression3, score);
}

function addDesignEvent(eventId)
{
    gameanalytics.GameAnalytics.addDesignEvent(eventId);
}

function addDesignEventWithValue(eventId, value)
{
    gameanalytics.GameAnalytics.addDesignEvent(eventId, value);
}

function addErrorEvent(severity, message)
{
    gameanalytics.GameAnalytics.addErrorEvent(parseInt(severity), message);
}

function setEnabledInfoLog(flag)
{
    gameanalytics.GameAnalytics.setEnabledInfoLog(!!flag);
}

function setEnabledVerboseLog(flag)
{
    gameanalytics.GameAnalytics.setEnabledVerboseLog(!!flag);
}

function setEnabledManualSessionHandling(flag)
{
    gameanalytics.GameAnalytics.setEnabledManualSessionHandling(!!flag);
}

function setEnabledEventSubmission(flag)
{
    gameanalytics.GameAnalytics.setEnabledEventSubmission(!!flag);
}

function setCustomDimension01(dimension)
{
    gameanalytics.GameAnalytics.setCustomDimension01(dimension);
}

function setCustomDimension02(dimension)
{
    gameanalytics.GameAnalytics.setCustomDimension02(dimension);
}

function setCustomDimension03(dimension)
{
    gameanalytics.GameAnalytics.setCustomDimension03(dimension);
}

function setFacebookId(id)
{
    gameanalytics.GameAnalytics.setFacebookId(id);
}

function setGender(gender)
{
    gameanalytics.GameAnalytics.setGender(parseInt(gender));
}

function setBirthYear(year)
{
    gameanalytics.GameAnalytics.setBirthYear(parseInt(year));
}

function startSession()
{
    gameanalytics.GameAnalytics.startSession();
}

function endSession()
{
    gameanalytics.GameAnalytics.endSession();
}

function onStop()
{
    gameanalytics.GameAnalytics.onStop();
}

function onResume()
{
    gameanalytics.GameAnalytics.onResume();
}


}
/*
     FILE ARCHIVED ON 20:35:22 Sep 21, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:34:54 Oct 23, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 219.966
  exclusion.robots: 0.129
  exclusion.robots.policy: 0.118
  RedisCDXSource: 0.718
  esindex: 0.01
  LoadShardBlock: 199.699 (3)
  PetaboxLoader3.datanode: 183.907 (4)
  CDXLines.iter: 16.415 (3)
  load_resource: 34.797
  PetaboxLoader3.resolve: 23.583
*/
