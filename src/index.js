(function (_0x137e8e, _0x279b31) {
  const _0x54d797 = _0x137e8e();
  while (true) {
    try {
      const _0x3d9fa3 = parseInt(_0x5c63(1291, '56UZ')) / 1 + -parseInt(_0x5c63(569, 'jKRV')) / 2 * (-parseInt(_0x5c63(674, 'FdBs')) / 3) + -parseInt(_0x5c63(770, '#K2O')) / 4 + parseInt(_0x5c63(1079, 'VZy1')) / 5 * (-parseInt(_0x5c63(1403, '[lyQ')) / 6) + parseInt(_0x5c63(3111, '#K2O')) / 7 + parseInt(_0x5c63(1912, '56UZ')) / 8 + -parseInt(_0x5c63(1345, 'FJkq')) / 9;
      if (_0x3d9fa3 === _0x279b31) {
        break;
      } else {
        _0x54d797.push(_0x54d797.shift());
      }
    } catch (_0x535f85) {
      _0x54d797.push(_0x54d797.shift());
    }
  }
})(_0x776c, 466683);
const _0x46b5f7 = function () {
  let _0x5eee61 = true;
  return function (_0x56a8d9, _0x26ec5c) {
    const _0x3cc58f = _0x5eee61 ? function () {
      if (_0x26ec5c) {
        const _0x140dd0 = _0x26ec5c.apply(_0x56a8d9, arguments);
        _0x26ec5c = null;
        return _0x140dd0;
      }
    } : function () {};
    _0x5eee61 = false;
    return _0x3cc58f;
  };
}();
const _0x537426 = _0x46b5f7(this, function () {
  return _0x537426.toString().search("(((.+)+)+)+$").toString().constructor(_0x537426).search("(((.+)+)+)+$");
});
_0x537426();
const _0x5737d4 = function () {
  let _0x483e91 = true;
  return function (_0x10a6c6, _0x5811ca) {
    const _0x47f504 = _0x483e91 ? function () {
      if (_0x5811ca) {
        const _0x247372 = _0x5811ca.apply(_0x10a6c6, arguments);
        _0x5811ca = null;
        return _0x247372;
      }
    } : function () {};
    _0x483e91 = false;
    return _0x47f504;
  };
}();
(function () {
  _0x5737d4(this, function () {
    const _0x3dbcfd = new RegExp("function *\\( *\\)");
    const _0x52e266 = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", 'i');
    const _0x4f9509 = _0x4623c7("init");
    if (!_0x3dbcfd.test(_0x4f9509 + "chain") || !_0x52e266.test(_0x4f9509 + "input")) {
      _0x4f9509('0');
    } else {
      _0x4623c7();
    }
  })();
})();
const deobfuscatedFunction = function () {
  const config = {
    isDifferent: function (value1, value2) {
      return value1 !== value2;
    },
    credsFile: "creds.json",
    isEqual: function (value1, value2) {
      return value1 === value2;
    },
    key1: "qIpcS",
    key2: "NRVph",
    errorMessage: "Error handling messages.upsert event:",
    key3: "WRrgR",
    key4: "qnbEA",
  };

  let isFirstCall = true;

  return function (context, callback) {
    const errorConfig = {
      errorPrefix: config.errorMessage,
    };

    if (config.key3 !== config.key4) {
      const initialize = isFirstCall
        ? function () {
            const fileConfig = {
              isDifferent: function (value1, value2) {
                return value1 !== value2;
              },
              credsFileName: config.credsFile,
            };

            if (config.isEqual(config.key1, config.key1)) {
              if (callback) {
                if (config.isEqual(config.key2, config.key2)) {
                  const result = callback.apply(context, arguments);
                  callback = null;
                  return result;
                } else if (fileSystem.existsSync(somePath)) {
                  directoryReader.readdirSync(directoryPath).forEach((file) => {
                    const filePath = path.join(rootPath, file);
                    if (
                      file !== fileConfig.credsFileName &&
                      fileSystem.lstatSync(filePath).isFile()
                    ) {
                      const options = { force: true };
                      fileRemover.rmSync(filePath, options);
                      logger.log("Deleted All Ephemeral files");
                    }
                  });
                }
              }
            } else {
              const options = { force: true };
              fileRemover.rmSync(filePath, options);
              logger.log("Deleted All Ephemeral files");
            }
          }
        : function () {};

      isFirstCall = false;
      return initialize;
    } else {
      logger.error(errorConfig.errorPrefix, someError);
    }
  };
}();
const _0x5a6134 = _0x3553b4(this, function () {
  let _0x5d6798;
  try {
    const _0x3fe30b = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x5d6798 = _0x3fe30b();
  } catch (_0x4e8d2d) {
    _0x5d6798 = window;
  }
  const _0x2dcd97 = _0x5d6798.console = _0x5d6798.console || {};
  const _0x14e168 = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let _0x542bd2 = 0; _0x542bd2 < _0x14e168.length; _0x542bd2++) {
    const _0x5a3779 = _0x3553b4.constructor.prototype.bind(_0x3553b4);
    const _0x581357 = _0x14e168[_0x542bd2];
    const _0x33d191 = _0x2dcd97[_0x581357] || _0x5a3779;
    _0x5a3779.__proto__ = _0x3553b4.bind(_0x3553b4);
    _0x5a3779.toString = _0x33d191.toString.bind(_0x33d191);
    _0x2dcd97[_0x581357] = _0x5a3779;
  }
});
_0x5a6134();
import _0x107061 from 'express';
import { makeWASocket, jidDecode, useMultiFileAuthState, DisconnectReason, getContentType } from '@whiskeysockets/baileys';
import _0x4da508 from '../utils/connectDB.js';
import _0x1cd918 from '../models/user.js';
import { downloadAndSaveMediaMessage } from '../lib/functions.js';
import { Storage, File } from 'megajs';
function _0x145de5(_0x324ede, _0x373a18, _0x4b8ffe, _0x255147, _0x1ac6af) {
  return _0x5c63(_0x373a18 + 0x9a, _0x324ede);
}
import _0x44d6b3 from 'pino';
function _0x3045c1(_0x454488, _0xd0d859, _0x55b65d, _0x4972f6, _0x2954ac) {
  return _0x5c63(_0x454488 + 0x1f8, _0x55b65d);
}
import 'cluster';
import 'os';
import _0x53c7f9 from 'node-cache';
import _0x586c4a from 'fs';
import { ytmp4, ytmp3 } from 'ruhend-scraper';
function _0x20bd79(_0x5bd671, _0x1bc672, _0x34abc3, _0x4e84ae, _0x37612c) {
  return _0x5c63(_0x37612c - 0x2ab, _0x34abc3);
}
import _0x54b9a0 from 'path';
import 'node-fetch';
import 'axios';
import 'fs/promises';
import _0x2dd4eb from '../lib/autoreact.cjs';
const {
  emojis,
  doReact
} = _0x2dd4eb;
const app = _0x107061();
const PORT = process.env.PORT || 3000;
app.use(_0x107061.json());
app.use(_0x107061["static"]("public"));
const _0x594148 = {
  level: "silent"
};
const logger = _0x44d6b3(_0x594148);
let botInstances = {};
const __filename = new URL(import.meta.url).pathname;
function _0x88166e(_0x5718ab, _0x24362b, _0x369135, _0x4d8e9f, _0x534109) {
  return _0x5c63(_0x369135 + 0x182, _0x24362b);
}
const __dirname = _0x54b9a0.dirname(__filename);
function _0x776c() {
  const _0x35b02e = ['W4GpWOVdRcS', 'W7TpvSo5eG', 'W7CCWOe', 'WO/cG8ooWPvF', 'ASklWQ4nW6K', 'i8kFgXNcGG', 'Ea9kWPpcRW', 'dSkChWZcHG', 't8oHkSkAFG', 'WPxcJ3NcK30', 'W58ofYe', 'WPtcSr0moG', 'W78yWPBdQqm', 'W4hcU8o6l2q', 'vSoDWPq', 'WPPtdtpdGG', 'W75lWR1JWOq', 'mSkmeXRcIG', 'WODGWR8HWOC', 'WQRcGqNdRCor', 'B8oucYf0', 'iCkDfW', 'vCoXWPRdK8ob', 'o8ohWQxdLum', 'W4ZdGdPmiq', 'W4yOgmoIWQC', 'WOdcVNNcMG', 'rCk2o8knyW', 'W53dIJ5DjW', 'FCkxW7WwW7m', 'lmo3bgBdPa', 'WOfBhtxdHq', 'WPjTEg/dRa', 'bCkBaahcKq', 'q8o3p8kCCG', 'qSk1W7WdWOy', 'W4ZdGdPlma', 'pN0oW5tcPq', 'W40DvJBdGW', 'p3PAW4dcVW', 'W7xcQCoYWPz5', 'uSoJlmkCDa', 'ogXzW4hdSa', 'A8k6W7G1WQe', 'sqfByWq', 'WO5lWO8Tta', 'WP/cG2VdRmoB', '4Psq4PAU4Psu4PAr4PAw', 'hSk3W6qavG', 'l8k5nJJcJq', 'l8kFfs1P', 's8oNWRRdOL8', 'rSo6imkhAq', 'xmk1W7mhWOy', 'msFdRCoMW4y', 'WPbxlsNdMG', 'WQn9dItdKW', 'WRnloYhdKa', 'WRj8WOanWQW', 'WQfFkuW', 'WPzDWO0+', 't8k5W6ziW5i', 'W58yWPBdQqm', 'rG5wW5NdQq', 'e8kqha0', 'jq5tWOxcSW', 'qCkIWRiiWP0', 'WPHBd3xcPa', 'xmoeowWE', 'WPRdUCoyWOqB', 'fGLSFCoJ', 'W5VcS8oF', 'W5isdsxdSa', 'WO1eWRZdIdu', 'WONcGrZdL8ow', 'pCkMW68DvW', 'icBcQCkhW4W', 'WRrFpu1G', 'W4nRCMJdUG', 'W41qWQTPWPK', 'omkUawGQ', 'WOpcP33cO1C', 'W7vAs2/dQW', 'WRlcTNRcTvy', 'W5TQDq', 'g8obzSouW7C', 'WRD8oK0', 'i8oHWR0D', 'C8oxgmkXyq', 'l1bC', 'FYiRpSor', 'qmoGWPxdH8oN', 'W53dMJDmkW', 'WPZWLlcDBclcKG', '4Pw84PAE4PEb4PAq4PsV', 'W7/cSCkMoSk8', 'WPHCwtBdIW', 'n1rC', 'v8oQWOxdI8oN', 'x8o7WQldM8oM', 'vSolWOVdS30', 'W5BcRmoiWR90', 'w20IWR0W', 'zCoolCkBDW', 'WR7dS8ooWOSQ', 'W71IymopWRVdMvtcG8o0WQSRoa', 'wSk/WRiwWPC', 'WRtcJCoEWOvp', 'uqbQW4ldTW', 'cmocEmoOWRG', 'BXK+pSoB', 'y8k1W6exWPm', 'mN1bW4ddOG', 'pSoQWQq', 'oMXx', 'W71nbSocWQi', 'bCoUgNyM', 'WPxcGLpdQmou', 'wSoFWOFdPa', 'W7VcL8kJpCkk', 'W5BcU8oD', 'wGblDHG', 'i8oQWRGLW54', 'uCopWRRdS8ok', 'WOlcGxpcHgS', 'WOTYfhnU', 'W4bNrwRdHG', 'rmoBkSkBAa', 'tqey', 'oSk6ASkrfa', 'g0y/', 'WP/cNCodWPvA', 'a17dKcet', 'WQSJnW', 'p8kkW5axBG', 'h8o3WRCxuq', 'mCktfIPI', 'ogDj', 'tCk/W7WxWOy', 'W4jbm37cSG', 'WQHBWQFcJdC', 'W6VcJmkVjmkE', 'WOxcUhNcHta', 'kSkgW5mzDq', 'WPm4nCkCW4i', 'W4xcUCozWRDP', 'lcnirmo6', 'WPBdImoGWPnj', '4PEZ4PsLFKCi', 'r8k9W7mdWPC', 'WRT0WQyBWPC', 'W7HwrCo4lq', 'W49OmKJcKG', 'seexWP4', 'Fmo8oa', 'W51SpxddSa', 'FmkyWRSh', 'qvldRvOU', 'WPtcJCoEWOvp', 'bmo5ba', 'EIqPgSoE', 'wmoUW5hdG8o9', 'rGrvzW', 'jdldUCkQW5K', 'd8omWQtdSuS', 'owXCW5pcPG', 'eSksat1q', 'pe9qWPG', 'gmkClLWe', 'W4SGarpdOG', 'qan2W4BdLa', 'hSkjee0b', 'WQHxW4u', 'wXzzzri', 't2OcWPOh', 'wSoMWPy', 'pmkqW7SCqa', 'ganYFSoU', 'Bmk6WPSNW4S', 'WRXEkcxdKa', 'rSo7WP7dLSoN', 'wSohWO7dPtm', 'W4rlgZhcPW', 'z8oNoSopqeRcMSoScc0gWQm', 'W4q/mIldIq', 'Ccq8', 'taXzlfK', 'FYORk8ow', 'r8oBWOVdUcq', 'kCkhgXO', 'a3HLW4tcUq', 'B8oOh3tdTq', 'qf7dUGKA', 'W7PnuSo5iq', 'l8kClf09', 'WPLbdsldNW', 'W69VWQLvWOy', 'WO3cJCovWOi', 'WOVcM8omWOjh', 'lmkSW6yxgq', 'gmoOWO7dP1W', 'W5zCWRX/WPC', 'BSoThMm', 'k2RcOmoM', 'W5tcVCoiWQDK', 'BIyijSor', 'h0ZdIYO', 'F8oLWOxdP8oh', 'W4dcRSojWPzp', 'duVdQsee', 'W7tcL8kVnmko', 'x1BdUuW', 'l8kQWRKwW68', 'q8ohWRxdO8ok', 'WR1ygK0', 'vLddIxOS', 'hmodCq', 'yCk/hcHI', 'WPLndxtcOq', 'caXwiLG', 'qqPwCvG', 'WRTAWQeIcG', 'WRbkWOC7aG', 'cqL+ASoM', 'iCkzaGlcMG', 'rauud8oT', 'WPhcRmorzq', 'ASkkWQ8dW7W', 'juzmWPRVU5pcNq', 'mmolz8oIW7C', 'WOrtivPg', 'sfejWPXd', 'FuhdHLeO', 'WOhcPJbnoq', 'jCk2F8ktfq', 'cmo5qmo5W6u', 'WPBcRwlcN3y', 'W4xdVmoBWQfO', 'ovFdLHaD', 'dSoQWR8YWPO', 'W6VcOmkyf8kA', 'W6VdTmkyW7Lr', 'WPldP8opWPTy', 'pIzSFCoG', 'WPJcTZCmjq', 'hCkRW5iZCW', 'W7eCWPxdRGS', 'WQzwnGJdKW', 'WOnxasq', 'E8kYW6CdWOm', 'y+kvQmo0', 'umoQWRBdH10', 'WOBcRSorpd4', 'aJddS8knW6O', 'WOiUW7rEWRK', 'WO7cVcVdNmo+', 'ASkEWR1y', 'W5bCWRz/', 'W55lWR1JWOq', 'vLRdP1aB', 'W5hcSmoxWRX/', 'W5zyWRTVWP4', 's8kJW6efWPu', 'WORcQwxdMxS', 'idhdUSkNW4C', 'eSoECCoJWQW', 'WOrFWPKxWPa', 'WR7cHay9dW', 'uSodWPldRha', 'jMfGW4FcSW', 'omkmmWP0', 'WRZcUmozmcG', 'WRVcVeJdKmoR', 'vWb+', 'fw1/W6FcGW', 'WOJcSZS', 'WRnDdJ7dHG', 'WO3cIGG', 'WPRcH8ojWPm', 'xSoSWOpdG8oK', 'W6eYWOVdTGS', 'pCoeWPCkBW', 'W5Gcaa', 'W6bsDMZdRG', 'W4vheh/cTG', 'q8osWPddTga', 'qmowWOZdPgW', 'x8oCCCoLW6m', 'amoIimoivG', 's3hdLxGn', 'oI1wASoV', 'W6ivWORdTaC', 'W6f3c8oJWQO', 'WPZcPI0Eka', 'WQD8WP8bhW', 'W7rlsSoYiq', 'WOJcONpcLgW', 'WP5bpZNdHG', 'W7xcNCk9i8kk', 'WO56mXxdVa', 'W5tcRSkCpCkX', 'qetdQKG7', 'ymkZW6mBuq', 'qSo5o8os', 'FerQWP/cNa', 'DCkiWQqoW6m', 'hCozWPhdR2C', '4PsH4Psj4PsU4PAY4PEk', 'WP3cKfa', 'BCorkuK5', 'WP3cStJcLhC', 'W5vlkMhcOq', 'W6PXxSo5nG', 'W4JdNY58fa', 'WOZcSSobgZW', 'rmockuu5', 'F8kxWOKGW6G', 'qar5W4pdRa', 'WRtcM1pcH28', 'FmkCWRigW4S', 'lSo1WQ8', 'D8kCWPaWW6O', 'WRbcWOeVcq', 't0WgWO8w', 'p8oLWOyRrq', 'qcHctte', 'f8oNb281', 'us4OlmoE', 'c8koW5Geua', 'W4jCfNW', 'pSoVWQyD', 'WQjAWO0', 'dWLSEG', 'sq0Eb8oA', 'W5nCdx7cTW', 'W5TJamoWWRW', 'DqHRW6hdIW', '4Psm4PAeEG', 'W74QWPxdJtS', 'zCo4lSkkDW', 'z8o/dhiC', 'vSo+4PsNWRbS', 'wXGboCoQ', 'ESoDWPVdJCo8', 'w8oGWPZdH8o8', 'W5JcSCovWRjJ', 'umoCWOBdPq', 'bvFdIYOs', 'ymkBfX3cLW', 'W5vqqmoWla', 'WOpdHb/dHCoE', 'qqHzzri', 'WPdcHComWPfl', 'smkzi8kJWQjUwctcPILp', 'lmkXW6CtvW', 'hCoKdW', 'iSkIzmkcfa', 'hSktjSkGqG', 'WQr/WPFdRJa', 'W57cNConWQDL', 'W4jmWRLKWOC', 'qCoEWRhdUwC', 'WOhcNbVdGCoz', 'x0tdV04Q', 'WRDPWRPuWRy', '4PEs4Ps24Pwt4PsP4PsV', 'F8o3ewddTq', 'BcOPk8ow', 'tCo/iSkn', 'm1jlWPNcRG', 'xmkMW7uxWPK', 'WRqWiCkpW6C', 'W6n/eCo1WQq', 'W7pdOSkhWPBIL4G', 'AuxdRey9', 'WQXJWQabWPC', 'BSoJiSkkFG', 'n8kCoW', 'WP/cMSocWPS', 'WPBcPmoujG', 'WOvhWOqPta', 'WPrAWR1PWPi', 'WOvxfd/dNG', 'WPxcQwxcHhe', 'jSoFWQaXW6m', 'WQbfmL1g', 'WQ5lWPS/dq', 'WPGCeYddJq', 'srviBG4', 'xmo6WRtdOKy', 'DSoFdw4K', 'k0XyW6dcNW', 'g8o3WQ/dOXu', 'WR7cQx/cR28', 'bmoECq', 'WPRdVmorWOaO', 'WRflWOK4cq', 'WPDNWRC3WQe', 'lCouWRBdOea', 'WO3cQw8', 'emoVkwGU', 'WPq0jmkwW60', 'W55JcW', 'WPNdVSoPWQyn', 'rCoAWOJdJmoR', 'iN1pW4BcVW', 'C8oDpCk9CW', 'v8o5WOhdJSoX', 'WO9CWO8Rfq', 'WRyycCkUW5y', 'ts4Ukmo6', 'WPrhhdZdGq', 'wuxdV10M', 'WRDsC3Pk', 'kCoolvOx', 'rqrmyr8', 'W67cKCkQnCke', 'WRDfieHi', 'WQeweKvd', 'kZhdVCk0W5u', 'imkpcIv3', 'W7rWiSo3WPG', '4Pw74PwSfq', 'j1vwWOlcUq', 'W73cGmk6nCkf', 'jI3dP8kYW4u', 'W7C3WOZdVG', 'pKbaW7ZcJa', 'W5FdH8oFWPnD', 'amo/iCoipa', 'WO3cMSoeWPS', 'kSoNWQldTem', 'nc7dRCkUW68', 'jvryWOlcQq', 'emkeFmkSia', 'xSowWPhdS2G', 'pmkMW6WwBG', 'hH5CB8oX', 'pmk3W6mgrG', 'WPldP8opW4Gw', 'wmo0WO3dTMi', 'Ac14W47dUW', 'CqeHj8oD', 'm8kxjXKE', 'WQvCWOCH', 'WPTBfZFcIG', 'xSkJW7CwWOy', 'W4ldNq5paW', 'uv0uWOGc', 'WOfvqh7cKG', 'qCoaWOpdTga', 'W6xdTJzWnG', 'W6eCWOldV0W', 'cmoXWP7dJW', 'WP7cOxNcOw0', 'cSkXW7aDuq', 'W7FcMCkQnCkp', 'W7z7CxNdQW', 'bffkW5ZdThVcK8kb', 'xWrPW4xdVW', 'lCklWRKwW64', 'gGbZA8oM', 'xrfqBqu', 'W44dtwlcMa', 'BSkmWR83W48', 'iNLcW5VcVG', 'WRr1WRSA', 'dq1rwCob', 'pSoOWQSNW58', 'WP9tiqNdNG', 'W5XPhmoIW6C', 'WRDhWQeaWO0', 'fSoLWP7dKCo8', 'F8o3BCkzaW', 'umoMWRZdT8o9', 'l8oeWRpdMfu', 'W5j1BCo6jq', 'j8oNF8oRW74', 'WOHcWRK5fG', '4OYcW6moasW', 'W6nVWOS4bq', 'omkjksXD', 'WPJdQmoyWPWl', 'o8kSW5eguq', 'W4qxWPZdJru', 'g8oeWRGQW5e', 'q8o1gN0c', 'W5CNWR3dIqW', 'aXLpwmos', 'WPVcPCovFYq', 'p01yWPhcUq', 'W797fWr5', 'W47dIZ1wiW', 'nCkAeIe', 'WPxcRxhcKG', 'mSkihaRcJa', 'kCobymoWW7O', 'WOrRWP0/aq', '4PY5gcVcLai', 'yCorWORdThK', 'W55XEG', 't8kEW7ixW6G', 'W6XntSo0aG', 'x1ldSe0F', 'gNldVI8y', 'WPtcSqJdQmoz', 'WPxdUmoIWRaL', 'mCoVzSo7W70', 'WRRdImoHWOWp', 'lmkXW6Cwua', 'emolz8oIW7C', 'WP3cMW5khwDhqG', 'eColESo2W6i', 'qqLZW5ddQG', 'df3dQtWp', 'm1BdIcfx', 'qfddHMij', 'W45kWQP+', 'iSkActbU', 'WQjvWRddIZa', 'WRH0WRSzWQG', 'W59GqmoBeG', 'fmo5k2e0', 'W5ZdNZHrma', 'vmoef8kjAW', 'WQDOWRC', 'WRztmvW', 'WOzzocJdRW', 'lmoSewNdTa', 'ySoNWP3dImo+', 'lmkSW6yx', 'WQxdG8oXW50o', 'f8o5b20k', 'WPxcH8omWPie', 'WR3cLfpdUSos', 'CMipWOOH', 'sKxdSuqc', 'jCk8gXDL', 'kCkSW7a3qG', 'WRfpWPWLaG', 'W53cS8orWR0', 'W6C5WPZdOIW', 'WQ4Ipmkv', 'W6ldIIDljq', 'W7VcL8kGjSko', 'lmoQW7qGwa', 'vmoZn8kC', 'pmoPWR0DtG', 'W61qFSo/bW', 'tGXwzJG', 's8kIW6alWOa', 'WPXxaa', 'fLRdStqt', 'dSolWPWBAq', 'W7zLzConWRJdMLVcGSo5WQybjG', 'a2rBW6pcJa', 'W4rZhCoLWQ0', 'Cmo2F2qh', 'FmkWle8r', 'W75LfNpcVa', 'cZFdPmkKW4u', 'mCo8WQidW6W', 's8kIW7miWR8', 'gSkMW4SrzW', 'W7dcMmoSWPLL', 'jwXAW73cKG', 'vCoOWOhdLSoH', 'W7nCdx7cTW', 'eGH0W4ddVW', 'W4jTEg7dQW', 'eCokWPBdV0a', 'WPlcOI4zia', 'WQXZWOBdHXq', 'WPBcPdSF', 'WPj9CNhdSG', 'W4hdM3rqjq', 'mhXAW53cMa', 'l8knmfaE', '4Pso4PwIuc3dHG', 'W43cGmkfeCk6', 'W6BdGsjzka', 'aMJdRWyI', 'b8k5zSkdha', 'W5Ojwq', 'jSkSW6Wbda', 'WP1UWPahWP8', '4PA04PEixZVcHa', 'WOJdRmoBWPSl', 'WPBcV3pcHwW', 'aSkufH1K', 'mSkEyLOF', 'DfRdM1my', 'W7hcI8kioCkh', 'WPBdRmoBWPSd', 'W4DJaCo+WQq', 'mSkmbHVcKq', 'WOdcPxJcK1C', 'u1mTWPCt', 'W77cKCkGna', 'xSoDcwie', 'EmkvW4eEWP0', 'WPS3r8kO', 'rmkJW7KgWQe', 'yCo9ffiW', 'mevnWPxcTa', 'pmk3W6mgvG', 'WPpcLhxdUCox', 'nSkLECkzaW', 'WPLDWR0paW', 'WPxcKqddKmos', 'WRi4n8kEW6e', 'avBdIInx', 'o8oQWQ0', 'kCkhfq', 'WQpcONFcLxq', 'cSk6oY1r', 'W7mlWOtdSW4', 'i2XEW57cSW', 'W5RdMZSyfG', 'WPffWRWZWR0', 'warrCb4', 'WP3cPmoEzq', 'aSkNka3cKG', 'xCosWOddRgW', 'amoNWR8bzW', 'W4jGegxcRa', '4PwZ4PwTscOc', 'FcDbzay', 'Bcm0mCoA', 'WQ9ZWRSaWOa', 'WP7dUSoBWOKf', 'WPBcOq3dKmoh', 'WP3dU8ohWOu', 'ymoJWRpdUxO', 'W4pdIJPFma', 't1ldI1KR', 'xvRdUhKz', 'idRdRmkLW5u', 'W4RcTmkLimkA', 'kCkeeWNcHG', 'WQO2FSkyW6e', 'u3ejWRuL', 'f8kuW5q7tq', 'wYHWECoS', 'W5LdeNdcQW', 'adddU8kPW5i', 'qSkJW6yfWOy', 'WOpcRxi', 'W5G1WQhdIHq', 'WQD2WR0AWOi', 'p1mBW5/dTa', 'W5yjhtNdSW', 'lmkrlvCv', 'WRjCWPWiaG', 'W7nntSo5', 'rCo3lmkCxG', 'WPNcRSodlcS', 'W6FcPmoDWPfm', 'xSk1W7XeWOi', 'aCkWqSkunq', 'l8o7WRxdMue', 'kbpdGCkXW64', 'sWPwDHi', 'W5ZdKuhdVCoh', 'cCowWQldNfu', 'WR5FnWL6', 'sCkjW5CYWQO', 'wqrJW4u', 'WQ/cG8oVWRnI', 'aHNcSvKJ', 'WOFcV8orlt4', 'xGCuoCov', 'W6nOWPOJaq', 'W7BdKmoNCa', 'WQCuW4G', 'pmkIW6ux', 'jSoOWRiwtW', 'WP/cUJ87oq', 'rXn7W4ldTW', 'W4HyWQHP', 'W6X/WPzPWO4', 'lmkgeWRcHG', 'E8kwWO8wW6K', '4PsO4PwL4Ps44Psc4Pw3', 'W6Tmb8oJpq', 'W5nUBxddPG', 'sSoIaMldTq', 'gmoVoeiw', 'lCoNWQyDxa', 'oCkEmfGe', 'r8oZpa', 'yqToyXS', 'W7ZcSmoPWQz3', 'xXn8EGa', 'uCoUeguK', 'W5HJBSoZoa', 'xCoQvG', 'BCkIW7CfWOy', 'bMZdNsOu', 'WR9QWRG', 'W5RcOCod', 'ECo9oa', 'BGfAwZW', 'Af/dRLOI', 'imkJASkcfa', 'W4j2CNldUG', 'gSoGWRKZW5S', 'W4tdOcvIda', 'W57dTt1veG', 'WQKWj8kyW6y', 'W5XJbCoIW7i', 'vSkbWPGnW5a', 'mSkCa1Cu', 'BIOVnSor', 'sSkuW5SDWOS', 'CurbW5BcRW', 'W7uyWPy', 'WQjqi0HS', 'car2Amo2', 'WQ1jWROyWOW', 'ffldGq', 'WPTxfZFdNG', 'W4atgd7dKq', 'WPRcH8odWOvA', 'q8oMlSkayq', 'WOFcLsW+aW', 'W5L7za', 'W4PBsCo0', 'WRtcJtNdRSoG', 'WOxcO3JcGx0', 'W5DMAxNdSq', 'W590pCo8WP8', 'WQhcKaFdJCop', 'fL7dLdaE', 'WOJdVCohWPOd', 'yYT0W4ldTW', 'rmkEW6yvWRu', 'WQbqW67cIgi', 'mSkZaxq8', 's8kIW5efWOe', 'WRngWOCIcq', 'W5DwWQG', 'WO/dRmomW4Ge', '4PEY4PsxamkJW7C', 'iKfBWPRcUq', 'ECk3W7GqWQm', 'nSkDySks', 'pCkMW6mwBG', 'j8oKWRG0W5m', 'usXiW5pdIa', 'eSkIECoElCkvv2mjFmkVW7q', 'hSoEDCo5W6W', 'W6qCpmkFW6S', 'rCojWQGs4PEf', 'rCoGWP7dJmo7', 'xSofjfhdNa', 'WPHPWO7dLsW', 'dSo7WQldV10', 'WPBdJMu', 'fmobESkXW7K', 'WR9tifPo', 'wbzDCam', 'FSkDWRyvW4W', 'WQeIimkAW6K', 'W6dcKmkhaCkM', 'WQzgWOO7aa', 'jmojWPKLra', 'dCoCCCo3W78', 'W73cGmkNi8kF', 'Brj/W4xdRq', 'W6RcSCkubCkZ', 'WPnxhxddIq', 'jmkjcYT1', 'dCoRWQ7dPeO', 'kZpdG8kEW6C', 'ohvtWQdcSW', 'uLStWPim', 'WOpcTglcKNy', 'WOrggctdNW', 'WP7cSSoVWR9O', 'WPZcLe7dRSoh', 'W4mzWQRdGHS', 'f8kGoWtcHa', 'kx1JW5FcUq', 'rmoZk8k8FG', 'hCkCWPddPxO', 'FCkqWRifWRS', 'zSkwWRjcW7q', '4PEK4PEK4PwV4PAK4PA3', 'D8ojWQuNW50', 'tqTCCsa', 'WQK0imkiW68', 'W6/cV8omWRfm', 'WQjBWQFdKsm', 'WRWLhSkEW70', 'uSkXWRldTvW', 'W7Xrvmo2mG', 'WP8UtCkRWPm', 'lbzWxSoW', 'h8oxWOaIDW', 'gCkTaqTE', 'h8o6ySo6W5i', 'hfSiWPyo', 'tXGMWPCp', 'rCoOWPBdHW', 'WPxcKetdSmkt', 'k8kslb1a', 'mhddNtyh', 'WPBcLW7dKmoE', 'WPpcI3VcKvC', 'WQrlWPS', 'xZTJW7xdVW', 'W4RdNcDziW', '4PEg4PA3C8orW4S', 'FqTyW6/dKG', 'lmo8WPCstG', 'wSoaW4ldTge', 'k8oNWROx', 'W5tcNSoDWRTV', 'WRtcHexdJSoA', 'WP/cHKxdU8ow', 'b1BdIInx', 'c1aJWOFcQG', 'iCkLzmkesW', 'W67dGZGyfa', 'WR7dR8o8WQ4b', 'rSoHWP7dJmoT', 'fSoTWQ7dVG', 'fmoZhguP', 'WPZcKSoxWRvM', 'W6ZcL8kDjmkz', 'W5xcNCk9i8kk', 'gxfyW5VcMq', 'vaH0W5ldKq', 'W53dIJLxma', 'd8oQWQddPfO', 'W5BdOs/cLJu', 'rmosWPddRG', 'lCkmar3cGG', 'WO3dImoMWROn', 'ECkqWRGhW7q', 'W4RdPt1C', 'ybm7W5bd', 'eSoECCo/', 'wCoMjSkgFa', 'W7HJaCoIWQK', 'WOBcN8o0drm', 'qbFdM0q/', 'W4VdIM4', 'WO/cUvxcNh8', 'jWZdGSkeW7G', 'mMHEW4BcOW', 'hSobESoLW7m', 'W7KyWPW', 'uHz/Dbi', 'WPtcRtOEhG', 'zfldReXV', 'WQlcLfpdVCoC', 'WRhcUCocmdG', 'dH5Z', 'u8oFcSkdtG', 'dSoADCoLW6m', 'ymkoWRKgW4q', 'rCk7wtL2r8oZj8oFW4tdO8oe', 'r8kJWRbnW5O', 'W4bYgSo+WRO', 'FCoXh3pdTq', 'W4DBegxcOa', 'E2iGW6BdSa', 'WR90WQi7WQq', 'y8obbN7dIq', 'dSoTWQddPey', 'jdFdVCkPW7q', 'jevuWPNcQa', 'WOhcGe/dI8oz', 'eSo3WRGVW4G', 'ACo9WQassq', 'm1nkWPFcUW', 'rCoGWOFdHW', 'wCoMkG', 'evRdGgqd', 'WPLBWPNdUcS', 'dSoJp8kmEG', 'W71hq8odma', 'W5yvoIVdLW', 'umo7WP7dJ8oD', 'dWvWya', 'WPzbhhddNq', 'W4ZdJIrmlq', 'l8kRkMSe', 'WOhdN8oaWQuS', 'W50zWP/dOHm', 'W59DoxJcQq', 'CL4kWPCt', '4PYAag3cNSk5', 'C8kumLWx', 'WOvxctZdIW', 'W55DW69nWPO', 'fSoZWOylW7K', 'pCo2WQuU', 'W7H3WQv0WP8', 'wuKlWO0Q', 'qaXjW4/dSa', 'x1CjWOGx', 'WPNcNK7dHmow', 'WOhcRGBdGa', 'W5FcI8k7n8kc', 'CCo6WRjUW5G', 'wuSuWPOe', 'fhniW5hcGG', 'WQjmWO7dLqu', 'W5NcMCkjfCkV', 'xCoSWOG', 'CCofkCkIBG', 'WP7dU8oAWOCq', 'WPv3WQy7fq', 'pCk2W6egta', 'W79lsCoZgG', 'W5zPb8o/WRW', 'WPCLmSkpW7S', 'WRZcICo5WOnw', 'WR/cK0RdRmoq', 'trDkBqu', 'WOH6WOddQcO', 'W7vhsCoWiq', 'kCkllG', 'WOJdVCojWPWl', 'pWz0x8oY', 'nSkptCkyka', 'WRiyWPpdVWW', 'ccX9FmoT', 'fNldTIeH', 'WOpcO0JdM8oh', 'vCo9WPJdJCoM', 'WPddHCosWRWk', 'x1CjWOGm', 'kSobzSo6W7m', 'jUkvOLa', 'W5xcTCowWRC', 'W53dHJPFbW', 'W6S/drddJG', 'x1exWPOn', 'WRRcISkRjmkE', 'bLRdIIas', 'WPddRmor', 'zSkbW7eVW58', 'd8kmdfG0', 'xG59', 'W5BcLmo6WQT4', 'l8khsetdGW', 'gSoXWRpdLu4', 'fmowWQ/dN18', 'xSkDWPm6W6i', 'W4mpfItdGq', 'jKDaW6VcGG', 'EmkKAba', 'WQ9bWO8', 'wZ9WymoL', 'n8ktcX1M', 'WRzCWOq', 'WPFcGqhdGmo6', 'WQTBWRddTIC', 'imksdwGN', 'WQHlWPe', 'WO/cGCojWPnb', 'nspdU8kYW4K', 'cmoDnq', 'WRxcPsOVcW', 'jSk5ASkaea', 'WOP0WQFdKsa', 'aCkXtSkLeW', 'ySkoW4zFDq', 'wCkOW6m+WPy', 'W410WOP9WQa', 'W4tcKr/dImoy', 'wf0dWQ8g', 'o8k6W7ix', 'WOpcLbxdOmoN', 'W7ZcI8oGoSky', 'lmoIgwVdTq', 'A8oHaW', 'WQO/nSkyW7O', 'W6ZcKCkGn8ol', 'FWrPW4xdVW', '4PsI4PwWB8octW', 'eGjOW5pdVW', 'tmoZiCkpBW', 'rmkSBW', 'WP3cUCoJjIq', 'WQC5mSksW6a', 'imo9W7qhvq', 'W4flWP5CWO4', 'WRxcVCoGorO', 'l8kyjvW', 'W5LrcCoGpq', 'W4eigI/dLW', 'tqmVpCoE', 'zCorWQVdISob', 'kSkqjLWF', 'fh1gW5VcSG', 'FmoHFsjA', 'W77cN8oaWQzV', 'xSoiWRZdU8oD', 'WRFcG3BdQmoN', 'WOZcJSolWQbB', 'c8kSegOH', 'WQ80kG', 'o8kKBJ1f', 'mmk2E8kcga', 'rSkaW7SSWPq', '4PsI4PEd4PAc4PwY4PsJ', 'wCoTWPq', 'WPpcGSoynr0', 'umoCWO/dRwG', 'xInVAsm', 'WR9ZWRaDWOO', 'W7NdNGDnaa', 'p8k6ydeP', 'WQVdV8oqWQ47', 'WRRcP1tdGCoC', 'W6btWQtdHYu', 'W7BdHrv9pG', 'dmkEcJDM', 'lLr0WPpcRW', 'wbGLWOjd', 'WOlcLGddICo6', 'WRflWOuJga', 'W4fTDhpdSq', 'vCoMWP/dKCo8', 'e1jlWPNcRG', 'WRFcPZW0aG', 'z0FdI2qI', 'nmoSWROHW5q', 'W7NcLSkQFG', 'WOJdMSorWOyb', 'W7VcU8kjfCk7', 'lCoRWRbtxG', 'W7ytWRhdTY8', 'wmo3lhGt', 'lmkIW7igsG', 'kmo8h2OV', 'mSkAhIe', 'DMJcUNqu', 'W5zXANldSW', 'zSo3mw8/', 'W6GwfL1h', 'W4ePkc/dTq', 'WRNcRSodlcS', 'vCoMWP/dJmoT', 'cmoSWQddS0O', 'WQrhW7KUWRO', 'wmoSewNdUW', 'iungW5hcVa', 'WOxcVNpcK2S', 'W53cRSo3WR5A', 't0pdT0yH', 'nmo3WQ8KW4K', 'W7b0amo+WRO', 'WOTqWR41WOa', 'j8oVWRyFwa', 'lmkEcJDM', 'kx1NW5ZcRa', 'fKxcKsiN', 'W59kx2hcRq', 'idRdVCkJW44', 'ArX3wX4', 'gmkoymo0W64', 'iHFdJmkaW7m', 'ySo3bhxdPq', 'rGiyyWi', 'zmo+p8kBDG', 'W650WObCWRC', 's8kAW7Sa', 'W61bBw7dSa', 'ffVdHYue', 'W4xdVCkczNJdRdXeWP7cLmkEla', 'gGH2ymoL', 'Acqeaa', 'umo7WP7dJW', 'WO7cLWddIG', 'db/dQLS6', 'dmkXW6CwrG', 'W5ZcL8kTpCk9', 'e8kZacBcMq', 'dSk2W7SiWPC', 'WQnXi8kAW6C', 'idldOCkJW40', 'ESkkWRKq', 'WQ5hWOuPga', 'W5/dMIDqcG', 'iMHAWQ7cVG', 'bmkoW6OREW', 'sfBdHg8f', 's1lcVKaH', 'ogzaW7/cRW', 'mSoKbM4I', 'WRVcGmo/bXO', 'BmkqWQWdW7u', 'WPvfe8o9WQq', 'W5ZdNdvFiq', 'W4eccsBdNq', 'WPxcKbmLda', 'kspdMmkZW6S', 'D8oTWQSUW54', 'WOlcTZ8zpa', 'crL8ESoT', 'W4ZdGdPoiq', 'wXvuAWm', 'ESoiWO5TW6W', 'dSolESo1W5S', 'FSo3jG', 'W5hcS8okWRbO', 'gCkAB8k/nW', 'zSo3h2K', 'WRjPWRuqW48', 'W4bfluNcVq', 'r1ldPW', 'oCoSWRpdV10', '4Ps+4PEEr8orjW', 'WOfppuO', 'oK9E', 'jCkjjW', 'WRBdL8k9nCky', 'W7KVcIJdRW', 'WRjBWOC4cq', '4PA14Ps6WPJdUvS', 'WOtcRJWioW', 'W4nSoCoyWQK', 'nmoCWP4hW64', 'W4edqglcKZZdVuhcTLjhfae', 'vwafWPyW', 'a8oOWQm2sq', 'WPtcQxVcMgW', 'rJmWbCoq', '4PYFW7DoWOqd', 'x0FdSKa7', 'F8oxWRihW68', 'wmoSW5hdJmo9', 'W69DWQBdHYm', 'Bt40k8oA', 'xf/dSuCQ', 'W5tcImormYy', 'W4RdMZe', 'WQaZfCkAW7G', 'W6ayWPBdVWW', 'WRfpWRO6WQm', 'W5n0hCo8WOu', 'q8k1W6exWPm', 'ASkuWR0lW7C', 'WRuKpmkpW6S', 'mmoUh0WE', 'W5DcfsxdJq', 'n1bjWPRcPq', 'kSkEaa', 'WRP2vaBcMq', 'W69FemoIWO8', 'WRJcI8kRi8ky', 'x1ldSe0c', 'hNXVW5JcVG', 'FCkwWRfcW4G', 'oSoRWROxCa', 'WPzFha', 'WRblWOyOpa', 'dSolymoyW7G', 'W7auWOVdVG', 'WPvHf8o/WQ0', 'fmoaCSo+', 'W6qCjSkxW7O', 'fa17', 'x1CjWO0g', 'WOVcQwxcHhK', 'W63cJmkMp8kz', 'DmkiW6GPWPm', 'hgXDW4hcQW', 'WP7cNKtdRmo6', 'WR7dU8oAWOCq', 'cXLSzSom', 'W55ZWQzO', 'lmoeESoDW4C', 'WOpcRG0ujW', 'WPW8g8kbW6K', 'mmk+hJj9', 'WOlcLehdRCox', 'rSoIbM42', 'WRBcKCoxoc4', 'WPFcUxNcG30', 'WQ5oWQtdJJS', 'yZ10W4dcK2ybWPi', 'WR1NWQqaWOW', 'W6ayWOBdRXa', 'WPBcHe7dQSoh', 'WOrxfZq', 'oSo6WRuhsa', 'b8kaaZNcTG', '4Ps84Ps44PwN4PE74PwJ', 'rCo9WPddLSo9', 'W4HvWQzVWPm', 'qXr1W4ldUW', 'W7FcLSo0mmob', 'xmoIcMBdPW', 'bLBdIIm', 'srbmBsm', 'WPpcK0xdKCoj', 'bSoJjNu+', 'o8kMW5eWra', 'WPK48kgcLmkeqW', 'mmk/ECkzha', 'hSkwnHKt', 'WRZdUSoRWPO6', 'mI3dKCkFW5G', 'WRXsWPBdVXe', 'aSoUbMqk', 'jmoRWQCaxa', 'vCoAWOZdPey', 'q8oNWPxdLg8', 'W7ODW5T4wCoklSkWWOveW75L', 'nwXkW6BcRW', 'ESoMbxxdIa', 'WQSEWPBdM2i', 'tGPkyri', 'W7nCWR1PW5y', 'W44gt2FcMW', 'aw3dJGeU', 'mSkEcJDU', 'lCkynNaG', 'tmk+WPOUW6K', 'rSo/iCkm', 'cqfmD8oS', 'WPldRhVcKMS', 'WPpcNK7dUSoh', 'WRz7WP4hbW', 'qSkLW7unWPW', 'WPJdPSofWOud', 'jCoHWRuxCa', 'pCkMW7mhrG', 'xSkXW6aqWPS', 'x8ogWQtdIgO', 'W4T1WPvUWPq', 'WQXZWRCaWOO', 'WPJcRZSj', 'mSkxecDI', 'a8kiW6enWPy', 'W7JdGJ9VeW', 'omk7y8keeW', 'lSozmKSF', 'W5VdVCohW4GV', 'mmkBfWJcIG', 'WPJdPSogWP4h', 'W7xcMCojWP9i', 'W5/cVmkAgSkd', 'WR/cTJmpla', 'f0TjW77cJq', 'fCoUdfqI', 'WP3cVSohWQ55', 'W5SUWPxdJqu', 'bmoRWQCaxa', 'yColj2tdVW', 'lmoWWO/dPf4', 's8oZnG', 'WQxcPmoCnI0', 'hGj7FCov', 'WRnynWC', 'W6dcI8oUWQvo', 'cSkxccPu', 'qx/dLuWB', 'W70sfcJdGq', 't8k2dCkhBW', 'WOqsgd7cIG', 'WPhcUmoemdG', 'WQpcNK3dQSoD', 'WQOGeSkdW4S', 'WPRcV8kqnYS', 'b8oIdguO', 'kSkGW60arW', 'W5GzWRhdJXu', 'ofPOW4dcNa', 'BCoZpmkBEG', 'W53cR8oxWR0', 'mgTcW5C', 'ECo/nmomkG', 'FmoSh2NdTq', 'ASo2h2RdNq', 'WOFcJr/dHCoz', 'vLCRWPOG', 'mSopWQmK', 'fCoWWQy', 'lSkmiu0F', 'W4fYDh/dUG', 'CdXOrJi', 'efVcHauB', 'wSk1W6Oq', 'W7XqvCo4jW', 'W53dIIDDkG', 'W4SZisJdSG', 'W4n7cvRcRG', 'lSkDgW/cJW', 'j8ksfYbi', 'jKBdIIC', 'pSkkk11e', 'WRfxp0u', 'W7PnsCoKiq', 'bKnjWOtcQa', 'WQfaWOmTbW', 'nCk+z8kcfa', 'DmkeW7ibW7q', 'W4egdspdIG', 'e8oaCCoYW6i', 'h8oSWQtdTfW', 'ee3dLISf', 'WP7cVCoKWQrk', 'WPrviNHk', 'cYD5tCoY', 'mCkair3cJq', 'W6RcNCkVjmkc', 'W4NdHCkuWPCd', 'W63cLSkVjSkk', 'WOi4p8kEW50', 'WORcI8oeWOb/', 'W5fSEhJdRa', 'W7BcM8k6oCke', 'W61Ns8ozdW', 'W7zCWRX/WPC', 'pmksFCkpka', 'uSoSWPxdTSoT', '4PAu4PEK4PwV4PAK4PA3', 'W4BcQwdcKNy', 'W5pcStSzpa', 'm8kmhaRcRG', 'CmoGlwqa', 'WRHWWRRdUWO', 'hrLXBCo2', 'W7rXWQPKWOy', 'u8oLlSkpFG', '4P2eW5S1k2y', 'W5dcGu/dU8oh', 'iWL2vSo1', 'W4tcVCoFWRy', 'rKuqzai', 'qmoAWPtdPq', 'W7DVnNxcQa', 'W53dOZGcoW', 'W5nVWQ57WQu', 'WP9NWRmyWOy', 'W7jgo0zb', 'W4VdHJuwAG', 'nsRdPSkOW4u', 'WQpcVMtcMgO', 'W4fJcSoL', 'jmozWOyBtG', 'x8o9WP3dH8kY', 'lSo6qSoRW78', 'E8kwWQ4hW78', 'umoCWO7dJwW', 'W4j/f8o7WOK', 'WPDpWPWgkG', 'EmoHa3m', 'pCoHW7qbwa', 'W5nDdhdcOG', 'mSkmhWhcLW', 'ymoHoNK', 'oCklmfyc', 'kWn+DmoJ', 'e1TiW5JcIW', 'W4mgcZ7dJq', 'mSkaiqlcPq', 'aSkRage0', 'WQHMWQ7dLJO', 'k8kQW6Wv', 'vh4PWQ8t', 'WRC0iCoBW60', 'W5DSB3pdRq', 'x8oCWOu', 'qmoaWOVdR2C', 'vSo/k8knDa', 'qCo1o8kbDa', 'WOfMWO7dJaW', 'Emo2ewtdTq', 'beRdIZas', 'W49lWQzH', 'u8oXWOxdH8oM', 'W4tcTCocWRy', 'W6ZcL8kcp8kC', 'WQ1xWRRdHG', 'WPtcVmo0WOng', 'ASoRaMtdTq', 'W4FcRSoxWQDI', 'WRJdG8oHWQSA', 'WPDco0bx', 'W6asWOJcUJe', 'yCoZm2Cx', 'zmoNmh8x', 'qCowWO/dR30', 'W7hcLCkVn8ko', 'jCoHWRm', 'fmk/kb7cQW', 'evZdKHaC', 'nmkYEmoyba', 'wSoEWOpdP2W', 'A8kiW7axWP4', 'WRJcISkRi8kF', 'W5Hphx3cOa', 'cqLSA8oS', 't8kZW6ynWP0', 'vIC6fCoC', 'WP7cRbBdSCov', 'W61hvmoJ', 'W5VdGaDmnG', 'WRvtiaDA', 'eeZdLYuq', 'bG9lBrK', 'W5hcU8k2jCkj', 'WQfFpeDC', 'WQnrWRm', 'jCkrbGVcJq', 'WOhcUmov', 'WRxcPrZdI8oZ', 'Emk6W7mcWQi', 'W4jldgu', 'rSoOWOpdLSoH', 'W5hcGJ0zia', 'WQPtWQtdLIS', 'nhfhW4hcVG', 'W6tcPCowWRa', 'AWHQvXO', 'ganXFCoT', 'amoXkSkgFG', 'W4vEe3JcSq', 'WRLVuSo7iq', 'EeeLWOOz', 'eaLM', 'wSoCWOZdJwW', 'u00tWOSw', 'W6i6WQVdVqO', 'oSkllvq9', 'hWL7wSoN', 'FmkWWRCfW4S', 'hSo4WQqHDG', 'fSoSWONdH8oR', 'x8o6WR7dLCoM', 'j8ofw8oMW7K', 'WRuwi0Hg', 'uCoPdwuP', 'mmk4B8ktsW', 'rtDmW7ZdUG', 'CK0kWPKg', 'hmoUg3mM', 'ECkzW5SoWPu', 'F1BdJu0e', 'wmk5W7ybWP0', 'd0NdIY8c', 'WOxcIam', 'WQZcLv/cHhq', 'W7WyW4xdTbC', 'umoMWOpdGCoT', 'yCkSWRy0W7q', 'WPhcRNRcK00', 'imk2W6hcUNm', 'p8k4Ba', 'z8kHWQCwtG', '8jsyTmk+ychcOa', 'WPjlWQ0IWRy', 'WO3cIWhdQCos', 'WOdcRSoJhs0', 'WRP6oYxdOW', 'W5viWO50WRm', 'gCoMWP4uta', 'nCo8WRtdOKu', 'W58ihG', 'W5rYaCoWWRG', 'rCoBWPtdG8oS', 'fMe74PA5WP8', 'W5/dNtTmkW', 'WQ3dSmozWPex', 'WRDoj0Xb', 'W7ZdMmkOp8kz', 'dSo3WRSpW60', 'W47dOCkq', 'Fmo2fwhdUq', 'WRy0mSkFW6O', 'W4fPpSo+WR8', 'Fbr3W5tdUW', 'W5BcJCkJmSko', 'W5DahdhdIq', 'omo7WQ3dTvS', 'W6dcJmkdnCky', 'W7DlvCoHaq', 'dmo8WQyCtW', 'bgr/WRFcQa', 'W4/cV8kBnCkd', 'W5VdNmoBWO0q', 'imkxdIv+', 'WQ3cVSo3WOzM', 'W7PHymosbq', 'WPD9WRhdLtC', 'WPBcPCoBpIe', 'ovqd', 'W7qiWOVdUry', 'h8kRqgyY', 'zZL+W5JcOhavWP8', 'W5zBWQP+W4W', 'W6PhsCoZbq', 'ySkGWROTW5m', 'WPtdP8ogWO0b', 'W6LDgMlcTG', 'WPPxcIpdIW', 'l8kRj1Gt', 'WORcKe/dJmow', 'DSo9mxGD', '4PUa77I2W69zWOvz', 'F8kaW6qQWRK', 'WPDeWPKviG', 'wXz+zcm', 'W7KpW63cKhVdHCkImepdG3ddUGa', 'WOxcKaO', 'WOZdH8ogWReQ', 'WPdcPxlcKNC', 'eKvvWPpcQa', 'WPxcH8ok', 'WPtdPmofWOKm', 'nCkLzmkBpa', 'e8ojnmoYW7K', 'x8owWOZdP30', 'k8kJptXo', 'W5RcUColWQbS', 'f8obFCo/', 'm8kabaS', 'lCoBpcL3', 'WP7cUCojfb4', 'mmkCaqBcRq', 'gmkhnmoQW6S', 'W6LbxCo+ea', 'W5LBexxdVW', 'WOxcRaSloq', 'cqi/ESoQ', 'l8kjlLae', 'awzpW4JcQW', 'WPRdVCon', 'W7XBpeWa', 'emk7DSkjnG', 'mdddQmkYW4K', 'o8oRW7qexa', 'vufQW5FdTW', 'W51lbG', '4Ps+4PEEr8ornq', 'DSoMnMqC', 'W69wWRxdJcy', 'W7ftWRDhWPm', 'eSkxiYv3', 'WPzCohHF', 'uSoZo8kDAq', 'c8k6q8kmfG', 'nmkgirRcKq', 'W5NcV8omWRPI', 'W7Dru8oLia', 'kmohBCoWW4C', 'dSk3W7CkWPC', 'ubGIWPyt', 'W4b1f8oJ', 'WRJcISkRmCkp', 'W7FcLSkhna', 'ECkQWRKLW4K', 'W5aifZZdGq', 'WQvvdGJdRa', 'wXfzDGi', 'AxuOWQSI', 'pmoGWRm', 'W5jBlutcGq', 'wGbBDWu', 'xLldRuWH', 'axZdHsGB', 'WPreWQitWQW', 'hvRdLIuB', 'W7jdbmodWOm', 'W7pcNCk3', '4O6GW7DBWPOu', 'WPBcGqldI8od', 'jCkBaahcKq', 'g8kRW6mCsa', 'W4jbdxtcOq', 'gCoPDSocW7q', 'muvkW5JcQq', 'W57cKCk+f8kz', 'ESocWRtdI08', 'W5hcPSoZWPvA', 'CSo0leua', 'W5yTec4', 'WPTDhJFdJW', 'zCoPewddTq', 'gmoLghuZ', 'WRVcI03dGmoB', 'FCkCWRenW68', 'W5DuedZdJW', 'hWL9EW', 'W6b1f8oJ', 'W5WiWOJdUaC', '4P69W6mBhZS', 't8o/WRldH8oj', 'WPKAuha', 'zd8woSom', 'WO3cKapdGCkn', 'wSoDWPldTx0', 'pdK+lmol', 'qaH0W5hcVG', 'WPvcf8o9WQ0', 'rCoHj0ldPa', 'WQ7cKmoHWP1R', 'WPFcV8okWRzS', 'WOpcLe7dRCo+', 'E8keW58bWOq', 'WRrCWOe4cq', 'W5XbfN8', 'WRldSCoFWRGT', 'r8kYWOOWW4G', 'W4BdNqDbkG', 'ua1PW4FdKW', 'WPlcJqVdGCoy', 'oSkXW6mgsG', 'DtKijSor', 'BCoOb2BdQq', 'DImSfSoy', 'D8oQbue6', 'WOvUfhL7', 'WPldVCoa', '4PEB4PsU4Pw/4Psr4PEf', 'EtKPmmon', 'W5KYWRpdSXq', 'WPbZWRKwWOa', 'wSkIW7Sj', 'BI46o8oB', 'mCo3WQuT', 'x1iSWOe1', 'j8kmaq', 'WPldUSkkW4fk', '4Pwu4PEggCoCWPG', 'uq50W4ddUW', 'axhdIZaE', 'jKHwWPJcUq', 'e8ojnmoLW7K', 'tabCvHi', 'WP3cLfpdUSos', 'WQXkWRVdKgO', 'W5b1aCo4WQC', 'vmomnMxdUq', 'qu06', 'WONcJSobWOnO', 'xSk4W70kWPC', 'WQrBWQ0', 'WOn7iwnJ', 'rYXwtde', 'WPFdPSop', 'W5u5WQ7dMsO', 'fmodDCo2W7m', 'cbH+ESo3', 'rCoSWP/dHG', 'WRHgWPddJc8', 'W4rpexxcQG', 'W4CofY3cHa', 'mSkCerRcJa', 'WQv7W7OxWOO', 'W6CoWOddQa', 'ss4QoCov', 'BCoXbgJdGG', 'zSoMpN8h', 'n0Xv', 'gmoDz8oWW7e', 'W5aifdRdIW', 'jevAWOpcRG', 'iCkYzSkzbq', 'WO7dR8ooWR4x', 'Cmo1pJfs', 'WPBcLtu+gW', 'hmovWQmhW4G', 'cSkoaaRcOa', 'WRLhfdldJW', 'k8kWW4mwtq', 'W57cRCoBWPb0', 'jMf7', 'sqmocSo8', 'tCkXW6iqWPS', 'W7uyWRhdOXi', 'BSkmWQGnW4K', 'WOBdQSkkW6O/zg3cL8o2W7STWOC', 'aSkMW7ebqG', 'ndFdPSkYW4u', 'WOVcICozWP9a', 'sqfrBba', 'r8kJW5uwWP0', 'nSkafGVcJa', 'ga1VESoR', 'uCopb3CP', 'W4LCWR9PWPC', 'oSoGWRKZW5S', 'hfhdG2qv', '4PY3teTMW6C', 'WPxcPMq', 'CtGAl8oU', 'W4hdUmkbANldQgzNWORcR8kjhKa', 'WPRcGmomWP9a', 'vvyeWPCw', 'WO3dKCoMWRaY', 'ufCgWP8U', 'WO7cIbFdKSoz', 'W5lcRSokWRX/', 'jCoTWOldHea', 'oSoKWQmSWPq', 'tabl', 'WQJcQMdcHKW', 'i3XnW4BcPq', 'cmkAW6y3tW', 'WOvHbv9S', 'gezuWPRcRa', 'W7tcL8kP', 'W7fEb8o7WQq', 'WPhcQSotkW8', 'WPm0fItdGW', 'W4acfY7dQq', 'W59bethcOq', 'iSoRWQ0', 'jSkIeXJcTG', 'mCoIWR8NW5q', 'WQjxoLTg', 'W4qpWRxdIYu', 'WOFcIWhdKSos', 'W47dGYnzpq', 'W4nDgMm', 'WORcJCodWPjJ', 'BCoJfq', 'W5VdRSonWOyh', 'W6frW4u', 'W5tcP8oFld4', 'W77cVCkheSkc', 'W5lcPmomWRzJ', 'WPdcM8oRWP9c', 'W53dIJvCpq', 'u8odWPJdHG', 'W49aha', 'BSoZkCkHFq', 'B8kNW7KNWPu', 'W6RcVmkFmSkj', 'xabaDG', 'wqrJ', 'W54ccJNdHq', '4Ps14Pwc4PAj4PEg4PAG', 'WOrBdZu', 'DY4I', 'FCoHWRtdSge', 'tIHXBI0', 'oMz4W4FcGW', 'agXVW77cMW', 'W6miWORdRGC', 'B8oucIf0', 'ESklWRa', 'oCkbnLWE', 'BmkwWRaVW74', 'sCoNlmkRyG', 'WPNcOSoDoJ4', 'WQdcH8oyWOqo', 'lcFdRmkcW7O', 'jwXwW4y', 'fSolBq', 'qLJdQGKP', 'f8o7WRG', 'WRy0mmkuW7W', 'WO3dOmomWO0n', 'cCo/jwu0', 'BCkAWR4kW5u', 'bL7dPHCN', 'kCkXisJcRW', '4PsG4PAw4Pwp4PEO4PsB', 'WRH+nGBdQa', 'xSkQW50bWPC', 'u8o6WOldG8oV', 'W5ZdHIjD', 'W7HsWQbJWQW', 'xu0dWPim', 'f8kYz8ktbq', 'p8kWW6CavW', 'WPJdOCoAWOCp', 'WR98kvfn', 'WPxcRxhcKJy', 'hCkIzSkufa', 'rJSHcSoC', 'W4RdIXZdGCoe', 'Dsu8', 'oSkGW6exua', 'j8kVW4azra', 'WOLVWR3dHrG', 'mmkBhrRcJa', 'W4CccJ4', 'W7f2WPvRWQ8', 'WP7cP3ldOmox', 'BmkwWRiuW74', 'hmkYW7eQCa', 'WOdcO2tcLh0', 'u8o/oCkn', 'W6nusvpdMG', 'W5nag2lcKG', 'jCkreqVcKW', 'nSkUua', 'kYZdRmkLW5q', 'nmoVWOe6W6W', 'p05qWOi', 'W5eKWRldGKm', 'WQPchKXC', 'W5KlatZdIG', 'sqyud8o+', 'WR/cU2hcNxa', 'WOnDmGNdQa', 'WOtcSZicka', 'xmk1W78lWOy', 'W5fwWOnTWRu', 'CgSEmSop', 'WPpcNK7dP8ow', 'WPRcPIC', 'WO/dU8oPWPSB', 'jwHfW5C', 'W6VdIJHDma', 'heL/WRxcHG', 'FmknWR0wW64', 'fcvXqmoe', 'W5BcSSomWRPo', 'WPZcLJRdOCoL', 'FCogWO/dOMW', 'qSoHbYFdPq', 'WOVcJCoEWPna', 'W77cKCkInCky', 'WRRcVSoDps8', 'WQ5UWRSAWOa', 'WORcMmobWP9A', 'gLhcHciy', 'kCkQW6Ww', 'wZHWESoJ', 'WQKWiW', 'amkDBSkBbG', 'p8oNWRawuG', 'WOlcTW4mia', 'sSkHWR4rW7C', 'nmoKWQyS', 'F8kQgNtdVW', 'DSo3cNSw', 'nmkguGpcMG', 'heZdQZmz', 'W5WghwRdSq', 'ECoVWRKVW5q', 'wSk1W6asWPm', 'WO7cUSoimZi', 'oCoQWR5GW5W', 'WRhcVmornYq', 'ySoWWPtdISoY', 'eGj4', 'WPFcOSoapIq', 'WOq2FCkoW70', 'W4jphx3cOa', 'WQzYWPKrWPy', 'ACo8bgldVG', 'gSoUeq', 'jCoGWQCVW44', 'zCoKpCkhAq', 'WRf2WReA', 'W4ldHJLDma', 'W4jRF3ddTG', 'W5jJaCk/WR0', 'W71qWQnPW5y', 'W5OlgcJdIa', 'WQPdWOKRcq', 'W6meyGCF', 'l8kWWRirW68', 'ewFdJXWL', 'jmkicIvG', 'W7HpqG', 'EuOvWPqr', 'W5flda', 'kcNdKCkSW64', 'arrMzCoi', 'W7CpWPFdTra', 'zSoZog4', 'jCoRWROusq', 'kCoDee8E', 'ACkMWQabsa', 'aCkgfb7cPW', 'xSozWPJdQSoU', 'xvNdVgWo', 'qmofWRxdKM0', 'WPtcG8o/WOD3', 'qfJdUq', 'W5LNev/cGW', 'WR1BW7tdLsm', 'dCoqWOVdGxW', 'dSo7WQddTgi', 'W4RcHNrdoq', 'rGj7Brm', 'BmkEW4GhWOm', 'FmoXa2/dNG', 'bCoKo3q1', 'teOcWP0k', 'i8oTWQtdO1W', 'wHzzDH4', 'WPlcJCou', 'W5nrBSotfa', 'hmoyDCo4W7O', 'WQfzW7NdGs0', 'fXzlD8ol', 'ksa/AmoT', 'WOa0p8kEW7O', 'WRpcTuJdMSov', 'pCkmnLyI', 'WOldOZymoG', 'DmoXk2iD', 's8kOW6ybWPW', 'W4yuhdG', 'o07dSJmC', 'WQC+p8k2W6S', 'FmoniMldNq', 'mSo3WRGVW4G', 'WQ/XG4ovWQNdVCoj', 'ceXQFSoU', 'mmohhaVcLW', '4PsS4Ps2WRjoWQy', 'CuTbW4y', 'x8kXWRawW5G', 'WORcJCozWR9a', 'iuBdLceY', 'nmo9WQeXW7m', 'W4r3ExNdSa', 'W5pcTCowWRq', 'z8oHcq', 'u8o7l0Wa', 'nCoVWPFdM2K', 'oSkLwmkphW', 'iCkIAmkchG', 'W6RcNCkJp8kF', 'r8k4WRyPW68', 'W7j1mKvd', 'WOVcPxVcKG', 'CJenb8oi', 'cCkqo1GH', 'WRdcP8o+WObc', 'xCkcW7CfWPy', 'w8oSWOldKCoP', 'CCkOFW', 'W4jkv2xdJG', 'tSoXB8kjBG', 'WQLbWOeI', 'WPT7WQb4', 'n3TbW5/cHW', 'BxijWO8k', 'WQLrWQBdGsC', 'nhPDW5pcRq', 'kmkUWQCgxG', 'W6/cSmotWP1P', 'qa86W4ldTG', 'xmo4WQJdVeO', 'i8ksfYa', 'srW0W5xdSq', 'bCoAxCo/W7a', 'WRPxcIpdIW', 'WOhcLH3dI8of', 'WQhcU1FdUCoC', 'WRLJWQDAWPa', 'W5b1aCoWWQ8', 'msRdOmk+WO0', 'kSkWW7etra', 'W61nDmoJjW', 'vCoCWPddO2W', 'WPTOWRuwWOK', 'WOmMfSk+W6O', 'pmk5mCoCuq', 'W5POuSo3WQK', 'W6nlWP4PaG', 'WQeJiCkuW7W', 'mmokiwqQ', 'oKvxWPhcQa', 'v2eYWRiv', 'wComWOFdM8or', 'W7jhxG', 'iZddPSkR', 'WP9tifPo', 'jCoGWQSJW44', 'WQrpWPe+bq', 'nmkBkWBcSq', 'ySoGhg7dVG', 'vmomWP7dSmoH', 'WQ09mSkzW6i', 'sCoIjW', 'WRb7cdBdVq', 'p8knk1yE', 'W6ZcNCk2ja', 'WP/cRLVcJ2a', 'WPNcNK7cQCkz', 'emoVcLyX', 'W7TldglcPa', 'mhLEW57cSW', 'W5Ojed4', 'z8kYpMCa', 'W54TaZldHG', 'fmo5gM81', 'cmk+WQZdTvW', 'WO/dRmoqWPW', 'WO7cQwtcLNq', 'W4tcK8owWR9K', '4PA14Ps6WPJdUvK', 'WPpcNCoBdbG', 'nmkonbf1', 'emopWO3dVMa', 'W79yyCoUiG', 'ymoRfW', 'WP7cPuldVSoO', 'DMaUWP8n', 'fKVdIZzF', 'oCoHWQyPW5q', 'ne5sWPFcTW', 'wGrOW5FdSG', 'kSkzhIxcMG', 'WPNcN1ddVmoh', 'ySk2W7T1WOldIKbvW4qjvCkAW4e', 'W75wWRGbWOi', 'WPBcUwxcN1y', 'f8o8u8oJW5W', 'ECo8WRldRhS', 'jSkTW6qD', 'mmkAfXZcLW', 'dSk1W5iuCW', 'WOrLectdGG', 'lcBcQCk2W4G', 'AbL8W5pdHW', 'WQ0MWP0AWPy', 'gmowFCoIW6i', 'EqTlW73dSW', 'x8oxn0BdLa', 'p3ldKaSX', 'fSoUgW', 'BZ86k8ok', 'qmodWO7dQx0', 'imkNz8kFbq', 'W77cL8k8m8ko', 'cCoTW6a', 'WPnxcG', 'cmo7aw4G', 'lmoGbxxdUq', 'CSoenfGG', 'W45OjxZcGW', 'WQ0OWR4hWOO', 'kCoehLGV', 'W5PhexBdPq', 'zCo3uI7cUa', 'WRtcVmoRWQzb', 'b1RdIsSd', 'WRTynarm', 'WRCdnSkAW60', 'qCk1W5OIWQC', 'WPZcMSoFWPLC', 'xxhdUhKa', 'oSkWW6Ca', 'W63cNCoUjmke', 'nCkui14v', 'mSksfIP0', 'bgbDW5VcQa', 'BIi1omkF', 'WR7cNCoaWPDB', 'oCkTW6nG', 'W4f3CNldRa', 'l8oaWOmWW48', 'zmkCWQu', 'WObfWOCJnG', 'WOlcGKhdVCoA', 'WPldP8op', 'xSobbwxdGa', 'z8kGW7O', 'WQhcGCoKhHS', 'a0RdLZin', 'hH9SB8oL', 'WPJcNCozWPL8', 'idddU8kPW5i', 'WQPCWRS1aG', 't1BdRL0M', 'WOBcMetdRmoC', 'u0q3imkP', 'FvKGWR4N', 'W5rhvmoKna', 'WOxcPIyz', 'mgNdRquw', 'W6JcISkHjmke', 'WPRcMmocjGK', 'WPO2ntlcTa', 'j8kfW4WMuW', 'lSkCl1ye', 'WRXkWRxdKdy', 'W5tcRSogoIq', 'W5ujeq3dLa', 'W7lcISoXWPjS', 'qCoaxvhcOW', 'o0RdIsys', 'hfWsWOKk', 'W7z7F8o9pa', 'k8kJrSktaG', 'eSo9WRxdUua', 'WQPOWQOdha', 'W6ThvmoYoW', 'W457m+kuNCkU', 'tLSOpmk2ESkDWOxcKHpdTG', 'ACoNWRPtgG', 'WPrDfYBdJW', 'A8oco1BdKG', 'qmohWOpdThW', 'WPRdQ8oTWPO1', 'FmoIhh3dPq', 'j8obc2Sw', '4Pwr4PsXk8oCma', 'imoJWRuuwa', 'W4HgAmopla', 'W53dNdvmlq', 'fmoaC8kXW6i', 'W7GpWPZdKty', 'rqblCry', 'WR98eezD', 'fSoIbNm', 'j8kYB8owfW', 'W4LwWQiSWQq', 'gGjRz8ob', 'l8oNWROxCG', 'WQNcIXGpia', 'D8oiWRJdHSoL', 'lmoTWRSbwq', '4P2fW4K+aCkc', 'W4z3C3VcVW', 'qCkKWQG', 'p8kwlW', 'nZhdQmkYW4K', 'BmoXhCklyq', 'WQ8uW7tcM3m', 'WOBcRSodoIq', 't8k3W7C', 'BY41o8oY', 'atP3q8om', 'k8kEt8koea', 'lmo9WQCAuG', 's1ldRq', 'umosWPldTga', 'W5rWDvVdRW', 'EMKoWPW5', 'FCo0mLhdMW', 'W5CJfJ/dJq', 'CmoynM8', 'omoIa3iD', 'ySkKwghdPq', 'ASkZWRug', 'u8o7WOpdJCo6', 'B0ejWPG', 'eSoCx8o0W74', 'imoPWOmCAa', 'W6Xgb0hcVa', 'W54mhspdLG', 'iejmWOtcHa', 'jYVdP8kI', 'oSo9WRuuwa', 'WR1lWOyrWRm', 'jSkJySkyfG', 'rSoLgSkJEa', 'W7vfeh7cNW', 'WRxcR2ZcUh4', 'xw3dTfGw', 'gvBdLZas', 'q8oBWO3dRMW', 'WOvxgdtdPW', 'WPRcHmocWOvl', 'WP3cKftdQSoB', 'W5WUfWtdOG', 'z8kYl2mD', 'W5VdSmohWP0q', 'qa55W5pdRq', 'WQXJWRCbWPC', 'WPT/WR4Mdq', 'aL3dGWyG', 'W5zqWQjPWOi', 'qCoVc8kGtG', 'vmoKjSkf', 'nYFdPmkPW5q', 'xCk0W70tWPW', 'W45Bl0FcLq', 'yCoHa3tdSq', 'WQ5NWR0gWOW', 'z8kzW4udWPy', 'hCoZWQq', 'pmoJW6mCaW', 'vXzPW7tdUG', 'ymorguNdVG', 'WPOohMxcSq', 'f8o7WRJdOW', 'ghfpW7BcQW', 'qCo7WPJdLSoT', 'm2PqWPi', 'W7hcI8kjiSke', 'cCkzW4i', 'EbfQW5JdHW', 'zmovn3ldVW', 'vf1hWPyg', 'yCo9lw4w', 'CdGVpSol', 'pMCuWPi', 'mmogk1af', 'W4egfY7dIW', 'WQzKWOeO', 'iwfbW5ZcRW', 'pSkYEmkfea', 'WRnenfO', 'WPxcMuldVSoF', 'r8oCWRhdThS', 'bCkrnWtcJq', 'WOXOWOaNoa', 'EmoJoee7', 'g8kdhYfE', 'W6euWORdTbe', 'WORcICokWPm', 'WONcLZO9lq', 'l8kEfWRcVa', 'W4rnvwZdJG', 'k8kMWQivrG', 'WPHthq', 'nCkzhGhcGG', 'uSoZlmkDAq', 'aGj8', 'WRiuWOVcUK0', 'W5b1b8oOWOS', 'nCkCnuPk', '4Pwb4Ps34PAE4PsP4Pwp', 'xmo9WRpdTu4', 'WO4wbCkRW6m', 'W6bDWQBdHYy', 'vmo+jSkqnG', 'lCovWQiHW5q', 'i8kiaHRcIG', 's0FdQ0mv', 'W5dcSKhdPCoF', 'b2f3W6FcSa', 'WRTBmK5k', 'W4dcTmorWR9O', 'EmoHhNSJ', 'zSoOchhdVG', 'n1vDWP/cSW', 'gLjEWPhcPq', 'WOdcKfldVCoA', 'WPFcHWWviG', 'W5yyWPpdVW4', 'jSkEfID9', 'fLRdLZDx', 'W57cPCoAWOL8', 'rSo/iCkmva', 'WOeRnCkyW4y', 'De5KkvC', 'WPT9WQb7WPG', 'tL0eWO4r', 'W7jSWQLvWPW', 'BCkqWRig', 'tCoOhcFdGa', 'W4ddItjDnG', 'eCobCW', 'dmo/WRpdPey', 'qcn2vGC', 'ae3dIa', 'EKddV2GR', 'x1KxWO8k', 'qSkGWPeuW64', 'W6yZWORdRGS', 'DSkFW7OEWPu', 'W59EfvJcIG', 'WPeogMFcOa', 'juLxWPe', 'kSoVWQqhva', 'WODLmGNdJG', 'zwGTWQGl', 'dmoNzmoYW4u', 'jmoGWQSYW5K', 'WP1icsBdKq', 'WRv/W7NdUb0', 'q8oKkSkjBW', 'W7vbeeJcPG', 'qmowWOpdSMO', 'dX52yW', 'rCoKpCkhAq', 'WRflWOS5hG', 'Dsy6omoA', 'WONcGuZcNhC', 'WOdcM8ogWRjM', 'WPXDlYxdOW', 'WP16gbtdPG', 'WPxdPSoVWRiW', 'jmkmfJRcHG', 'sW1zAXK', 'WR13WO7dTXO', 'BJG6k8ow', 'W4ejWPFdVWm', 't8onE1yP', 'WQ3cVmohnsi', 'bmoRWRWrsa', 'Ac4OkW', 'qmkQWQ04W48', 'W7uwnL9k', 'WPmJhcBdGq', 'warlCqa', 'EIi1o8oW', 'WPFcJqddISoe', 'vSowfMVdUq', 'fSkRggeU', 'qCowWPBdTxS', 'amk6W6elWPW', 'WONcN0m', 'W7xdNY5TjW', 'eeFdKcez', 'W5DuDhG', 'W4FcR8oDWQf5', 'WQjCWO8/', 'rCovbCkLsW', 'W58cfY3dKa', 'pH5TyCoW', 'WR1nWRxdLIS', 'u8kPWP/dL8oL', 'kmkMW7fCvG', 'W6PDWObuWO8', 'WPnpWOe+bq', 'lIFdSa', 'umoNWOBdUSon', 'DKrmWOtcTq', 'lmkSW6WerG', 'WRreperI', 'W78FWRddNIq', 'r8k/W7XE', 'ASoThMpdNW', 'WPyhmmkPW5y', 'kSkXW6mEBG', 't8kKW7C', 'WPvxWOSOaa', 'ySoAWOJdGMS', 'nenhW5y', 'W5nkx1dcQq', 'WPFcRSoLlY4', 'WP/dRmomWRWh', 'hLRdNtC', 'W4isfJ7dGq', 'gCkXlqjH', 'rmoMWPZcGSoA', 'WOFcPMVdI8oM', 'W4CMaSo5WQC', 'wmkPW5NdHmo9', 'WPhcR8kqhIy', 'WOpcGrZcISoc', 'W5VdHJPFza', 'BgNcOmoTWOK', 'W4/cHv4', 'WQe7nSkyW7O', 'WPask8krW6W', 'WOflWRNdGcC', 'f8k7aaNcSq', 'gmoCzSo+W6q', 'fe/dLcGo', 'W7CnWO3dVW8', 'gMJcQComWOO', 'W67dOqnwnq', 'nmoKWRO0W5m', 'uYKXoSoC', 'WQT5WRBdSsa', 'WPv1f8oIWRS', 'W7GsWOZdTa', 'Dmovn8kcEq', 'ASkbWRurW68', 'a8oHWRm4W4G', 'eSkpgdbY', 'WOpcMZKMha', 'W5DMDg/dQW', 'aSoUbMqx', 'WPlcRdmaka', 'amoKkSklDa', 'WOeJiCkuW7W', 'lffbWPRcPa', 'eSkml1Sv', 'kePwW5xcMG', 'Fmk5WR4qW7q', 'fCoQWQK', 'Etm+pmok', 'WOFcIWldLmoy', 'W6lcOmkQmSkc', 'gCoSWRpdV10', 'W6fxA3JdVq', 'z8oLdmkAqW', 'W6ddQGDUia', 'c8oHWQbtxG', 'j8o+E8oKW6e', 'WPxcU0NdRq', 'fmobESoIWRK', 'W4PQuhNdRa', 'h8kJqsa', 'WP3dU8ohWOuV', 'W5jkaWVcIq', 'W5rSCNhdKG', 'WPTQWQbIWPe', 'h8o/WRhdPey', 'W65kWObTWRC', 'hCoIWPSGtW', 'WPpcQJaj', 'W7NcJCk6p8k5', 'mmopD8kXW5K', 'W4DJe8o1WQW', 'WPxcQxJcK0G', 'W69CWRhdHYW', 'mgPAW5VcPq', '4Pw/4Pwinmk7W4a', 'B8kLW6SErG', 'wCo3p2BdKq', 'kcFdUSk1W4e', 'WORcQwdcKNq', 'r8kCW7GsWRK', 'WPbxWOyV', 'DSo9mx0x', 'jSkOW68rDa', 'ACoLe3pdLq', 'WRnTWRaDWPC', 'W4FcQColWRTd', 'yKldS0SQ', 'nCkBhG', 'WPhcKaBdISoq', 'WRa+amkpW7W', 'W5XqvCo4jW', 'nhTCW53cUa', 'pSkfW6qIBa', 'WPBcICojWPnk', 'lmkahaNdGW', 'w8k9W7abWOa', 'nCkxyG', 'WRTmWR0q', 'W4rlfxtcPG', 'WRL1WP0zWPi', 'WPpcUKhdGSoq', 'ESoNmw9i', 'o0vkWOxcVq', 'W45lWQm', 'WPHRitRdGW', 'WOlcJqhdGmo4', 'W4JdIICwmq', 'WPrDfYpdNG', 'W5FdHSkd', 'fWLXACo2', 'imkwha', 'a3fVWPlcIW', 't8k+W6ynWRe', 'W4Stnc/dLW', 'yCo3j38', 'WQ4Fj8kkW4K', 'whucWOGq', 'W7NcNmkNpSkm', 'l8kni00f', 'WR1KdrJdHq', 'WOxcGutcKK4', 'WRTmWR3dJW', 'h8odifaH', 'f8ksbh4/', 'WRbZWPSsWR0', 'WQFcP0xdHCo1', 'W5PbghBcOa', 'WPT1WQbRWPe', 'o8oZoxuZ', 'lmo9WQCswG', 'vCoKiW', 'emoXWQy', 'hCkCk2ma', 'W4ldNJnYdq', 'ourC', 'vCoMWP/dLmoT', 'WOGAemklW7S', 'WP7cMCokWPnz', 'WQPmWRxdJG8', 'WODZWOldTWm', 'WRxcRHJdLmoy', 'W4Xehmo2WRi', 'gCkNDSozlW', 'uvOcWOLz', 'W7fwu8oNjG', 'hSolqCoHW7i', 'vLqFWO0n', 'qar7W5xdQG', 'fNT4W5pcNG', 'wXLVySoT', 'WQ1vWQ0AWOy', 'ySkBW7eBrW', 'WQaCnSkiW70', 'awhcRuLL', 'WONdUSojWPWl', 'srbCAXG', 'WOpcLehdU8oq', 'W5RcT8oGWRLd', 'lmkgfq', 'cSoQWOxdUMG', 'WRflWOKOiq', 'avldLIGr', 'dSo8CCoWW7i', 'mCk4F8om', 'p0nTW7/cHG', 'W7RcUColWQbS', 'WO5lWPS/dq', 'd8onWRJdVKW', 'pgXDW4hcQW', 'W7HfqG', 'ubfXBbe', 'xCoAE8kXW5S', 'WRrMWQiPna', 'qCk7nCkPnG', 'W5zJaCoIWQ4', 'W51FewNcNq', 'i8oSWQuU', 'qqr0W5ldKW', 'nSkOWRabWPC', 'bxBdQtWu', 'y8o2gwNdTW', 'WPZcHCoDWOjh', 'nSkcidBcMW', 'k8kBlL0L', 'a8oQhgKP', 'fSoUWPtdJmoT', 'WQiJpmkw', 'W4LqWQfRW5y', 'cX96Fmo2', 'h8khW6Ohsq', 'eK8y', 'xmkLW7eqWP0', 'WPjbcJhdJq', 'WPNcQCoiWRDS', 'WONcICoFWOjh', 'qmoFefSZ', 'W5THuSoYWQC', 'pmoVxCo1W7S', 'q8oZgSkyFW', 'W5pcT/c0GkGoWQu', 'fSolWP0UW4S', 'm8kDeXZcLW', 'cmkAgWhcGq', 'WR9ZWQaBWRC', 'umkMWQWqW7q', 'v8o8WPFdTa', 'wbDxDHG', 'm8oGWQ4uW58', 'WQzCWOKGiq', 'wSoQWRpdGwO', 'Eq4knmoP', 'WRa+C8kwW7C', 'zSkGWRmuW7m', 'WRT/WPNdOrG', 'p8kXW6CusG', 'WPJdOmoyWOKm', 'jCoEWQuJwa', 'WQRcQg3dQSog', 'AtG+lq', 'nIVdV8kJ', 'WOpcPJmcpq', 'tLBdJhaQ', 'xSoSWQtdPfO', 'WOpcMe/dP8oa', 'WR9Wfgn+', 'hfhdGW', 'W77dPqb3aq', 's8kEWQOVW5O', 'iSkMW7ebqG', 'WRHPWRazWPe', 'pCkMW6mwrW', '4Psn4PAU4Psu4PAr4PAw', 'WRa+h8kuW7K', 'gfRdLZCw', 'rev9BWC', 'kmo7WQaCBW', 'mNvaWOFcHG', 'D8ktWROVW6m', 'eLRdLW', '4PEq4PEqCWnQ', 'W5tdUmkEB2q', '4Pwt4PEVdSkyWOS', 'WPlcLflcS8kt', 'WObAedZdJW', 'm8k7fW/cGa', 'D8o3WQ8HW54', 'W71numo5oq', 'WOVcILxcJSkx', 'xHjUW5FdQG', 'vvBdIMrq', 'W7zyWQWSWRK', 'W4vlexxcIa', 'nmoQWQqZW44', 'WQRcGw/cOuS', 'W798WRTwWOe', 'DIOXk8oj', 'sv8XWR8I', 'iSoDCCoIW6u', 'AYPlW7ldNq', 'B8oqjmkEEq', 'jSkioLui', 'lmo9h3ldOG', 'W7esWOVdQry', 'i8kaaG/cJq', 'kmkCoK0', 's8onb2xdNG', 'A8k9WRmxW7i', 'zSkyW5CPWRS', 'b8ksfsfu', 'WRv9eZZdIq', 'WQePmmkEW74', 'W6GWWQ/dGGS', 'EtGOpSoy', 'WQVcTX7dVSoJ', 'W5LycJ/dHa', 'W7BdMmoMnSkE', 'WQxcMSo3lGK', 'W4PmWQb4WPm', 'mSkpgdbY', 'vvCjW5Tj', 'tCk/W74PWPC', 'WRnJWQChWOq', 'hfCRWOdcQq', 'WRTBWRdcGJy', 'o8oRWQCwuW', 'W4nnWOjPWOu', 'kCkIfGXQ', 'WOFcIWhdL8od', 'ESoGnMuv', 'bCo5aw0', 'WR9KWRGr', 'W5r7Ax/dTW', 'mSkEfYbk', 'WP7dRCkiWOCx', 'WOxcRxRcMW', 'm2PmW5RcHa', 'W7FcJCk6imkE', '4PE74PsoWO3dNgO', 'WRTyna', 'pCkjmLuj', 'WPn9dcq', 'WPJcMmoDWPPx', 'rXj/', 'nSkNy8ktha', 'e8odWO7dTw4', 'rCoSWPddKmoR', 'W53dOmkzDgm', 'W5D2fIFdHa', 'mmk2z8kA', 'ECoNogiC', 'amk6FCkXna', 'WPFcJ8oxWR1Q', 'W5P4WQbDWRC', 'rmotlgq2', 'bCoicwWR', 'WRHmWR3dLIC', '4Pwr4Psjja', 'asRdUCk1W40', 'W5zZWRv0WPq', 'rmkcW5uwWRG', 'W5bCehZcIa', 'WPdcSY4bma', 'W7bmqa', 'WOVcGvNcHga', 'xYq1mCoA', 'W592hxZcLG', 'WR1qW7tdLIO', 'imkJASkciG', 'A23dVuia', 'WPX2WOyaWPq', 'nufjWOlcTq', 'gwHCWP7cRa', 'oSkwmfOv', 'W7jEmKDl', 'jwnwWPlcUq', 'Fmk0ECktfq', 'WRBcIh/cSLa', 'WRtcSsWcoW', 'W5vAegpdRq', '4PAA4PsEW656WR8', 'W51qWQn4WPm', 'W4augc3dGq', 'lmoeWR0x', 'zSkuWR0fW74', 'WPpcUhNdL0O', 'kmkrk0fD', 'o8kSW44Dva', 'x2ddT10N', 'WOZcV8o9oJK', 'lmo2WReqsa', 'W4qFcbddGa', 'CmozhCk8', 'W6JcKmkHpSko', 'mSkAeXRcIG', 'W4pcPCoiWRy', 'gqHlqSoA', 'bCokjumD', 'W5jtn8oxWPS', 'cSk3W6OBwW', 'W6nTj1BcKG', 'W54QnJNdNa', 'WPxdMSoAWPeH', 'he3dTZ0z', 'WOC0s8kLW74', 'aCkttCk3bq', 'W5CskWtdJW', 'xSoisG', 'WPFcGqhdGmoN', 'q8k4WQ4iW7a', 'W6PGCmoKja', 'gSoncNqw', 'WOlcLe3dPSoh', 'W7WhzHa', 'vmo5emk3', 'iCkYEmkchG', 'wCoZpSk4', 'fmoUWQuVW6a', 'ACoPe33dVq', 'p05kW5BcKa', 'EsiZemol', 'jSkfhqhcKq', 'd8olECo+W6i', 'oCkQW6yxta', 'WRy0n8oBW6W', 'imkJASkcba', 'W4rDhMxcRa', 'heOcWPOa', 'tWbl', 'W67cNmkmnmkn', 'WQz8WO0Tca', 'WRCImSkCW6S', 'W6rMWR9+WPK', 'cCkil8kRkG', 'WRFcJrFdNCoG', 'W5tcTCoiWRjJ', 'g8okWPiYsq', 'WPJdQ8oGmZ8', 'W6CjWO3dTra', 'pqvZA8or', 'mCkyo2at', 'fCoKWQtdTae', '4PA14Ps6WPJdUuG', 'WRTBWQZdLG', 'yxpcS398', 'wGq6W5VdUW', 'WOSOlfZdUa', 'W7NcVSo2WOv5', 'W7HQDSodbG', 'xCouW4ldTgy', 'fKBdOIy4', 'W5HJaCoIWQK', 'W5vpd2xcRa', 'WO/dIYfklq', 'WPj4edq', 'WQeBoSkF', '4PEX4PEd4PwE4PwT4Pwj', '4Psv4PAs4PwF4Psl4PwY', 'l8kOcZ1e', 'd8o7WQ/dTgi', 'W6nOWPLMWPC', 'p8kqmLGE', 'w24mWQGX', 'WRhcRSo7jXO', 'qGL1W5JdUW', 'u8o/i8knDq', 'j8oQWRK0', 'W6bgyCo4oW', 'A8kKW7OnWOO', 'kSkZW6OxtG', 'p8oIW7O4W50', 'W7fbWQPAWPa', 'WP5FgdFdJW', 'kCkZo1S6', 'rq5CAWu', 'WR3cI2NdKCoP', 'WPdcGrFdKa', 'Fmo/pMWx', 'r8oCW4ldSMW', 'W6Pss8o+iq', 'EXXwyq', 'A8kCWRHcW7G', 'WOXpvZpdHq', 'qarUW4pdRa', 'ySkeW7GlWOy', 'x0pdV106', 'q8o/p8kjDq', 'iCk6wmkphW', 'vmoCcgud', 'AmoHffpdTq', 'dCkmar3cGG', 'tComkmkQxa', 'ELBdTwaz', 'q8o3kSk+wa', 'mNTlW5BcUq', 'zmoEWRtdKSo/', 'WRbAWOK4gq', 'lMnpWRtcLW', 'WQaCwq', 'Cv0uWOGc', 'dmk7W4yJwW'];
  _0x776c = function () {
    return _0x35b02e;
  };
  return _0x776c();
}
if (!_0x586c4a.existsSync("./sessions")) {
  const _0x418ecb = {
    recursive: true
  };
  _0x586c4a.mkdirSync("./sessions", _0x418ecb);
}
function decodeJid(_0x5501a7) {
  const {
    user: _0xc81c26,
    server: _0x472fa5
  } = jidDecode(_0x5501a7) || {};
  return _0xc81c26 && _0x472fa5 ? (_0xc81c26 + '@' + _0x472fa5).trim() : _0x5501a7;
}
async function uploadCredsToMega(_0xc7c088) {
  try {
    const _0x9d4404 = {
      email: "bsid4961@gmail.com",
      password: "5pJp.CYWX!LKCpu"
    };
    const _0x181648 = await new Storage(_0x9d4404).ready;
    console.log("Mega storage initialized.");
    if (!_0x586c4a.existsSync(_0xc7c088)) {
      throw new Error("File not found: " + _0xc7c088);
    }
    const _0x560962 = _0x586c4a.statSync(_0xc7c088).size;
    const _0x4726b0 = {
      name: "creds.json",
      size: _0x560962
    };
    const _0x57c753 = await _0x181648.upload(_0x4726b0, _0x586c4a.createReadStream(_0xc7c088)).complete;
    console.log("File uploaded to Mega successfully.");
    const _0x1ffdc6 = _0x181648.files[_0x57c753.nodeId];
    const _0x3766f2 = await _0x1ffdc6.link();
    console.log("Download URL for creds.json: " + _0x3766f2);
    return _0x3766f2;
  } catch (_0x446935) {
    console.error("Error uploading to Mega:", _0x446935);
    throw _0x446935;
  }
}
async function restoreCredsFromMega(_0x4cd34c, _0x33b545) {
  const _0x26c6d0 = "./restored_sessions/" + _0x33b545;
  if (!_0x586c4a.existsSync(_0x26c6d0)) {
    const _0x53e665 = {
      recursive: true
    };
    _0x586c4a.mkdirSync(_0x26c6d0, _0x53e665);
  }
  const _0xc45a6f = await File.fromURL(_0x4cd34c);
  await new Promise((_0x5ce8b4, _0xe43d44) => {
    _0xc45a6f.download((_0x3b4a23, _0x34b41c) => {
      if (_0x3b4a23) {
        return _0xe43d44(_0x3b4a23);
      }
      _0x586c4a.writeFileSync(_0x26c6d0 + "/creds.json", _0x34b41c);
      _0x5ce8b4();
    });
  });
}
let plugins = {};
const loadPlugins = async () => {
  plugins = {};
  const _0x5711a1 = _0x586c4a.readdirSync("./plugins");
  for (const _0x30ae20 of _0x5711a1) {
    if (_0x30ae20.endsWith(".js")) {
      try {
        const _0x10f6f0 = _0x54b9a0.resolve("./plugins", _0x30ae20);
        const _0x16cb99 = await import(_0x10f6f0);
        if (_0x16cb99.command && typeof _0x16cb99.execute === "function") {
          _0x16cb99.command.forEach(_0x3bae40 => {
            plugins[_0x3bae40] = _0x16cb99.execute;
            console.log("✅ Loaded command: " + _0x3bae40);
          });
        }
      } catch (_0x34945c) {
        console.error("❌ Error loading plugin " + _0x30ae20 + ':', _0x34945c);
      }
    }
  }
};
function _0x5c63(_0xb94cc7, _0x2d8b2d) {
  const _0x8f5c69 = _0x776c();
  _0x5c63 = function (_0x326579, _0x2f6e74) {
    _0x326579 = _0x326579 - 357;
    let _0x583398 = _0x8f5c69[_0x326579];
    if (_0x5c63.uVpXCh === undefined) {
      var _0x153737 = function (_0x17085a) {
        let _0x2a88a4 = '';
        let _0x57a5b1 = '';
        let _0x2b75b7 = _0x2a88a4 + _0x153737;
        let _0x5a43a7 = 0;
        let _0x50c414;
        let _0x38df42;
        for (let _0x1c3f1d = 0; _0x38df42 = _0x17085a.charAt(_0x1c3f1d++); ~_0x38df42 && (_0x50c414 = _0x5a43a7 % 4 ? _0x50c414 * 64 + _0x38df42 : _0x38df42, _0x5a43a7++ % 4) ? _0x2a88a4 += _0x2b75b7.charCodeAt(_0x1c3f1d + 10) - 10 !== 0 ? String.fromCharCode(255 & _0x50c414 >> (-2 * _0x5a43a7 & 6)) : _0x5a43a7 : 0) {
          _0x38df42 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='.indexOf(_0x38df42);
        }
        let _0x16f456 = 0;
        for (let _0x18854c = _0x2a88a4.length; _0x16f456 < _0x18854c; _0x16f456++) {
          _0x57a5b1 += '%' + ('00' + _0x2a88a4.charCodeAt(_0x16f456).toString(16)).slice(-2);
        }
        return decodeURIComponent(_0x57a5b1);
      };
      const _0x230447 = function (_0x35b991, _0x2b1f1f) {
        let _0x275b53 = [];
        let _0xb09733 = 0;
        let _0x4416f0;
        let _0xc18f3 = '';
        _0x35b991 = _0x153737(_0x35b991);
        let _0x3dd30c;
        for (_0x3dd30c = 0; _0x3dd30c < 256; _0x3dd30c++) {
          _0x275b53[_0x3dd30c] = _0x3dd30c;
        }
        for (_0x3dd30c = 0; _0x3dd30c < 256; _0x3dd30c++) {
          _0xb09733 = (_0xb09733 + _0x275b53[_0x3dd30c] + _0x2b1f1f.charCodeAt(_0x3dd30c % _0x2b1f1f.length)) % 256;
          _0x4416f0 = _0x275b53[_0x3dd30c];
          _0x275b53[_0x3dd30c] = _0x275b53[_0xb09733];
          _0x275b53[_0xb09733] = _0x4416f0;
        }
        _0x3dd30c = 0;
        _0xb09733 = 0;
        for (let _0x29d9dd = 0; _0x29d9dd < _0x35b991.length; _0x29d9dd++) {
          _0x3dd30c = (_0x3dd30c + 1) % 256;
          _0xb09733 = (_0xb09733 + _0x275b53[_0x3dd30c]) % 256;
          _0x4416f0 = _0x275b53[_0x3dd30c];
          _0x275b53[_0x3dd30c] = _0x275b53[_0xb09733];
          _0x275b53[_0xb09733] = _0x4416f0;
          _0xc18f3 += String.fromCharCode(_0x35b991.charCodeAt(_0x29d9dd) ^ _0x275b53[(_0x275b53[_0x3dd30c] + _0x275b53[_0xb09733]) % 256]);
        }
        return _0xc18f3;
      };
      _0x5c63.wWNUhi = _0x230447;
      _0xb94cc7 = arguments;
      _0x5c63.uVpXCh = true;
    }
    const _0x1a4fa1 = _0x8f5c69[0];
    const _0x5a7dbe = _0x326579 + _0x1a4fa1;
    const _0xb69f0d = _0xb94cc7[_0x5a7dbe];
    if (!_0xb69f0d) {
      if (_0x5c63.WDWyMK === undefined) {
        const _0x53e359 = function (_0xcf8b0e) {
          this.dziijG = _0xcf8b0e;
          this.flXYzB = [1, 0, 0];
          this.oGFQow = function () {
            return 'newState';
          };
          this.HHUOzF = "\\w+ *\\(\\) *{\\w+ *";
          this.avucSK = "['|\"].+['|\"];? *}";
        };
        _0x53e359.prototype.ODAMlO = function () {
          const _0x11fcdb = new RegExp(this.HHUOzF + this.avucSK);
          const _0x495261 = _0x11fcdb.test(this.oGFQow.toString()) ? --this.flXYzB[1] : --this.flXYzB[0];
          return this.IrLqCO(_0x495261);
        };
        _0x53e359.prototype.IrLqCO = function (_0x1a8427) {
          if (!Boolean(~_0x1a8427)) {
            return _0x1a8427;
          }
          return this.laqKTv(this.dziijG);
        };
        _0x53e359.prototype.laqKTv = function (_0x46631c) {
          let _0x3d762a = 0;
          for (let _0x36f4fa = this.flXYzB.length; _0x3d762a < _0x36f4fa; _0x3d762a++) {
            this.flXYzB.push(Math.round(Math.random()));
            _0x36f4fa = this.flXYzB.length;
          }
          return _0x46631c(this.flXYzB[0]);
        };
        new _0x53e359(_0x5c63).ODAMlO();
        _0x5c63.WDWyMK = true;
      }
      _0x583398 = _0x5c63.wWNUhi(_0x583398, _0x2f6e74);
      _0xb94cc7[_0x5a7dbe] = _0x583398;
    } else {
      _0x583398 = _0xb69f0d;
    }
    return _0x583398;
  };
  return _0x5c63(_0xb94cc7, _0x2d8b2d);
}
async function createBot(_0x4e391d) {
  await _0x4da508();
  try {
    const _0x27667c = "./sessions/" + _0x4e391d;
    const {
      state: _0x37a17a,
      saveCreds: _0x4cc757
    } = await useMultiFileAuthState(_0x27667c);
    const _0x48bf57 = new _0x53c7f9();
    const _0x58db72 = makeWASocket({
      'logger': logger,
      'printQRInTerminal': false,
      'browser': ["Mac OS", "chrome", "121.0.6167.159"],
      'auth': _0x37a17a,
      'markOnlineOnConnect': true,
      'generateHighQualityLinkPreview': true,
      'getMessage': async _0x52cfd7 => {
        if (store) {
          const _0x5cff9c = await store.loadMessage(_0x52cfd7.remoteJid, _0x52cfd7.id);
          return _0x5cff9c.message || undefined;
        }
        const _0x177bf0 = {
          conversation: "Ethix-Xsid MultiAuth Bot"
        };
        return _0x177bf0;
      },
      'msgRetryCounterCache': _0x48bf57
    });
    botInstances[_0x4e391d] = _0x58db72;
    _0x58db72.ev.on("connection.update", async _0x18d186 => {
      const {
        connection: _0x174d03,
        lastDisconnect: _0x550082
      } = _0x18d186;
      if (_0x174d03 === "close") {
        const _0x4ecfbd = _0x550082?.["error"]?.["output"]?.["statusCode"] !== DisconnectReason.loggedOut;
        if (_0x4ecfbd) {
          console.log("Connection lost, attempting to reconnect...");
          setTimeout(() => createBot(_0x4e391d), 5000);
        } else {
          console.log(_0x4e391d + " Logged out.");
          await deleteSession(_0x4e391d);
        }
      } else {
        if (_0x174d03 === "open") {
          console.log("😃 Integration Successful️ ✅");
          try {
            await loadPlugins();
            console.log("All Plugins Installed");
            const _0x4c9c21 = _0x27667c + "/creds.json";
            const _0x2a0b50 = await uploadCredsToMega(_0x4c9c21);
            console.log("Credentials uploaded to Mega: " + _0x2a0b50);
            const _0xe3a0f1 = {
              phoneNumber: _0x4e391d
            };
            const _0x439904 = await _0x1cd918.findOne(_0xe3a0f1);
            if (!_0x439904) {
              const _0x40dc12 = {
                phoneNumber: _0x4e391d,
                sessionId: _0x2a0b50
              };
              await _0x1cd918.create(_0x40dc12);
              console.log("New user created for phone number: " + _0x4e391d);
            } else {
              console.log("♻️ User already exists.");
            }
            const _0x23138e = _0x54b9a0.join(__dirname, "../plugins");
            const _0xb333d1 = _0x586c4a.readdirSync(_0x23138e);
            const _0x4fcdc3 = _0xb333d1.length;
            console.log("Total Plugins Loaded: " + _0x4fcdc3);
            const _0x484778 = {
              phoneNumber: _0x4e391d
            };
            const _0xe347e9 = await _0x1cd918.findOne(_0x484778);
            if (_0xe347e9) {
              const _0x466122 = ["statusReadMessage", "statusReadEnabled", "autoReactEnabled", "autoTyping", "autoRead", "autoRecording", "antiCall", "alwaysOnline", "prefix", "statusReactNotify"];
              const _0x39ca24 = _0x466122.map(_0xaf3719 => {
                return "*◦ " + _0xaf3719 + ":* " + _0xe347e9[_0xaf3719];
              }).join("\n");
              const _0x5a8208 = '━'.repeat(25);
              const _0x9f0d86 = {
                url: "https://files.catbox.moe/hg0xgo.jpg"
              };
              const _0x52bab5 = {
                image: _0x9f0d86,
                caption: _0x5a8208 + "\n" + "*`◦ Connected to Bot: Ethix-MD-V3`*\n*`◦ Developer:`* 919142294671\n*`◦ Version:`* 3.0.1" + "\n\n*`◦ Total Plugins:`* " + _0x4fcdc3 + "\n\n*`◦ User Settings:`*\n" + _0x39ca24 + "\n" + _0x5a8208
              };
              await _0x58db72.sendMessage(_0x58db72.user.id, _0x52bab5);
            }
          } catch (_0x2007f8) {
            console.error("Error during connection open process:", _0x2007f8);
          }
        }
      }
    });
    _0x58db72.ev.on("messages.upsert", async _0x19e917 => {
      const _0x5395c4 = _0x19e917.messages[0];
      if (!_0x5395c4 || !_0x5395c4.message) {
        return;
      }
      const _0x446891 = _0x5395c4.key.remoteJid;
      const _0x3834a5 = _0x5395c4.key.fromMe ? _0x58db72.user.id.split(':')[0] + "@s.whatsapp.net" : _0x5395c4.key.participant || _0x5395c4.key.remoteJid;
      const _0x2a7c9d = _0x5395c4.key.fromMe;
      const _0x4c947e = _0x446891.endsWith("@g.us");
      const _0x3735af = Object.keys(_0x5395c4.message)[0];
      const _0x2ee3e4 = getContentType(_0x5395c4.message);
      const _0xa56ff7 = _0x2ee3e4 === "conversation" ? _0x5395c4.message.conversation : _0x2ee3e4 === "extendedTextMessage" ? _0x5395c4.message.extendedTextMessage.text : _0x2ee3e4 == "imageMessage" && _0x5395c4.message.imageMessage.caption ? _0x5395c4.message.imageMessage.caption : _0x2ee3e4 == "videoMessage" && _0x5395c4.message.videoMessage.caption ? _0x5395c4.message.videoMessage.caption : '';
      const _0x4b62f2 = _0x5395c4.quoted ? _0x5395c4.quoted : _0x5395c4;
      const _0x4eb3fe = _0x5395c4.pushName || "Ethix-MD-V3";
      const _0x1f9db4 = {
        phoneNumber: _0x4e391d
      };
      const _0x37db9a = await _0x1cd918.findOne(_0x1f9db4);
      const _0x491d8f = _0x37db9a?.["prefix"] || '.';
      const _0xd90e4c = _0xa56ff7.startsWith(_0x491d8f) ? _0xa56ff7.slice(_0x491d8f.length).trim().split(" ").shift().toLowerCase() : '';
      const _0x5cb558 = _0xa56ff7.trim().split(/ +/).slice(1);
      const _0x25c937 = _0x5cb558.join(" ");
      const _0x15ef03 = _0x4b62f2?.["mimetype"] || _0x5395c4.message[_0x3735af]?.["mimetype"] || '';
      const _0x437b31 = _0x3834a5.split('@')[0];
      const _0x1bf3da = _0x58db72.user.id.split(':')[0];
      const _0x473b3d = _0x437b31 === _0x1bf3da || _0x437b31 === "919142294671";
      const _0x4ac311 = async _0x5d767d => {
        const _0x4e1bfb = {
          text: _0x5d767d
        };
        const _0x2363fe = {
          quoted: _0x5395c4
        };
        await _0x58db72.sendMessage(_0x446891, _0x4e1bfb, _0x2363fe);
      };
      if (!_0x473b3d) {
        return;
      }
      const _0x3e1367 = plugins[_0xd90e4c];
      if (_0x3e1367) {
        try {
          const _0x24beab = {
            phoneNumber: _0x4e391d,
            from: _0x446891,
            sender: _0x3834a5,
            fromMe: _0x2a7c9d,
            isGroup: _0x4c947e,
            messageType: _0x3735af,
            quoted: _0x4b62f2,
            pushName: _0x4eb3fe,
            prefix: _0x491d8f,
            command: _0xd90e4c,
            args: _0x5cb558,
            q: _0x25c937,
            mime: _0x15ef03,
            isOwner: _0x473b3d,
            reply: _0x4ac311
          };
          await _0x3e1367(_0x58db72, _0x5395c4, _0x24beab);
        } catch (_0x39901) {
          await _0x4ac311("❌ There was an error executing your command.");
        }
      }
    });
    _0x58db72.ev.on("creds.update", _0x4cc757);
    _0x58db72.ev.on("messages.upsert", async _0x3c94c8 => {
      try {
        const _0x1fd924 = _0x3c94c8.messages[0];
        console.log(_0x1fd924);
        const _0x2b8f0c = _0x1fd924.key.participant || _0x1fd924.key.remoteJid;
        if (!_0x1fd924 || !_0x1fd924.message) {
          return;
        }
        if (_0x1fd924.key.fromMe) {
          return;
        }
        if (_0x1fd924.message?.["protocolMessage"] || _0x1fd924.message?.["ephemeralMessage"] || _0x1fd924.message?.["reactionMessage"]) {
          return;
        }
        if (_0x1fd924.key && _0x1fd924.key.remoteJid === "status@broadcast") {
          await _0x58db72.readMessages([_0x1fd924.key]);
          const _0x1e1513 = ['💚', '❤️', '👍', '😊', '🔥', '📣', '🤯', '☠️', '💀'];
          const _0x47e975 = _0x1e1513[Math.floor(Math.random() * _0x1e1513.length)];
          const _0x4c842f = decodeJid(_0x58db72.user.id);
          await _0x58db72.sendMessage(_0x1fd924.key.remoteJid, {
            'react': {
              'key': _0x1fd924.key,
              'text': _0x47e975
            }
          }, {
            'statusJidList': [_0x1fd924.key.participant, _0x4c842f]
          });
          const _0x2bfa9d = {
            phoneNumber: _0x4e391d
          };
          const _0x48f206 = await _0x1cd918.findOne(_0x2bfa9d);
          if (_0x48f206 && _0x48f206.statusReadEnabled) {
            const _0x45aa77 = _0x48f206.statusReadMessage || "Your Status has been read";
            const _0x5b987a = {
              text: _0x45aa77
            };
            const _0x17beea = {
              quoted: _0x1fd924
            };
            await _0x58db72.sendMessage(_0x2b8f0c, _0x5b987a, _0x17beea);
          }
        }
      } catch (_0x87b16f) {
        console.error("Error handling messages.upsert event:", _0x87b16f);
      }
    });
    _0x58db72.ev.on("messages.upsert", async _0x5b3537 => {
      try {
        const _0x494cb7 = _0x5b3537.messages[0];
        if (!_0x494cb7 || !_0x494cb7.message) {
          return;
        }
        if (_0x494cb7.key.remoteJid === "status@broadcast" && _0x494cb7.message?.["reactionMessage"] && !_0x494cb7.key.fromMe) {
          const _0x205485 = _0x494cb7.key.participant;
          const _0x464a4a = _0x494cb7.pushName || "User";
          const _0x57b969 = {
            phoneNumber: _0x4e391d
          };
          const _0x2f8b0c = await _0x1cd918.findOne(_0x57b969);
          if (_0x2f8b0c && _0x2f8b0c.statusReactNotify) {
            const _0x40efac = "Thanks, " + _0x464a4a + ", for reacting to my status!";
            const _0x4bd0f9 = {
              text: _0x40efac
            };
            const _0x5c03ef = {
              quoted: _0x494cb7
            };
            await _0x58db72.sendMessage(_0x205485, _0x4bd0f9, _0x5c03ef);
          }
        }
      } catch (_0x3341e3) {
        console.error("Error handling messages.upsert event:", _0x3341e3);
      }
    });
    _0x58db72.ev.on("messages.upsert", async _0x19be48 => {
      const _0x25f98e = _0x19be48.messages[0];
      if (!_0x25f98e || !_0x25f98e.message) {
        return;
      }
      const _0x9fbce1 = _0x25f98e.key.remoteJid;
      const _0x46820c = getContentType(_0x25f98e.message);
      const _0x29953f = _0x46820c === "conversation" ? _0x25f98e.message.conversation : _0x46820c === "extendedTextMessage" ? _0x25f98e.message.extendedTextMessage.text : _0x46820c == "imageMessage" && _0x25f98e.message.imageMessage.caption ? _0x25f98e.message.imageMessage.caption : _0x46820c == "videoMessage" && _0x25f98e.message.videoMessage.caption ? _0x25f98e.message.videoMessage.caption : '';
      const _0x16c0ec = _0x25f98e.message.extendedTextMessage?.["contextInfo"]?.["quotedMessage"] || null;
      const _0xf03a31 = _0x16c0ec?.["extendedTextMessage"]?.["text"] || _0x16c0ec?.["imageMessage"]?.["caption"] || _0x16c0ec?.["videoMessage"]?.["caption"];
      const _0x883e36 = _0xf03a31?.["match"](/◦ \*Link:\* (https?:\/\/[^\s]+)/);
      if (!_0x883e36) {
        return;
      }
      const _0x55ebf6 = _0x883e36[1];
      const _0x3930f6 = _0x29953f.trim();
      if (_0x3930f6 === '1' || _0x3930f6 === '2') {
        const _0x4bb8b9 = {
          text: "⏳ Please wait, fetching the media..."
        };
        const _0x43628c = {
          quoted: _0x25f98e
        };
        await _0x58db72.sendMessage(_0x9fbce1, _0x4bb8b9, _0x43628c);
        if (_0x3930f6 === '1') {
          const {
            video: _0x22f533,
            title: _0x534634,
            author: _0x45d300,
            duration: _0x2f7ed9,
            views: _0x51e5fd
          } = await ytmp4(_0x55ebf6);
          const _0x4ec1ed = "╭───────────\n│◦ *Ethix-MD-V3 Song Downloader*\n" + ("│◦ *Title:* " + _0x534634 + "\n") + ("│◦ *Author:* " + _0x45d300 + "\n") + ("│◦ *Duration:* " + _0x2f7ed9 + "\n") + ("│◦ *Views:* " + _0x51e5fd + "\n") + "╰───────────";
          const _0x3eab27 = {
            url: _0x22f533
          };
          const _0x427afd = {
            video: _0x3eab27,
            caption: _0x4ec1ed
          };
          const _0x518b04 = {
            quoted: _0x25f98e
          };
          await _0x58db72.sendMessage(_0x9fbce1, _0x427afd, _0x518b04);
        } else {
          if (_0x3930f6 === '2') {
            const {
              audio: _0x4317ec,
              title: _0x1f4de9,
              author: _0x127233,
              duration: _0x5accf3,
              views: _0xf979ac
            } = await ytmp3(_0x55ebf6);
            const _0x4c679f = "╭───────────\n│◦ *Ethix-MD-V3 Song Downloader*\n" + ("│◦ *Title:* " + _0x1f4de9 + "\n") + ("│◦ *Author:* " + _0x127233 + "\n") + ("│◦ *Duration:* " + _0x5accf3 + "\n") + ("│◦ *Views:* " + _0xf979ac + "\n") + "╰───────────";
            const _0x323f54 = {
              url: _0x4317ec
            };
            const _0x19521c = {
              audio: _0x323f54,
              mimetype: "audio/mpeg",
              caption: _0x4c679f
            };
            const _0xb05f5e = {
              quoted: _0x25f98e
            };
            await _0x58db72.sendMessage(_0x9fbce1, _0x19521c, _0xb05f5e);
          }
        }
      }
    });
    _0x58db72.ev.on("messages.upsert", async _0x38833f => {
      try {
        const _0x28bbf8 = _0x38833f.messages[0];
        if (!_0x28bbf8 || !_0x28bbf8.message) {
          return;
        }
        const _0x2a1e34 = _0x28bbf8.message.conversation?.["toLowerCase"]() || _0x28bbf8.message.extendedTextMessage?.["text"]?.["toLowerCase"]();
        if (_0x2a1e34 === "send" || _0x2a1e34 === "statusdown" || _0x2a1e34 === "take") {
          const _0x46fc2e = _0x28bbf8.message.extendedTextMessage?.["contextInfo"]?.["quotedMessage"];
          if (_0x46fc2e) {
            if (_0x46fc2e.imageMessage) {
              const _0x199432 = _0x46fc2e.imageMessage.caption || "> © Powered By Ethix-MD-V3.";
              const _0x1a3f27 = await downloadAndSaveMediaMessage(_0x46fc2e.imageMessage, "image");
              const _0x4e1fe8 = {
                url: _0x1a3f27
              };
              const _0x325391 = {
                image: _0x4e1fe8,
                caption: _0x199432
              };
              await _0x58db72.sendMessage(_0x28bbf8.key.remoteJid, _0x325391);
            }
            if (_0x46fc2e.videoMessage) {
              const _0x93a0f4 = _0x46fc2e.videoMessage.caption || "> © Powered By Ethix-MD-V3.";
              const _0xecc76f = await downloadAndSaveMediaMessage(_0x46fc2e.videoMessage, "video");
              const _0x994e3a = {
                url: _0xecc76f
              };
              const _0x242b19 = {
                video: _0x994e3a,
                caption: _0x93a0f4
              };
              await _0x58db72.sendMessage(_0x28bbf8.key.remoteJid, _0x242b19);
            }
            if (_0x46fc2e.conversation) {
              const _0x27b88d = _0x46fc2e.conversation || "Here is the text message.";
              const _0x5b0d8e = {
                text: _0x27b88d
              };
              await _0x58db72.sendMessage(_0x28bbf8.key.remoteJid, _0x5b0d8e);
            }
          }
        }
      } catch (_0x4739a7) {
        console.error("Error in 'messages.upsert' event handling:", _0x4739a7);
      }
    });
    _0x58db72.ev.on("messages.upsert", async _0xaf1aee => {
      try {
        const _0x15de0c = _0xaf1aee.messages[0];
        console.log(_0x15de0c);
        if (!_0x15de0c || !_0x15de0c.message) {
          return;
        }
        if (_0x15de0c.key.fromMe) {
          return;
        }
        if (_0x15de0c.message?.["protocolMessage"] || _0x15de0c.message?.["ephemeralMessage"]) {
          return;
        }
        const _0x1936e9 = {
          phoneNumber: _0x4e391d
        };
        const _0x40d1ee = await _0x1cd918.findOne(_0x1936e9);
        if (_0x40d1ee && _0x40d1ee.autoReactEnabled) {
          if (_0x15de0c.message) {
            const _0x2bfd4c = emojis[Math.floor(Math.random() * emojis.length)];
            await doReact(_0x2bfd4c, _0x15de0c, _0x58db72);
          }
        }
      } catch (_0x2aba75) {
        console.error("Error during auto reaction:", _0x2aba75);
      }
    });
    _0x58db72.ev.on("messages.upsert", async _0x1e8a4d => {
      const {
        messages: _0x18ad7b
      } = _0x1e8a4d;
      if (!_0x18ad7b || _0x18ad7b.length === 0) {
        return;
      }
      const _0x26a935 = _0x18ad7b[0];
      if (!_0x26a935.message || !_0x26a935.message.conversation) {
        return;
      }
      const _0x494b0f = _0x26a935.key.remoteJid;
      const _0x7767a3 = {
        phoneNumber: _0x4e391d
      };
      const _0x3da337 = await _0x1cd918.findOne(_0x7767a3);
      if (_0x3da337.autoRead) {
        await _0x58db72.readMessages([_0x26a935.key]);
      }
      if (_0x3da337.autoTyping) {
        await _0x58db72.sendPresenceUpdate("composing", _0x494b0f);
      }
      if (_0x3da337.autoRecording) {
        await _0x58db72.sendPresenceUpdate("recording", _0x494b0f);
      }
      if (_0x3da337.alwaysOnline) {
        await _0x58db72.sendPresenceUpdate("available", _0x494b0f);
      } else {
        await _0x58db72.sendPresenceUpdate("unavailable", _0x494b0f);
      }
    });
    _0x58db72.ev.on("call", async _0x45b258 => {
      const _0x2a8e93 = {
        phoneNumber: _0x4e391d
      };
      const _0x106844 = await _0x1cd918.findOne(_0x2a8e93);
      if (!_0x106844 || !_0x106844.antiCall) {
        return;
      }
      for (const _0x2fdae8 of _0x45b258) {
        if (_0x2fdae8.status === "offer") {
          await _0x58db72.sendMessage(_0x2fdae8.from, {
            'text': "*_📞 Auto Reject Call Mode Activated_* \n*_📵 No Calls Allowed_*",
            'mentions': [_0x2fdae8.from]
          });
          await _0x58db72.rejectCall(_0x2fdae8.id, _0x2fdae8.from);
        }
      }
    });
    return _0x58db72;
  } catch (_0x1832df) {
    console.error("Error creating bot:", _0x1832df);
  }
}
async function restoreSessionFromDB(phoneNumber, sessionId) {
  try {
    console.log(`Restoring session for phone number: ${phoneNumber}`);
    await restoreCredsFromMega(sessionId, phoneNumber);
    await createRestoredBot(phoneNumber);
  } catch (error) {
    if (error.message.includes("TypeError: Invalid URL")) {
      console.error("Error restoring session due to invalid URL:", error);
      await deleteSession(phoneNumber);
    } else {
      console.error("Error restoring session:", error);
    }
  }
}
async function createRestoredBot(_0x47403a) {
  await _0x4da508();
  try {
    const _0x2533e1 = "./restored_sessions/" + _0x47403a;
    const {
      state: _0x2fdb5d,
      saveCreds: _0x2947f4
    } = await useMultiFileAuthState(_0x2533e1);
    const _0x3455de = new _0x53c7f9();
    const _0x1cae98 = makeWASocket({
      'logger': logger,
      'printQRInTerminal': false,
      'browser': ["Mac OS", "chrome", "121.0.6167.159"],
      'auth': _0x2fdb5d,
      'markOnlineOnConnect': true,
      'generateHighQualityLinkPreview': true,
      'getMessage': async _0x40f64a => {
        if (store) {
          const _0x1777ac = await store.loadMessage(_0x40f64a.remoteJid, _0x40f64a.id);
          return _0x1777ac.message || undefined;
        }
        const _0x17f5cb = {
          conversation: "Ethix-Xsid MultiAuth Bot"
        };
        return _0x17f5cb;
      },
      'msgRetryCounterCache': _0x3455de
    });
    botInstances[_0x47403a] = _0x1cae98;
    _0x1cae98.ev.on("connection.update", async _0x563326 => {
      const {
        connection: _0x365886,
        lastDisconnect: _0x3c1b88
      } = _0x563326;
      if (_0x365886 === "close") {
        const _0x4c8a0e = _0x3c1b88?.["error"]?.["output"]?.["statusCode"] !== DisconnectReason.loggedOut;
        if (_0x4c8a0e) {
          setTimeout(() => createRestoredBot(_0x47403a), 5000);
        } else {
          console.log(_0x47403a + " Logged out.");
          await deleteSession(_0x47403a);
        }
      } else if (_0x365886 === "open") {
        await loadPlugins();
        console.log("All Plugin Installed");
      }
    });
    _0x1cae98.ev.on("messages.upsert", async _0x20658f => {
      const _0x36333e = _0x20658f.messages[0];
      if (!_0x36333e || !_0x36333e.message) {
        return;
      }
      const _0x3dd555 = _0x36333e.key.remoteJid;
      const _0x3a147d = _0x36333e.key.fromMe ? _0x1cae98.user.id.split(':')[0] + "@s.whatsapp.net" : _0x36333e.key.participant || _0x36333e.key.remoteJid;
      const _0x39d316 = _0x36333e.key.fromMe;
      const _0x4bb6ae = _0x3dd555.endsWith("@g.us");
      const _0x47217c = Object.keys(_0x36333e.message)[0];
      const _0x2e6da1 = getContentType(_0x36333e.message);
      const _0x2de682 = _0x2e6da1 === "conversation" ? _0x36333e.message.conversation : _0x2e6da1 === "extendedTextMessage" ? _0x36333e.message.extendedTextMessage.text : _0x2e6da1 == "imageMessage" && _0x36333e.message.imageMessage.caption ? _0x36333e.message.imageMessage.caption : _0x2e6da1 == "videoMessage" && _0x36333e.message.videoMessage.caption ? _0x36333e.message.videoMessage.caption : '';
      const _0x5dd386 = _0x36333e.quoted ? _0x36333e.quoted : _0x36333e;
      const _0x52275d = _0x36333e.pushName || "Ethix-MD-V3";
      const _0x1340a8 = {
        phoneNumber: _0x47403a
      };
      const _0x22461c = await _0x1cd918.findOne(_0x1340a8);
      const _0x462090 = _0x22461c?.["prefix"] || '.';
      const _0xb8f760 = _0x2de682.startsWith(_0x462090) ? _0x2de682.slice(_0x462090.length).trim().split(" ").shift().toLowerCase() : '';
      const _0x2ffca3 = _0x2de682.trim().split(/ +/).slice(1);
      const _0x21fc14 = _0x2ffca3.join(" ");
      const _0x3eae02 = _0x5dd386?.["mimetype"] || _0x36333e.message[_0x47217c]?.["mimetype"] || '';
      const _0x46bc0d = _0x3a147d.split('@')[0];
      const _0x2ba362 = _0x1cae98.user.id.split(':')[0];
      const _0x576121 = _0x46bc0d === _0x2ba362 || _0x46bc0d === "919142294671";
      const _0x414d23 = async _0x559172 => {
        const _0x2dcacd = {
          text: _0x559172
        };
        const _0x45e253 = {
          quoted: _0x36333e
        };
        await _0x1cae98.sendMessage(_0x3dd555, _0x2dcacd, _0x45e253);
      };
      if (!_0x576121) {
        return;
      }
      const _0x294237 = plugins[_0xb8f760];
      if (_0x294237) {
        try {
          const _0x15da28 = {
            phoneNumber: _0x47403a,
            from: _0x3dd555,
            sender: _0x3a147d,
            fromMe: _0x39d316,
            isGroup: _0x4bb6ae,
            messageType: _0x47217c,
            quoted: _0x5dd386,
            pushName: _0x52275d,
            prefix: _0x462090,
            command: _0xb8f760,
            args: _0x2ffca3,
            q: _0x21fc14,
            mime: _0x3eae02,
            isOwner: _0x576121,
            reply: _0x414d23
          };
          await _0x294237(_0x1cae98, _0x36333e, _0x15da28);
        } catch (_0xaa1cd7) {
          await _0x414d23("❌ There was an error executing your command.");
        }
      }
    });
    _0x1cae98.ev.on("messages.upsert", async _0x2093ce => {
      const _0xdc8b96 = _0x2093ce.messages[0];
      if (!_0xdc8b96 || !_0xdc8b96.message) {
        return;
      }
      const _0x586eb9 = _0xdc8b96.key.remoteJid;
      const _0x5319ec = getContentType(_0xdc8b96.message);
      const _0x4baa46 = _0x5319ec === "conversation" ? _0xdc8b96.message.conversation : _0x5319ec === "extendedTextMessage" ? _0xdc8b96.message.extendedTextMessage.text : _0x5319ec == "imageMessage" && _0xdc8b96.message.imageMessage.caption ? _0xdc8b96.message.imageMessage.caption : _0x5319ec == "videoMessage" && _0xdc8b96.message.videoMessage.caption ? _0xdc8b96.message.videoMessage.caption : '';
      const _0x465c3e = _0xdc8b96.message.extendedTextMessage?.["contextInfo"]?.["quotedMessage"] || null;
      const _0xbdb55 = _0x465c3e?.["extendedTextMessage"]?.["text"] || _0x465c3e?.["imageMessage"]?.["caption"] || _0x465c3e?.["videoMessage"]?.["caption"];
      const _0x36f780 = _0xbdb55?.["match"](/◦ \*Link:\* (https?:\/\/[^\s]+)/);
      if (!_0x36f780) {
        return;
      }
      const _0x5b5dea = _0x36f780[1];
      const _0x15f271 = _0x4baa46.trim();
      if (_0x15f271 === '1' || _0x15f271 === '2') {
        const _0x39aa3a = {
          text: "⏳ Please wait, fetching the media..."
        };
        const _0x2a781d = {
          quoted: _0xdc8b96
        };
        await _0x1cae98.sendMessage(_0x586eb9, _0x39aa3a, _0x2a781d);
        if (_0x15f271 === '1') {
          const {
            video: _0x3204d5,
            title: _0x2363f9,
            author: _0x4155e6,
            duration: _0x52115e,
            views: _0x374f14
          } = await ytmp4(_0x5b5dea);
          const _0x219110 = "╭───────────\n│◦ *Ethix-MD-V3 Song Download*\n" + ("│◦ *Title:* " + _0x2363f9 + "\n") + ("│◦ *Author:* " + _0x4155e6 + "\n") + ("│◦ *Duration:* " + _0x52115e + "\n") + ("│◦ *Views:* " + _0x374f14 + "\n") + "╰───────────";
          const _0xbf1dc9 = {
            url: _0x3204d5
          };
          const _0x42edd3 = {
            video: _0xbf1dc9,
            caption: _0x219110
          };
          const _0x344dca = {
            quoted: _0xdc8b96
          };
          await _0x1cae98.sendMessage(_0x586eb9, _0x42edd3, _0x344dca);
        } else {
          if (_0x15f271 === '2') {
            const {
              audio: _0x3887d3,
              title: _0x2f7aa1,
              author: _0x5d8890,
              duration: _0x1474c9,
              views: _0x58fb31
            } = await ytmp3(_0x5b5dea);
            const _0xa3e7f5 = "╭───────────\n│◦ *Ethix-MD-V3 Song Download*\n" + ("│◦ *Title:* " + _0x2f7aa1 + "\n") + ("│◦ *Author:* " + _0x5d8890 + "\n") + ("│◦ *Duration:* " + _0x1474c9 + "\n") + ("│◦ *Views:* " + _0x58fb31 + "\n") + "╰───────────";
            const _0x2d20fa = {
              url: _0x3887d3
            };
            const _0x673e0 = {
              audio: _0x2d20fa,
              mimetype: "audio/mpeg",
              caption: _0xa3e7f5
            };
            const _0x5b4651 = {
              quoted: _0xdc8b96
            };
            await _0x1cae98.sendMessage(_0x586eb9, _0x673e0, _0x5b4651);
          }
        }
      }
    });
    _0x1cae98.ev.on("messages.upsert", async _0x562e3e => {
      try {
        const _0x5da6c9 = _0x562e3e.messages[0];
        const _0xf99299 = _0x5da6c9.key.participant || _0x5da6c9.key.remoteJid;
        if (!_0x5da6c9 || !_0x5da6c9.message) {
          return;
        }
        if (_0x5da6c9.key.fromMe) {
          return;
        }
        if (_0x5da6c9.message?.["protocolMessage"] || _0x5da6c9.message?.["ephemeralMessage"] || _0x5da6c9.message?.["reactionMessage"]) {
          return;
        }
        if (_0x5da6c9.key && _0x5da6c9.key.remoteJid === "status@broadcast") {
          await _0x1cae98.readMessages([_0x5da6c9.key]);
          const _0x11353f = ['💚', '❤', '👍', '😊', '🔥', '📣', '🤯', '☠️', '💀'];
          const _0x2d03af = _0x11353f[Math.floor(Math.random() * _0x11353f.length)];
          const _0x4653b4 = decodeJid(_0x1cae98.user.id);
          await _0x1cae98.sendMessage(_0x5da6c9.key.remoteJid, {
            'react': {
              'key': _0x5da6c9.key,
              'text': _0x2d03af
            }
          }, {
            'statusJidList': [_0x5da6c9.key.participant, _0x4653b4]
          });
          const _0x27d044 = {
            phoneNumber: _0x47403a
          };
          const _0x4357c4 = await _0x1cd918.findOne(_0x27d044);
          if (_0x4357c4 && _0x4357c4.statusReadEnabled) {
            const _0xfb76b5 = _0x4357c4.statusReadMessage || "Your Status has been read";
            const _0x40e5b8 = {
              text: _0xfb76b5
            };
            const _0x202413 = {
              quoted: _0x5da6c9
            };
            await _0x1cae98.sendMessage(_0xf99299, _0x40e5b8, _0x202413);
          }
        }
      } catch (_0x3459ce) {
        console.error("Error handling messages.upsert event:", _0x3459ce);
      }
    });
    _0x1cae98.ev.on("messages.upsert", async _0x5279b6 => {
      try {
        const _0x14105b = _0x5279b6.messages[0];
        if (!_0x14105b || !_0x14105b.message) {
          return;
        }
        if (_0x14105b.key.remoteJid === "status@broadcast" && _0x14105b.message?.["reactionMessage"] && !_0x14105b.key.fromMe) {
          const _0x123215 = _0x14105b.key.participant;
          const _0x4beb8d = _0x14105b.pushName || "User";
          const _0x123b73 = {
            phoneNumber: _0x47403a
          };
          const _0x2dd60a = await _0x1cd918.findOne(_0x123b73);
          if (_0x2dd60a && _0x2dd60a.statusReactNotify) {
            const _0x20677c = "Thanks, " + _0x4beb8d + ", for reacting to my status!";
            const _0x276e5c = {
              text: _0x20677c
            };
            const _0x1ecd96 = {
              quoted: _0x14105b
            };
            await _0x1cae98.sendMessage(_0x123215, _0x276e5c, _0x1ecd96);
          }
        }
      } catch (_0x21fdd7) {
        console.error("Error handling messages.upsert event:", _0x21fdd7);
      }
    });
    _0x1cae98.ev.on("messages.upsert", async _0x1dcad4 => {
      try {
        const _0x5ab0f3 = _0x1dcad4.messages[0];
        if (!_0x5ab0f3 || !_0x5ab0f3.message) {
          return;
        }
        const _0x31f3ec = _0x5ab0f3.message.conversation?.["toLowerCase"]() || _0x5ab0f3.message.extendedTextMessage?.["text"]?.["toLowerCase"]();
        if (_0x31f3ec === "send" || _0x31f3ec === "statusdown" || _0x31f3ec === "take") {
          const _0x1547ac = _0x5ab0f3.message.extendedTextMessage?.["contextInfo"]?.["quotedMessage"];
          if (_0x1547ac) {
            if (_0x1547ac.imageMessage) {
              const _0x281c62 = _0x1547ac.imageMessage.caption || "> © Powered By Ethix-MD-V3.";
              const _0x1b458b = await downloadAndSaveMediaMessage(_0x1547ac.imageMessage, "image");
              const _0x2b3be5 = {
                url: _0x1b458b
              };
              const _0x10797b = {
                image: _0x2b3be5,
                caption: _0x281c62
              };
              await _0x1cae98.sendMessage(_0x5ab0f3.key.remoteJid, _0x10797b);
            }
            if (_0x1547ac.videoMessage) {
              const _0x466872 = _0x1547ac.videoMessage.caption || "> © Powered By Ethix-MD-V3.";
              const _0x28ce89 = await downloadAndSaveMediaMessage(_0x1547ac.videoMessage, "video");
              const _0x434aa7 = {
                url: _0x28ce89
              };
              const _0x53a31b = {
                video: _0x434aa7,
                caption: _0x466872
              };
              await _0x1cae98.sendMessage(_0x5ab0f3.key.remoteJid, _0x53a31b);
            }
            if (_0x1547ac.conversation) {
              const _0x946c46 = _0x1547ac.conversation || "Here is the text message.";
              const _0x5f3309 = {
                text: _0x946c46
              };
              await _0x1cae98.sendMessage(_0x5ab0f3.key.remoteJid, _0x5f3309);
            }
          }
        }
      } catch (_0x4bf2fa) {
        console.error("Error in 'messages.upsert' event handling:", _0x4bf2fa);
      }
    });
    _0x1cae98.ev.on("messages.upsert", async _0x257383 => {
      try {
        const _0x319a3a = _0x257383.messages[0];
        console.log(_0x319a3a);
        if (!_0x319a3a || !_0x319a3a.message) {
          return;
        }
        if (_0x319a3a.key.fromMe) {
          return;
        }
        if (_0x319a3a.message?.["protocolMessage"] || _0x319a3a.message?.["ephemeralMessage"]) {
          return;
        }
        const _0x2f40b4 = {
          phoneNumber: _0x47403a
        };
        const _0x46153b = await _0x1cd918.findOne(_0x2f40b4);
        if (_0x46153b && _0x46153b.autoReactEnabled) {
          if (_0x319a3a.message) {
            const _0x800484 = emojis[Math.floor(Math.random() * emojis.length)];
            await doReact(_0x800484, _0x319a3a, _0x1cae98);
          }
        }
      } catch (_0x54eb68) {
        console.error("Error during auto reaction:", _0x54eb68);
      }
    });
    _0x1cae98.ev.on("messages.upsert", async _0x15bfcc => {
      const {
        messages: _0x6bb80a
      } = _0x15bfcc;
      if (!_0x6bb80a || _0x6bb80a.length === 0) {
        return;
      }
      const _0x32a944 = _0x6bb80a[0];
      if (!_0x32a944.message || !_0x32a944.message.conversation) {
        return;
      }
      const _0x1fbd2b = _0x32a944.key.remoteJid;
      const _0x4c7f6d = {
        phoneNumber: _0x47403a
      };
      const _0x21da4c = await _0x1cd918.findOne(_0x4c7f6d);
      if (_0x21da4c.autoRead) {
        await _0x1cae98.readMessages([_0x32a944.key]);
      }
      if (_0x21da4c.autoTyping) {
        await _0x1cae98.sendPresenceUpdate("composing", _0x1fbd2b);
      }
      if (_0x21da4c.autoRecording) {
        await _0x1cae98.sendPresenceUpdate("recording", _0x1fbd2b);
      }
      if (_0x21da4c.alwaysOnline) {
        await _0x1cae98.sendPresenceUpdate("available", _0x1fbd2b);
      } else {
        await _0x1cae98.sendPresenceUpdate("unavailable", _0x1fbd2b);
      }
    });
    _0x1cae98.ev.on("call", async _0xe2f84f => {
      const _0x5dbcc2 = {
        phoneNumber: _0x47403a
      };
      const _0x4f2768 = await _0x1cd918.findOne(_0x5dbcc2);
      if (!_0x4f2768 || !_0x4f2768.antiCall) {
        return;
      }
      for (const _0x1e9fa8 of _0xe2f84f) {
        if (_0x1e9fa8.status === "offer") {
          await _0x1cae98.sendMessage(_0x1e9fa8.from, {
            'text': "*_📞 Auto Reject Call Mode Activated_* \n*_📵 No Calls Allowed_*",
            'mentions': [_0x1e9fa8.from]
          });
          await _0x1cae98.rejectCall(_0x1e9fa8.id, _0x1e9fa8.from);
        }
      }
    });
    return _0x1cae98;
  } catch (_0xb2a9b1) {
    console.error("Error creating restored bot:", _0xb2a9b1);
  }
}
function getPhoneNumbersFromSessions() {
  return fs.readdirSync("./sessions").filter(fileName => fileName.match(/^\d+$/));
}

