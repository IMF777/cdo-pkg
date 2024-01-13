(function(){
  
  function repeat(s,n){
    var str = "";
    for (var i=0; i<n; i++){
      str += s;
    }
    return str;
  }
  
  function stb(s){
    s = unescape(encodeURIComponent(s));
    var chr;
    var l = s.length;
    var out = "";
    for (var i=0; i < l; i++){
        chr = s.charCodeAt(i).toString(2);
        while (chr.length % 8 != 0 ){
          chr = "0"+chr;
        }
        out += chr;
    }
    return out;
  }
  
  function btd(str){
    var val=[];
    for (var i=0, s=0, st=""; i<str.length; i++){
      st += str[i];
      s++;
      if (s === 6){
        val.push(st);
        s = 0;
        st = "";
      } else {
        if (i === str.length-1){
          val.push(st+"=");
        }
      }
    }
    return val.join(" ");
  }
  
  function dtb64(str){
    var end = "";
    str = str.split(" ");
    for (var i=0; i<str.length; i++){
      if (str[i][str[i].length-1]==="="){
        var z=6-str[i].substring(0,str[i].length-1).length;
        end+=BASE64[BINARY6.indexOf(str[i].substring(0,str[i].length-1)+repeat("0",z))]+repeat("=",z);
      } else 
        end+=BASE64[BINARY6.indexOf(str[i])];
    }
    return end;
  }
  
  var BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
  var BINARY6 = "000000000001000010000011000100000101000110000111001000001001001010001011001100001101001110001111010000010001010010010011010100010101010110010111011000011001011010011011011100011101011110011111100000100001100010100011100100100101100110100111101000101001101010101011101100101101101110101111110000110001110010110011110100110101110110110111111000111001111010111011111100111101111110111111".match(/.{6}/g);

  
  function b64td(b){
    var res="";
    b = b.replace(/\n/g,"").split("");
    while (b.length > 0){
      var i = b.shift();
      if (i!=="="){
        res+=BINARY6[BASE64.indexOf(i)]+" ";
      } else {
        res=res.substring(0,res.length-2)+"=";
      }
    }
    return res;
  }
  
  
  function dtb(d){
    return d.replace(/[\s=]/g,"").match(/.{1,8}/g).join(" ");
  }
  
  
  function bts(bin) {
    return bin.split(" ").map(function(elem) {
      return String.fromCharCode(parseInt(elem, 2));
    }).join("");
  }
  
  
  return {
    stringToBase64:function(str){
      return dtb64(btd(stb(str)));
    },
    base64ToString:function (bin){
      return bts(dtb(b64td(bin)));
    }
  };
  
})();
