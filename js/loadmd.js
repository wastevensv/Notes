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

function loadindex(path) {
    $.getJSON( path, function( data ) {
        var items = [];
        $.each( data, function( index, val ) {
            items.push( "<li><a onclick=\"loadmd('"+val+"')\" href='#"+val+"'>" + val + "</a></li>" );
        });
        $("#nav").html(items.join("\n"))
    });
}