FileReaderObject = {
    previewImage: function(file, callback){
        var reader = new FileReader();
        reader.onload = function (e) {
            // check file
            if(!_.contains(settings.FILE_TYPE, file.type)){
                callback(new Meteor.Error(412, settings.ERR_IMG_TYPE));
                return;
            }
            // check size
            if(file.size > settings.FILE_MAXSIZE){
                callback(new Meteor.Error(412, settings.ERR_FILE_SIZE));
                return;
            }
            file.result = e.target.result;
            callback(null, file);
        };
        reader.onerror = function () {
            callback(reader.error);
        };
        reader.readAsDataURL(file);
    }
};
