"use strict";var fs=require("fs");module.exports=function(r){var e="./env.json",n="utf8";r&&("string"==typeof r?e=r:(e=r.path||e,n=r.encoding||n));try{var s=JSON.parse(fs.readFileSync(e,{encoding:n}));for(var t in s)process.env[t]=process.env[t]||s[t];return s}catch(r){return r}};