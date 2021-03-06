/// <reference path="../../typings/angularjs/angular.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Danel;
(function (Danel) {
    var HomeCtrl = (function (_super) {
        __extends(HomeCtrl, _super);
        function HomeCtrl($scope) {
            var _this = _super.call(this, "HomeCtrl", $scope) || this;
            var me = _this;
            _this.isActiveWebSite = me.parametersService.GetDanelParameter(Danel.WebParameter.IsActiveWebSite) == 'true';
            return _this;
        }
        return HomeCtrl;
    }(Danel.DanelCtrl));
    angular.module("Danel").controller("HomeCtrl", [
        "$scope",
        HomeCtrl,
    ]);
})(Danel || (Danel = {}));
//# sourceMappingURL=HomeCtrl.js.map