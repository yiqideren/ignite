require.register("config.jsenv",function(t,e,r){r.exports={BUILD:"git-0e2f0bd"}});var toString$={}.toString;PDFJS.workerSrc="/pdf.worker.js",angular.module("App",["app.templates","ngMaterial","ui.router","pdf","angular-files-model","filereader","ngStorage","ui.sortable"]).config(["$stateProvider","$urlRouterProvider","$locationProvider"].concat(function(t,e,r){return t.state("about",{url:"/about",templateUrl:"app/partials/about.html",controller:"About"}),e.otherwise("/about"),r.html5Mode(!0)})).run(["$rootScope","$state","$stateParams","$location","$window","$anchorScroll"].concat(function(t,e,r,o){return t.$state=e,t.$stateParam=r,t.config_build=require("config.jsenv").BUILD,t.$on("$stateChangeSuccess",function(t,e){var r;return r=e.name,"undefined"!=typeof window&&null!==window&&"function"==typeof window.ga?window.ga("send","pageview",{page:o.$$path,title:r}):void 0})})).controller({AppCtrl:["$scope","$location","$rootScope","$sce","$mdSidenav"].concat(function(t,e,r,o,n){return t.$location=e,t.$watch("$location.path()",function(e){return e||(e="/"),t.activeNavId=e,t}),t.getClass=function(e){return t.activeNavId.substring(0,e.length===e)?"active":""},t.hover=function(){return n("left").open()}})}).controller({About:["$rootScope","$http","$scope","$mdSidenav","$localStorage"].concat(function(t,e,r,o,n){return r.$storage=n,t.activeTab="about",t.pdfUrl="/",r.toggleLeft=function(){return o("left").toggle()}})}).controller({PDFPlayerCtrl:["$rootScope","$scope","$interval"].concat(function(t,e,r){var o;return o=15e3,e.$parent.ready=!1,t.started=!1,t.pageProgress=0,t.slideProgress=5,e.$parent.onLoad=function(){return e.$parent.ready=!0},e.start=function(){return e.page=1,t.started=!0,t.pageProgress=0,r(function(){return $(".md-bar2").css({transition:"all "+o/1e3+"s linear"}),t.pageProgress=100},100,1),t.stop=r(function(){return e.page+=1,e.page>e.pageCount?(t.started=!1,e.$parent.ready=!1,r.cancel(t.stop)):(e.goNext(),t.slideProgress+=100/e.pageCount,$(".md-bar2").css({transition:""}),t.pageProgress=0,r(function(){return $(".md-bar2").css({transition:"all "+o/1e3+"s linear"}),t.pageProgress=100},100,1))},o,e.pageCount)},e.end=function(){return t.hasPDF=!1},e.$watch("page > pageCount",function(t){return t?e.end():void 0})})}).controller({LeftCtrl:["$rootScope","$scope","$timeout","$interval","$mdSidenav","$log","FileReader","$localStorage"].concat(function(t,e,r,o,n,a,i,c){var l;return e.$storage=c,(l=e.$storage).files||(l.files=[]),e.trigger=function(o){return e.close(),t.hasPDF=!1,delete t.pdfUrl,r(function(r){return console.log(r),"File"===toString$.call(o).slice(8,-1)?void i.readAsDataURL(o,e).then(function(e){return t.pdfUrl=e,t.hasPDF=!0}):(t.pdfUrl=o.link,t.hasPDF=!0)},200)},e.dropbox=function(){return Dropbox.choose({success:function(t){return console.log(JSON.stringify(t)),e.$apply(function(){return e.$storage.files=t})},linkType:"direct",multiselect:!0,extensions:[".pdf"]})},e.$watch("localFiles",function(t){var r;return null!=t&&t.length?e.$storage.files=function(){var e,o,n,a=[];for(e=0,n=(o=t).length;n>e;++e)r=o[e],a.push(r);return a}():void 0}),e.reset=function(){return t.hasPDF=!1,t.stop?o.cancel(t.stop):void 0},e.close=function(){return n("left").close()}})});