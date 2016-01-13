function get_ext(path) {
    return path.split('.').pop();
}


function loadmd(path) {
    path = "notes/" + path;
    $.get(path, function (data) {
        $("#note").html("");
        $("#note").html(data);
        if (get_ext(path) == "md") {
            rendermdnote();
        }
        if (get_ext(path) == "txt") {
            rendertxtnote();
        }
    });
}

function rendermdnote () {
    note = $("#note");
    oldhtml = note.html();
    note.html(marked(oldhtml));
    $("#note a").attr("target","_blank");
}

function rendertxtnote () {
    note = $("#note");
    oldhtml = note.html();
    note.html(oldhtml).wrapInner("<pre></pre>");
    $("#note a").attr("target","_blank");
}

function generatenav( structure ) {
    var navhtml = "";
    $.each( structure, function( key, val ) {
        if(typeof(val) == "string") {
            navhtml += "<li><a onclick=\"loadmd('"+key+"')\" href='#"+key+"'>" + val + "</a></li>\n" ;
        } else if(typeof(val) == "object") {
            navhtml += "<li><b>"+key+"</b></li>\n"
            navhtml += "<ul>\n";
            navhtml += generatenav(val);
            navhtml += "</ul>\n";
        }
    });
    return navhtml;
}

function loadindex(path) {
    $.getJSON( path, function( data ) {
        navhtml = generatenav( data );
        $("#nav").html(navhtml);
   });
}
