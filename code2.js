gdjs.Level_32SelectionCode = {};
gdjs.Level_32SelectionCode.localVariables = [];
gdjs.Level_32SelectionCode.GD_953642BGObjects1= [];
gdjs.Level_32SelectionCode.GD_953642BGObjects2= [];
gdjs.Level_32SelectionCode.GD_953642BGObjects3= [];
gdjs.Level_32SelectionCode.GDNum1Objects1= [];
gdjs.Level_32SelectionCode.GDNum1Objects2= [];
gdjs.Level_32SelectionCode.GDNum1Objects3= [];
gdjs.Level_32SelectionCode.GDCPObjects1= [];
gdjs.Level_32SelectionCode.GDCPObjects2= [];
gdjs.Level_32SelectionCode.GDCPObjects3= [];
gdjs.Level_32SelectionCode.GDNope_9595soonObjects1= [];
gdjs.Level_32SelectionCode.GDNope_9595soonObjects2= [];
gdjs.Level_32SelectionCode.GDNope_9595soonObjects3= [];
gdjs.Level_32SelectionCode.GDComing_9595soonObjects1= [];
gdjs.Level_32SelectionCode.GDComing_9595soonObjects2= [];
gdjs.Level_32SelectionCode.GDComing_9595soonObjects3= [];
gdjs.Level_32SelectionCode.GDCP2Objects1= [];
gdjs.Level_32SelectionCode.GDCP2Objects2= [];
gdjs.Level_32SelectionCode.GDCP2Objects3= [];
gdjs.Level_32SelectionCode.GDComing_9595soon_9595BoxObjects1= [];
gdjs.Level_32SelectionCode.GDComing_9595soon_9595BoxObjects2= [];
gdjs.Level_32SelectionCode.GDComing_9595soon_9595BoxObjects3= [];
gdjs.Level_32SelectionCode.GDNopeObjects1= [];
gdjs.Level_32SelectionCode.GDNopeObjects2= [];
gdjs.Level_32SelectionCode.GDNopeObjects3= [];
gdjs.Level_32SelectionCode.GDConection_9595patternObjects1= [];
gdjs.Level_32SelectionCode.GDConection_9595patternObjects2= [];
gdjs.Level_32SelectionCode.GDConection_9595patternObjects3= [];
gdjs.Level_32SelectionCode.GDTopic_9595coming_9595soonObjects1= [];
gdjs.Level_32SelectionCode.GDTopic_9595coming_9595soonObjects2= [];
gdjs.Level_32SelectionCode.GDTopic_9595coming_9595soonObjects3= [];
gdjs.Level_32SelectionCode.GDComing_9595soon2Objects1= [];
gdjs.Level_32SelectionCode.GDComing_9595soon2Objects2= [];
gdjs.Level_32SelectionCode.GDComing_9595soon2Objects3= [];
gdjs.Level_32SelectionCode.GDComing_9595soon_9595topicObjects1= [];
gdjs.Level_32SelectionCode.GDComing_9595soon_9595topicObjects2= [];
gdjs.Level_32SelectionCode.GDComing_9595soon_9595topicObjects3= [];


