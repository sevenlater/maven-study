// description:后台主页面的脚本
// author:vicshang（2016-06-29 16:59:35）
// update:
var JBIndex = function () {
    this.yourApp;
    this.tplPrefix="/static/dev/js";//模版前缀
    //一级菜单的列表，主要用来展示面包屑
    this.menuList={
        "components":"自定义组件",
        "signOutMng":"退出"
    };
};
JBIndex.prototype = {
    init: function () {
        var _that=this;
        //注册angular模块
        this.yourApp = angular.module('yourApp',['ui.router','oc.lazyLoad','bw.paging','ngFileUpload','angular-sortable-view', 'xianzhi']);

        //配置模块信息，左侧菜单的配置
        this.yourApp.config(function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
            //默认没有路径进入文章列表
            $urlRouterProvider.otherwise('/');
            //配置路由
            $stateProvider
            .state('components_single', {//模块配图列表
                url: '/components/single',
                title:'组件展示',//叶子菜单的名称
                pMenu:'components',// 一级菜单项
                pSubMenu:'components.single', // 二级菜单项
                templateUrl: _that.tplPrefix+'/tpl/components/single.html', // 模板位置
                resolve: {//依赖的controller、service、directive
                    loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load([_that.tplPrefix+'/ctrl/components/singleCtrl.js']); // 加载对应的js
                    }]
                }
            })
            .state('components_buttons', {//模块配图列表
                url: '/components/buttons',
                title:'按钮和图标',//叶子菜单的名称
                pMenu:'components',// 一级菜单项
                pSubMenu:'components.btns', // 二级菜单项
                templateUrl: _that.tplPrefix+'/tpl/components/buttons.html', // 模板位置
                resolve: {//依赖的controller、service、directive
                    loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load([_that.tplPrefix+'/ctrl/components/btnCtrl.js']); // 加载对应的js
                    }]
                }
            })
            .state('components_aceeles', {//模块配图列表
                url: '/components/aceeles',
                title:'ACE组件',//叶子菜单的名称
                pMenu:'components',// 一级菜单项
                pSubMenu:'components.aceeles', // 二级菜单项
                templateUrl: _that.tplPrefix+'/tpl/components/aceeles.html', // 模板位置
                resolve: {//依赖的controller、service、directive
                    loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load([_that.tplPrefix+'/ctrl/components/aceeleCtrl.js']); // 加载对应的js
                    }]
                }
            })
            .state('components_form', {//模块配图列表
                url: '/components/form',
                title:'表单',//叶子菜单的名称
                pMenu:'components',// 一级菜单项
                pSubMenu:'components.form', // 二级菜单项
                templateUrl: _that.tplPrefix+'/tpl/components/form.html', // 模板位置
                resolve: {//依赖的controller、service、directive
                    loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load([_that.tplPrefix+'/ctrl/components/form.js']); // 加载对应的js
                    }]
                }
            })
        });

        this.yourApp.run(function($rootScope,$state,$stateParams,$templateCache){
            //监听状态成功事件
            var stateChangeSuccess = $rootScope.$on('$stateChangeSuccess', function(event,currentRoute,previousRoute){
                //将参数上的title赋值给全局作用域的pageTitle
                $rootScope.pageTitle=currentRoute.title;
                $rootScope.pMenu=currentRoute.pMenu;
                $rootScope.pSubMenu=currentRoute.pSubMenu;
                $rootScope.moduleName=_that.menuList[currentRoute.pMenu];
                $templateCache.removeAll();
            });
        });
        //注销
        this.yourApp.controller('LogoutCtrl',function($scope,$http,$rootScope,$stateParams){
            $scope.logout=function(){
                $http.get("/jinba/user/exit_logout")
                .success(function(data) {
                    if(data.retCode==200){
                        var _url=data.body;
                        window.location.href=_url;
                    }else{
                        alert(data.message);
                    }
                })
                .error(function(res) {
                    alert(res.message)
                });
            };
        });
        //左侧菜单控制器
        this.yourApp.controller('leftMenuCtrl',function($scope,$http,$rootScope){
            $rootScope.pushMsg=true;//文章管理菜单
            // $rootScope.moduleName="文章管理";
            //左侧菜单点击事件
            $scope.clickHandle=function(value,moduleName){
                $rootScope[value]=!$rootScope[value];
                // $rootScope.moduleName=moduleName;
            }
        });
        //file-model指令
        this.yourApp.directive('fileModel', ['$parse', function ($parse) {
            return {
                restrict: 'A',
                link: function(scope, element, attrs) {
                    var model = $parse(attrs.fileModel);
                    var modelSetter = model.assign;
                    
                    element.bind('change', function(){
                        scope.$apply(function(){
                            modelSetter(scope, element[0].files[0]);
                        });
                    });
                }
            };
        }]);
        //新增推送页推送内容列表是否render完成
        this.yourApp.directive('repeatFinish', function ($timeout) {
            return {
                restrict: 'A',
                link: function(scope, element, attr) {
                    if (scope.$last === true) {
                        $timeout(function() {
                            scope.$emit('ngRepeatFinished');
                        });
                    }
                }
            };
        });


        this.yourApp.filter('trustHtml', function ($sce) {
            return function (input) {
                return $sce.trustAsHtml(input);
            }
        });

        //左侧导航样式改变
        // this.jbMgnApp.controller("LeftFrameController", function ($scope) {
        //     $scope.changeLeftStyle = function (index) {
        //         $scope.index1 = "unclicked";
        //         $scope.index2 = "unclicked";
        //         $scope.index3 = "unclicked";
        //         $scope.index4 = "unclicked";
        //         $scope.index5 = "unclicked";
        //         $scope["index"+index] = "clicked";
        //     }
        // });

        angular.bootstrap(document,["yourApp"],[function(){
            alert("config");
        }]);//启动angular
    }
};
var jbIndex = new JBIndex();
jbIndex.init();