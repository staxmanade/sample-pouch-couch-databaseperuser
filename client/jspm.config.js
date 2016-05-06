SystemJS.config({
  transpiler: "plugin-babel",
  packages: {
    "app": {
      "main": "app.js",
      "meta": {
        "*.js": {
          "babelOptions": {
            "plugins": [
              "babel-plugin-transform-react-jsx"
            ]
          }
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
    "babel-plugin-transform-react-jsx": "npm:babel-plugin-transform-react-jsx@6.7.5",
    "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
    "child_process": "github:jspm/nodelibs-child_process@0.2.0-alpha",
    "constants": "github:jspm/nodelibs-constants@0.2.0-alpha",
    "core-js": "npm:core-js@1.2.6",
    "crypto": "github:jspm/nodelibs-crypto@0.2.0-alpha",
    "dgram": "github:jspm/nodelibs-dgram@0.2.0-alpha",
    "dns": "github:jspm/nodelibs-dns@0.2.0-alpha",
    "domain": "github:jspm/nodelibs-domain@0.2.0-alpha",
    "ecc-jsbn": "npm:ecc-jsbn@0.1.1",
    "events": "github:jspm/nodelibs-events@0.2.0-alpha",
    "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
    "http": "github:jspm/nodelibs-http@0.2.0-alpha",
    "https": "github:jspm/nodelibs-https@0.2.0-alpha",
    "jodid25519": "npm:jodid25519@1.0.2",
    "jsbn": "npm:jsbn@0.1.0",
    "leveldown": "npm:leveldown@1.4.4",
    "module": "github:jspm/nodelibs-module@0.2.0-alpha",
    "net": "github:jspm/nodelibs-net@0.2.0-alpha",
    "os": "github:jspm/nodelibs-os@0.2.0-alpha",
    "path": "github:jspm/nodelibs-path@0.2.0-alpha",
    "plugin-babel": "npm:systemjs-plugin-babel@0.0.9",
    "pouchdb": "github:pouchdb/pouchdb@5.3.2",
    "pouchdb-authentication": "npm:pouchdb-authentication@0.5.1",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "punycode": "github:jspm/nodelibs-punycode@0.2.0-alpha",
    "querystring": "github:jspm/nodelibs-querystring@0.2.0-alpha",
    "react": "npm:react@15.0.1",
    "react-dom": "npm:react-dom@15.0.1",
    "stream": "github:jspm/nodelibs-stream@0.2.0-alpha",
    "string_decoder": "github:jspm/nodelibs-string_decoder@0.2.0-alpha",
    "tls": "github:jspm/nodelibs-tls@0.2.0-alpha",
    "tty": "github:jspm/nodelibs-tty@0.2.0-alpha",
    "tweetnacl": "npm:tweetnacl@0.13.3",
    "url": "github:jspm/nodelibs-url@0.2.0-alpha",
    "util": "github:jspm/nodelibs-util@0.2.0-alpha",
    "vm": "github:jspm/nodelibs-vm@0.2.0-alpha",
    "zlib": "github:jspm/nodelibs-zlib@0.2.0-alpha"
  },
  packages: {
    "github:jspm/nodelibs-buffer@0.2.0-alpha": {
      "map": {
        "buffer-browserify": "npm:buffer@4.6.0"
      }
    },
    "github:jspm/nodelibs-crypto@0.2.0-alpha": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.0"
      }
    },
    "github:jspm/nodelibs-domain@0.2.0-alpha": {
      "map": {
        "domain-browserify": "npm:domain-browser@1.1.7"
      }
    },
    "github:jspm/nodelibs-http@0.2.0-alpha": {
      "map": {
        "http-browserify": "npm:stream-http@2.3.0"
      }
    },
    "github:jspm/nodelibs-os@0.2.0-alpha": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.1"
      }
    },
    "github:jspm/nodelibs-punycode@0.2.0-alpha": {
      "map": {
        "punycode-browserify": "npm:punycode@1.3.2"
      }
    },
    "github:jspm/nodelibs-stream@0.2.0-alpha": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "github:jspm/nodelibs-string_decoder@0.2.0-alpha": {
      "map": {
        "string_decoder-browserify": "npm:string_decoder@0.10.31"
      }
    },
    "github:jspm/nodelibs-url@0.2.0-alpha": {
      "map": {
        "url-browserify": "npm:url@0.11.0"
      }
    },
    "github:jspm/nodelibs-zlib@0.2.0-alpha": {
      "map": {
        "zlib-browserify": "npm:browserify-zlib@0.1.4"
      }
    },
    "npm:abstract-leveldown@0.12.3": {
      "map": {
        "xtend": "npm:xtend@3.0.0"
      }
    },
    "npm:abstract-leveldown@2.4.1": {
      "map": {
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:are-we-there-yet@1.1.2": {
      "map": {
        "delegates": "npm:delegates@1.0.0",
        "readable-stream": "npm:readable-stream@1.1.14"
      }
    },
    "npm:array-index@1.0.0": {
      "map": {
        "debug": "npm:debug@2.2.0",
        "es6-symbol": "npm:es6-symbol@3.0.2"
      }
    },
    "npm:asn1.js@4.6.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.3",
        "inherits": "npm:inherits@2.0.1",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:babel-code-frame@6.7.7": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.38",
        "chalk": "npm:chalk@1.1.3",
        "esutils": "npm:esutils@2.0.2",
        "js-tokens": "npm:js-tokens@1.0.3"
      }
    },
    "npm:babel-helper-builder-react-jsx@6.7.5": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.38",
        "babel-types": "npm:babel-types@6.7.7",
        "esutils": "npm:esutils@2.0.2",
        "lodash": "npm:lodash@3.10.1"
      }
    },
    "npm:babel-messages@6.7.2": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.38"
      }
    },
    "npm:babel-plugin-syntax-flow@6.5.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.38"
      }
    },
    "npm:babel-plugin-syntax-jsx@6.5.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.38"
      }
    },
    "npm:babel-plugin-transform-react-jsx@6.7.5": {
      "map": {
        "babel-helper-builder-react-jsx": "npm:babel-helper-builder-react-jsx@6.7.5",
        "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.5.0",
        "babel-runtime": "npm:babel-runtime@5.8.38"
      }
    },
    "npm:babel-traverse@6.7.6": {
      "map": {
        "babel-code-frame": "npm:babel-code-frame@6.7.7",
        "babel-messages": "npm:babel-messages@6.7.2",
        "babel-runtime": "npm:babel-runtime@5.8.38",
        "babel-types": "npm:babel-types@6.7.7",
        "babylon": "npm:babylon@6.7.0",
        "debug": "npm:debug@2.2.0",
        "globals": "npm:globals@8.18.0",
        "invariant": "npm:invariant@2.2.1",
        "lodash": "npm:lodash@3.10.1",
        "repeating": "npm:repeating@1.1.3"
      }
    },
    "npm:babel-types@6.7.7": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.38",
        "babel-traverse": "npm:babel-traverse@6.7.6",
        "esutils": "npm:esutils@2.0.2",
        "lodash": "npm:lodash@3.10.1",
        "to-fast-properties": "npm:to-fast-properties@1.0.2"
      }
    },
    "npm:babylon@6.7.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.38"
      }
    },
    "npm:bl@0.8.2": {
      "map": {
        "readable-stream": "npm:readable-stream@1.0.34"
      }
    },
    "npm:bl@1.0.3": {
      "map": {
        "readable-stream": "npm:readable-stream@2.0.6"
      }
    },
    "npm:block-stream@0.0.8": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:boom@2.10.1": {
      "map": {
        "hoek": "npm:hoek@2.16.3"
      }
    },
    "npm:brace-expansion@1.1.3": {
      "map": {
        "balanced-match": "npm:balanced-match@0.3.0",
        "concat-map": "npm:concat-map@0.0.1"
      }
    },
    "npm:browserify-aes@1.0.6": {
      "map": {
        "buffer-xor": "npm:buffer-xor@1.0.3",
        "cipher-base": "npm:cipher-base@1.0.2",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "browserify-des": "npm:browserify-des@1.0.0",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.2",
        "des.js": "npm:des.js@1.0.0",
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.3",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:browserify-sign@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.3",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "create-hash": "npm:create-hash@1.1.2",
        "create-hmac": "npm:create-hmac@1.1.4",
        "elliptic": "npm:elliptic@6.2.3",
        "inherits": "npm:inherits@2.0.1",
        "parse-asn1": "npm:parse-asn1@5.0.0"
      }
    },
    "npm:browserify-zlib@0.1.4": {
      "map": {
        "pako": "npm:pako@0.2.8",
        "readable-stream": "npm:readable-stream@2.0.6"
      }
    },
    "npm:buffer@4.6.0": {
      "map": {
        "base64-js": "npm:base64-js@1.1.2",
        "ieee754": "npm:ieee754@1.1.6",
        "isarray": "npm:isarray@1.0.0"
      }
    },
    "npm:bytewise-core@1.2.3": {
      "map": {
        "typewise-core": "npm:typewise-core@1.2.0"
      }
    },
    "npm:bytewise@1.1.0": {
      "map": {
        "bytewise-core": "npm:bytewise-core@1.2.3",
        "typewise": "npm:typewise@1.0.3"
      }
    },
    "npm:chalk@1.1.3": {
      "map": {
        "ansi-styles": "npm:ansi-styles@2.2.1",
        "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
        "has-ansi": "npm:has-ansi@2.0.0",
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "supports-color": "npm:supports-color@2.0.0"
      }
    },
    "npm:cipher-base@1.0.2": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:combined-stream@1.0.5": {
      "map": {
        "delayed-stream": "npm:delayed-stream@1.0.0"
      }
    },
    "npm:commander@2.9.0": {
      "map": {
        "graceful-readlink": "npm:graceful-readlink@1.0.1"
      }
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.3",
        "elliptic": "npm:elliptic@6.2.3"
      }
    },
    "npm:create-hash@1.1.2": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.2",
        "inherits": "npm:inherits@2.0.1",
        "ripemd160": "npm:ripemd160@1.0.1",
        "sha.js": "npm:sha.js@2.4.5"
      }
    },
    "npm:create-hmac@1.1.4": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:cryptiles@2.0.5": {
      "map": {
        "boom": "npm:boom@2.10.1"
      }
    },
    "npm:crypto-browserify@3.11.0": {
      "map": {
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "browserify-sign": "npm:browserify-sign@4.0.0",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "create-hash": "npm:create-hash@1.1.2",
        "create-hmac": "npm:create-hmac@1.1.4",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "inherits": "npm:inherits@2.0.1",
        "pbkdf2": "npm:pbkdf2@3.0.4",
        "public-encrypt": "npm:public-encrypt@4.0.0",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:d@0.1.1": {
      "map": {
        "es5-ext": "npm:es5-ext@0.10.11"
      }
    },
    "npm:dashdash@1.13.1": {
      "map": {
        "assert-plus": "npm:assert-plus@1.0.0"
      }
    },
    "npm:debug@2.2.0": {
      "map": {
        "ms": "npm:ms@0.7.1"
      }
    },
    "npm:deferred-leveldown@0.2.0": {
      "map": {
        "abstract-leveldown": "npm:abstract-leveldown@0.12.3"
      }
    },
    "npm:deferred-leveldown@1.2.1": {
      "map": {
        "abstract-leveldown": "npm:abstract-leveldown@2.4.1"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "bn.js": "npm:bn.js@4.11.3",
        "miller-rabin": "npm:miller-rabin@4.0.0",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:duplexer2@0.0.2": {
      "map": {
        "readable-stream": "npm:readable-stream@1.1.14"
      }
    },
    "npm:ecc-jsbn@0.1.1": {
      "map": {
        "jsbn": "npm:jsbn@0.1.0"
      }
    },
    "npm:elliptic@6.2.3": {
      "map": {
        "bn.js": "npm:bn.js@4.11.3",
        "brorand": "npm:brorand@1.0.5",
        "hash.js": "npm:hash.js@1.0.3",
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:encoding@0.1.12": {
      "map": {
        "iconv-lite": "npm:iconv-lite@0.4.13"
      }
    },
    "npm:end-of-stream@1.1.0": {
      "map": {
        "once": "npm:once@1.3.3"
      }
    },
    "npm:end-stream@0.1.0": {
      "map": {
        "write-stream": "npm:write-stream@0.4.3"
      }
    },
    "npm:errno@0.1.4": {
      "map": {
        "prr": "npm:prr@0.0.0"
      }
    },
    "npm:es3ify@0.1.4": {
      "map": {
        "esprima-fb": "npm:esprima-fb@3001.1.0-dev-harmony-fb",
        "jstransform": "npm:jstransform@3.0.0",
        "through": "npm:through@2.3.8"
      }
    },
    "npm:es3ify@0.2.0": {
      "map": {
        "esprima": "npm:esprima@2.7.2",
        "jstransform": "npm:jstransform@3.0.0",
        "through": "npm:through@2.3.8"
      }
    },
    "npm:es5-ext@0.10.11": {
      "map": {
        "es6-iterator": "npm:es6-iterator@2.0.0",
        "es6-symbol": "npm:es6-symbol@3.0.2"
      }
    },
    "npm:es6-iterator@2.0.0": {
      "map": {
        "d": "npm:d@0.1.1",
        "es5-ext": "npm:es5-ext@0.10.11",
        "es6-symbol": "npm:es6-symbol@3.0.2"
      }
    },
    "npm:es6-symbol@3.0.2": {
      "map": {
        "d": "npm:d@0.1.1",
        "es5-ext": "npm:es5-ext@0.10.11"
      }
    },
    "npm:evp_bytestokey@1.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:falafel@1.2.0": {
      "map": {
        "acorn": "npm:acorn@1.2.2",
        "foreach": "npm:foreach@2.0.5",
        "isarray": "npm:isarray@0.0.1",
        "object-keys": "npm:object-keys@1.0.9"
      }
    },
    "npm:fbjs@0.8.1": {
      "map": {
        "babel-plugin-syntax-flow": "npm:babel-plugin-syntax-flow@6.5.0",
        "core-js": "npm:core-js@1.2.6",
        "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
        "loose-envify": "npm:loose-envify@1.1.0",
        "promise": "npm:promise@7.1.1",
        "ua-parser-js": "npm:ua-parser-js@0.7.10"
      }
    },
    "npm:form-data@1.0.0-rc4": {
      "map": {
        "async": "npm:async@1.5.2",
        "combined-stream": "npm:combined-stream@1.0.5",
        "mime-types": "npm:mime-types@2.1.10"
      }
    },
    "npm:fruitdown@1.0.1": {
      "map": {
        "abstract-leveldown": "npm:abstract-leveldown@0.12.3",
        "argsarray": "npm:argsarray@0.0.1",
        "d64": "npm:d64@1.0.0",
        "inherits": "npm:inherits@2.0.1",
        "tiny-queue": "npm:tiny-queue@0.2.0"
      }
    },
    "npm:fstream@1.0.8": {
      "map": {
        "graceful-fs": "npm:graceful-fs@4.1.3",
        "inherits": "npm:inherits@2.0.1",
        "mkdirp": "npm:mkdirp@0.5.1",
        "rimraf": "npm:rimraf@2.5.2"
      }
    },
    "npm:gauge@1.2.7": {
      "map": {
        "ansi": "npm:ansi@0.3.1",
        "has-unicode": "npm:has-unicode@2.0.0",
        "lodash.pad": "npm:lodash.pad@4.3.0",
        "lodash.padend": "npm:lodash.padend@4.4.0",
        "lodash.padstart": "npm:lodash.padstart@4.4.0"
      }
    },
    "npm:generate-object-property@1.2.0": {
      "map": {
        "is-property": "npm:is-property@1.0.2"
      }
    },
    "npm:getpass@0.1.6": {
      "map": {
        "assert-plus": "npm:assert-plus@1.0.0"
      }
    },
    "npm:ghreleases@1.0.4": {
      "map": {
        "after": "npm:after@0.8.1",
        "ghrepos": "npm:ghrepos@2.0.0",
        "ghutils": "npm:ghutils@3.2.0",
        "simple-mime": "npm:simple-mime@0.1.0",
        "url-template": "npm:url-template@2.0.6",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:ghrepos@2.0.0": {
      "map": {
        "ghutils": "npm:ghutils@3.2.0"
      }
    },
    "npm:ghutils@3.2.0": {
      "map": {
        "jsonist": "npm:jsonist@1.2.0",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:glob@4.5.3": {
      "map": {
        "inflight": "npm:inflight@1.0.4",
        "inherits": "npm:inherits@2.0.1",
        "minimatch": "npm:minimatch@2.0.10",
        "once": "npm:once@1.3.3"
      }
    },
    "npm:glob@7.0.3": {
      "map": {
        "inflight": "npm:inflight@1.0.4",
        "inherits": "npm:inherits@2.0.1",
        "minimatch": "npm:minimatch@3.0.0",
        "once": "npm:once@1.3.3",
        "path-is-absolute": "npm:path-is-absolute@1.0.0"
      }
    },
    "npm:har-validator@2.0.6": {
      "map": {
        "chalk": "npm:chalk@1.1.3",
        "commander": "npm:commander@2.9.0",
        "is-my-json-valid": "npm:is-my-json-valid@2.13.1",
        "pinkie-promise": "npm:pinkie-promise@2.0.1"
      }
    },
    "npm:has-ansi@2.0.0": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.0.0"
      }
    },
    "npm:hash.js@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:hawk@3.1.3": {
      "map": {
        "boom": "npm:boom@2.10.1",
        "cryptiles": "npm:cryptiles@2.0.5",
        "hoek": "npm:hoek@2.16.3",
        "sntp": "npm:sntp@1.0.9"
      }
    },
    "npm:http-signature@1.1.1": {
      "map": {
        "assert-plus": "npm:assert-plus@0.2.0",
        "jsprim": "npm:jsprim@1.2.2",
        "sshpk": "npm:sshpk@1.8.3"
      }
    },
    "npm:humble-localstorage@1.4.2": {
      "map": {
        "has-localstorage": "npm:has-localstorage@1.0.1",
        "localstorage-memory": "npm:localstorage-memory@1.0.2"
      }
    },
    "npm:hyperquest@1.2.0": {
      "map": {
        "duplexer2": "npm:duplexer2@0.0.2",
        "through2": "npm:through2@0.6.5"
      }
    },
    "npm:immediate@3.0.5": {
      "map": {
        "inline-process-browser": "npm:inline-process-browser@1.0.0",
        "unreachable-branch-transform": "npm:unreachable-branch-transform@0.3.0"
      }
    },
    "npm:inflight@1.0.4": {
      "map": {
        "once": "npm:once@1.3.3",
        "wrappy": "npm:wrappy@1.0.1"
      }
    },
    "npm:inline-process-browser@1.0.0": {
      "map": {
        "falafel": "npm:falafel@1.2.0",
        "through2": "npm:through2@0.6.5"
      }
    },
    "npm:inline-process-browser@2.0.1": {
      "map": {
        "falafel": "npm:falafel@1.2.0",
        "through2": "npm:through2@0.6.5"
      }
    },
    "npm:invariant@2.2.1": {
      "map": {
        "loose-envify": "npm:loose-envify@1.1.0"
      }
    },
    "npm:is-absolute@0.1.7": {
      "map": {
        "is-relative": "npm:is-relative@0.1.3"
      }
    },
    "npm:is-finite@1.0.1": {
      "map": {
        "number-is-nan": "npm:number-is-nan@1.0.0"
      }
    },
    "npm:is-my-json-valid@2.13.1": {
      "map": {
        "generate-function": "npm:generate-function@2.0.0",
        "generate-object-property": "npm:generate-object-property@1.2.0",
        "jsonpointer": "npm:jsonpointer@2.0.0",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:isomorphic-fetch@2.2.1": {
      "map": {
        "node-fetch": "npm:node-fetch@1.5.1",
        "whatwg-fetch": "npm:whatwg-fetch@1.0.0"
      }
    },
    "npm:jodid25519@1.0.2": {
      "map": {
        "jsbn": "npm:jsbn@0.1.0"
      }
    },
    "npm:jsonist@1.2.0": {
      "map": {
        "bl": "npm:bl@1.0.3",
        "hyperquest": "npm:hyperquest@1.2.0",
        "json-stringify-safe": "npm:json-stringify-safe@5.0.1",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:jsprim@1.2.2": {
      "map": {
        "extsprintf": "npm:extsprintf@1.0.2",
        "json-schema": "npm:json-schema@0.2.2",
        "verror": "npm:verror@1.3.6"
      }
    },
    "npm:jstransform@3.0.0": {
      "map": {
        "base62": "npm:base62@0.1.1",
        "esprima-fb": "npm:esprima-fb@3001.1.0-dev-harmony-fb",
        "source-map": "npm:source-map@0.1.31"
      }
    },
    "npm:level-errors@1.0.4": {
      "map": {
        "errno": "npm:errno@0.1.4"
      }
    },
    "npm:level-iterator-stream@1.3.1": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "level-errors": "npm:level-errors@1.0.4",
        "readable-stream": "npm:readable-stream@1.0.34",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:level-sublevel@6.5.4": {
      "map": {
        "bytewise": "npm:bytewise@1.1.0",
        "levelup": "npm:levelup@0.19.1",
        "ltgt": "npm:ltgt@2.1.2",
        "pull-stream": "npm:pull-stream@2.21.0",
        "typewiselite": "npm:typewiselite@1.0.0",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:level-write-stream@1.0.0": {
      "map": {
        "end-stream": "npm:end-stream@0.1.0"
      }
    },
    "npm:leveldown@1.4.4": {
      "map": {
        "abstract-leveldown": "npm:abstract-leveldown@2.4.1",
        "bindings": "npm:bindings@1.2.1",
        "fast-future": "npm:fast-future@1.0.1",
        "nan": "npm:nan@2.2.1",
        "prebuild": "npm:prebuild@2.9.2"
      }
    },
    "npm:levelup@0.19.1": {
      "map": {
        "bl": "npm:bl@0.8.2",
        "deferred-leveldown": "npm:deferred-leveldown@0.2.0",
        "errno": "npm:errno@0.1.4",
        "node-semver": "npm:semver@5.1.0",
        "prr": "npm:prr@0.0.0",
        "readable-stream": "npm:readable-stream@1.0.34",
        "semver": "npm:semver@5.1.0",
        "xtend": "npm:xtend@3.0.0"
      }
    },
    "npm:levelup@1.3.1": {
      "map": {
        "deferred-leveldown": "npm:deferred-leveldown@1.2.1",
        "level-codec": "npm:level-codec@6.1.0",
        "level-errors": "npm:level-errors@1.0.4",
        "level-iterator-stream": "npm:level-iterator-stream@1.3.1",
        "node-semver": "npm:semver@5.1.0",
        "prr": "npm:prr@1.0.1",
        "semver": "npm:semver@5.1.0",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:lie@3.0.2": {
      "map": {
        "es3ify": "npm:es3ify@0.1.4",
        "immediate": "npm:immediate@3.0.5",
        "inline-process-browser": "npm:inline-process-browser@1.0.0",
        "unreachable-branch-transform": "npm:unreachable-branch-transform@0.3.0"
      }
    },
    "npm:localstorage-down@0.6.6": {
      "map": {
        "abstract-leveldown": "npm:abstract-leveldown@0.12.3",
        "argsarray": "npm:argsarray@0.0.1",
        "d64": "npm:d64@1.0.0",
        "humble-localstorage": "npm:humble-localstorage@1.4.2",
        "inherits": "npm:inherits@2.0.1",
        "tiny-queue": "npm:tiny-queue@0.2.0"
      }
    },
    "npm:lodash.pad@4.3.0": {
      "map": {
        "lodash._baseslice": "npm:lodash._baseslice@4.0.0",
        "lodash.tostring": "npm:lodash.tostring@4.1.2"
      }
    },
    "npm:lodash.padend@4.4.0": {
      "map": {
        "lodash._baseslice": "npm:lodash._baseslice@4.0.0",
        "lodash.tostring": "npm:lodash.tostring@4.1.2"
      }
    },
    "npm:lodash.padstart@4.4.0": {
      "map": {
        "lodash._baseslice": "npm:lodash._baseslice@4.0.0",
        "lodash.tostring": "npm:lodash.tostring@4.1.2"
      }
    },
    "npm:loose-envify@1.1.0": {
      "map": {
        "js-tokens": "npm:js-tokens@1.0.3"
      }
    },
    "npm:memdown@1.1.2": {
      "map": {
        "abstract-leveldown": "npm:abstract-leveldown@2.4.1",
        "functional-red-black-tree": "npm:functional-red-black-tree@1.0.1",
        "inherits": "npm:inherits@2.0.1",
        "ltgt": "npm:ltgt@1.0.2"
      }
    },
    "npm:miller-rabin@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.3",
        "brorand": "npm:brorand@1.0.5"
      }
    },
    "npm:mime-types@2.1.10": {
      "map": {
        "mime-db": "npm:mime-db@1.22.0"
      }
    },
    "npm:minimatch@1.0.0": {
      "map": {
        "lru-cache": "npm:lru-cache@2.7.3",
        "sigmund": "npm:sigmund@1.0.1"
      }
    },
    "npm:minimatch@2.0.10": {
      "map": {
        "brace-expansion": "npm:brace-expansion@1.1.3"
      }
    },
    "npm:minimatch@3.0.0": {
      "map": {
        "brace-expansion": "npm:brace-expansion@1.1.3"
      }
    },
    "npm:mkdirp@0.5.1": {
      "map": {
        "minimist": "npm:minimist@0.0.8"
      }
    },
    "npm:node-fetch@1.5.1": {
      "map": {
        "encoding": "npm:encoding@0.1.12",
        "is-stream": "npm:is-stream@1.1.0"
      }
    },
    "npm:node-gyp@3.3.1": {
      "map": {
        "fstream": "npm:fstream@1.0.8",
        "glob": "npm:glob@4.5.3",
        "graceful-fs": "npm:graceful-fs@4.1.3",
        "minimatch": "npm:minimatch@1.0.0",
        "mkdirp": "npm:mkdirp@0.5.1",
        "nopt": "npm:nopt@3.0.6",
        "npmlog": "npm:npmlog@2.0.3",
        "osenv": "npm:osenv@0.1.3",
        "path-array": "npm:path-array@1.0.1",
        "request": "npm:request@2.67.0",
        "rimraf": "npm:rimraf@2.5.2",
        "semver": "npm:semver@5.1.0",
        "tar": "npm:tar@2.2.1",
        "which": "npm:which@1.2.4"
      }
    },
    "npm:nopt@3.0.6": {
      "map": {
        "abbrev": "npm:abbrev@1.0.7"
      }
    },
    "npm:npmlog@2.0.3": {
      "map": {
        "ansi": "npm:ansi@0.3.1",
        "are-we-there-yet": "npm:are-we-there-yet@1.1.2",
        "gauge": "npm:gauge@1.2.7"
      }
    },
    "npm:once@1.3.3": {
      "map": {
        "wrappy": "npm:wrappy@1.0.1"
      }
    },
    "npm:osenv@0.1.3": {
      "map": {
        "os-homedir": "npm:os-homedir@1.0.1",
        "os-tmpdir": "npm:os-tmpdir@1.0.1"
      }
    },
    "npm:parse-asn1@5.0.0": {
      "map": {
        "asn1.js": "npm:asn1.js@4.6.0",
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "pbkdf2": "npm:pbkdf2@3.0.4"
      }
    },
    "npm:path-array@1.0.1": {
      "map": {
        "array-index": "npm:array-index@1.0.0"
      }
    },
    "npm:pbkdf2@3.0.4": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.4"
      }
    },
    "npm:pinkie-promise@2.0.1": {
      "map": {
        "pinkie": "npm:pinkie@2.0.4"
      }
    },
    "npm:pouchdb-authentication@0.5.1": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "lie": "npm:lie@3.0.2",
        "pouchdb": "npm:pouchdb@5.2.1",
        "pouchdb-extend": "npm:pouchdb-extend@0.1.2",
        "url-join": "npm:url-join@1.1.0"
      }
    },
    "npm:pouchdb@5.2.1": {
      "map": {
        "argsarray": "npm:argsarray@0.0.1",
        "debug": "npm:debug@2.2.0",
        "double-ended-queue": "npm:double-ended-queue@2.0.0-0",
        "es3ify": "npm:es3ify@0.2.0",
        "fruitdown": "npm:fruitdown@1.0.1",
        "inherits": "npm:inherits@2.0.1",
        "js-extend": "npm:js-extend@1.0.1",
        "level-sublevel": "npm:level-sublevel@6.5.4",
        "level-write-stream": "npm:level-write-stream@1.0.0",
        "levelup": "npm:levelup@1.3.1",
        "lie": "npm:lie@3.0.2",
        "localstorage-down": "npm:localstorage-down@0.6.6",
        "memdown": "npm:memdown@1.1.2",
        "pouchdb-collate": "npm:pouchdb-collate@1.2.0",
        "pouchdb-collections": "npm:pouchdb-collections@1.0.1",
        "request": "npm:request@2.67.0",
        "scope-eval": "npm:scope-eval@0.0.3",
        "spark-md5": "npm:spark-md5@2.0.0",
        "through2": "npm:through2@2.0.0",
        "vuvuzela": "npm:vuvuzela@1.0.2"
      }
    },
    "npm:prebuild@2.9.2": {
      "map": {
        "async": "npm:async@1.5.2",
        "expand-template": "npm:expand-template@1.0.2",
        "ghreleases": "npm:ghreleases@1.0.4",
        "github-from-package": "npm:github-from-package@0.0.0",
        "minimist": "npm:minimist@1.2.0",
        "mkdirp": "npm:mkdirp@0.5.1",
        "node-gyp": "npm:node-gyp@3.3.1",
        "noop-logger": "npm:noop-logger@0.1.1",
        "npmlog": "npm:npmlog@2.0.3",
        "os-homedir": "npm:os-homedir@1.0.1",
        "pump": "npm:pump@1.0.1",
        "rc": "npm:rc@1.1.6",
        "simple-get": "npm:simple-get@1.4.3",
        "tar-fs": "npm:tar-fs@1.12.0",
        "tar-stream": "npm:tar-stream@1.5.2",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:promise@7.1.1": {
      "map": {
        "asap": "npm:asap@2.0.3"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.3",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "create-hash": "npm:create-hash@1.1.2",
        "parse-asn1": "npm:parse-asn1@5.0.0",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:pull-stream@2.21.0": {
      "map": {
        "pull-core": "npm:pull-core@1.0.0"
      }
    },
    "npm:pump@1.0.1": {
      "map": {
        "end-of-stream": "npm:end-of-stream@1.1.0",
        "once": "npm:once@1.3.3"
      }
    },
    "npm:rc@1.1.6": {
      "map": {
        "deep-extend": "npm:deep-extend@0.4.1",
        "ini": "npm:ini@1.3.4",
        "minimist": "npm:minimist@1.2.0",
        "strip-json-comments": "npm:strip-json-comments@1.0.4"
      }
    },
    "npm:react@15.0.1": {
      "map": {
        "fbjs": "npm:fbjs@0.8.1",
        "loose-envify": "npm:loose-envify@1.1.0",
        "object-assign": "npm:object-assign@4.0.1"
      }
    },
    "npm:readable-stream@1.0.34": {
      "map": {
        "core-util-is": "npm:core-util-is@1.0.2",
        "inherits": "npm:inherits@2.0.1",
        "isarray": "npm:isarray@0.0.1",
        "stream-browserify": "npm:stream-browserify@1.0.0",
        "string_decoder": "npm:string_decoder@0.10.31"
      }
    },
    "npm:readable-stream@1.1.14": {
      "map": {
        "core-util-is": "npm:core-util-is@1.0.2",
        "inherits": "npm:inherits@2.0.1",
        "isarray": "npm:isarray@0.0.1",
        "stream-browserify": "npm:stream-browserify@1.0.0",
        "string_decoder": "npm:string_decoder@0.10.31"
      }
    },
    "npm:readable-stream@2.0.6": {
      "map": {
        "core-util-is": "npm:core-util-is@1.0.2",
        "inherits": "npm:inherits@2.0.1",
        "isarray": "npm:isarray@1.0.0",
        "process-nextick-args": "npm:process-nextick-args@1.0.6",
        "string_decoder": "npm:string_decoder@0.10.31",
        "util-deprecate": "npm:util-deprecate@1.0.2"
      }
    },
    "npm:readable-stream@2.1.0": {
      "map": {
        "core-util-is": "npm:core-util-is@1.0.2",
        "inherits": "npm:inherits@2.0.1",
        "inline-process-browser": "npm:inline-process-browser@2.0.1",
        "isarray": "npm:isarray@1.0.0",
        "process-nextick-args": "npm:process-nextick-args@1.0.6",
        "string_decoder": "npm:string_decoder@0.10.31",
        "unreachable-branch-transform": "npm:unreachable-branch-transform@0.5.1",
        "util-deprecate": "npm:util-deprecate@1.0.2"
      }
    },
    "npm:recast@0.10.43": {
      "map": {
        "ast-types": "npm:ast-types@0.8.15",
        "esprima-fb": "npm:esprima-fb@15001.1001.0-dev-harmony-fb",
        "private": "npm:private@0.1.6",
        "source-map": "npm:source-map@0.5.5"
      }
    },
    "npm:recast@0.11.5": {
      "map": {
        "ast-types": "npm:ast-types@0.8.16",
        "esprima": "npm:esprima@2.7.2",
        "private": "npm:private@0.1.6",
        "source-map": "npm:source-map@0.5.5"
      }
    },
    "npm:repeating@1.1.3": {
      "map": {
        "is-finite": "npm:is-finite@1.0.1"
      }
    },
    "npm:request@2.67.0": {
      "map": {
        "aws-sign2": "npm:aws-sign2@0.6.0",
        "bl": "npm:bl@1.0.3",
        "caseless": "npm:caseless@0.11.0",
        "combined-stream": "npm:combined-stream@1.0.5",
        "extend": "npm:extend@3.0.0",
        "forever-agent": "npm:forever-agent@0.6.1",
        "form-data": "npm:form-data@1.0.0-rc4",
        "har-validator": "npm:har-validator@2.0.6",
        "hawk": "npm:hawk@3.1.3",
        "http-signature": "npm:http-signature@1.1.1",
        "is-typedarray": "npm:is-typedarray@1.0.0",
        "isstream": "npm:isstream@0.1.2",
        "json-stringify-safe": "npm:json-stringify-safe@5.0.1",
        "mime-types": "npm:mime-types@2.1.10",
        "node-uuid": "npm:node-uuid@1.4.7",
        "oauth-sign": "npm:oauth-sign@0.8.1",
        "qs": "npm:qs@5.2.0",
        "stringstream": "npm:stringstream@0.0.5",
        "tough-cookie": "npm:tough-cookie@2.2.2",
        "tunnel-agent": "npm:tunnel-agent@0.4.2"
      }
    },
    "npm:rimraf@2.5.2": {
      "map": {
        "glob": "npm:glob@7.0.3"
      }
    },
    "npm:sha.js@2.4.5": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:simple-get@1.4.3": {
      "map": {
        "node-unzip-response": "npm:unzip-response@1.0.0",
        "once": "npm:once@1.3.3",
        "unzip-response": "npm:unzip-response@1.0.0",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:sntp@1.0.9": {
      "map": {
        "hoek": "npm:hoek@2.16.3"
      }
    },
    "npm:source-map@0.1.31": {
      "map": {
        "amdefine": "npm:amdefine@1.0.0"
      }
    },
    "npm:sshpk@1.8.3": {
      "map": {
        "asn1": "npm:asn1@0.2.3",
        "assert-plus": "npm:assert-plus@1.0.0",
        "dashdash": "npm:dashdash@1.13.1",
        "getpass": "npm:getpass@0.1.6"
      }
    },
    "npm:stream-browserify@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "readable-stream": "npm:readable-stream@1.0.34"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "readable-stream": "npm:readable-stream@2.0.6"
      }
    },
    "npm:stream-http@2.3.0": {
      "map": {
        "builtin-status-codes": "npm:builtin-status-codes@2.0.0",
        "inherits": "npm:inherits@2.0.1",
        "readable-stream": "npm:readable-stream@2.1.0",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:strip-ansi@3.0.1": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.0.0"
      }
    },
    "npm:tar-fs@1.12.0": {
      "map": {
        "mkdirp": "npm:mkdirp@0.5.1",
        "pump": "npm:pump@1.0.1",
        "tar-stream": "npm:tar-stream@1.5.2"
      }
    },
    "npm:tar-stream@1.5.2": {
      "map": {
        "bl": "npm:bl@1.0.3",
        "end-of-stream": "npm:end-of-stream@1.1.0",
        "readable-stream": "npm:readable-stream@2.1.0",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:tar@2.2.1": {
      "map": {
        "block-stream": "npm:block-stream@0.0.8",
        "fstream": "npm:fstream@1.0.8",
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:through2@0.6.5": {
      "map": {
        "readable-stream": "npm:readable-stream@1.0.34",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:through2@2.0.0": {
      "map": {
        "readable-stream": "npm:readable-stream@2.0.6",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:typewise@1.0.3": {
      "map": {
        "typewise-core": "npm:typewise-core@1.2.0"
      }
    },
    "npm:unreachable-branch-transform@0.3.0": {
      "map": {
        "esmangle-evaluator": "npm:esmangle-evaluator@1.0.0",
        "recast": "npm:recast@0.10.43",
        "through2": "npm:through2@0.6.5"
      }
    },
    "npm:unreachable-branch-transform@0.5.1": {
      "map": {
        "esmangle-evaluator": "npm:esmangle-evaluator@1.0.0",
        "recast": "npm:recast@0.11.5"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "punycode": "npm:punycode@1.3.2",
        "querystring": "npm:querystring@0.2.0"
      }
    },
    "npm:verror@1.3.6": {
      "map": {
        "extsprintf": "npm:extsprintf@1.0.2"
      }
    },
    "npm:which@1.2.4": {
      "map": {
        "is-absolute": "npm:is-absolute@0.1.7",
        "isexe": "npm:isexe@1.1.2"
      }
    },
    "npm:write-stream@0.4.3": {
      "map": {
        "readable-stream": "npm:readable-stream@0.0.4"
      }
    }
  }
});
