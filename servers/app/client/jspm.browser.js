SystemJS.config({
  baseURL: "/",
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*",
    "app/": "src/"
  },
  bundles: {
    "build.js": [
      "app/app.js",
      "app/TestData.js",
      "npm:react@15.0.1/react.js",
      "npm:react@15.0.1.json",
      "github:jspm/nodelibs-process@0.2.0-alpha/process.js",
      "github:jspm/nodelibs-process@0.2.0-alpha.json",
      "npm:react@15.0.1/lib/React.js",
      "npm:fbjs@0.8.1/lib/warning.js",
      "npm:fbjs@0.8.1.json",
      "npm:fbjs@0.8.1/lib/emptyFunction.js",
      "npm:react@15.0.1/lib/onlyChild.js",
      "npm:fbjs@0.8.1/lib/invariant.js",
      "npm:react@15.0.1/lib/ReactElement.js",
      "npm:react@15.0.1/lib/canDefineProperty.js",
      "npm:react@15.0.1/lib/ReactCurrentOwner.js",
      "npm:object-assign@4.0.1/index.js",
      "npm:object-assign@4.0.1.json",
      "npm:react@15.0.1/lib/ReactVersion.js",
      "npm:react@15.0.1/lib/ReactPropTypes.js",
      "npm:react@15.0.1/lib/getIteratorFn.js",
      "npm:react@15.0.1/lib/ReactPropTypeLocationNames.js",
      "npm:react@15.0.1/lib/ReactElementValidator.js",
      "npm:react@15.0.1/lib/ReactPropTypeLocations.js",
      "npm:fbjs@0.8.1/lib/keyMirror.js",
      "npm:react@15.0.1/lib/ReactDOMFactories.js",
      "npm:fbjs@0.8.1/lib/mapObject.js",
      "npm:react@15.0.1/lib/ReactClass.js",
      "npm:fbjs@0.8.1/lib/keyOf.js",
      "npm:fbjs@0.8.1/lib/emptyObject.js",
      "npm:react@15.0.1/lib/ReactNoopUpdateQueue.js",
      "npm:react@15.0.1/lib/ReactComponent.js",
      "npm:react@15.0.1/lib/ReactInstrumentation.js",
      "npm:react@15.0.1/lib/ReactDebugTool.js",
      "npm:react@15.0.1/lib/ReactInvalidSetStateWarningDevTool.js",
      "npm:react@15.0.1/lib/ReactChildren.js",
      "npm:react@15.0.1/lib/traverseAllChildren.js",
      "npm:react@15.0.1/lib/PooledClass.js",
      "npm:systemjs-plugin-babel@0.0.9/babel-helpers/inherits.js",
      "npm:systemjs-plugin-babel@0.0.9.json",
      "npm:systemjs-plugin-babel@0.0.9/babel-helpers/possibleConstructorReturn.js",
      "npm:systemjs-plugin-babel@0.0.9/babel-helpers/createClass.js",
      "npm:systemjs-plugin-babel@0.0.9/babel-helpers/classCallCheck.js",
      "app/LoginStatus.js",
      "app/LoginForm.js",
      "app/RegistrationForm.js",
      "app/config.js",
      "app/AuthService.js",
      "npm:superlogin-client@0.2.0/lib/index.js",
      "npm:superlogin-client@0.2.0.json",
      "npm:events@1.1.0/events.js",
      "npm:events@1.1.0.json",
      "npm:debug-logger@0.4.1/debug-logger.js",
      "npm:debug-logger@0.4.1.json",
      "github:jspm/nodelibs-assert@0.2.0-alpha/assert.js",
      "github:jspm/nodelibs-assert@0.2.0-alpha.json",
      "github:jspm/nodelibs-util@0.2.0-alpha/util.js",
      "github:jspm/nodelibs-util@0.2.0-alpha.json",
      "github:jspm/nodelibs-util@0.2.0-alpha/isBufferBrowser.js",
      "npm:debug-logger@0.4.1/stream-spy.js",
      "npm:debug@2.2.0/browser.js",
      "npm:debug@2.2.0.json",
      "npm:debug@2.2.0/debug.js",
      "npm:ms@0.7.1/index.js",
      "npm:ms@0.7.1.json",
      "npm:axios@0.9.1/index.js",
      "npm:axios@0.9.1.json",
      "npm:axios@0.9.1/lib/axios.js",
      "npm:axios@0.9.1/lib/helpers/spread.js",
      "npm:axios@0.9.1/lib/helpers/transformData.js",
      "npm:axios@0.9.1/lib/utils.js",
      "npm:axios@0.9.1/lib/helpers/bind.js",
      "npm:axios@0.9.1/lib/helpers/combineURLs.js",
      "npm:axios@0.9.1/lib/helpers/isAbsoluteURL.js",
      "npm:axios@0.9.1/lib/core/InterceptorManager.js",
      "npm:axios@0.9.1/lib/core/dispatchRequest.js",
      "npm:axios@0.9.1/lib/adapters/xhr.js",
      "npm:axios@0.9.1/lib/helpers/cookies.js",
      "npm:axios@0.9.1/lib/helpers/btoa.js",
      "npm:axios@0.9.1/lib/helpers/isURLSameOrigin.js",
      "npm:axios@0.9.1/lib/helpers/parseHeaders.js",
      "npm:axios@0.9.1/lib/helpers/buildURL.js",
      "npm:axios@0.9.1/lib/defaults.js",
      "github:jspm/nodelibs-events@0.2.0-alpha/events.js",
      "github:jspm/nodelibs-events@0.2.0-alpha.json",
      "github:pouchdb/pouchdb@5.3.2/dist/pouchdb.js",
      "github:pouchdb/pouchdb@5.3.2.json",
      "npm:react-dom@15.0.1/index.js",
      "npm:react-dom@15.0.1.json",
      "npm:react@15.0.1/lib/ReactDOM.js",
      "npm:fbjs@0.8.1/lib/ExecutionEnvironment.js",
      "npm:react@15.0.1/lib/renderSubtreeIntoContainer.js",
      "npm:react@15.0.1/lib/ReactMount.js",
      "npm:react@15.0.1/lib/shouldUpdateReactComponent.js",
      "npm:react@15.0.1/lib/setInnerHTML.js",
      "npm:react@15.0.1/lib/createMicrosoftUnsafeLocalFunction.js",
      "npm:react@15.0.1/lib/instantiateReactComponent.js",
      "npm:react@15.0.1/lib/ReactNativeComponent.js",
      "npm:react@15.0.1/lib/ReactEmptyComponent.js",
      "npm:react@15.0.1/lib/ReactCompositeComponent.js",
      "npm:react@15.0.1/lib/ReactUpdateQueue.js",
      "npm:react@15.0.1/lib/ReactUpdates.js",
      "npm:react@15.0.1/lib/Transaction.js",
      "npm:react@15.0.1/lib/ReactReconciler.js",
      "npm:react@15.0.1/lib/ReactRef.js",
      "npm:react@15.0.1/lib/ReactOwner.js",
      "npm:react@15.0.1/lib/ReactPerf.js",
      "npm:react@15.0.1/lib/ReactFeatureFlags.js",
      "npm:react@15.0.1/lib/CallbackQueue.js",
      "npm:react@15.0.1/lib/ReactInstanceMap.js",
      "npm:react@15.0.1/lib/ReactNodeTypes.js",
      "npm:react@15.0.1/lib/ReactErrorUtils.js",
      "npm:react@15.0.1/lib/ReactComponentEnvironment.js",
      "npm:react@15.0.1/lib/ReactMarkupChecksum.js",
      "npm:react@15.0.1/lib/adler32.js",
      "npm:react@15.0.1/lib/ReactDOMFeatureFlags.js",
      "npm:react@15.0.1/lib/ReactDOMContainerInfo.js",
      "npm:react@15.0.1/lib/validateDOMNesting.js",
      "npm:react@15.0.1/lib/ReactDOMComponentTree.js",
      "npm:react@15.0.1/lib/ReactDOMComponentFlags.js",
      "npm:react@15.0.1/lib/DOMProperty.js",
      "npm:react@15.0.1/lib/ReactBrowserEventEmitter.js",
      "npm:react@15.0.1/lib/isEventSupported.js",
      "npm:react@15.0.1/lib/getVendorPrefixedEventName.js",
      "npm:react@15.0.1/lib/ViewportMetrics.js",
      "npm:react@15.0.1/lib/ReactEventEmitterMixin.js",
      "npm:react@15.0.1/lib/EventPluginHub.js",
      "npm:react@15.0.1/lib/forEachAccumulated.js",
      "npm:react@15.0.1/lib/accumulateInto.js",
      "npm:react@15.0.1/lib/EventPluginUtils.js",
      "npm:react@15.0.1/lib/EventConstants.js",
      "npm:react@15.0.1/lib/EventPluginRegistry.js",
      "npm:react@15.0.1/lib/DOMLazyTree.js",
      "npm:react@15.0.1/lib/setTextContent.js",
      "npm:react@15.0.1/lib/escapeTextContentForBrowser.js",
      "npm:react@15.0.1/lib/getNativeComponentFromComposite.js",
      "npm:react@15.0.1/lib/findDOMNode.js",
      "npm:react@15.0.1/lib/ReactDefaultInjection.js",
      "npm:react@15.0.1/lib/ReactDefaultPerf.js",
      "npm:fbjs@0.8.1/lib/performanceNow.js",
      "npm:fbjs@0.8.1/lib/performance.js",
      "npm:react@15.0.1/lib/ReactDefaultPerfAnalysis.js",
      "npm:react@15.0.1/lib/SimpleEventPlugin.js",
      "npm:react@15.0.1/lib/getEventCharCode.js",
      "npm:react@15.0.1/lib/SyntheticWheelEvent.js",
      "npm:react@15.0.1/lib/SyntheticMouseEvent.js",
      "npm:react@15.0.1/lib/getEventModifierState.js",
      "npm:react@15.0.1/lib/SyntheticUIEvent.js",
      "npm:react@15.0.1/lib/getEventTarget.js",
      "npm:react@15.0.1/lib/SyntheticEvent.js",
      "npm:react@15.0.1/lib/SyntheticTransitionEvent.js",
      "npm:react@15.0.1/lib/SyntheticTouchEvent.js",
      "npm:react@15.0.1/lib/SyntheticDragEvent.js",
      "npm:react@15.0.1/lib/SyntheticKeyboardEvent.js",
      "npm:react@15.0.1/lib/getEventKey.js",
      "npm:react@15.0.1/lib/SyntheticFocusEvent.js",
      "npm:react@15.0.1/lib/SyntheticClipboardEvent.js",
      "npm:react@15.0.1/lib/SyntheticAnimationEvent.js",
      "npm:react@15.0.1/lib/EventPropagators.js",
      "npm:fbjs@0.8.1/lib/EventListener.js",
      "npm:react@15.0.1/lib/SelectEventPlugin.js",
      "npm:fbjs@0.8.1/lib/shallowEqual.js",
      "npm:react@15.0.1/lib/isTextInputElement.js",
      "npm:fbjs@0.8.1/lib/getActiveElement.js",
      "npm:react@15.0.1/lib/ReactInputSelection.js",
      "npm:fbjs@0.8.1/lib/focusNode.js",
      "npm:fbjs@0.8.1/lib/containsNode.js",
      "npm:fbjs@0.8.1/lib/isTextNode.js",
      "npm:fbjs@0.8.1/lib/isNode.js",
      "npm:react@15.0.1/lib/ReactDOMSelection.js",
      "npm:react@15.0.1/lib/getTextContentAccessor.js",
      "npm:react@15.0.1/lib/getNodeForCharacterOffset.js",
      "npm:react@15.0.1/lib/SVGDOMPropertyConfig.js",
      "npm:react@15.0.1/lib/ReactReconcileTransaction.js",
      "npm:react@15.0.1/lib/ReactInjection.js",
      "npm:react@15.0.1/lib/ReactEventListener.js",
      "npm:fbjs@0.8.1/lib/getUnboundedScrollPosition.js",
      "npm:react@15.0.1/lib/ReactDefaultBatchingStrategy.js",
      "npm:react@15.0.1/lib/ReactDOMTextComponent.js",
      "npm:react@15.0.1/lib/DOMChildrenOperations.js",
      "npm:react@15.0.1/lib/ReactMultiChildUpdateTypes.js",
      "npm:react@15.0.1/lib/Danger.js",
      "npm:fbjs@0.8.1/lib/getMarkupWrap.js",
      "npm:fbjs@0.8.1/lib/createNodesFromMarkup.js",
      "npm:fbjs@0.8.1/lib/createArrayFromMixed.js",
      "npm:react@15.0.1/lib/ReactDOMTreeTraversal.js",
      "npm:react@15.0.1/lib/ReactDOMEmptyComponent.js",
      "npm:react@15.0.1/lib/ReactDOMComponent.js",
      "npm:react@15.0.1/lib/ReactMultiChild.js",
      "npm:react@15.0.1/lib/flattenChildren.js",
      "npm:react@15.0.1/lib/ReactChildReconciler.js",
      "npm:react@15.0.1/lib/ReactDOMTextarea.js",
      "npm:react@15.0.1/lib/LinkedValueUtils.js",
      "npm:react@15.0.1/lib/DOMPropertyOperations.js",
      "npm:react@15.0.1/lib/quoteAttributeValueForBrowser.js",
      "npm:react@15.0.1/lib/ReactDOMInstrumentation.js",
      "npm:react@15.0.1/lib/ReactDOMDebugTool.js",
      "npm:react@15.0.1/lib/ReactDOMUnknownPropertyDevtool.js",
      "npm:react@15.0.1/lib/ReactDOMSelect.js",
      "npm:react@15.0.1/lib/ReactDOMOption.js",
      "npm:react@15.0.1/lib/ReactDOMInput.js",
      "npm:react@15.0.1/lib/ReactDOMButton.js",
      "npm:react@15.0.1/lib/ReactComponentBrowserEnvironment.js",
      "npm:react@15.0.1/lib/ReactDOMIDOperations.js",
      "npm:react@15.0.1/lib/DOMNamespaces.js",
      "npm:react@15.0.1/lib/CSSPropertyOperations.js",
      "npm:fbjs@0.8.1/lib/memoizeStringOnly.js",
      "npm:fbjs@0.8.1/lib/hyphenateStyleName.js",
      "npm:fbjs@0.8.1/lib/hyphenate.js",
      "npm:react@15.0.1/lib/dangerousStyleValue.js",
      "npm:react@15.0.1/lib/CSSProperty.js",
      "npm:fbjs@0.8.1/lib/camelizeStyleName.js",
      "npm:fbjs@0.8.1/lib/camelize.js",
      "npm:react@15.0.1/lib/AutoFocusUtils.js",
      "npm:react@15.0.1/lib/HTMLDOMPropertyConfig.js",
      "npm:react@15.0.1/lib/EnterLeaveEventPlugin.js",
      "npm:react@15.0.1/lib/DefaultEventPluginOrder.js",
      "npm:react@15.0.1/lib/ChangeEventPlugin.js",
      "npm:react@15.0.1/lib/BeforeInputEventPlugin.js",
      "npm:react@15.0.1/lib/SyntheticInputEvent.js",
      "npm:react@15.0.1/lib/SyntheticCompositionEvent.js",
      "npm:react@15.0.1/lib/FallbackCompositionState.js"
    ]
  }
});
