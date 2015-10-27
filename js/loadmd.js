function get_ext(path) {
    return path.split('.').pop();
}


function loadmd(path) {
    $.get(path, function (data) {
        $("#note").html(data);
        if (get_ext(path) == "md") {
            rendernote();
        }
    });
}

function rendernote () {
    note = $("#note");
    oldhtml = note.html();
    note.html(marked(oldhtml))
    $("#note a").attr("target","_blank");
}

function loadindex(path) {
    $.getJSON( path, function( data ) {
        var items = [];
        $.each( data, function( index, val ) {
            items.push( "<li><a onclick=\"loadmd('notes/"+val+"')\" href='#'>" + val + "</a></li>" );
        });
        $("#nav").html(items.join("\n"))
    });
}