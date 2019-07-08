'use strict';

function collectSameElements(collectionA, objectB) {
  var ans = [];
    var index = 0;
    for (let i = 0; i < collectionA.length; i++) {
		var found = false;
		for (let j = 0; j < objectB.value.length; j++) {
			if (collectionA[i] === objectB.value[j]) {
				ans[index] = collectionA[i];
				index++;
				found = true;
				break;
			}
		}
		if (found) {
			continue;
		}
	}
	return ans;
}
