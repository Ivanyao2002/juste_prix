// Etape 1 - Sélectionner nos éléments
let input = document.querySelector('#prix');
let error = document.querySelector('small');
let form = document.querySelector('#formulaire');
let instructions = document.querySelector('#instructions');

// Etape 2 - Cacher l'erreur
error.style.display = 'none';// ou error.hidden = true;
// Etape 3 - Générer un nombre aléatoire
let nombreAleatoire = Math.floor(Math.random() * 1001); //Recupère l'entier entre 0 et 1001
let coup = 0;
let nombreChoisi;

// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
input.addEventListener('keyup', () => {
    if (isNaN(input.value)){
        error.style.display = 'block';
    }
    else{
        error.style.display = 'none';
    }
})

// Etape 5 - Agir à l'envoi du formulaire
form.addEventListener('submit', (e) => {
    e.preventDefault(); //On annule l'evenement par defaut des navigateur sur l'evenement submit
    if (isNaN(input.value) || input.value === ''){
        input.style.borderColor = 'red';
    }else{
        coup++;
        input.style.borderColor = 'silver';
        nombreChoisi = input.value;
        input.value = '';
        verifier(nombreChoisi);
    }
})
// Etape 6 - Créer la fonction vérifier
function verifier(nbre){
    let p = document.createElement('div');
    if (nbre < nombreAleatoire){
        p.innerHTML = '#'+ coup + '(' + nbre + ')' +  'C\'est plus';
        // p.classList.add('.instruction');
        p.className = 'instruction  plus';
    }else if (nbre > nombreAleatoire){
        p.innerHTML = '#' + coup + '(' + nbre + ')' +  'C\'est moins';
        // p.classList.add('.instruction');
        p.className = 'instruction  moins';
    }else{
        p.innerHTML = '#'+ coup + '(' + nbre + ')' +  'Félicitation vous avez trouvé le juste prix.';
        // p.classList.add('.instruction');
        p.className = 'instruction  fini';
        input.disabled = true;
    }

    instructions.prepend(p);
}