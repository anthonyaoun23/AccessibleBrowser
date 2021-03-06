function request_template(url){
    return new Promise((resolve, reject) => {
        $.get(url, function(data) {

        })
        .done(function(data) {
            return resolve(data);
        })
        .fail(function(err) {
            console.log( err );
            reject();
        })
        .always(function() {

        });
    });
}

async function get_template(url, user_token){
    get_url = server_url + template_endpoint + "?" + "user_token=" + user_token + "&url="+url
    template = await request_template(get_url);
    
    return template;
}