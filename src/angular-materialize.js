(function (angular) {
    angular.module("ui.materialize", ["ui.materialize.tabs", "ui.materialize.dropdown", "ui.materialize.inputfield", "ui.materialize.parallax","ui.materialize.modal", "ui.materialize.materialboxed"]);

    angular.module("ui.materialize.tabs", [])
        .directive("tabs", [function(){
            return {
                link: function (scope, element, attrs) {
                    element.tabs();
                }
            };
        }]);
    angular.module("ui.materialize.dropdown", [])
        .directive("dropdown", ["$compile", "$timeout", function ($compile, $timeout) {
            return {
                scope: {
                    inDuration: "@",
                    outDuration: "@",
                    constrainWidth: "@",
                    hover: "@",
                    alignment: "@",
                    gutter: "@",
                    belowOrigin: "@"
                },
                link: function (scope, element, attrs) {
                    $timeout(function () {
                        $compile(element.contents())(scope);
                        element.dropdown({
                            inDuration: (angular.isDefined(scope.inDuration)) ? scope.inDuration : undefined,
                            outDuration: (angular.isDefined(scope.outDuration)) ? scope.outDuration : undefined,
                            constrain_width: (angular.isDefined(scope.constrainWidth)) ? scope.constrainWidth : undefined,
                            hover: (angular.isDefined(scope.hover)) ? scope.hover : undefined,
                            alignment: (angular.isDefined(scope.alignment)) ? scope.alignment : undefined,
                            gutter: (angular.isDefined(scope.gutter)) ? scope.gutter : undefined,
                            belowOrigin: (angular.isDefined(scope.belowOrigin)) ? scope.belowOrigin : undefined
                         });
                     });
                 }
              };
          }]);
    angular.module("ui.materialize.inputfield", [])
        .directive('inputField', ["$compile", "$timeout", function ($compile, $timeout) {
            return {
                transclude: true,
                scope: {},
                link: function (scope, element) {
                    $timeout(function () {
                        Materialize.updateTextFields();

                        // The "> > [selector]", is to restrict to only those tags that are direct children of the directive element. Otherwise we might hit to many elements with the selectors.

                        // Triggering autoresize of the textareas.
                        element.find("> > .materialize-textarea").each(function () {
                            var that = $(this);
                            that.addClass("materialize-textarea");
                            that.trigger("autoresize");
                            var model = that.attr("ng-model");
                            if (model) {
                                scope.$parent.$watch(model, function (a, b) {
                                    if (a !== b) {
                                        $timeout(function () {
                                            that.trigger("autoresize");
                                        });
                                    }
                                });
                            }
                        });
    /*     example usage:
     <!-- Modal Trigger -->
     <a class='btn' href='#demoModal' modal>show Modal</a>
     <!-- Modal Structure -->
     <div id="demoModal" class="modal">
     <div class="modal-content">
     <h4>Modal Header</h4>
     <p>A bunch of text</p>
     </div>
     <div class="modal-footer">
     <a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
     </div>
     </div>
     */
    
    angular.module("ui.materialize.parallax", [])
        .directive("parallax", ["$timeout", function($timeout){
            return {
                link: function(scope, element, attrs) {
                    $timeout(function(){
                        element.parallax();
                    });
                }
            };
        }]);
                        
    angular.module("ui.materialize.modal", [])
        .directive("modal", ["$compile", "$timeout", function ($compile, $timeout) {
            return {
                scope: {
                    dismissible: "=",
                    opacity: "@",
                    inDuration: "@",
                    outDuration: "@"
                },
                link: function (scope, element, attrs) {
                    $timeout(function () {
                        $compile(element.contents())(scope);
                        element.leanModal({
                            dismissible: (angular.isDefined(scope.dismissible)) ? scope.dismissible : undefined,
                            opacity: (angular.isDefined(scope.opacity)) ? scope.opacity : undefined,
                            in_duration: (angular.isDefined(scope.inDuration)) ? scope.inDuration : undefined,
                            out_duration: (angular.isDefined(scope.outDuration)) ? scope.outDuration : undefined
                        });
                    });
                }
            };
        }]);