module.exports = {
    clickElement : async(selectorName) => {
        
        const elem=  await $(selectorName);
        await elem.click();
    }

}