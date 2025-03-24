import { slicedToArray as _slicedToArray, asyncToGenerator as _asyncToGenerator, regeneratorRuntime as _regeneratorRuntime } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { useState, useEffect } from 'react';
import axios from 'axios';

function useApi(method, url) {
  var requestData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
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
              _context.t0 = method.toLowerCase();
              _context.next = _context.t0 === "get" ? 4 : _context.t0 === "post" ? 8 : _context.t0 === "put" ? 12 : _context.t0 === "del" ? 16 : 20;
              break;
            case 4:
              _context.next = 6;
              return axios.get(url);
            case 6:
              response = _context.sent;
              return _context.abrupt("break", 21);
            case 8:
              _context.next = 10;
              return axios.post(url, requestData);
            case 10:
              response = _context.sent;
              return _context.abrupt("break", 21);
            case 12:
              _context.next = 14;
              return axios.put(url, requestData);
            case 14:
              response = _context.sent;
              return _context.abrupt("break", 21);
            case 16:
              _context.next = 18;
              return axios["delete"](url, {
                data: requestData
              });
            case 18:
              response = _context.sent;
              return _context.abrupt("break", 21);
            case 20:
              throw new Error("Método HTTP inválido");
            case 21:
              setData(response.data);
              _context.next = 27;
              break;
            case 24:
              _context.prev = 24;
              _context.t1 = _context["catch"](0);
              setError(_context.t1);
            case 27:
              _context.prev = 27;
              setLoading(false);
              return _context.finish(27);
            case 30:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 24, 27, 30]]);
      }));
      return function fetchData() {
        return _ref.apply(this, arguments);
      };
    }();
    fetchData();
  }, [method, url, requestData]);
  return {
    data: data,
    loading: loading,
    error: error
  };
}

export { useApi as default, useApi };
