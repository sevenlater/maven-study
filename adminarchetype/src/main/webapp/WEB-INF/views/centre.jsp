<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix='fmt' uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <title ng-bind="pageTitle">综合管理后台</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

    <!-- 自定义样式 -->
    <link rel="stylesheet" href="/static/dev/css/all_style.css"/>
    <!-- 自定义样式 -->

    <link href="assets/css/bootstrap.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="assets/css/font-awesome.min.css" />
    <!--[if IE 7]>
      <link rel="stylesheet" href="assets/css/font-awesome-ie7.min.css" />
    <![endif]-->

    <!-- ace styles -->

    <link rel="stylesheet" href="assets/css/ace.min.css" />
    <link rel="stylesheet" href="assets/css/ace-rtl.min.css" />
    <link rel="stylesheet" href="assets/css/ace-skins.min.css" />

    <!--[if lte IE 8]>
    <link rel="stylesheet" href="/assets/css/ace-ie.min.css"/>
    <![endif]-->
    <script src="/assets/js/ace-extra.min.js"></script>
    <!--[if lt IE 9]>
    <script src="/assets/js/html5shiv.js"></script>
    <script src="/assets/js/respond.min.js"></script>
    <![endif]-->
</head>

<body>
<input type="hidden" id="cdnHost" value="${cdnHost}">
<!-- 页面顶栏 开始 -->
<div class="navbar navbar-default" id="navbar">

    <!-- 头部 开始 -->
    <div class="navbar-container" id="navbar-container">
        <!-- 左侧标题 开始 -->
        <div class="navbar-header pull-left">
            <a href="#" class="navbar-brand">
                <small>
                    <i class="icon-leaf"></i>
                    综合管理后台
                </small>
            </a>
        </div>
        <!-- 左侧标题 结束 -->

        <!-- 右侧元素 开始 -->
        <div class="navbar-header pull-right" role="navigation">
            <ul class="nav ace-nav">

                <li class="light-blue">
                    <a data-toggle="dropdown" href="javascript:void(0);" class="dropdown-toggle">
                        <img class="nav-user-photo" src="/static/dev/img/logo.png" alt=""/>
								<span class="user-info">
									<small>欢迎光临,</small>
									<i id="login_user"></i>
								</span>

                        <i class="icon-caret-down"></i>
                    </a>

                    <ul class="user-menu pull-right dropdown-menu dropdown-yellow dropdown-caret dropdown-close">

                        <li class="divider"></li>

                        <li>
                            <a href="javascript:window.location = '/user/exit_logout'">
                                <i class="icon-off"></i>
                                退出
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</div>
<!-- 页面顶栏 结束 -->

<!-- 页面主体 开始 -->
<div class="main-container" id="main-container">
    <div class="main-container-inner">
        <a class="menu-toggler" id="menu-toggler" href="#">
            <span class="menu-text"></span>
        </a>

        <!-- 侧边菜单 开始 -->
        <div class="sidebar menu-min" id="sidebar" ng-controller="leftMenuCtrl">

            <div class="sidebar-shortcuts" id="sidebar-shortcuts">
                <div class="sidebar-shortcuts-large" id="sidebar-shortcuts-large">
                    &nbsp;
                </div>
            </div>

            <ul class="nav nav-list">

                <li ng-class="{'active open':(pMenu=='components')}">
                    <a href="javascript:void(0);" class="dropdown-toggle">
                        <i class="fa fa-picture-o" aria-hidden="true"></i>
                        <span class="menu-text"> 自定义组件 </span>
                        <b class="arrow icon-angle-down"></b>
                    </a>
                    <ul class="submenu">
                        <li ng-click="clickHandle('components','组件')" ng-class="{'active':(pSubMenu=='components.single')}">
                            <!-- ui-sref与main.js中的state中的第一个参数一致 -->
                            <a ui-sref="components_single">
                                <i class="icon-pencil"></i>
                                组件
                            </a>
                        </li>
                        <li ng-click="clickHandle('components','按钮')" ng-class="{'active':(pSubMenu=='components.btns')}">
                            <a ui-sref="components_buttons">
                                <i class="icon-pencil"></i>
                                按钮
                            </a>
                        </li>
                        <li ng-click="clickHandle('components','ACE后台组件')" ng-class="{'active':(pSubMenu=='components.aceeles')}">
                            <a ui-sref="components_aceeles">
                                <i class="icon-pencil"></i>
                                ACE后台组件
                            </a>
                        </li>
                        <li ng-click="clickHandle('components','表单')" ng-class="{'active':(pSubMenu=='components.form')}">
                            <a ui-sref="components_form">
                                <i class="icon-pencil"></i>
                                表单
                            </a>
                        </li>

                    </ul>
                </li>

            </ul>

            <div class="sidebar-collapse" id="sidebar-collapse">
                <i class="icon-double-angle-right" data-icon1="icon-double-angle-left"
                   data-icon2="icon-double-angle-right"></i>
            </div>

            <script type="text/javascript">
                try {
                    ace.settings.check('sidebar', 'collapsed')
                } catch (e) {
                }
            </script>

    </div>
    <!-- 侧边菜单 结束 -->

    <!-- 内容容器 开始 -->
    <div class="main-content">
        <!-- 面包屑 开始 -->
        <div class="breadcrumbs" id="breadcrumbs">
            <ul class="breadcrumb" id="breadcrumbsUl">
                <li>
                    <i class="icon-home home-icon"></i>
                    <a href="#">首页</a>

                    <span ng-if="moduleName">-><span ng-bind="moduleName"></span></span>

                    <span ng-if="pageTitle">-><span ng-bind="pageTitle"></span></span>
                </li>
            </ul>
        </div>
        <!-- 面包屑 结束 -->

        <div class="page-content">
            <!-- 页面内容渲染区 -->
            <div ui-view></div>
            <!-- 页面内容渲染区 -->
        </div>
    </div>
    <!-- 内容容器 结束 -->
