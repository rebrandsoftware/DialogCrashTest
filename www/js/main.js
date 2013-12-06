//main

var app = {
    initialize: function () {
        console.log('init');
        
        $('#icon-list').on('click', 'li', function () {
            mIconName = 'img/icons/' + $(this).attr('id');
            //console.log('mIconNameList: ' + mIconName);
            var $elIconImage = $('#iconImage');
            $elIconImage.attr('src', mIconName).load();
            //console.log('Clicked ' + mIconName);
            $.mobile.back();
        });

        $('#promptIcon').on('pagebeforeshow', function () {
            //console.log('choose icon');
            bChoosingImage = true;
        });

        
    },
};

app.initialize();