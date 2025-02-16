(function(){

  function send(id,msg){
    var elt = id+randomNumber(10000,99999);
    image(elt,"https://applab-datanet.onrender.com/message/write?id="+id+"&message="+encodeURIComponent(msg));
    deleteElement(elt);
  }
  
  function load(f){
    var projectID = getAttribute("divApplab","baseURI").split("/")[5];
    var url = "https://raw.githubusercontent.com/IMF777/applab-datanet/main/datasets/inbox/"+projectID+".json";
    startWebRequest(url,function(s,t,c){
      f(JSON.parse(c));
    });
  }
  
  function loadLatest(f){
    load(function(c){{
      c.length > 0 ? f(c[c.length-1]) : f(c);
    }});
  }
  
  return {send:send,load:load,loadLatest:loadLatest};

})()
