$('#loadTable').click(function() {
    $.get('example/tableData.xml', function(data) {
        $('div#tableWrapper').append('<table id="ajaxTable"></table>');
        $(document).ready(function() {
            $(data).children('tabledata').children('row').each(function() {
                var thisRow = this;
                $('table#ajaxTable').append('<tr></tr>');
                $(thisRow).children('column').each(function() {
                    var thisColumn = $(this).text();
                    $('table#ajaxTable').children('tbody').children('tr').last().append('<td style="border: 1px solid black">' + thisColumn + '</td>');
                });
            });
        });
    });
});
