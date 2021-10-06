export const getRange = function(element){
  if(!window.getSelection){
      //IE浏览器
      return (document as any).selection.createRange().text;
  }else{
      return element.value.substr(element.selectionStart,element.selectionEnd - element.selectionStart)
  }
};

export const setRange = function(element,text){
  element.focus();
  if (element.createTextRange) {
      var caretPos = (document as any).selection.createRange().duplicate();
      (document as any).selection.empty();
      caretPos.text = text;
  }else if(element.setSelectionRange){
      var rangeStart = element.selectionStart;
      var rangeEnd = element.selectionEnd;
      var tempStr1 = element.value.substring(0, rangeStart);
      var tempStr2 = element.value.substring(rangeEnd);
      element.value = tempStr1 + text + tempStr2;
      element.blur();
  }
}
