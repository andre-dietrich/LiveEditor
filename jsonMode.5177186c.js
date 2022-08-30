!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire4f35;t.register("5s5V8",(function(n,r){e(n.exports,"setupMode",(function(){return u}));var o=t("3HPHc"),i=t("7Zdg3"),a=t("3UF6Y"),s=t("1nYeY");function u(e){var t=function(){var t=e.languageId,n=e.modeConfiguration;l(r),n.documentFormattingEdits&&r.push(s.languages.registerDocumentFormattingEditProvider(t,new i.DocumentFormattingEditProvider(g))),n.documentRangeFormattingEdits&&r.push(s.languages.registerDocumentRangeFormattingEditProvider(t,new i.DocumentRangeFormattingEditProvider(g))),n.completionItems&&r.push(s.languages.registerCompletionItemProvider(t,new i.CompletionAdapter(g))),n.hovers&&r.push(s.languages.registerHoverProvider(t,new i.HoverAdapter(g))),n.documentSymbols&&r.push(s.languages.registerDocumentSymbolProvider(t,new i.DocumentSymbolAdapter(g))),n.tokens&&r.push(s.languages.setTokensProvider(t,(0,a.createTokenizationSupport)(!0))),n.colors&&r.push(s.languages.registerColorProvider(t,new i.DocumentColorAdapter(g))),n.foldingRanges&&r.push(s.languages.registerFoldingRangeProvider(t,new i.FoldingRangeAdapter(g))),n.diagnostics&&r.push(new i.DiagnosticsAdapter(t,g,e)),n.selectionRanges&&r.push(s.languages.registerSelectionRangeProvider(t,new i.SelectionRangeAdapter(g)))},n=[],r=[],u=new(0,o.WorkerManager)(e);n.push(u);var g=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return u.getLanguageServiceWorker.apply(u,e)};t(),n.push(s.languages.setLanguageConfiguration(e.languageId,d));var p=e.modeConfiguration;return e.onDidChange((function(e){e.modeConfiguration!==p&&(p=e.modeConfiguration,t())})),n.push(c(r)),c(n)}function c(e){return{dispose:function(){return l(e)}}}function l(e){for(;e.length;)e.pop().dispose()}var d={wordPattern:/(-?\d*\.\d\w*)|([^\[\{\]\}\:\"\,\s]+)/g,comments:{lineComment:"//",blockComment:["/*","*/"]},brackets:[["{","}"],["[","]"]],autoClosingPairs:[{open:"{",close:"}",notIn:["string"]},{open:"[",close:"]",notIn:["string"]},{open:'"',close:'"',notIn:["string"]}]}})),t.register("3HPHc",(function(n,r){e(n.exports,"WorkerManager",(function(){return a}));var o,i=t("1nYeY"),a=((o=function(e){var t=this;this._defaults=e,this._worker=null,this._idleCheckInterval=setInterval((function(){return t._checkIfIdle()}),3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange((function(){return t._stopWorker()}))}).prototype._stopWorker=function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null},o.prototype.dispose=function(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()},o.prototype._checkIfIdle=function(){this._worker&&Date.now()-this._lastUsedTime>12e4&&this._stopWorker()},o.prototype._getClient=function(){return this._lastUsedTime=Date.now(),this._client||(this._worker=i.editor.createWebWorker({moduleId:"vs/language/json/jsonWorker",label:this._defaults.languageId,createData:{languageSettings:this._defaults.diagnosticsOptions,languageId:this._defaults.languageId,enableSchemaRequest:this._defaults.diagnosticsOptions.enableSchemaRequest}}),this._client=this._worker.getProxy()),this._client},o.prototype.getLanguageServiceWorker=function(){for(var e,t=this,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return this._getClient().then((function(t){e=t})).then((function(e){return t._worker.withSyncedResources(n)})).then((function(t){return e}))},o)})),t.register("7Zdg3",(function(n,r){e(n.exports,"DiagnosticsAdapter",(function(){return s})),e(n.exports,"CompletionAdapter",(function(){return f})),e(n.exports,"HoverAdapter",(function(){return b})),e(n.exports,"DocumentSymbolAdapter",(function(){return _})),e(n.exports,"DocumentFormattingEditProvider",(function(){return E})),e(n.exports,"DocumentRangeFormattingEditProvider",(function(){return F})),e(n.exports,"DocumentColorAdapter",(function(){return D})),e(n.exports,"FoldingRangeAdapter",(function(){return R})),e(n.exports,"SelectionRangeAdapter",(function(){return T}));var o,i=t("1nYeY"),a=t("l9qeN"),s=((o=function(e,t,n){var r=this;this._languageId=e,this._worker=t,this._disposables=[],this._listener=Object.create(null);var o=function(e){var t,n=e.getModeId();n===r._languageId&&(r._listener[e.uri.toString()]=e.onDidChangeContent((function(){clearTimeout(t),t=setTimeout((function(){return r._doValidate(e.uri,n)}),500)})),r._doValidate(e.uri,n))},a=function(e){i.editor.setModelMarkers(e,r._languageId,[]);var t=e.uri.toString(),n=r._listener[t];n&&(n.dispose(),delete r._listener[t])};this._disposables.push(i.editor.onDidCreateModel(o)),this._disposables.push(i.editor.onWillDisposeModel((function(e){a(e),r._resetSchema(e.uri)}))),this._disposables.push(i.editor.onDidChangeModelLanguage((function(e){a(e.model),o(e.model),r._resetSchema(e.model.uri)}))),this._disposables.push(n.onDidChange((function(e){i.editor.getModels().forEach((function(e){e.getModeId()===r._languageId&&(a(e),o(e))}))}))),this._disposables.push({dispose:function(){for(var e in i.editor.getModels().forEach(a),r._listener)r._listener[e].dispose()}}),i.editor.getModels().forEach(o)}).prototype.dispose=function(){this._disposables.forEach((function(e){return e&&e.dispose()})),this._disposables=[]},o.prototype._resetSchema=function(e){this._worker().then((function(t){t.resetSchema(e.toString())}))},o.prototype._doValidate=function(e,t){this._worker(e).then((function(n){return n.doValidation(e.toString()).then((function(n){var r=n.map((function(e){return n="number"==typeof(t=e).code?String(t.code):t.code,{severity:u(t.severity),startLineNumber:t.range.start.line+1,startColumn:t.range.start.character+1,endLineNumber:t.range.end.line+1,endColumn:t.range.end.character+1,message:t.message,code:n,source:t.source};var t,n})),o=i.editor.getModel(e);o&&o.getModeId()===t&&i.editor.setModelMarkers(o,t,r)}))})).then(void 0,(function(e){console.error(e)}))},o);function u(e){switch(e){case a.DiagnosticSeverity.Error:return i.MarkerSeverity.Error;case a.DiagnosticSeverity.Warning:return i.MarkerSeverity.Warning;case a.DiagnosticSeverity.Information:return i.MarkerSeverity.Info;case a.DiagnosticSeverity.Hint:return i.MarkerSeverity.Hint;default:return i.MarkerSeverity.Info}}function c(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}function l(e){if(e)return{start:{line:e.startLineNumber-1,character:e.startColumn-1},end:{line:e.endLineNumber-1,character:e.endColumn-1}}}function d(e){if(e)return new(0,i.Range)(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}function g(e){var t=i.languages.CompletionItemKind;switch(e){case a.CompletionItemKind.Text:return t.Text;case a.CompletionItemKind.Method:return t.Method;case a.CompletionItemKind.Function:return t.Function;case a.CompletionItemKind.Constructor:return t.Constructor;case a.CompletionItemKind.Field:return t.Field;case a.CompletionItemKind.Variable:return t.Variable;case a.CompletionItemKind.Class:return t.Class;case a.CompletionItemKind.Interface:return t.Interface;case a.CompletionItemKind.Module:return t.Module;case a.CompletionItemKind.Property:return t.Property;case a.CompletionItemKind.Unit:return t.Unit;case a.CompletionItemKind.Value:return t.Value;case a.CompletionItemKind.Enum:return t.Enum;case a.CompletionItemKind.Keyword:return t.Keyword;case a.CompletionItemKind.Snippet:return t.Snippet;case a.CompletionItemKind.Color:return t.Color;case a.CompletionItemKind.File:return t.File;case a.CompletionItemKind.Reference:return t.Reference}return t.Property}function p(e){if(e)return{range:d(e.range),text:e.newText}}var m,f=(m=function(e){this._worker=e},Object.defineProperty(m.prototype,"triggerCharacters",{get:function(){return[" ",":",'"']},enumerable:!1,configurable:!0}),m.prototype.provideCompletionItems=function(e,t,n,r){var o=e.uri;return this._worker(o).then((function(e){return e.doComplete(o.toString(),c(t))})).then((function(n){if(n){var r=e.getWordUntilPosition(t),o=new(0,i.Range)(t.lineNumber,r.startColumn,t.lineNumber,r.endColumn),s=n.items.map((function(e){var t,n,r={label:e.label,insertText:e.insertText||e.label,sortText:e.sortText,filterText:e.filterText,documentation:e.documentation,detail:e.detail,command:(t=e.command,t&&"editor.action.triggerSuggest"===t.command?{id:t.command,title:t.title,arguments:t.arguments}:void 0),range:o,kind:g(e.kind)};return e.textEdit&&(void 0!==(n=e.textEdit).insert&&void 0!==n.replace?r.range={insert:d(e.textEdit.insert),replace:d(e.textEdit.replace)}:r.range=d(e.textEdit.range),r.insertText=e.textEdit.newText),e.additionalTextEdits&&(r.additionalTextEdits=e.additionalTextEdits.map(p)),e.insertTextFormat===a.InsertTextFormat.Snippet&&(r.insertTextRules=i.languages.CompletionItemInsertTextRule.InsertAsSnippet),r}));return{isIncomplete:n.isIncomplete,suggestions:s}}}))},m);function h(e){return"string"==typeof e?{value:e}:(t=e)&&"object"==typeof t&&"string"==typeof t.kind?"plaintext"===e.kind?{value:e.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:e.value}:{value:"```"+e.language+"\n"+e.value+"\n```\n"};var t}function v(e){if(e)return Array.isArray(e)?e.map(h):[h(e)]}var y,b=((y=function(e){this._worker=e}).prototype.provideHover=function(e,t,n){var r=e.uri;return this._worker(r).then((function(e){return e.doHover(r.toString(),c(t))})).then((function(e){if(e)return{range:d(e.range),contents:v(e.contents)}}))},y);function k(e){var t=i.languages.SymbolKind;switch(e){case a.SymbolKind.File:return t.Array;case a.SymbolKind.Module:return t.Module;case a.SymbolKind.Namespace:return t.Namespace;case a.SymbolKind.Package:return t.Package;case a.SymbolKind.Class:return t.Class;case a.SymbolKind.Method:return t.Method;case a.SymbolKind.Property:return t.Property;case a.SymbolKind.Field:return t.Field;case a.SymbolKind.Constructor:return t.Constructor;case a.SymbolKind.Enum:return t.Enum;case a.SymbolKind.Interface:return t.Interface;case a.SymbolKind.Function:return t.Function;case a.SymbolKind.Variable:return t.Variable;case a.SymbolKind.Constant:return t.Constant;case a.SymbolKind.String:return t.String;case a.SymbolKind.Number:return t.Number;case a.SymbolKind.Boolean:return t.Boolean;case a.SymbolKind.Array:return t.Array}return t.Function}var S,_=((S=function(e){this._worker=e}).prototype.provideDocumentSymbols=function(e,t){var n=e.uri;return this._worker(n).then((function(e){return e.findDocumentSymbols(n.toString())})).then((function(e){if(e)return e.map((function(e){return{name:e.name,detail:"",containerName:e.containerName,kind:k(e.kind),range:d(e.location.range),selectionRange:d(e.location.range),tags:[]}}))}))},S);function C(e){return{tabSize:e.tabSize,insertSpaces:e.insertSpaces}}var w,I,x,K,E=((w=function(e){this._worker=e}).prototype.provideDocumentFormattingEdits=function(e,t,n){var r=e.uri;return this._worker(r).then((function(e){return e.format(r.toString(),null,C(t)).then((function(e){if(e&&0!==e.length)return e.map(p)}))}))},w),F=((I=function(e){this._worker=e}).prototype.provideDocumentRangeFormattingEdits=function(e,t,n,r){var o=e.uri;return this._worker(o).then((function(e){return e.format(o.toString(),l(t),C(n)).then((function(e){if(e&&0!==e.length)return e.map(p)}))}))},I),D=((x=function(e){this._worker=e}).prototype.provideDocumentColors=function(e,t){var n=e.uri;return this._worker(n).then((function(e){return e.findDocumentColors(n.toString())})).then((function(e){if(e)return e.map((function(e){return{color:e.color,range:d(e.range)}}))}))},x.prototype.provideColorPresentations=function(e,t,n){var r=e.uri;return this._worker(r).then((function(e){return e.getColorPresentations(r.toString(),t.color,l(t.range))})).then((function(e){if(e)return e.map((function(e){var t={label:e.label};return e.textEdit&&(t.textEdit=p(e.textEdit)),e.additionalTextEdits&&(t.additionalTextEdits=e.additionalTextEdits.map(p)),t}))}))},x),R=((K=function(e){this._worker=e}).prototype.provideFoldingRanges=function(e,t,n){var r=e.uri;return this._worker(r).then((function(e){return e.getFoldingRanges(r.toString(),t)})).then((function(e){if(e)return e.map((function(e){var t={start:e.startLine+1,end:e.endLine+1};return void 0!==e.kind&&(t.kind=function(e){switch(e){case a.FoldingRangeKind.Comment:return i.languages.FoldingRangeKind.Comment;case a.FoldingRangeKind.Imports:return i.languages.FoldingRangeKind.Imports;case a.FoldingRangeKind.Region:return i.languages.FoldingRangeKind.Region}}(e.kind)),t}))}))},K);var P,T=((P=function(e){this._worker=e}).prototype.provideSelectionRanges=function(e,t,n){var r=e.uri;return this._worker(r).then((function(e){return e.getSelectionRanges(r.toString(),t.map(c))})).then((function(e){if(e)return e.map((function(e){for(var t=[];e;)t.push({range:d(e.range)}),e=e.parent;return t}))}))},P)})),t.register("3UF6Y",(function(n,r){e(n.exports,"createTokenizationSupport",(function(){return i}));var o=t("fZzxC");function i(e){return{getInitialState:function(){return new k(null,null,!1,null)},tokenize:function(t,n,r,i){return function(e,t,n,r,i){void 0===r&&(r=0);var a=0,s=!1;switch(n.scanError){case 2:t='"'+t,a=1;break;case 1:t="/*"+t,a=2}var S=o.createScanner(t),_=n.lastWasColon,C=n.parents,w={tokens:[],endState:n.clone()};for(;;){var I=r+S.getPosition(),x="",K=S.scan();if(17===K)break;if(I===r+S.getPosition())throw new Error("Scanner did not advance, next 3 characters are: "+t.substr(S.getPosition(),3));switch(s&&(I-=a),s=a>0,K){case 1:C=b.push(C,0),x=u,_=!1;break;case 2:C=b.pop(C),x=u,_=!1;break;case 3:C=b.push(C,1),x=c,_=!1;break;case 4:C=b.pop(C),x=c,_=!1;break;case 6:x=l,_=!0;break;case 5:x=d,_=!1;break;case 8:case 9:x=g,_=!1;break;case 7:x=p,_=!1;break;case 10:var E=C?C.type:0;x=_||1===E?m:h,_=!1;break;case 11:x=f,_=!1}if(e)switch(K){case 12:x=y;break;case 13:x=v}w.endState=new k(n.getStateData(),S.getTokenError(),_,C),w.tokens.push({startIndex:I,scopes:x})}return w}(e,t,n,r)}}}var a,s,u="delimiter.bracket.json",c="delimiter.array.json",l="delimiter.colon.json",d="delimiter.comma.json",g="keyword.json",p="keyword.json",m="string.value.json",f="number.json",h="string.key.json",v="comment.block.json",y="comment.line.json",b=((a=function(e,t){this.parent=e,this.type=t}).pop=function(e){return e?e.parent:null},a.push=function(e,t){return new a(e,t)},a.equals=function(e,t){if(!e&&!t)return!0;if(!e||!t)return!1;for(;e&&t;){if(e===t)return!0;if(e.type!==t.type)return!1;e=e.parent,t=t.parent}return!0},a),k=((s=function(e,t,n,r){this._state=e,this.scanError=t,this.lastWasColon=n,this.parents=r}).prototype.clone=function(){return new s(this._state,this.scanError,this.lastWasColon,this.parents)},s.prototype.equals=function(e){return e===this||!!(e&&e instanceof s)&&this.scanError===e.scanError&&this.lastWasColon===e.lastWasColon&&b.equals(this.parents,e.parents)},s.prototype.getStateData=function(){return this._state},s.prototype.setStateData=function(e){this._state=e},s)}))}();