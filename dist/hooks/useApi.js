import { slicedToArray as _slicedToArray, asyncToGenerator as _asyncToGenerator, regeneratorRuntime as _regeneratorRuntime } from '../_virtual/_rollupPluginBabelHelpers.js';
import { useState, useEffect } from 'react';
import axios from 'axios';

var useApi = function useApi(url) {
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    data = _useState2[0],
    setData = _useState2[1];
  var _useState3 = useState(true),
    _useState4 = _slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var _useState5 = useState(null),
    _useState6 = _slicedToArray(_useState5, 2),
    error = _useState6[0],
    setError = _useState6[1];
  useEffect(function () {
    var fetchData = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios.get(url);
            case 3:
              response = _context.sent;
              setData(response.data);
              _context.next = 10;
              break;
            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              setError(_context.t0);
            case 10:
              _context.prev = 10;
              setLoading(false);
              return _context.finish(10);
            case 13:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 7, 10, 13]]);
      }));
      return function fetchData() {
        return _ref.apply(this, arguments);
      };
    }();
    fetchData();
  }, [url]);
  return {
    data: data,
    loading: loading,
    error: error
  };
};
 // Certifique-se de que está exportando como default

export { useApi as default };
