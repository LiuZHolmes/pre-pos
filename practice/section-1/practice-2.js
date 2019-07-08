'use strict';

function collectSameElements(collectionA, collectionB) {
  var ans = [];
    var index = 0;
    for (let i = 0; i < collectionA.length; i++) {
    var found = false;
    for (let k = 0; k < collectionB.length; k++) {
      for (let j = 0; j < collectionB[k].length; j++) {
        if (collectionA[i] === collectionB[k][j]) {
          ans[index] = collectionA[i];
          index++;
          found = true;
          break;
        }
      }
      if (found) {
        break;
      }
    }
    if (found) {
      continue;
    }
		
	}
	return ans;
}
