console.log('connectons_sq loaded');
if(typeof(dojo) != "undefined") {
    dojo.place(
        "<link rel=\"stylesheet\" type=\"text/css\" href=\"/files/connections_sq/customization.css?repoName=connections_sq\"></link>",
        dojo.doc.head,
        "last"
    );
}
console.log('connectons_sq finished');
