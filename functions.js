const functions = {
  isValidFileName: (fileName) => {
    if (fileName.endsWith(".DOC")) return false;

    return true;
  },
};

module.exports = functions;
