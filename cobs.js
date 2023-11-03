// Array nama-nama mahasiswa
var mahasiswaArray = 
    ["Fatma ","Nur ", "Fitriani "];

// Ambil elemen ul di HTML
var ul = document.getElementById("mahasiswa-list");

// Perulangan untuk menampilka\\n nama mahasiswa dengan nomor urut
for (var i = 0; i < mahasiswaArray.length; i++) {
    var li = document.createElement("li");
    li.textContent = (i + 1) + ". " + mahasiswaArray[i];
    ul.appendChild(li);

}
