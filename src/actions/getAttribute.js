module.exports = {
    getTitleAttribute  : async(selectorName , attributeName) => {
      const elem=  await $(selectorName);
      const attr = await elem.getAttribute("title");
      return attr;
    }
}