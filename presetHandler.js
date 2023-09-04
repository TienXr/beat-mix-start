// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (req, index=undefined, newPresetArray=undefined) => {
    if (index < 0 || index >= presets.length) {
        return [404]
    } else if (req != 'GET' && req != 'PUT') {
        return [400]
    } else if (req == 'GET' && index == undefined){
        return [200]
    } else if (req == 'PUT' && index == undefined){
        return [200]
    } else if (index >= 0 && index < presets.length && req == 'GET') {
        return [200, presets[index]]
    } else if (index >= 0 && index < presets.length && req == 'PUT') {
        presets[index] = newPresetArray
        return [200, presets[index]]
    }
};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