</div>

</div>
<!-- 页面主体 结束 -->


<script src='/assets/js/jquery-1.10.2.min.js'></script>
<script src="/assets/js/typeahead-bs2.min.js"></script>
<!--[if lte IE 8]>
<script src="/assets/js/excanvas.min.js"></script>
<![endif]-->
<script src="/assets/js/jquery-ui-1.10.3.full.min.js"></script>
<script src="/assets/js/jquery.ui.touch-punch.min.js"></script>
<script src="/assets/js/jquery.slimscroll.min.js"></script>

<script src="/assets/js/ace-elements.min.js"></script>
<script src="/assets/js/ace.min.js"></script>
<script src="/assets/js/bootstrap.min.js"></script>
<script type="text/javascript" src="/static/dev/js/lib/angular/core/1.5.5/angular.min.js"></script>
<script type="text/javascript" src="/static/dev/js/lib/jquery/jquery.min.js"></script>
<script type="text/javascript" src="/static/dev/js/common/jquery-ui.js"></script>
<script type="text/javascript" src="/static/dev/js/lib/jquery/jquery.datetimepicker.full.min.js"></script>
<script type="text/javascript" src="/static/dev/js/lib/angular/ui-router/0.2.18/angular-ui-router.min.js"></script>
<script type="text/javascript" src="/static/dev/js/lib/oclazyload/1.0.9/ocLazyLoad.min.js"></script>
<script type="text/javascript" src="/static/dev/js/lib/angular/ng-file-upload/ng-file-upload-all.min.js"></script>
<script type="text/javascript" src="/static/dev/js/lib/angular/ng-file-upload/ng-file-upload-shim.min.js"></script>
<script type="text/javascript" src="/static/dev/js/lib/angular/angular-sortable-view.js"></script>
<script type="text/javascript" src="/static/dev/js/lib/angular/plug/paging.js"></script>
<script type="text/javascript" src="/static/dev/js/lib/ueditor/ueditor.config.js?t=16"></script>
<script type="text/javascript" src="/static/dev/js/lib/ueditor/ueditor.all.min.js"></script>
<script type="text/javascript" src="/static/dev/js/lib/ueditor/lang/zh-cn/zh-cn.js"></script>
<script type="text/javascript" src="/static/dev/js/lib/qiniu/plupload.full.min.js"></script>
<script type="text/javascript" src="/static/dev/js/lib/qiniu/qiniu.min.js"></script>
<script type="text/javascript" src="/static/dev/js/lib/bootstrap/bootstrap.min.js"></script>
<script type="text/javascript" src="/static/dev/js/common/myrc4_browser.min.js"></script>
<script type="text/javascript" src="/static/dev/js/common/cryptlib.js"></script>
<script type="text/javascript" src="/static/dev/js/common/core.js"></script>
<script type="text/javascript" src="/static/dev/js/common/upload.iframe.js"></script>
<script type="text/javascript" src="/static/dev/js/common/upload.js"></script>
<script type="text/javascript" src="/static/dev/js/common/preview.js"></script>

<!-- 自定义插件 -->
<script type="text/javascript" src="/static/dev/js/lib/xianzhi/My97DatePicker/WdatePicker.js"></script>
<script type="text/javascript" src="/static/dev/js/lib/xianzhi/xianzhi_plugs.js"></script>

<script type="text/javascript" src="/static/dev/js/main.js?t=02"></script>

</body>

</html>