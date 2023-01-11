const dateAnnivaisaire1 = Number(prompt("entrez la premiere annee d'anniversaire"));
const dateAnnivaisaire2 = Number(prompt("entrez la deuxieme annee d'anniversaire"));

if (dateAnnivaisaire1 < dateAnnivaisaire2) {

  const ageDifference = dateAnnivaisaire2 - dateAnnivaisaire1;
  const halfAge = ageDifference * 2;
  const halfAgeYear = dateAnnivaisaire1 + halfAge;
  console.log(`Le plus jeune a exactement la moitié de l'âge du plus âgée en ${halfAgeYear}`);
} else if (dateAnnivaisaire2 < dateAnnivaisaire1) {
  
  const ageDifference = dateAnnivaisaire1 - dateAnnivaisaire2;
  const halfAge = ageDifference * 2;
  const halfAgeYear = dateAnnivaisaire2 + halfAge;
  console.log(`Le plus jeune a exactement la moitié de l'âge du plus âgée en ${halfAgeYear}`);
} else {
  
  console.log(`Les personnes ont le même âge`);
}