function printViewSchedule(exportFileName, viewMode) {
    var printableTable = '';

    if (viewMode == 'week_view')
        printableTable = 'results';
    else
        printableTable = 'export_res_table';

    var doc = new jsPDF('l', 'pt', 'a3');

    var PDFWidth = doc.internal.pageSize.getWidth();
    var PDFWidthMod = Math.round((PDFWidth / 6.0));

    var lineSeparator = '';

    for (var lS = 1; lS < PDFWidthMod; lS++)
        lineSeparator += '_';

    doc.setProperties({ title: exportFileName + '.pdf' });
    doc.setFont("roboto", "regular");

    doc.autoTable({
        html: '#_pdf_header',
        theme: "plain",
        margin: {
            top: 13,
            right: 11,
            left: 11
        }
    });

    doc.text(lineSeparator, 14, 50);

    doc.autoTable({
        html: '#_pdf_header2',
        theme: "plain",
        margin: {
            left: 11
        },
        startY: 60,
    });

    doc.autoTable({
        html: '#' + printableTable,
        margin: {
            right: 14,
            left: 14
        },
        startY: doc.lastAutoTable.finalY + 10,
        headStyles: {
            lineWidth: 0.20,
            lineColor: [0, 0, 0],
            textColor: [0, 0, 0],
            fillColor: [211, 211, 211]
        },
        bodyStyles: {
            lineWidth: 0.20,
            lineColor: [0, 0, 0],
            textColor: [0, 0, 0],
            cellWidth: 'auto'
        }
    });

    // doc.save(exportFileName + '.pdf');
    doc.output('dataurlnewwindow');
    // let dataSrc = doc.output("datauristring");
    // let win = window.open("", "myWindow");
    // win.document.write('<html><head><title>openSIS Student Information System</title><link rel="shortcut icon" href="../favicon.ico"></head><body><iframe src="' + dataSrc + '" style="min-height:100vh;width:100%" frameborder="0"></iframe></body></html>');
}