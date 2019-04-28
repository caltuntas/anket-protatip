export enum SoruTipi {
  CokluSecenekTekCevap,
  CokluSecenek,
  EvetHayir
}

export class Secenek {
  kod: String;
  metin: String;
}

export class AnketSorusu {
  soruMetni: String;
  soruTipi: SoruTipi;
  cevapSecenekleri: Secenek[];

  secenekEkle(kod, metin) {
    const secenek = new Secenek();
    secenek.kod = kod;
    secenek.metin = metin;
    this.cevapSecenekleri.push(secenek);
  }
}