gdjs.Level_32SelectionCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Topic_coming_soon"), gdjs.Level_32SelectionCode.GDTopic_9595coming_9595soonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_32SelectionCode.GDTopic_9595coming_9595soonObjects2.length;i<l;++i) {
    if ( !(gdjs.Level_32SelectionCode.GDTopic_9595coming_9595soonObjects2[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.Level_32SelectionCode.GDTopic_9595coming_9595soonObjects2[k] = gdjs.Level_32SelectionCode.GDTopic_9595coming_9595soonObjects2[i];
        ++k;
    }
}
gdjs.Level_32SelectionCode.GDTopic_9595coming_9595soonObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_32SelectionCode.GDTopic_9595coming_9595soonObjects2 */
{for(var i = 0, len = gdjs.Level_32SelectionCode.GDTopic_9595coming_9595soonObjects2.length ;i < len;++i) {
    gdjs.Level_32SelectionCode.GDTopic_9595coming_9595soonObjects2[i].getBehavior("Animation").setAnimationName("UnSelect");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Conection_pattern"), gdjs.Level_32SelectionCode.GDConection_9595patternObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_32SelectionCode.GDConection_9595patternObjects2.length;i<l;++i) {
    if ( !(gdjs.Level_32SelectionCode.GDConection_9595patternObjects2[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.Level_32SelectionCode.GDConection_9595patternObjects2[k] = gdjs.Level_32SelectionCode.GDConection_9595patternObjects2[i];
        ++k;
    }
}
gdjs.Level_32SelectionCode.GDConection_9595patternObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_32SelectionCode.GDConection_9595patternObjects2 */
{for(var i = 0, len = gdjs.Level_32SelectionCode.GDConection_9595patternObjects2.length ;i < len;++i) {
    gdjs.Level_32SelectionCode.GDConection_9595patternObjects2[i].getBehavior("Animation").setAnimationName("UnSelect");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Conection_pattern"), gdjs.Level_32SelectionCode.GDConection_9595patternObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_32SelectionCode.GDConection_9595patternObjects2.length;i<l;++i) {
    if ( gdjs.Level_32SelectionCode.GDConection_9595patternObjects2[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Level_32SelectionCode.GDConection_9595patternObjects2[k] = gdjs.Level_32SelectionCode.GDConection_9595patternObjects2[i];
        ++k;
    }
}
gdjs.Level_32SelectionCode.GDConection_9595patternObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CP"), gdjs.Level_32SelectionCode.GDCPObjects2);
/* Reuse gdjs.Level_32SelectionCode.GDConection_9595patternObjects2 */
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Level_32SelectionCode.GDCPObjects2.length !== 0 ? gdjs.Level_32SelectionCode.GDCPObjects2[0] : null), true, "", 0);
}{for(var i = 0, len = gdjs.Level_32SelectionCode.GDConection_9595patternObjects2.length ;i < len;++i) {
    gdjs.Level_32SelectionCode.GDConection_9595patternObjects2[i].getBehavior("Animation").setAnimationName("Selected");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "923517cfc7f1500e851f0bbcdd357fe2b982745b128fcb3acc40d1a229575882_Click_02.aac", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Topic_coming_soon"), gdjs.Level_32SelectionCode.GDTopic_9595coming_9595soonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_32SelectionCode.GDTopic_9595coming_9595soonObjects1.length;i<l;++i) {
    if ( gdjs.Level_32SelectionCode.GDTopic_9595coming_9595soonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Level_32SelectionCode.GDTopic_9595coming_9595soonObjects1[k] = gdjs.Level_32SelectionCode.GDTopic_9595coming_9595soonObjects1[i];
        ++k;
    }
}
gdjs.Level_32SelectionCode.GDTopic_9595coming_9595soonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Coming_soon_Box"), gdjs.Level_32SelectionCode.GDComing_9595soon_9595BoxObjects1);
/* Reuse gdjs.Level_32SelectionCode.GDTopic_9595coming_9595soonObjects1 */
{for(var i = 0, len = gdjs.Level_32SelectionCode.GDTopic_9595coming_9595soonObjects1.length ;i < len;++i) {
    gdjs.Level_32SelectionCode.GDTopic_9595coming_9595soonObjects1[i].getBehavior("Animation").setAnimationName("Selected");
}
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Level_32SelectionCode.GDComing_9595soon_9595BoxObjects1.length !== 0 ? gdjs.Level_32SelectionCode.GDComing_9595soon_9595BoxObjects1[0] : null), true, "", 0);
}{gdjs.evtTools.sound.playSound(runtimeScene, "923517cfc7f1500e851f0bbcdd357fe2b982745b128fcb3acc40d1a229575882_Click_02.aac", false, 100, 1);
}}

}


};gdjs.Level_32SelectionCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Num1"), gdjs.Level_32SelectionCode.GDNum1Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_32SelectionCode.GDNum1Objects2.length;i<l;++i) {
    if ( !(gdjs.Level_32SelectionCode.GDNum1Objects2[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.Level_32SelectionCode.GDNum1Objects2[k] = gdjs.Level_32SelectionCode.GDNum1Objects2[i];
        ++k;
    }
}
gdjs.Level_32SelectionCode.GDNum1Objects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_32SelectionCode.GDNum1Objects2 */
{for(var i = 0, len = gdjs.Level_32SelectionCode.GDNum1Objects2.length ;i < len;++i) {
    gdjs.Level_32SelectionCode.GDNum1Objects2[i].getBehavior("Animation").setAnimationName("Unclick");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Num1"), gdjs.Level_32SelectionCode.GDNum1Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_32SelectionCode.GDNum1Objects2.length;i<l;++i) {
    if ( gdjs.Level_32SelectionCode.GDNum1Objects2[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Level_32SelectionCode.GDNum1Objects2[k] = gdjs.Level_32SelectionCode.GDNum1Objects2[i];
        ++k;
    }
}
gdjs.Level_32SelectionCode.GDNum1Objects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_32SelectionCode.GDNum1Objects2 */
{gdjs.evtTools.sound.playSound(runtimeScene, "923517cfc7f1500e851f0bbcdd357fe2b982745b128fcb3acc40d1a229575882_Click_02.aac", false, 60, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game scene", false);
}{for(var i = 0, len = gdjs.Level_32SelectionCode.GDNum1Objects2.length ;i < len;++i) {
    gdjs.Level_32SelectionCode.GDNum1Objects2[i].getBehavior("Animation").setAnimationName("Clicked");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Nope_soon"), gdjs.Level_32SelectionCode.GDNope_9595soonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_32SelectionCode.GDNope_9595soonObjects2.length;i<l;++i) {
    if ( gdjs.Level_32SelectionCode.GDNope_9595soonObjects2[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Level_32SelectionCode.GDNope_9595soonObjects2[k] = gdjs.Level_32SelectionCode.GDNope_9595soonObjects2[i];
        ++k;
    }
}
gdjs.Level_32SelectionCode.GDNope_9595soonObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_32SelectionCode.GDNope_9595soonObjects2 */
{gdjs.evtTools.sound.playSound(runtimeScene, "44753b4d3c538ac8b8af26578feab2d0ad562856703bbe64f0b7fc64d8003778_Click_04.aac", false, 60, 1);
}{for(var i = 0, len = gdjs.Level_32SelectionCode.GDNope_9595soonObjects2.length ;i < len;++i) {
    gdjs.Level_32SelectionCode.GDNope_9595soonObjects2[i].getBehavior("Animation").setAnimationName("Clicked");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Nope_soon"), gdjs.Level_32SelectionCode.GDNope_9595soonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_32SelectionCode.GDNope_9595soonObjects2.length;i<l;++i) {
    if ( !(gdjs.Level_32SelectionCode.GDNope_9595soonObjects2[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.Level_32SelectionCode.GDNope_9595soonObjects2[k] = gdjs.Level_32SelectionCode.GDNope_9595soonObjects2[i];
        ++k;
    }
}
gdjs.Level_32SelectionCode.GDNope_9595soonObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_32SelectionCode.GDNope_9595soonObjects2 */
{for(var i = 0, len = gdjs.Level_32SelectionCode.GDNope_9595soonObjects2.length ;i < len;++i) {
    gdjs.Level_32SelectionCode.GDNope_9595soonObjects2[i].getBehavior("Animation").setAnimationName("Unclick");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Nope"), gdjs.Level_32SelectionCode.GDNopeObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_32SelectionCode.GDNopeObjects2.length;i<l;++i) {
    if ( gdjs.Level_32SelectionCode.GDNopeObjects2[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Level_32SelectionCode.GDNopeObjects2[k] = gdjs.Level_32SelectionCode.GDNopeObjects2[i];
        ++k;
    }
}
gdjs.Level_32SelectionCode.GDNopeObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_32SelectionCode.GDNopeObjects2 */
{gdjs.evtTools.sound.playSound(runtimeScene, "44753b4d3c538ac8b8af26578feab2d0ad562856703bbe64f0b7fc64d8003778_Click_04.aac", false, 60, 1);
}{for(var i = 0, len = gdjs.Level_32SelectionCode.GDNopeObjects2.length ;i < len;++i) {
    gdjs.Level_32SelectionCode.GDNopeObjects2[i].getBehavior("Animation").setAnimationName("Clicked");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Nope"), gdjs.Level_32SelectionCode.GDNopeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_32SelectionCode.GDNopeObjects1.length;i<l;++i) {
    if ( !(gdjs.Level_32SelectionCode.GDNopeObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.Level_32SelectionCode.GDNopeObjects1[k] = gdjs.Level_32SelectionCode.GDNopeObjects1[i];
        ++k;
    }
}
gdjs.Level_32SelectionCode.GDNopeObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_32SelectionCode.GDNopeObjects1 */
{for(var i = 0, len = gdjs.Level_32SelectionCode.GDNopeObjects1.length ;i < len;++i) {
    gdjs.Level_32SelectionCode.GDNopeObjects1[i].getBehavior("Animation").setAnimationName("UnClick");
}
}}

}


};gdjs.Level_32SelectionCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.Level_32SelectionCode.eventsList0(runtimeScene);
}


{


gdjs.Level_32SelectionCode.eventsList1(runtimeScene);
}


};

gdjs.Level_32SelectionCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_32SelectionCode.GD_953642BGObjects1.length = 0;
gdjs.Level_32SelectionCode.GD_953642BGObjects2.length = 0;
gdjs.Level_32SelectionCode.GD_953642BGObjects3.length = 0;
gdjs.Level_32SelectionCode.GDNum1Objects1.length = 0;
gdjs.Level_32SelectionCode.GDNum1Objects2.length = 0;
gdjs.Level_32SelectionCode.GDNum1Objects3.length = 0;
gdjs.Level_32SelectionCode.GDCPObjects1.length = 0;
gdjs.Level_32SelectionCode.GDCPObjects2.length = 0;
gdjs.Level_32SelectionCode.GDCPObjects3.length = 0;
gdjs.Level_32SelectionCode.GDNope_9595soonObjects1.length = 0;
gdjs.Level_32SelectionCode.GDNope_9595soonObjects2.length = 0;
gdjs.Level_32SelectionCode.GDNope_9595soonObjects3.length = 0;
gdjs.Level_32SelectionCode.GDComing_9595soonObjects1.length = 0;
gdjs.Level_32SelectionCode.GDComing_9595soonObjects2.length = 0;
gdjs.Level_32SelectionCode.GDComing_9595soonObjects3.length = 0;
gdjs.Level_32SelectionCode.GDCP2Objects1.length = 0;
gdjs.Level_32SelectionCode.GDCP2Objects2.length = 0;
gdjs.Level_32SelectionCode.GDCP2Objects3.length = 0;
gdjs.Level_32SelectionCode.GDComing_9595soon_9595BoxObjects1.length = 0;
gdjs.Level_32SelectionCode.GDComing_9595soon_9595BoxObjects2.length = 0;
gdjs.Level_32SelectionCode.GDComing_9595soon_9595BoxObjects3.length = 0;
gdjs.Level_32SelectionCode.GDNopeObjects1.length = 0;
gdjs.Level_32SelectionCode.GDNopeObjects2.length = 0;
gdjs.Level_32SelectionCode.GDNopeObjects3.length = 0;
gdjs.Level_32SelectionCode.GDConection_9595patternObjects1.length = 0;
gdjs.Level_32SelectionCode.GDConection_9595patternObjects2.length = 0;
gdjs.Level_32SelectionCode.GDConection_9595patternObjects3.length = 0;
gdjs.Level_32SelectionCode.GDTopic_9595coming_9595soonObjects1.length = 0;
gdjs.Level_32SelectionCode.GDTopic_9595coming_9595soonObjects2.length = 0;
gdjs.Level_32SelectionCode.GDTopic_9595coming_9595soonObjects3.length = 0;
gdjs.Level_32SelectionCode.GDComing_9595soon2Objects1.length = 0;
gdjs.Level_32SelectionCode.GDComing_9595soon2Objects2.length = 0;
gdjs.Level_32SelectionCode.GDComing_9595soon2Objects3.length = 0;
gdjs.Level_32SelectionCode.GDComing_9595soon_9595topicObjects1.length = 0;
gdjs.Level_32SelectionCode.GDComing_9595soon_9595topicObjects2.length = 0;
gdjs.Level_32SelectionCode.GDComing_9595soon_9595topicObjects3.length = 0;

gdjs.Level_32SelectionCode.eventsList2(runtimeScene);
gdjs.Level_32SelectionCode.GD_953642BGObjects1.length = 0;
gdjs.Level_32SelectionCode.GD_953642BGObjects2.length = 0;
gdjs.Level_32SelectionCode.GD_953642BGObjects3.length = 0;
gdjs.Level_32SelectionCode.GDNum1Objects1.length = 0;
gdjs.Level_32SelectionCode.GDNum1Objects2.length = 0;
gdjs.Level_32SelectionCode.GDNum1Objects3.length = 0;
gdjs.Level_32SelectionCode.GDCPObjects1.length = 0;
gdjs.Level_32SelectionCode.GDCPObjects2.length = 0;
gdjs.Level_32SelectionCode.GDCPObjects3.length = 0;
gdjs.Level_32SelectionCode.GDNope_9595soonObjects1.length = 0;
gdjs.Level_32SelectionCode.GDNope_9595soonObjects2.length = 0;
gdjs.Level_32SelectionCode.GDNope_9595soonObjects3.length = 0;
gdjs.Level_32SelectionCode.GDComing_9595soonObjects1.length = 0;
gdjs.Level_32SelectionCode.GDComing_9595soonObjects2.length = 0;
gdjs.Level_32SelectionCode.GDComing_9595soonObjects3.length = 0;
gdjs.Level_32SelectionCode.GDCP2Objects1.length = 0;
gdjs.Level_32SelectionCode.GDCP2Objects2.length = 0;
gdjs.Level_32SelectionCode.GDCP2Objects3.length = 0;
gdjs.Level_32SelectionCode.GDComing_9595soon_9595BoxObjects1.length = 0;
gdjs.Level_32SelectionCode.GDComing_9595soon_9595BoxObjects2.length = 0;
gdjs.Level_32SelectionCode.GDComing_9595soon_9595BoxObjects3.length = 0;
gdjs.Level_32SelectionCode.GDNopeObjects1.length = 0;
gdjs.Level_32SelectionCode.GDNopeObjects2.length = 0;
gdjs.Level_32SelectionCode.GDNopeObjects3.length = 0;
gdjs.Level_32SelectionCode.GDConection_9595patternObjects1.length = 0;
gdjs.Level_32SelectionCode.GDConection_9595patternObjects2.length = 0;
gdjs.Level_32SelectionCode.GDConection_9595patternObjects3.length = 0;
gdjs.Level_32SelectionCode.GDTopic_9595coming_9595soonObjects1.length = 0;
gdjs.Level_32SelectionCode.GDTopic_9595coming_9595soonObjects2.length = 0;
gdjs.Level_32SelectionCode.GDTopic_9595coming_9595soonObjects3.length = 0;
gdjs.Level_32SelectionCode.GDComing_9595soon2Objects1.length = 0;
gdjs.Level_32SelectionCode.GDComing_9595soon2Objects2.length = 0;
gdjs.Level_32SelectionCode.GDComing_9595soon2Objects3.length = 0;
gdjs.Level_32SelectionCode.GDComing_9595soon_9595topicObjects1.length = 0;
gdjs.Level_32SelectionCode.GDComing_9595soon_9595topicObjects2.length = 0;
gdjs.Level_32SelectionCode.GDComing_9595soon_9595topicObjects3.length = 0;


return;

}

gdjs['Level_32SelectionCode'] = gdjs.Level_32SelectionCode;
