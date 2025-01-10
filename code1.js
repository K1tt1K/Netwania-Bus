gdjs.TitleCode = {};
gdjs.TitleCode.localVariables = [];
gdjs.TitleCode.GDBgObjects1= [];
gdjs.TitleCode.GDBgObjects2= [];
gdjs.TitleCode.GDBgObjects3= [];
gdjs.TitleCode.GDLogoObjects1= [];
gdjs.TitleCode.GDLogoObjects2= [];
gdjs.TitleCode.GDLogoObjects3= [];
gdjs.TitleCode.GDStartObjects1= [];
gdjs.TitleCode.GDStartObjects2= [];
gdjs.TitleCode.GDStartObjects3= [];
gdjs.TitleCode.GDFullscreenONObjects1= [];
gdjs.TitleCode.GDFullscreenONObjects2= [];
gdjs.TitleCode.GDFullscreenONObjects3= [];
gdjs.TitleCode.GDFullscreenOFFObjects1= [];
gdjs.TitleCode.GDFullscreenOFFObjects2= [];
gdjs.TitleCode.GDFullscreenOFFObjects3= [];


gdjs.TitleCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.window.isFullScreen(runtimeScene));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FullscreenOFF"), gdjs.TitleCode.GDFullscreenOFFObjects2);
gdjs.copyArray(runtimeScene.getObjects("FullscreenON"), gdjs.TitleCode.GDFullscreenONObjects2);
{for(var i = 0, len = gdjs.TitleCode.GDFullscreenONObjects2.length ;i < len;++i) {
    gdjs.TitleCode.GDFullscreenONObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.TitleCode.GDFullscreenOFFObjects2.length ;i < len;++i) {
    gdjs.TitleCode.GDFullscreenOFFObjects2[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.window.isFullScreen(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FullscreenOFF"), gdjs.TitleCode.GDFullscreenOFFObjects2);
gdjs.copyArray(runtimeScene.getObjects("FullscreenON"), gdjs.TitleCode.GDFullscreenONObjects2);
{for(var i = 0, len = gdjs.TitleCode.GDFullscreenOFFObjects2.length ;i < len;++i) {
    gdjs.TitleCode.GDFullscreenOFFObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.TitleCode.GDFullscreenONObjects2.length ;i < len;++i) {
    gdjs.TitleCode.GDFullscreenONObjects2[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FullscreenON"), gdjs.TitleCode.GDFullscreenONObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitleCode.GDFullscreenONObjects2.length;i<l;++i) {
    if ( gdjs.TitleCode.GDFullscreenONObjects2[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.TitleCode.GDFullscreenONObjects2[k] = gdjs.TitleCode.GDFullscreenONObjects2[i];
        ++k;
    }
}
gdjs.TitleCode.GDFullscreenONObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.TitleCode.GDFullscreenONObjects2 */
{for(var i = 0, len = gdjs.TitleCode.GDFullscreenONObjects2.length ;i < len;++i) {
    gdjs.TitleCode.GDFullscreenONObjects2[i].activateBehavior("ButtonFSM", true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FullscreenON"), gdjs.TitleCode.GDFullscreenONObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitleCode.GDFullscreenONObjects2.length;i<l;++i) {
    if ( !(gdjs.TitleCode.GDFullscreenONObjects2[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.TitleCode.GDFullscreenONObjects2[k] = gdjs.TitleCode.GDFullscreenONObjects2[i];
        ++k;
    }
}
gdjs.TitleCode.GDFullscreenONObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.TitleCode.GDFullscreenONObjects2 */
{for(var i = 0, len = gdjs.TitleCode.GDFullscreenONObjects2.length ;i < len;++i) {
    gdjs.TitleCode.GDFullscreenONObjects2[i].activateBehavior("ButtonFSM", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FullscreenOFF"), gdjs.TitleCode.GDFullscreenOFFObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitleCode.GDFullscreenOFFObjects2.length;i<l;++i) {
    if ( gdjs.TitleCode.GDFullscreenOFFObjects2[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.TitleCode.GDFullscreenOFFObjects2[k] = gdjs.TitleCode.GDFullscreenOFFObjects2[i];
        ++k;
    }
}
gdjs.TitleCode.GDFullscreenOFFObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.TitleCode.GDFullscreenOFFObjects2 */
{for(var i = 0, len = gdjs.TitleCode.GDFullscreenOFFObjects2.length ;i < len;++i) {
    gdjs.TitleCode.GDFullscreenOFFObjects2[i].activateBehavior("ButtonFSM", true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FullscreenOFF"), gdjs.TitleCode.GDFullscreenOFFObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitleCode.GDFullscreenOFFObjects2.length;i<l;++i) {
    if ( !(gdjs.TitleCode.GDFullscreenOFFObjects2[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.TitleCode.GDFullscreenOFFObjects2[k] = gdjs.TitleCode.GDFullscreenOFFObjects2[i];
        ++k;
    }
}
gdjs.TitleCode.GDFullscreenOFFObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.TitleCode.GDFullscreenOFFObjects2 */
{for(var i = 0, len = gdjs.TitleCode.GDFullscreenOFFObjects2.length ;i < len;++i) {
    gdjs.TitleCode.GDFullscreenOFFObjects2[i].activateBehavior("ButtonFSM", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FullscreenON"), gdjs.TitleCode.GDFullscreenONObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitleCode.GDFullscreenONObjects2.length;i<l;++i) {
    if ( gdjs.TitleCode.GDFullscreenONObjects2[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.TitleCode.GDFullscreenONObjects2[k] = gdjs.TitleCode.GDFullscreenONObjects2[i];
        ++k;
    }
}
gdjs.TitleCode.GDFullscreenONObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(26120716);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FullscreenOFF"), gdjs.TitleCode.GDFullscreenOFFObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitleCode.GDFullscreenOFFObjects1.length;i<l;++i) {
    if ( gdjs.TitleCode.GDFullscreenOFFObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.TitleCode.GDFullscreenOFFObjects1[k] = gdjs.TitleCode.GDFullscreenOFFObjects1[i];
        ++k;
    }
}
gdjs.TitleCode.GDFullscreenOFFObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(26121972);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}}

}


};gdjs.TitleCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "My file\\assets\\Audio\\Game metroidvania technology network pixel retro v... (1be4a7442bc04190ac5833994f247b7f).mp3", true, 20, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.TitleCode.GDStartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitleCode.GDStartObjects1.length;i<l;++i) {
    if ( gdjs.TitleCode.GDStartObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.TitleCode.GDStartObjects1[k] = gdjs.TitleCode.GDStartObjects1[i];
        ++k;
    }
}
gdjs.TitleCode.GDStartObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.TitleCode.GDStartObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "923517cfc7f1500e851f0bbcdd357fe2b982745b128fcb3acc40d1a229575882_Click_02.aac", false, 30, 1);
}{for(var i = 0, len = gdjs.TitleCode.GDStartObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDStartObjects1[i].getBehavior("Animation").setAnimationName("2");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.TitleCode.GDStartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitleCode.GDStartObjects1.length;i<l;++i) {
    if ( gdjs.TitleCode.GDStartObjects1[i].getAnimationFrame() == 6 ) {
        isConditionTrue_0 = true;
        gdjs.TitleCode.GDStartObjects1[k] = gdjs.TitleCode.GDStartObjects1[i];
        ++k;
    }
}
gdjs.TitleCode.GDStartObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level Selection", false);
}}

}


{


gdjs.TitleCode.eventsList0(runtimeScene);
}


};

gdjs.TitleCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TitleCode.GDBgObjects1.length = 0;
gdjs.TitleCode.GDBgObjects2.length = 0;
gdjs.TitleCode.GDBgObjects3.length = 0;
gdjs.TitleCode.GDLogoObjects1.length = 0;
gdjs.TitleCode.GDLogoObjects2.length = 0;
gdjs.TitleCode.GDLogoObjects3.length = 0;
gdjs.TitleCode.GDStartObjects1.length = 0;
gdjs.TitleCode.GDStartObjects2.length = 0;
gdjs.TitleCode.GDStartObjects3.length = 0;
gdjs.TitleCode.GDFullscreenONObjects1.length = 0;
gdjs.TitleCode.GDFullscreenONObjects2.length = 0;
gdjs.TitleCode.GDFullscreenONObjects3.length = 0;
gdjs.TitleCode.GDFullscreenOFFObjects1.length = 0;
gdjs.TitleCode.GDFullscreenOFFObjects2.length = 0;
gdjs.TitleCode.GDFullscreenOFFObjects3.length = 0;

gdjs.TitleCode.eventsList1(runtimeScene);
gdjs.TitleCode.GDBgObjects1.length = 0;
gdjs.TitleCode.GDBgObjects2.length = 0;
gdjs.TitleCode.GDBgObjects3.length = 0;
gdjs.TitleCode.GDLogoObjects1.length = 0;
gdjs.TitleCode.GDLogoObjects2.length = 0;
gdjs.TitleCode.GDLogoObjects3.length = 0;
gdjs.TitleCode.GDStartObjects1.length = 0;
gdjs.TitleCode.GDStartObjects2.length = 0;
gdjs.TitleCode.GDStartObjects3.length = 0;
gdjs.TitleCode.GDFullscreenONObjects1.length = 0;
gdjs.TitleCode.GDFullscreenONObjects2.length = 0;
gdjs.TitleCode.GDFullscreenONObjects3.length = 0;
gdjs.TitleCode.GDFullscreenOFFObjects1.length = 0;
gdjs.TitleCode.GDFullscreenOFFObjects2.length = 0;
gdjs.TitleCode.GDFullscreenOFFObjects3.length = 0;


return;

}

gdjs['TitleCode'] = gdjs.TitleCode;