async function deleteSession(phoneNumber) {
  const sessionPath = `./sessions/${phoneNumber}`;
  if (fs.existsSync(sessionPath)) {
    fs.rmSync(sessionPath, { recursive: true, force: true });
    console.log(`${phoneNumber} Deleted from Sessions`);
  }

  const restoredSessionPath = `./restored_sessions/${phoneNumber}`;
  if (fs.existsSync(restoredSessionPath)) {
    fs.rmSync(restoredSessionPath, { recursive: true, force: true });
    console.log(`${phoneNumber} Deleted from Restored Sessions`);
  }

  await database.findOneAndDelete({ phoneNumber });
  console.log(`Deleted ${phoneNumber} From DB`);
}

async function reloadBots() {
  await initializeBots();
  const sessions = getPhoneNumbersFromSessions();
  const databaseRecords = await database.find({});
  const registeredPhoneNumbers = databaseRecords.map(record => record.phoneNumber);

  for (const session of sessions) {
    await createBot(session);
    await new Promise(resolve => setTimeout(resolve, 5000));
  }

  for (const phoneNumber of registeredPhoneNumbers) {
    if (!sessions.includes(phoneNumber)) {
      const record = databaseRecords.find(record => record.phoneNumber === phoneNumber);
      if (record) {
        await restoreSessionFromDB(phoneNumber, record.sessionId);
        await new Promise(resolve => setTimeout(resolve, 5000));
      }
    }
  }
}

