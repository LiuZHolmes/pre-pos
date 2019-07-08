'use strict';

function countSameElements(collection) {
  var ans = [];
  var index = 0;
  for (let i = 0; i < collection.length; i++) {
    var found = false;
    var ch = collection[i];
    var num = 1;
    if (collection[i].length > 1) {
      if (collection[i].search('-')!=-1){
        var s = collection[i].split('-');
        ch = s[0];
        num = parseInt(s[1]);
      }
      else if (collection[i].search(':')!=-1) {
        var s = collection[i].split(':');
        ch = s[0];
        num = parseInt(s[1]);
      }
      else if (collection[i].search('\\\[')!=-1) {
        var start = collection[i].search('\\\[');
        var end = collection[i].search('\\]');
        ch = collection[i][0];
        num = parseInt(collection[i].substr(start + 1,end - start - 1));
      }
    }
    for (let j = 0; j < ans.length; j++) {
      if (ch === ans[j].name) {
        ans[j].summary += num;
        found = true;
      }

    }
    if (found) {
      continue;
    }
    else {
      ans[index++] = { name: ch, summary: num };
    }
  }
  return ans;
}
