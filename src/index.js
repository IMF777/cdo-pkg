function Settings(opt){
  window._package_settings.keyValues = opt.keyValues;
  window._package_settings.throwError = opt.throwError;
  window._package_settings.onError = opt.onError || function(){};
}


(function(){
  
  
  window._package_settings = {keyValues:false,throwError:false,onError:function(){}};
  
  var win = window._package_settings;
  
  function fetch(url){
    var obj = {on:function(f){
      call = f;
    }};
    var call = function(){};
    startWebRequest(url, function(s,t,c){
      if (s !== 200){
        call(false,t,s);
      } else {
        call(t === "application/json"? JSON.parse(c) : c, t, 200);
      }
    });
    
    return obj;
  }
  
  var windowbuild = ["sem"];
  
  function handleError(msg){
    if (win.throwError === true){
      throw "[PKG] "+msg;
    } else if (win.throwError === "console"){
       console.log("[PKG] "+msg);
    } else {
      win.onError("[PKG] "+msg);
    }
  }
  
  var PKGS = {};
  
  
  window.require = function(pkg,version){
    
    if (!version || !/^\d{1,2}\.\d{1,2}\.\d{1,2}$/.test(version)) version = "latest";
    
    var id = pkg+":"+version;
    var reqPkg;
    
    if (!PKGS[id]){
      reqPkg = {__valid:false, __loaded:false, onload:function(){}};
      PKGS[id] = reqPkg;
    } else {
      return PKGS[id];
    }
    
    function evaluatePkg(code){
      var packageObject = eval(code);
      for (var prop in packageObject){
        reqPkg[prop] = packageObject[prop];
      }
      reqPkg.onload();
    }
    
    function load(url,keyval){
      fetch(url).on(function(content,t,s){
        if (content){
          reqPkg.__valid = true;
          reqPkg.__loaded = true;
          if (keyval){
            setKeyValue("package_href_"+id,url);
          }
          evaluatePkg(content);
        } else {
          delete PKGS[id];
          if (s === 404){
            handleError("Package "+pkg+" does not exist.");
          } else {
            handleError("raw.githubusercontent.com responded with a status code of "+s+".");
          }
        }
      });
    }
    
    
    function webRequest(keyval){
      if (version !== "latest"){
        var url = "https://api.github.com/repos/IMF777/cdo-pkg/commits?path=packages/"+pkg+"/src/index.min.js";
        
        fetch(url).on(function(content,t,status){
          if (content){
            
            if (content.length === 0){
              handleError("Package "+pkg+" does not exist.");
              return;
            }
            
            var found = false;
            for (var i=0; i<content.length; i++){
              var item = content[i];
              var commit = item.commit.message;
              var v = commit.substring(0,version.length);
              if (v === version){
                found = true;
                
                reqPkg.__valid = true;
                
                load("https://raw.githubusercontent.com/IMF777/cdo-pkg/"+item.sha+"/packages/"+pkg+"/src/index.min.js",keyval);
                break;
              }
            }
            if (!found){
              handleError("Version "+version+" does not exist in package "+pkg+".");
            }
          } else {
            handleError("api.github.com reponded with a status code of "+status+".");
          }
        });
          
      } else {
        load("https://raw.githubusercontent.com/IMF777/cdo-pkg/main/packages/"+pkg+"/src/index.min.js",keyval);
      }
    }
    
    if (win.keyValues){
      getKeyValue("package_href_"+id,function(v){
        if (v) load(v);
        else webRequest(true);
      });
    } else {
      webRequest();
    }
  
    return reqPkg;
  
  };
  
  window.package = function(pkg,version){
    
    var returnObj = {onload:function(){}};
      
    if (!Array.isArray(pkg)){
      var obj = require(pkg,version);
      obj.onload = function(){
        delete obj.onload;
        delete obj.__valid;
        delete obj.__loaded;
        if (windowbuild.indexOf(pkg) > -1){
          for (var prop in obj){
            window[prop] = obj[prop];
          }
          returnObj.onload();
        } else {
          handleError("Package "+pkg+" cannot be imported globally. Use require() to import this package.");
        }
      };
    } else {
      var loading = pkg.length;
      var loaded = 0;
      pkg.forEach(function(p){
        p = p.split(":");
        package(p[0],p[1]).onload = function(){
          loaded ++;
          if (loaded === loading){
            returnObj.onload();
          }
        };
      });
    }
    return returnObj;
  };

})();
