module.exports = {
    sendValue : async(selectorName , text) => {
        const elem=  await $(selectorName);
        await elem.setValue(text);
        console.log(text ,'TYPED')
    }
}