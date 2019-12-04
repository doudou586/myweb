let worker = new Worker('/app_js/worker2.js');

$(document).ready(() => {

    // a custom js plugin that sets the height an element to the height of the window.
    $('#row').Height();

    worker.addEventListener('message', (e) => {
        let data = e.data;
        $('#tweet').append('<br>' + (new Date()) + '--' + data.tweet);
        $('#user').append(' - ' + data.user);
    });

    worker.postMessage('danny');

});