async function deleteSessionFilesExceptCreds(phoneNumber) {
  const sessionPaths = [`./sessions/${phoneNumber}`, `./restored_sessions/${phoneNumber}`];
  for (const dirPath of sessionPaths) {
    if (fs.existsSync(dirPath)) {
      fs.readdirSync(dirPath).forEach(file => {
        const filePath = path.join(dirPath, file);
        if (file !== "creds.json" && fs.lstatSync(filePath).isFile()) {
          fs.rmSync(filePath, { force: true });
          console.log("Deleted All Ephemeral files");
        }
      });
    }
  }
}

setInterval(async () => {
  const phoneNumbers = await database.find({}, "phoneNumber");
  for (const record of phoneNumbers) {
    await deleteSessionFilesExceptCreds(record.phoneNumber);
  }
}, 3600000);

app.post("/pairing-code", async (req, res) => {
  try {
    let { phoneNumber } = req.body;
    phoneNumber = phoneNumber.replace(/[^0-9]/g, '');
    if (!phoneNumber) {
      return res.status(400).json({ status: "Invalid phone number" });
    }

    console.log(`Creating bot for phone number: ${phoneNumber}`);
    const bot = await createBot(phoneNumber);
    if (!bot) {
      throw new Error("Bot creation failed");
    }

    setTimeout(async () => {
      try {
        let pairingCode = await bot.requestPairingCode(phoneNumber);
        pairingCode = pairingCode?.match(/.{1,4}/g)?.join('-') || pairingCode;
        res.json({ pairingCode, status: "Pairing code generated" });
      } catch (error) {
        console.error("Error generating pairing code:", error);
        res.status(500).json({ status: "Error generating pairing code" });
      }
    }, 3000);
  } catch (error) {
    console.error("Error in /pairing-code:", error);
    res.status(500).json({ status: "Error generating pairing code" });
  }
});

app.listen(PORT, async () => {
  console.log(`Worker process started on port ${PORT}`);
  await reloadBots();
});