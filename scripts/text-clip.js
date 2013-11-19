var MAX_LENGTH =50;
function textClip() {
    console.log('is mobile');
    $(".news-text").each(function () {
        var text = $(this).text().trim(), cliped;
        if (text.trim().length >= MAX_LENGTH) {
            cliped = text.slice(0, MAX_LENGTH);
        }
        console.log('cliped', cliped);
        $(this).text(cliped);
    });
}

enquire.register('screen and (max-device-with: 480px)', {
    match: textClip
});
