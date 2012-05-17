var parserInput = "#parser_input";
var parserInputSubmit = "#parser_input_submit";

var output = {
    "name": [],
    "avgtimetaken": [],
    "avgtotaltime": []
};

var parseStructure = function() {
    var input = JSON.parse($(parserInput).val());
    $.each(input.results, function(i, result) {
        if (!output.name.length) {
            $.each(result.name, function(ii, name) {
                output.name.push(name);
            });
        }
        $.each(result.timetaken, function(ii, timetaken) {
            if (!output.avgtimetaken[ii]) {
                output.avgtimetaken[ii] = timetaken;
            } else {
                output.avgtimetaken[ii] += timetaken;
            }
        });
        $.each(result.totaltime, function(iii, totaltime) {
            if (!output.avgtotaltime[iii]) {
                output.avgtotaltime[iii] = totaltime;
            } else {
                output.avgtotaltime[iii] += totaltime;
            }
        });
    });
    $.each(output.avgtimetaken, function(j, avgtimetaken) {
        output.avgtimetaken[j] = avgtimetaken / input.results.length;
    });
    $.each(output.avgtotaltime, function(jj, avgtotaltime) {
        output.avgtotaltime[jj] = avgtotaltime / input.results.length;
    });
    $('#parser_output').val(JSON.stringify(output));
};

var addBinding = function() {
    $(parserInputSubmit).on('click', parseStructure);
};

var doInit = function() {
    addBinding();
};

$(document).ready(doInit);