'use strict';

function countSameElements(collection) {
  var ans = [];
  var index = 0;
  for (let i = 0; i < collection.length; i++) {
    var found = false;
    var ch = collection[i];
    var num = 1;
    if (collection[i].length > 1) {
      var s = collection[i].split('-');
      ch = s[0];
      num = parseInt(s[1]);
    }
    for (let j = 0; j < ans.length; j++) {
      if (ch === ans[j].key) {
        ans[j].count += num;
        found = true;
      }

    }
    if (found) {
      continue;
    }
    else {
      ans[index++] = { key: ch, count: num };
    }
  }
  return ans;
}
