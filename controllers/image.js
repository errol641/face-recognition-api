const Clarifai = require('clarifai');

const app = new Clarifai.App({
    apiKey: 'ab6e52de5cdb4cd58620bef844233cb3'
});

const handleApiCall = (req, res) => {
    app.models
        .predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
        .then(data => {
            res.json(data.outputs[0].data.regions[0].region_info.bounding_box);
        })
        .catch(() => res.status(400).json('unable to work with API'));
}

const handleImageSubmit = (req, res, db) => {
    const { id } = req.body;
    db('users').where('id', '=', id)
    .increment('entries', 1)
    .returning('entries')
    .then(entries => {
        if(entries.length) {
            res.json(entries[0]);
        } else {
            res.status(400).json('unable to update entries');
        }
    })
    .catch(err => res.status(400).json('unable to update entries'));
}
module.exports = {
    handleApiCall,
    handleImageSubmit
}