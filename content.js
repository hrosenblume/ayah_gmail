chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.message == "getSource") {
            var emails = [];
            $(".vN").each(function() {
                var mail = $(this).attr("email");
                emails.push(mail);
            });
            if (emails.length == 0) {
                alert("You need a recipient!");
            } else if (emails.length > 1) {
                alert("There can only be one recipient.");
            } else {
                changeLinks(emails[0]);
                alert("All Are You A Human links (if contained in this email) have been changed!");
            }
        }
    });

function changeLinks(email) {
    var urlRegex = new RegExp("((https?://)?)(www\\.)?(areyouahuman)\\.(com)(?:/([a-z|"
                       + "A-Z|0-9|-|\\.|_|~|:|/|?|#|\\[|\\]|@|!|$|&|'|\\(|\\)|*|+|,|;|=|])*)");
    $(".Am").find('a').each(function() {
        var insert = this.href.replace(urlRegex, this.href + "?LLM=" + email);
        console.log(insert);
        $(this).prop('href', insert);
    });
}