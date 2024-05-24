let sayi = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
let rastgeleSayi = 1 + Math.round(Math.random() * 9);
alert('Sayı Bulma Oyununa Hoşgeldiniz! Devam etmek için "Tamam" butonuna basın, ardından ekrandaki sayılardan birini seçip tahminde bulunun.')

for (let i = 0; i < 3; i++) {
  let secim = Number(prompt(sayi));

  if (secim == rastgeleSayi) {
    console.log("kazandınız: " + rastgeleSayi);
    break;
  } else if (i + 1 == 3) {
    console.log(
      "Hakkınız Bitmiştir Kaybettiniz. " + "Rastgele Sayı: " + rastgeleSayi
    );
  } else {
    console.log(
      "Bir Sayı Daha Deneyebilirsiniz. Kalan Hakkınız: " + (3 - (i + 1))
    );
  }
}
