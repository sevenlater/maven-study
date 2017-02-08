/*
    包装了一些常用的控件，方便维护和使用
    可以将公共的组件封装在这里
*/
(function(){
var xianzhi = angular.module('xianzhi', []);

/*
 * xzdatepicker 日期选择器
 *
 * 作为input标签的属性出现，默认格式为yyyy-MM-dd HH:mm:ss
 * 使用： <input type="text" ng-model="model" xzdatepicker/>
 * 使用其他格式 <input type="text" ng-model="model" xzdatepicker='yyyy-MM-dd" />
 */
xianzhi.directive('xzDatepicker', function () {
    //时间选择器 2015-11-06 12:39:10
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, ngModel) {
            // 日期选择事件
            function on_picking(dp) {
                var date = dp.cal.getNewDateStr();

                scope.$apply(function () {
                    ngModel.$setViewValue(date);
                });
            }
            // 日期清空事件
            function on_clear(dp) {
                scope.$apply(function () {
                    ngModel.$setViewValue(null);
                });
            }

            element.bind('click', function () {
                WdatePicker({
                    onpicked: on_picking,
                    oncleared: on_clear,
                    dateFmt: attrs.xzDatepicker || 'yyyy-MM-dd HH:mm:ss'
                })
            });

        }
    };
});



/*
 * 同 xzdatepicker，不过默认格式为 yyyy-MM-dd， 为方便使用
 */
xianzhi.directive('xzShortDatepicker', function () {
    //时间选择器 2015-11-06 12:39:10
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, ngModel) {
            // 日期选择事件
            function on_picking(dp) {
                var date = dp.cal.getNewDateStr();

                scope.$apply(function () {
                    ngModel.$setViewValue(date);
                });
            }
            // 日期清空事件
            function on_clear(dp) {
                scope.$apply(function () {
                    ngModel.$setViewValue(null);
                });
            }

            element.bind('click', function () {
                WdatePicker({
                    onpicked: on_picking,
                    oncleared: on_clear,
                    dateFmt: attrs.xzShortDatepicker || 'yyyy-MM-dd'
                })
            });

        }
    };
});
})();

