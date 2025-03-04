const test = function (moduleName) {
  const module = require(moduleName);
  return module;
};

test('test/helper/veryBadFiles/veryBadNode.js');
