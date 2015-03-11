settings = {
	FILE_MAXSIZE: 1000000,  // 1Mb
	FILE_TYPE: ['image/jpeg', 'image/png'],
	DLG_TITLE: 'Edit Your Avatar',
	SAVE_BTN: 'Save',
	CHANGE_AVATAR: 'Change Avatar',
	ERR_IMG_TYPE: 'File format not supported. Please upload .jpg or .png',
	ERR_FILE_SIZE: 'File is too large. 1Mb size limit',
};

settngDep = new Deps.Dependency();

AvatarUpload = {
	changeSettings: function(props) {
		for (var prop in props) {
			settings[prop] = props[prop];
		}
		settngDep.changed();
	}
};
