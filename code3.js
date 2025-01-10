gdjs.GameUnFinishCode = {};
gdjs.GameUnFinishCode.localVariables = [];
gdjs.GameUnFinishCode.GDVdoObjects1= [];
gdjs.GameUnFinishCode.GDVdoObjects2= [];
gdjs.GameUnFinishCode.GDNewBBTextObjects1= [];
gdjs.GameUnFinishCode.GDNewBBTextObjects2= [];


gdjs.GameUnFinishCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Vdo"), gdjs.GameUnFinishCode.GDVdoObjects1);
{for(var i = 0, len = gdjs.GameUnFinishCode.GDVdoObjects1.length ;i < len;++i) {
    gdjs.GameUnFinishCode.GDVdoObjects1[i].play();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewBBText"), gdjs.GameUnFinishCode.GDNewBBTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameUnFinishCode.GDNewBBTextObjects1.length;i<l;++i) {
    if ( gdjs.GameUnFinishCode.GDNewBBTextObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameUnFinishCode.GDNewBBTextObjects1[k] = gdjs.GameUnFinishCode.GDNewBBTextObjects1[i];
        ++k;
    }
}
gdjs.GameUnFinishCode.GDNewBBTextObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Vdo"), gdjs.GameUnFinishCode.GDVdoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameUnFinishCode.GDVdoObjects1.length;i<l;++i) {
    if ( gdjs.GameUnFinishCode.GDVdoObjects1[i].isEnded() ) {
        isConditionTrue_0 = true;
        gdjs.GameUnFinishCode.GDVdoObjects1[k] = gdjs.GameUnFinishCode.GDVdoObjects1[i];
        ++k;
    }
}
gdjs.GameUnFinishCode.GDVdoObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title", false);
}}

}


};

gdjs.GameUnFinishCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameUnFinishCode.GDVdoObjects1.length = 0;
gdjs.GameUnFinishCode.GDVdoObjects2.length = 0;
gdjs.GameUnFinishCode.GDNewBBTextObjects1.length = 0;
gdjs.GameUnFinishCode.GDNewBBTextObjects2.length = 0;

gdjs.GameUnFinishCode.eventsList0(runtimeScene);
gdjs.GameUnFinishCode.GDVdoObjects1.length = 0;
gdjs.GameUnFinishCode.GDVdoObjects2.length = 0;
gdjs.GameUnFinishCode.GDNewBBTextObjects1.length = 0;
gdjs.GameUnFinishCode.GDNewBBTextObjects2.length = 0;


return;

}

gdjs['GameUnFinishCode'] = gdjs.GameUnFinishCode;
