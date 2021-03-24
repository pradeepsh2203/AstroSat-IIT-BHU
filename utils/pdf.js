import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export function pdfDownload() {
    var bod = document.body;
    var HTML_Width = bod.clientWidth;
    var HTML_Height = bod.clientHeight;
    var top_left_margin = 0;
    var canvas_image_width = HTML_Width;
    var canvas_image_height = HTML_Height;

    html2canvas(bod).then(function (canvas) {
        var imgData = canvas.toDataURL("image/jpeg", 1.0);
        var pdf = new jsPDF('p', 'pt', [canvas_image_width, canvas_image_height]);
        pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin, canvas_image_width, canvas_image_height);
        pdf.save("order_summary.pdf");
    });
}