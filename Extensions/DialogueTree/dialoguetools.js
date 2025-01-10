var gdjs;(function(l){let F;(function(Le){const s=new l.Logger("Dialogue tree"),n=new bondage.Runner;let g,u=0,o="",m=!1,p=[],f=0,b=!1,v=[],r=null,i=!1,c=null,x="",C=0,L=0,d=[],y,h=[],S="";function j(e,t){try{const a=JSON.parse(e.getAsString());n.load(a),t&&t.length>0&&l.dialogueTree.startFrom(t)}catch(a){s.error("Error while loading from scene variable: ",a)}}Le.loadFromSceneVariable=j;function E(e,t,a){e.getGame().getJsonManager().loadJson(t,function(T,R){if(T)s.error("An error happened while loading JSON resource:",T);else{if(!R)return;const A=R;try{n.load(A)}catch(N){s.error("An error happened while loading parsing the dialogue tree data:",N)}a&&a.length>0&&l.dialogueTree.startFrom(a)}})}Le.loadFromJsonFile=E;function P(){i=!1,r=null,o="",u=0}Le.stopRunningDialogue=P;function J(){return i&&!r&&o&&u>=o.length&&(i=!1),i}Le.isRunning=J;function _(){if(!(m||!i)){if(r instanceof bondage.CommandResult&&c==="text"&&x===r.data.title&&C===r.lineNum&&l.dialogueTree.hasClippedScrollingCompleted()){l.dialogueTree.goToNextDialogueLine();return}o&&c==="text"&&u<o.length&&(u+=1)}}Le.scrollClippedText=_;function M(){m||!i||!o||c!=="text"||(u=o.length)}Le.completeClippedTextScrolling=M;function z(){return!i||c===""?!1:r&&o.length>0&&u>=o.length?(l.dialogueTree.getVariable("debug")&&s.warn("Scroll completed:",u,"/",o.length),!0):!1}Le.hasClippedScrollingCompleted=z;function H(){return i&&o.length?o.substring(0,u+1):""}Le.getClippedLineText=H;function G(){return i&&o.length?o:""}Le.getLineText=G;function U(){return p.length>1?p.length-1:0}Le.commandParametersCount=U;function k(e){if(e===-1&&p.length>0)return p[0];if(p.length>=e+1){const t=p[e+1];return t||""}return""}Le.getCommandParameter=k;function K(e){return!i||m||!g?!1:g.some(function(t,a){return u!==0&&u<t.time?!1:(t.cmd==="wait"&&(u===0||u!==o.length)&&(m=!0,setTimeout(function(){m=!1,g.splice(a,1),l.dialogueTree.getVariable("debug")&&s.info("CMD:",t)},parseInt(t.params[1],10))),t.cmd===e?(p=t.params,g.splice(a,1),l.dialogueTree.getVariable("debug")&&s.info("CMD:",t),!0):!1)})}Le.isCommandCalled=K;function V(e){return e>=d.length&&(e=d.length-1),e<0&&(e=0),e}function w(e){return e>=d.length&&(e=0),e<0&&(e=d.length-1),e}function Q(e){return!i||!d.length?[]:(e=V(e),d[e])}Le.getLineOption=Q;function W(e,t){if(!i||!d.length)return"";let a="";return d.forEach(function(T,R){R===f?a+=e:a+=e.replace(/.*/g," "),a+=T,t&&(a+=`
`)}),a}Le.getLineOptionsText=W;function X(e){return l.dialogueTree.getLineOptionsText(e,!1)}Le.getLineOptionsTextHorizontal=X;function Y(e){return l.dialogueTree.getLineOptionsText(e,!0)}Le.getLineOptionsTextVertical=Y;function Z(){return i&&d.length?L:0}Le.getLineOptionsCount=Z;function $(){if(!!i&&r instanceof bondage.OptionsResult&&!b&&f!==-1){g=[];try{r.select(f);try{r=y.next().value}catch(e){s.error("Error while confirming in the dialogue tree. Verify if there is a syntax error? Full error is: ",e);return}l.dialogueTree.goToNextDialogueLine()}catch(e){s.error("An error happened when trying to access the dialogue branch!",e)}}}Le.confirmSelectOption=$;function q(){!i||O()&&(f+=1,f=w(f),b=!0)}Le.selectNextOption=q;function I(){!i||O()&&(f-=1,f=w(f),b=!0)}Le.selectPreviousOption=I;function ee(e){!i||O()&&(f=V(e),b=!0)}Le.selectOption=ee;function te(){return i&&O()?f:0}Le.getSelectedOption=te;function re(){return b?(b=!1,f===-1&&(f=0),!0):!1}Le.hasSelectedOptionChanged=re;function ne(e){if(!i)return!1;if(g&&e==="command"){if(g.some(function(t){return u>t.time&&t.cmd==="wait"}))return!m;if(g.length>0&&p.length>0)return!0}return c===e}Le.isDialogueLineType=ne;function ie(e){return n&&n.yarnNodes&&Object.keys(n.yarnNodes).some(function(t){return t===e})}Le.hasDialogueBranch=ie;function ae(e){if(!!l.dialogueTree.hasDialogueBranch(e)){L=0,d=[],v=[];try{y=n.run(e)}catch(t){s.error("Error while setting up the dialogue tree. Verify if there is a syntax error? Full error is: ",t);return}o="",u=0,g=[],p=[],m=!1;try{r=y.next().value}catch(t){s.error("Error while starting the dialogue tree. Verify if there is a syntax error? Full error is: ",t);return}!r||((r instanceof bondage.TextResult||r instanceof bondage.CommandResult)&&(h=r.data.tags,x=r.data.title,S=r.data.body),C=r.lineNum,B()?c="text":O()?c="options":c="command",i=!0,l.dialogueTree.goToNextDialogueLine())}}Le.startFrom=ae;function B(){return r instanceof bondage.TextResult}function O(){return r instanceof bondage.OptionsResult}function D(){return r instanceof bondage.CommandResult}function oe(){if(!(m||!i))if(L=0,f=-1,b=!1,l.dialogueTree.getVariable("debug")&&s.info("Parsing:",r),!r)l.dialogueTree.stopRunningDialogue();else if(r instanceof bondage.TextResult){C===r.lineNum&&x===r.data.title?(u=o.length-1,o+=(o===""?"":" ")+r.text):(u=0,o=r.text),h=r.data.tags,x=r.data.title,S=r.data.body,C=r.lineNum,c="text";try{r=y.next().value}catch(e){s.error("Error while progressing the dialogue tree. Verify if there is a syntax error? Full error is: ",e);return}}else if(r instanceof bondage.OptionsResult)g=[],c="options",o="",u=0,L=r.options.length,d=r.options,b=!0;else if(D()){c="command";const e=r.text.split(" "),t=g.length&&g[g.length-1].cmd==="wait"?1:0;g.push({cmd:e[0],params:e,time:o.length+t});try{r=y.next().value}catch(a){s.error("Error while progressing the dialogue tree. Verify if there is a syntax error? Full error is: ",a);return}l.dialogueTree.goToNextDialogueLine()}else c="unknown"}Le.goToNextDialogueLine=oe;function le(){return i?x:""}Le.getBranchTitle=le;function ue(e){return i?x===e:!1}Le.branchTitleIs=ue;function se(){return i?h.join(","):""}Le.getBranchTags=se;function ge(e){return i&&h.length?(e>h.length-1&&(e=h.length-1),h[e]):""}Le.getBranchTag=ge;function fe(e){return v=[],i&&h.length?h.some(function(t){const a=t.match(/([^\(]+)\(([^\)]+)\)/i);return v=a?a[2].split(","):[],a?a[1]===e:t===e}):!1}Le.branchContainsTag=fe;function ce(e){if(i&&v.length>=e){const t=v[e];return t||""}return""}Le.getTagParameter=ce;function de(){return i?Object.keys(n.visited).join(","):""}Le.getVisitedBranchTitles=de;function pe(e){return e||(e=x),Object.keys(n.visited).includes(e)&&n.visited[e]}Le.branchTitleHasBeenVisited=pe;function he(){return i?S:""}Le.getBranchText=he;function me(e){return n.variables&&e in n.variables.data?n.variables.get(e):""}Le.getVariable=me;function be(e){if(n.variables&&e in n.variables.data){const t=n.variables.get(e);return typeof t!="number"?parseFloat(t)||0:isFinite(t)?t:0}return 0}Le.getVariableAsNumber=be;function xe(e){return n.variables&&e in n.variables.data?""+n.variables.get(e):""}Le.getVariableAsString=xe;function Te(e,t){return n.variables&&e in n.variables.data?n.variables.get(e)===t:!1}Le.compareVariable=Te;function ve(e,t){n.variables&&n.variables.set(e,t)}Le.setVariable=ve;function ye(e){const t={variables:n.variables.data,visited:n.visited};e.fromJSObject(t)}Le.saveState=ye;function Oe(e){const t=e.toJSObject();if(!t){s.error("Load state variable is empty:",e);return}try{n.visited=t.visited,n.variables.data={},Object.keys(t.variables).forEach(function(a){const T=t.variables[a];n.variables.set(a,T)})}catch(a){s.error("Failed to load state from variable:",e,a)}}Le.loadState=Oe;function Ce(){n.visited={},n.variables.data={}}Le.clearState=Ce})(F=l.dialogueTree||(l.dialogueTree={}))})(gdjs||(gdjs={}));
//# sourceMappingURL=dialoguetools.js.map
