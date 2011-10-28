(function($) {
    $().ready(function() {
        if ($('#body-edit-profile').length) {
            $('#id_groups').tagit({
                caseSensitive: false,
                singleField: true,
                singleFieldDelimiter: ' ',
                removeConfirmation: true,
                tagSource: app.localeUrl('groups/search')
                // triggerKeys: ['enter', 'comma', 'tab']
            });
        }
    });
})(jQuery);
