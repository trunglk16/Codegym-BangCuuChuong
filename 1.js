
var sout, i, j;
sout = "<table border-style='double' border='3' width='100%' cellspacing='0' cellpadding='3'>";
i = j = 1;
while (i <= 10) {
    sout = sout + "<tr>";
    while (j <= 10) {
        sout = sout + "<td >" + j + " x " + i + " = " + i*j + "</td>";
        j++;
    }
    sout = sout + "</tr>";
    j = 1;
    i++;
}
sout = sout + "</table>";
document.write (sout);
