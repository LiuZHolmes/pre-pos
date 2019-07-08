'use strict';

function countSameElements(collection) {
	var ans = [];
	var index = 0;
	for (let i = 0; i < collection.length; i++) {
		var found = false;
		for (let j = 0; j < ans.length; j++) {
			if (collection[i] === ans[j].key) {
				ans[j].count++;
				found = true;
			}
			
		}
		if(found) {
			continue;
		}
		else {
			ans[index++] = {key:collection[i],count:1};
		}
	}
	return ans;
}
