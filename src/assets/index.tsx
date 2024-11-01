// icons
import SideMenuIcon from "./SideMenu.icon";
import ArrowIcon from "./Arrow.icon";
import ArrowTabs from "./ArrowTabs.icon";
import ArrowDiagonal from "./ArrowDiagonal.icon";
import AnchorIcon from "./Anchor.icon";
import AudioOnIcon from "./AudioOn.icon";
import AudioOffIcon from "./AudioOff.icon";
import AudioPlayIcon from "./AudioPlay.icon";
import AudioPauseIcon from "./AudioPause.icon";

const imageUrls = {
  AlexandreLopes: "https://www.escritasomimagem.com/images/AlexandreLopes.png",
  ArthurMouraCampos:
    "https://www.escritasomimagem.com/images/ArthurMouraCampos.png",
  AsCasasDeDentro:
    "https://www.escritasomimagem.com/images/AsCasasDeDentro.png",
  CorteVivo: "https://www.escritasomimagem.com/images/CorteVivo.png",
  Febril: "https://www.escritasomimagem.com/images/Febril.png",
  MarceloPerillo: "https://www.escritasomimagem.com/images/MarceloPerillo.png",
  MovimentoTexto: "https://www.escritasomimagem.com/images/MovimentoTexto.png",
  Naturamovimento:
    "https://www.escritasomimagem.com/images/Naturamovimento.png",
  Obituario: "https://www.escritasomimagem.com/images/Obituario.png",
  Palavrada: "https://www.escritasomimagem.com/images/Palavrada.png",
  RafaelBaldam: "https://www.escritasomimagem.com/images/RafaelBaldam.png",
  Rodagira: "https://www.escritasomimagem.com/images/Rodagira.png",
  WelingtonDias: "https://www.escritasomimagem.com/images/WelingtonDias.png",
  BackgroundSound:
    "https://www.escritasomimagem.com/videos/background-sound.mp4",
  FlaviaLobato: "https://www.escritasomimagem.com/images/FlaviaLobato.png",
  MarinaMarcon: "https://www.escritasomimagem.com/images/MarinaMarcon.png",
  HelenaSifuentes:
    "https://www.escritasomimagem.com/images/HelenaSifuentes.png",
  PUCMinas: "https://www.escritasomimagem.com/images/PUCMinas.png",
  AnaVitoriaRocha:
    "https://www.escritasomimagem.com/images/AnaVitoriaRocha.png",
  AntônioPereira: "https://www.escritasomimagem.com/images/AntonioPereira.png",
  EduardaGama: "https://www.escritasomimagem.com/images/EduardaGama.png",
  HelenaFelix: "https://www.escritasomimagem.com/images/HelenaFelix.png",
  Iasmin: "https://www.escritasomimagem.com/images/Iasmin.png",
  IsabelaJordão: "https://www.escritasomimagem.com/images/IsabelaJordao.png",
  MariaEduardaMelo:
    "https://www.escritasomimagem.com/images/MariaEduardaMelo.png",
  apoiadores: "https://www.escritasomimagem.com/images/apoiadores.png",
  organizadores: "https://www.escritasomimagem.com/images/organizadores.png",
  Background: "https://www.escritasomimagem.com/images/Background.png",
  BackgroundFilm: "https://www.escritasomimagem.com/images/Background-film.png",
  Evento1: "https://www.escritasomimagem.com/images/Evento1.png",
  Evento2: "https://www.escritasomimagem.com/images/Evento2.png",
  banner_logo: "https://www.escritasomimagem.com/images/banner-logo.png",
  facebook: "https://www.escritasomimagem.com/images/facebook.png",
  instagram: "https://www.escritasomimagem.com/images/instagram.png",
  youtube: "https://www.escritasomimagem.com/images/youtube.png",
  gmail: "https://www.escritasomimagem.com/images/gmail.png",
  Eckart: "https://www.escritasomimagem.com/images/Eckart.png",
  Fernando: "https://www.escritasomimagem.com/images/Fernando.png",
  HernanUlm: "https://www.escritasomimagem.com/images/HernanUlm.png",
  JamesCisneros: "https://www.escritasomimagem.com/images/JamesCisneros.png",
  RicardoAleixo: "https://www.escritasomimagem.com/images/RicardoAleixo.png",
  MarciaAberx: "https://www.escritasomimagem.com/images/MarciaAberx.png",
  MarioCamara: "https://www.escritasomimagem.com/images/MarioCamara.png",
  Osvaldo: "https://www.escritasomimagem.com/images/Osvaldo.png",
  VeraFollain: "https://www.escritasomimagem.com/images/VeraFollain.png",
  Veronica: "https://www.escritasomimagem.com/images/Veronica.png",
  MaterialidadeVideo:
    "https://www.escritasomimagem.com/videos/materialidades.mp4",
  BannerPrimaryVideo:
    "https://www.escritasomimagem.com/videos/banner-primary-video.mp4",
  IrinaRajewsky: "https://www.escritasomimagem.com/images/IrinaRajewsky.png",
  ClausCluver: "https://www.escritasomimagem.com/images/ClausCluver.png",
  EduardoKacSolange:
    "https://www.escritasomimagem.com/images/EduardoKacSolange.png",
  WalterMiriamThais:
    "https://www.escritasomimagem.com/images/WalterMiriamThais.png",
  JorgenBruhn: "https://www.escritasomimagem.com/images/JorgenBruhn.png",
  LaurenWingarden:
    "https://www.escritasomimagem.com/images/LaurenWingarden.png",
  EBOOK_1: "https://www.escritasomimagem.com/images/EBOOK_1.png",
  EBOOK_2: "https://www.escritasomimagem.com/images/EBOOK_2.png",
  EBOOK_3: "https://www.escritasomimagem.com/images/EBOOK_3.png",
  AlexMartoni: "https://www.escritasomimagem.com/images/AlexMartoni.png",
  CamilaFigueiredo:
    "https://www.escritasomimagem.com/images/CamilaFigueiredo.png",
  ClaraMatheus: "https://www.escritasomimagem.com/images/ClaraMatheus.png",
  ElianaLourenco: "https://www.escritasomimagem.com/images/ElianaLourenco.png",
  MarcioVasconcellos:
    "https://www.escritasomimagem.com/images/MarcioVasconcellos.png",
  MiriamPaiva: "https://www.escritasomimagem.com/images/MiriamPaiva.png",
  RaquelBeatriz: "https://www.escritasomimagem.com/images/RaquelBeatriz.png",
  SandraMaria: "https://www.escritasomimagem.com/images/SandraMaria.png",
  ThaisFlores: "https://www.escritasomimagem.com/images/ThaisFlores.png",
  CeciliaNazare: "https://www.escritasomimagem.com/images/CeciliaNazare.png",
  JoicySilva: "https://www.escritasomimagem.com/images/JoicySilva.png",
  BarbaraVitoria: "https://www.escritasomimagem.com/images/BarbaraVitoria.png",
  BrunaGoncalves: "https://www.escritasomimagem.com/images/BrunaGoncalves.png",
  JacquelineAlves:
    "https://www.escritasomimagem.com/images/JacquelineAlves.png",
  TassianaCalsavara:
    "https://www.escritasomimagem.com/images/TassianaCalsavara.png",
  GuilhermeFoscolo:
    "https://www.escritasomimagem.com/images/GuilhermeFoscolo.png",
  MarceloLaCarretta:
    "https://www.escritasomimagem.com/images/MarceloLaCarretta.png",
  AnaClaudia: "https://www.escritasomimagem.com/images/AnaClaudia.png",
  AnaElisaRibeiro:
    "https://www.escritasomimagem.com/images/AnaElisaRibeiro.png",
  JosianeMilitao: "https://www.escritasomimagem.com/images/JosianeMilitao.png",
  SilviaMaria: "https://www.escritasomimagem.com/images/SilviaMaria.png",
  RicardoOliveira:
    "https://www.escritasomimagem.com/images/RicardoOliveira.png",
  AnaLea: "https://www.escritasomimagem.com/images/AnaLea.png",
  CarolinaFedatto:
    "https://www.escritasomimagem.com/images/CarolinaFedatto.png",
  MINICURSO_1: "https://www.escritasomimagem.com/images/MINICURSO_1.png",
  MINICURSO_2: "https://www.escritasomimagem.com/images/MINICURSO_2.png",
  MINICURSO_3: "https://www.escritasomimagem.com/images/MINICURSO_3.png",
  MINICURSO_4: "https://www.escritasomimagem.com/images/MINICURSO_4.png",
  MINICURSO_5: "https://www.escritasomimagem.com/images/MINICURSO_5.png",
  CaioCostaCampos:
    "https://www.escritasomimagem.com/images/CaioCostaCampos.png",
  EduardoCampolina:
    "https://www.escritasomimagem.com/images/EduardoCampolina.png",
  FernandoRocha: "https://www.escritasomimagem.com/images/FernandoRocha.png",
  CarolinaPeres: "https://www.escritasomimagem.com/images/CarolinaPeres.png",
  HelcioVaz: "https://www.escritasomimagem.com/images/HelcioVaz.png",
  RogerioVasconcelos:
    "https://www.escritasomimagem.com/images/RogerioVasconcelos.png",
  SebastianBarroso:
    "https://www.escritasomimagem.com/images/SebastianBarroso.png",
  SergioFreire: "https://www.escritasomimagem.com/images/SergioFreire.png",
  DayglaTaborda: "https://www.escritasomimagem.com/images/DayglaTaborda.png",
};

export {
  AudioPauseIcon,
  AudioPlayIcon,
  AudioOnIcon,
  AudioOffIcon,
  SideMenuIcon,
  ArrowIcon,
  ArrowTabs,
  ArrowDiagonal,
  AnchorIcon,
  imageUrls,
};
