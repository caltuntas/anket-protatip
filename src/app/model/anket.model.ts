import { AnketSorusu, SoruTipi, Secenek } from './anket-sorusu.model';

export class Anket {
  baslik: String;
  sorular: AnketSorusu[];
  constructor() {
    this.sorular = [];
    this.baslik = 'Alışveriş alışkanlıklarınız';

    const soru1 = new AnketSorusu();
    soru1.soruMetni = 'İnternetten ne sıklıkla alışveriş yaparsınız?';
    soru1.soruTipi = SoruTipi.CokluSecenekTekCevap;
    soru1.cevapSecenekleri = [];

    soru1.secenekEkle('Hergun', 'Hergün');
    soru1.secenekEkle('Haftada12', 'Haftada 1-2 defa');
    soru1.secenekEkle('15Gunde12', '15 günde 1-2 defa');
    soru1.secenekEkle('Ayda12', 'Ayda 1-2 defa');

    const soru2 = new AnketSorusu();
    soru2.soruMetni = 'Alışveriş listenizde neler olur?';
    soru2.soruTipi = SoruTipi.CokluSecenek;
    soru2.cevapSecenekleri = [];

    soru2.secenekEkle('Atistirmalik', 'Atıştırmalıklar');
    soru2.secenekEkle('Kahvaltilik', 'Kahvaltılıklar');
    soru2.secenekEkle('HazirGida', 'Hazır gıda dondurulmuş ürünler');
    soru2.secenekEkle('EtTavukBalik', 'EtTavukBalikUrunleri');


    const soru3 = new AnketSorusu();
    soru3.soruMetni = 'İndirim çekleri/kuponları kullanıyor musunuz?';
    soru3.soruTipi = SoruTipi.EvetHayir;
    soru3.cevapSecenekleri = [];

    soru3.secenekEkle('Evet', 'Evet');
    soru3.secenekEkle('Hayir', 'Hayir');


    this.sorular.push(soru1);
    this.sorular.push(soru2);
    this.sorular.push(soru3);

  }

}
