webpackJsonp([49],{1713:function(a,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=function(){function a(a){var n=this;this.snippets={compiled:{},raw:{}},a.keys().forEach(function(t){var s=t.replace("./","").replace(/\W+(\w)/g,function(a){return a[1].toUpperCase()}),e=a(t);e.snippet&&(n.snippets.compiled[s]=e.snippet),e.example&&(n.snippets.raw[s]=e.example)})}return a}();n.BaseDocumentationSection=s},3314:function(a,n,t){"use strict";var s=this&&this.__decorate||function(a,n,t,s){var e,l=arguments.length,p=l<3?n:null===s?s=Object.getOwnPropertyDescriptor(n,t):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(a,n,t,s);else for(var o=a.length-1;o>=0;o--)(e=a[o])&&(p=(l<3?e(p):l>3?e(n,t,p):e(n,t))||p);return l>3&&p&&Object.defineProperty(n,t,p),p},e=this&&this.__metadata||function(a,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(a,n)};Object.defineProperty(n,"__esModule",{value:!0});var l=t(0),p=t(24),o=t(408),c=t(173),r=t(409),i=t(3315),u=t(3319),d=[u.CssLabelsComponent,i.CssStaticTextComponent],b=[{path:"**",component:r.DocumentationCategoryComponent,data:{category:c.ResolverService.resolveCategoryData(c.DocumentationPage.Css,"Labels")}}],k=function(){function a(a,n){n.registerResolver(a)}return a}();k=s([l.NgModule({imports:[o.DocumentationComponentsModule,p.RouterModule.forChild(b)],exports:d,declarations:d,entryComponents:d}),e("design:paramtypes",[l.ComponentFactoryResolver,c.ResolverService])],k),n.CssLabelsModule=k},3315:function(a,n,t){"use strict";var s=this&&this.__extends||function(){var a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,n){a.__proto__=n}||function(a,n){for(var t in n)n.hasOwnProperty(t)&&(a[t]=n[t])};return function(n,t){function s(){this.constructor=n}a(n,t),n.prototype=null===t?Object.create(t):(s.prototype=t.prototype,new s)}}(),e=this&&this.__decorate||function(a,n,t,s){var e,l=arguments.length,p=l<3?n:null===s?s=Object.getOwnPropertyDescriptor(n,t):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(a,n,t,s);else for(var o=a.length-1;o>=0;o--)(e=a[o])&&(p=(l<3?e(p):l>3?e(n,t,p):e(n,t))||p);return l>3&&p&&Object.defineProperty(n,t,p),p},l=this&&this.__metadata||function(a,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(a,n)};Object.defineProperty(n,"__esModule",{value:!0});var p=t(0),o=t(407),c=t(1713),r=function(a){function n(){var n=a.call(this,t(3316))||this;return n.codepen={html:n.snippets.raw.sampleHtml},n}return s(n,a),n}(c.BaseDocumentationSection);r=e([p.Component({selector:"uxd-css-labels-static-text",template:t(3318)}),o.DocumentationSectionComponent("CssStaticTextComponent"),l("design:paramtypes",[])],r),n.CssStaticTextComponent=r},3316:function(a,n,t){function s(a){return t(e(a))}function e(a){var n=l[a];if(!(n+1))throw new Error("Cannot find module '"+a+"'.");return n}var l={"./sample.html":3317};s.keys=function(){return Object.keys(l)},s.resolve=e,a.exports=s,s.id=3316},3317:function(a,n){a.exports={snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>form-control-static<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Static text<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',example:'<p class="form-control-static">Static text</p>'}},3318:function(a,n){a.exports='<div class="demo">\r\n    <p class="form-control-static m-b">Static text</p>\r\n</div>\r\n\r\n<p>For a static input use <code>p</code> instead of <code>input</code> with <code>.form-control-static</code>.</p>\r\n\r\n<uxd-snippet [content]="snippets.compiled.sampleHtml"></uxd-snippet>'},3319:function(a,n,t){"use strict";var s=this&&this.__extends||function(){var a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,n){a.__proto__=n}||function(a,n){for(var t in n)n.hasOwnProperty(t)&&(a[t]=n[t])};return function(n,t){function s(){this.constructor=n}a(n,t),n.prototype=null===t?Object.create(t):(s.prototype=t.prototype,new s)}}(),e=this&&this.__decorate||function(a,n,t,s){var e,l=arguments.length,p=l<3?n:null===s?s=Object.getOwnPropertyDescriptor(n,t):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(a,n,t,s);else for(var o=a.length-1;o>=0;o--)(e=a[o])&&(p=(l<3?e(p):l>3?e(n,t,p):e(n,t))||p);return l>3&&p&&Object.defineProperty(n,t,p),p},l=this&&this.__metadata||function(a,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(a,n)};Object.defineProperty(n,"__esModule",{value:!0});var p=t(0),o=t(407),c=t(1713),r=function(a){function n(){var n=a.call(this,t(3320))||this;return n.codepen={html:n.snippets.raw.codeExampleHtml},n}return s(n,a),n}(c.BaseDocumentationSection);r=e([p.Component({selector:"uxd-css-labels-labels",template:t(3324)}),o.DocumentationSectionComponent("CssLabelsComponent"),l("design:paramtypes",[])],r),n.CssLabelsComponent=r},3320:function(a,n,t){function s(a){return t(e(a))}function e(a){var n=l[a];if(!(n+1))throw new Error("Cannot find module '"+a+"'.");return n}var l={"./code.example.html":3321,"./sample1.snippet.html":3322,"./sample2.snippet.html":3323};s.keys=function(){return Object.keys(l)},s.resolve=e,a.exports=s,s.id=3320},3321:function(a,n){a.exports={example:'<div class="m-t-lg m-l-lg">\r\n    <span class="label label-primary m-r-sm">Featured</span>\r\n    <span class="label label-accent m-r-sm">Recently Added</span>\r\n    <span class="label label-grey4 m-r-sm">On Hold</span>\r\n</div>\r\n<div class="m-t-lg m-l-lg">\r\n    <span class="label label-outline-alternate2 m-r-sm">Contact</span>\r\n    <span class="label label-outline-alternate3 m-r-sm">Company</span>\r\n    <span class="label label-outline-grey4">Location</span>\r\n</div>\r\n<div class="m-t-lg m-l-lg">\r\n    <span class="label label-ok m-r-sm">Completed</span>\r\n    <span class="label label-warning m-r-sm">Canceled</span>\r\n    <span class="label label-critical">Failed</span>\r\n</div>\r\n<div class="m-t-lg m-l-lg">\r\n    <span class="label flat-edge-right label-accent m-r-sm">9 hits</span>\r\n    <span class="label flat-edge-right label-primary m-r-sm">400 hits</span>\r\n    <span class="label flat-edge-right label-outline-alternate2">92 hits</span>\r\n</div>\r\n<div class="m-t-lg m-l-lg">\r\n    <span class="label flat-edge-left label-accent m-r-sm">9 hits</span>\r\n    <span class="label flat-edge-left label-primary m-r-sm">400 hits</span>\r\n    <span class="label flat-edge-left label-outline-alternate2">92 hits</span>\r\n</div>\r\n'}},3322:function(a,n){a.exports={snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>General Labels<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\r\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>label label-primary m-r-sm<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Featured<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\r\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>label label-accent m-r-sm<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Recently Added<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\r\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>label label-grey4 m-r-sm<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>On Hold<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\r\n\r\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>m-t-md<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Outline Labels<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\r\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>label label-outline-vibrant2 m-r-sm<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Contact<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\r\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>label label-outline-vibrant1 m-r-sm<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Company<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\r\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>label label-outline-alternate1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Location<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\r\n\r\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>m-t-md<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Status Labels<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\r\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>label label-ok m-r-sm<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Completed<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\r\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>label label-warning m-r-sm<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Canceled<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\r\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>label label-critical<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Failed<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\r\n'}},3323:function(a,n){a.exports={snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>m-t-md<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Flat Edge Right Labels<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\r\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>label flat-edge-right label-accent m-r-sm<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>9 hits<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\r\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>label flat-edge-right label-primary m-r-sm<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>400 hits<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\r\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>label flat-edge-right label-outline-alternate2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>92 hits<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\r\n\r\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>m-t-md<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Flat Edge Left Labels<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\r\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>label flat-edge-left label-accent m-r-sm<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>9 hits<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\r\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>label flat-edge-left label-primary m-r-sm<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>400 hits<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\r\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>label flat-edge-left label-outline-alternate2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>92 hits<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>'}},3324:function(a,n){a.exports='<p>General Labels</p>\r\n<span class="label label-primary m-r-sm">Featured</span>\r\n<span class="label label-accent m-r-sm">Recently Added</span>\r\n<span class="label label-grey4 m-r-sm">On Hold</span>\r\n\r\n<p class="m-t-md">Outline Labels</p>\r\n<span class="label label-outline-vibrant2 m-r-sm">Contact</span>\r\n<span class="label label-outline-vibrant1 m-r-sm">Company</span>\r\n<span class="label label-outline-alternate1">Location</span>\r\n\r\n<p class="m-t-md">Status Labels</p>\r\n<span class="label label-ok m-r-sm">Completed</span>\r\n<span class="label label-warning m-r-sm">Canceled</span>\r\n<span class="label label-critical">Failed</span>\r\n\r\n<hr>\r\n\r\n<p>Use <code>span.label</code> to create a label. UX Aspects offers a wide range of label &amp; outline label colors. Set the\r\n    color of the label using one of the following classes:</p>\r\n\r\n<div class="row">\r\n    <div class="col-md-6 col-sm-12">\r\n        <table class="table">\r\n            <tbody>\r\n                <tr>\r\n                    <th>General Labels</th>\r\n                    <th></th>\r\n                </tr>\r\n                <tr>\r\n                    <td><code>.label-primary</code></td>\r\n                    <td><label class="label label-primary">primary</label></td>\r\n                </tr>\r\n                <tr>\r\n\r\n                    <td><code>.label-accent</code></td>\r\n                    <td><label class="label label-accent">accent</label></td>\r\n                </tr>\r\n                <tr>\r\n                    <td><code>.label-alternate1</code></td>\r\n                    <td><label class="label label-alternate1">alternate 1</label></td>\r\n                </tr>\r\n                <tr>\r\n                    <td><code>.label-alternate2</code></td>\r\n                    <td><label class="label label-alternate2">alternate 2</label></td>\r\n                </tr>\r\n                <tr>\r\n                    <td><code>.label-alternate3</code></td>\r\n                    <td><label class="label label-alternate3">alternate 3</label></td>\r\n                </tr>\r\n                <tr>\r\n                    <td><code>.label-vibrant1</code></td>\r\n                    <td><label class="label label-vibrant1">vibrant 1</label></td>\r\n                </tr>\r\n                <tr>\r\n                    <td><code>.label-vibrant2</code></td>\r\n                    <td><label class="label label-vibrant2">vibrant 2</label></td>\r\n                </tr>\r\n                <tr>\r\n                    <td><code>.label-grey1</code></td>\r\n                    <td><label class="label label-grey1">grey 1</label></td>\r\n                </tr>\r\n                <tr>\r\n                    <td><code>.label-grey2</code></td>\r\n                    <td><label class="label label-grey2">grey 2</label></td>\r\n                </tr>\r\n                <tr>\r\n                    <td><code>.label-grey3</code></td>\r\n                    <td><label class="label label-grey3">grey 3</label></td>\r\n                </tr>\r\n                <tr>\r\n                    <td><code>.label-grey4</code></td>\r\n                    <td><label class="label label-grey4">grey 4</label></td>\r\n                </tr>\r\n                <tr>\r\n                    <td><code>.label-grey5</code></td>\r\n                    <td><label class="label label-grey5">grey 5</label></td>\r\n                </tr>\r\n                <tr>\r\n                    <td><code>.label-ok</code></td>\r\n                    <td><label class="label label-ok">ok</label></td>\r\n                </tr>\r\n                <tr>\r\n                    <td><code>.label-warning</code></td>\r\n                    <td><label class="label label-warning">warning </label></td>\r\n                </tr>\r\n                <tr>\r\n                    <td><code>.label-critical</code></td>\r\n                    <td><label class="label label-critical">critical</label></td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n\r\n    <div class="col-md-6 col-sm-12">\r\n        <table class="table">\r\n            <tbody>\r\n                <tr>\r\n                    <th>Outline Labels</th>\r\n                    <th></th>\r\n                </tr>\r\n                <tr>\r\n                    <td><code>.label-outline-primary</code></td>\r\n                    <td><label class="label label-outline-primary">outline primary</label></td>\r\n                </tr>\r\n                <tr>\r\n                    <td><code>.label-outline-accent</code></td>\r\n                    <td><label class="label label-outline-accent">outline accent</label></td>\r\n                </tr>\r\n                <tr>\r\n                    <td><code>.label-outline-alternate1</code></td>\r\n                    <td><label class="label label-outline-alternate1">outline alternate 1</label></td>\r\n                </tr>\r\n                <tr>\r\n                    <td><code>.label-outline-alternate2</code></td>\r\n                    <td><label class="label label-outline-alternate2">outline alternate 2</label></td>\r\n                </tr>\r\n                <tr>\r\n                    <td><code>.label-outline-alternate3</code></td>\r\n                    <td><label class="label label-outline-alternate3">outline alternate 3</label></td>\r\n                </tr>\r\n                <tr>\r\n                    <td><code>.label-outline-vibrant1</code></td>\r\n                    <td><label class="label label-outline-vibrant1">outline vibrant 1</label></td>\r\n                </tr>\r\n                <tr>\r\n                    <td><code>.label-outline-vibrant2</code></td>\r\n                    <td><label class="label label-outline-vibrant2">outline vibrant 2</label></td>\r\n                </tr>\r\n                <tr>\r\n                    <td><code>.label-outline-grey1</code></td>\r\n                    <td><label class="label label-outline-grey1">outline grey 1</label></td>\r\n                </tr>\r\n                <tr>\r\n                    <td><code>.label-outline-grey2</code></td>\r\n                    <td><label class="label label-outline-grey2">outline grey 2</label></td>\r\n                </tr>\r\n                <tr>\r\n                    <td><code>.label-outline-grey3</code></td>\r\n                    <td><label class="label label-outline-grey3">outline grey 3</label></td>\r\n                </tr>\r\n                <tr>\r\n                    <td><code>.label-outline-grey4</code></td>\r\n                    <td><label class="label label-outline-grey4">outline grey 4</label></td>\r\n                </tr>\r\n                <tr>\r\n                    <td><code>.label-oultine-grey5</code></td>\r\n                    <td><label class="label label-outline-grey5">outline grey 5</label></td>\r\n                </tr>\r\n                <tr>\r\n                    <td><code>.label-outline-ok</code></td>\r\n                    <td><label class="label label-outline-ok">outline ok</label></td>\r\n                </tr>\r\n                <tr>\r\n                    <td><code>.label-outline-warning</code></td>\r\n                    <td><label class="label label-outline-warning">outline warning</label></td>\r\n                </tr>\r\n                <tr>\r\n                    <td><code>.label-outline-critical</code></td>\r\n                    <td><label class="label label-outline-critical">outline critical</label></td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n\r\n<p>If the colour of the label is being used to convey meaning, include an <code>aria-label</code> attribute to describe this\r\n    information to users of assistive technologies.</p>\r\n\r\n<uxd-snippet [content]="snippets.compiled.sample1SnippetHtml"></uxd-snippet>\r\n\r\n<hr>\r\n\r\n<p class="m-t-md">Flat Edge Right Labels</p>\r\n<p><span class="label flat-edge-right label-accent m-r-sm">9 hits</span>\r\n    <span class="label flat-edge-right label-primary m-r-sm">400 hits</span>\r\n    <span class="label flat-edge-right label-outline-alternate2">92 hits</span></p>\r\n\r\n<p class="m-t-md">Flat Edge Left Labels</p>\r\n<p><span class="label flat-edge-left label-accent m-r-sm">9 hits</span>\r\n    <span class="label flat-edge-left label-primary m-r-sm">400 hits</span>\r\n    <span class="label flat-edge-left label-outline-alternate2">92 hits</span></p>\r\n\r\n<hr>\r\n\r\n<p>Adding the <code>.flat-edge-right</code> or <code>.flat-edge-left</code> classes will offer a label with a flat edge on the\r\n    right or left and will not convert text to uppercase. This is recomended for use with hit counters.</p>\r\n\r\n<uxd-snippet [content]="snippets.compiled.sample2SnippetHtml"></uxd-snippet>'}});