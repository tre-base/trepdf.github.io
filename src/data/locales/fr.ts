import type { Article } from '../articles';

export const frenchHome = {
  fontStyles: ['Normal', 'Gras', 'Italique'],
  title: 'TrePDF | Éditeur PDF, annotations et OCR gratuits',
  description: 'Modifiez le texte et les images de vos PDF, annotez, remplissez des formulaires et reconnaissez les textes numérisés avec TrePDF. Retrouvez les polices manquantes.',
  eyebrow: 'Vos documents, plus simplement',
  headline: 'Modifiez vos PDF.',
  accent: 'Gratuitement.',
  intro: 'Modifiez du texte, annotez des pages et rendez vos documents numérisés consultables par recherche. Un espace de travail pensé pour les PDF de votre ordinateur.',
  primary: 'Obtenir TrePDF',
  secondary: 'Découvrir l’éditeur',
  platforms: 'Prévu pour macOS, Windows et Linux',
  availability: 'Les liens de téléchargement seront bientôt disponibles.',
  screenshot: 'TrePDF modifiant un exemple de PDF avec une sélection de texte et les réglages de police',
  screenshotCaption: 'Un espace familier. Un document à votre image.',
  benefits: ['Traitement local des documents', 'Annuler et rétablir à tout moment', 'Enregistrez une copie, gardez l’original'],
  featureTitle: 'De la première lecture\nà la dernière correction.',
  featureIntro: 'Vos outils habituels, réunis dans un éditeur PDF de bureau. Commencez par une petite correction. Poursuivez avec tout le document.',
  features: [
    { id: 'editor', icon: 'text', title: 'Trouvez les mots justes.', text: 'Modifiez les textes pris en charge, ajustez les polices et les couleurs, et ajoutez des images. Téléchargez automatiquement les polices manquantes disponibles après confirmation.', link: 'Découvrir la modification de PDF' },
    { id: 'forms', icon: 'forms', title: 'Créez des formulaires PDF à remplir.', text: 'Ajoutez des champs de texte, des cases à cocher et des listes de choix. Disposez les champs, puis enregistrez un PDF à remplir.', link: 'Découvrir la création de formulaires' },
    { id: 'ocr', icon: 'scan', title: 'Retrouvez les mots d’un document numérisé.', text: 'Créez un PDF consultable par recherche à partir de documents numérisés en anglais ou en vietnamien, en conservant l’image de la page.', link: 'Découvrir l’OCR PDF' },
  ],
  fontEyebrow: 'Moins de temps à chercher des polices',
  fontTitle: 'La bonne police.\nUn coup de main pour la trouver.',
  fontText: 'Une police manquante ne devrait pas bloquer une petite correction. TrePDF détecte les polices absentes et vous aide à télécharger les styles correspondants disponibles avant de modifier le texte.',
  fontSteps: [['Détecter', 'Identifiez les polices nécessaires au texte.'], ['Confirmer', 'Choisissez de les télécharger ou non.'], ['Continuer', 'Modifiez le texte avec la police correspondante disponible.']],
  fontNote: 'Le téléchargement de polices nécessite une connexion internet. Vous pouvez utiliser une police de remplacement compatible lorsqu’elle est disponible. Certaines polices peuvent être indisponibles au téléchargement.',
  fontLink: 'Comprendre le téléchargement automatique de polices',
  fontSampleLabel: 'Préservez le caractère de votre document.',
  toolkitTitle: 'Tout pour vos PDF au quotidien.',
  toolkitIntro: 'Apportez les dernières retouches dans le même espace de travail.',
  tools: [
    { icon: 'pages', title: 'Mettez les pages dans l’ordre', text: 'Fusionnez des fichiers PDF, insérez une page blanche ou supprimez une page inutile.' },
    { icon: 'signature', title: 'Formulaires et signatures', text: 'Remplissez les formulaires pris en charge et placez une signature dessinée, saisie au clavier ou importée depuis une image.' },
    { icon: 'shield', title: 'Préparez le partage', text: 'Ajoutez des en-têtes, des numéros de page et des filigranes, ou protégez un PDF compatible avec un mot de passe d’ouverture.' },
    { icon: 'table', title: 'Sortez les tableaux du PDF', text: 'Exportez vers Excel les tableaux textuels à bordures pris en charge, y compris les cellules fusionnées rectangulaires.' },
  ],
  localTitle: 'Vos documents.\nVotre espace de travail.',
  localText: 'TrePDF traite les documents PDF sur votre ordinateur. Lisez, modifiez et utilisez l’OCR pris en charge sans envoyer votre PDF à un éditeur en ligne.',
  localNote: 'Le téléchargement facultatif de polices se connecte aux fournisseurs de polices. Découvrez le fonctionnement de ces connexions dans notre présentation de la confidentialité.',
  localLink: 'Comment TrePDF traite vos fichiers',
  guideTitle: 'Un bon point de départ.',
  guideIntro: 'Des guides pratiques pour votre premier document et les suivants.',
  guideLink: 'Tous les guides',
  guideCards: [['getting-started', 'Premiers pas', 'Ouvrir, modifier, enregistrer.'], ['fonts', 'Utiliser les polices', 'Une police manque ? Commencez ici.'], ['ocr', 'Reconnaître le texte', 'Recherchez dans un document numérisé.']],
  faqTitle: 'Quelques points à connaître.',
  faqs: [
    ['TrePDF est-il un éditeur PDF en ligne ?', 'TrePDF est un éditeur PDF de bureau. Ce site présente l’application et ses guides. Vos documents PDF sont ouverts et traités dans l’application sur votre ordinateur.'],
    ['Puis-je modifier le texte existant d’un PDF ?', 'Oui, lorsque le texte source et sa police sont pris en charge. Vous pouvez modifier le texte et sa mise en forme, ajouter du contenu et enregistrer une copie. Les mises en page complexes, les contenus protégés et certaines structures de texte ou de police non prises en charge peuvent limiter les modifications.'],
    ['TrePDF télécharge-t-il automatiquement les polices ?', 'Il détecte les polices manquantes et vous demande confirmation avant de télécharger les styles correspondants disponibles. Vous pouvez choisir une police de remplacement compatible si elle est disponible. Le téléchargement d’une police nécessite une connexion internet.'],
    ['L’OCR peut-il transformer mon document numérisé en texte modifiable ?', 'L’OCR actuel ajoute une couche de texte invisible pour la recherche et la copie. Il prend en charge l’anglais et le vietnamien et conserve l’image de la page d’origine. Il ne transforme pas le document numérisé en texte modifiable avec l’outil de modification du texte.'],
    ['Où télécharger TrePDF ?', 'Les liens de téléchargement sont en préparation. La page de téléchargement présente les plateformes prévues et proposera les fichiers d’installation dès leur publication.'],
  ],
  closingTitle: 'Moins de temps sur le fichier.\nPlus de temps pour votre travail.',
  closingText: 'Découvrez les outils. Apprenez les gestes utiles. Simplifiez votre prochain PDF.',
  closingLink: 'Lire le guide de prise en main',
};

export const frenchArticles: Article[] = [
  {
    id: 'editor',
    lang: 'fr',
    slug: 'fr/fonctionnalites/modifier-pdf',
    title: 'Modifier le texte, les images et les polices d’un PDF | TrePDF',
    description: 'Modifiez le texte et les images PDF pris en charge avec TrePDF. Changez les polices, téléchargez les styles manquants et organisez les pages avant d’enregistrer.',
    heading: 'Modifiez votre PDF, directement sur la page.',
    intro: 'Corrigez le texte, ajoutez des images et organisez les pages. Gardez la maîtrise de chaque modification avant d’enregistrer.',
    sections: [
      {
        heading: 'Modifiez le texte directement',
        paragraphs: [
          'Sélectionnez un texte pris en charge pour modifier son contenu, sa police, sa taille ou sa couleur. Ajoutez une zone de texte pour insérer du contenu.',
        ],
      },
      {
        heading: 'Une police manque ? Un coup de main.',
        paragraphs: [
          'TrePDF détecte automatiquement les polices manquantes. Confirmez pour télécharger les styles correspondants disponibles sur internet, ou choisissez une autre police prise en charge.',
        ],
      },
      {
        heading: 'Organisez les images et les pages',
        paragraphs: [
          'Ajoutez des images, ou déplacez et redimensionnez les images existantes prises en charge. Insérez des pages blanches, supprimez des pages ou fusionnez des PDF dans un document distinct.',
        ],
      },
      {
        heading: 'Annulez, vérifiez, puis enregistrez',
        paragraphs: [
          'Annulez ou rétablissez vos actions pendant la modification. Les changements restent des brouillons jusqu’à l’enregistrement ; utilisez Enregistrer sous pour créer une copie et conserver l’original.',
        ],
      },
    ],
    related: ['fonts', 'annotations', 'getting-started'],
  },
  {
    id: 'ocr',
    lang: 'fr',
    slug: 'fr/fonctionnalites/ocr-pdf',
    title: 'OCR PDF pour les documents en anglais et en vietnamien | TrePDF',
    description: 'Rendez vos PDF numérisés consultables par recherche avec l’OCR local anglais et vietnamien de TrePDF. Conservez les images des pages dans un PDF distinct.',
    heading: 'Retrouvez les mots dans vos PDF numérisés.',
    intro: 'Retrouvez un nom, copiez un passage ou recherchez dans un rapport numérisé. TrePDF reconnaît localement l’anglais et le vietnamien et crée un PDF distinct contenant du texte consultable par recherche.',
    sections: [
      {
        heading: 'Conservez la page que vous avez numérisée',
        paragraphs: [
          'Les images des pages, les illustrations et les tampons d’origine restent intacts. L’OCR ajoute une couche de texte invisible pour rechercher et sélectionner des mots, tandis que la page visible reste l’image numérisée. La reconnaissance s’effectue sur votre ordinateur, sans envoyer le PDF en ligne.',
        ],
      },
      {
        heading: 'Créez un PDF consultable par recherche',
        items: [
          'Ouvrez votre PDF, enregistrez les modifications en cours, puis choisissez Convertir → Reconnaître le texte (OCR).',
          'Sélectionnez l’anglais ou le vietnamien, puis toutes les pages, la page actuelle ou une plage de pages.',
          'Choisissez où enregistrer le résultat distinct. Une fois terminé, il s’ouvre dans un nouvel onglet, prêt pour la recherche et la comparaison avec la source.',
        ],
      },
      {
        heading: 'Évitez les traitements répétés dans les documents mixtes',
        paragraphs: [
          'TrePDF ignore les pages qui contiennent déjà du texte et reconnaît les pages numérisées qui en ont besoin. Une couche de texte existante reste inchangée : l’OCR ne peut donc pas remplacer une reconnaissance inexacte déjà présente dans le PDF.',
        ],
      },
      {
        heading: 'Vérifiez les mots qui comptent',
        paragraphs: [
          'Les documents numérisés nets et bien droits donnent de meilleurs résultats. Recherchez quelques mots visibles, puis vérifiez les noms, les dates, les nombres et les accents vietnamiens avant de copier le texte. L’OCR permet la recherche dans le document numérisé ; l’image elle-même ne devient pas du texte modifiable.',
        ],
      },
    ],
    related: ['getting-started', 'annotations', 'editor'],
  },
  {
    id: 'annotations',
    lang: 'fr',
    slug: 'fr/fonctionnalites/annoter-pdf',
    title: 'Annoter un PDF : surlignage, notes et commentaires | TrePDF',
    description: 'Révisez vos PDF avec surlignages, notes, texte libre, dessins et réponses aux commentaires. Enregistrez vos annotations dans le PDF avec TrePDF.',
    heading: 'Placez vos remarques au bon endroit.',
    intro: 'Surlignez la phrase à discuter, ajoutez une note près d’un détail ou dessinez une correction. TrePDF garde les annotations PDF près du contenu pour rendre vos remarques plus faciles à suivre.',
    sections: [
      {
        heading: 'Surlignez les mots, pas seulement un rectangle',
        paragraphs: [
          'Utilisez les outils Surligner, Souligner, Barrer ou Soulignement ondulé pour marquer des passages. Sur les textes horizontaux pris en charge, TrePDF suit les mots sélectionnés et place les marques le long des lignes. La personne qui relit sait ainsi précisément quelle phrase mérite son attention.',
          'Ces outils de marquage nécessitent du texte exploitable sur la page. Un document numérisé contenant uniquement une image ne fournit pas la position des mots. Exécutez d’abord l’OCR pour permettre la recherche et le surlignage suivant le texte sur un document numérisé pris en charge. Vous pouvez toujours utiliser les notes et les outils de dessin sans couche de texte.',
        ],
      },
      {
        heading: 'Choisissez le type d’annotation adapté',
        items: [
          'Les notes conservent les explications longues dans le panneau des commentaires et laissent un petit repère sur la page.',
          'L’outil Texte libre place une zone de texte visible sur la page pour un libellé ou une consigne courte.',
          'Les rectangles, cercles, lignes, polygones et dessins à main levée attirent l’attention sur les détails visuels.',
          'Les tampons ajoutent au document une mention de révision visible, comme Approuvé ou Pour commentaires.',
        ],
      },
      {
        heading: 'Gardez les échanges avec le document',
        paragraphs: [
          'Ouvrez le panneau des commentaires pour lire les notes et y répondre. Les fiches de commentaire affichent les informations disponibles sur l’auteur et la date, ce qui facilite le suivi des révisions. Vous pouvez aussi définir un statut de révision ou cocher un commentaire à mesure que vous traitez les remarques.',
          'Les annotations existantes prises en charge peuvent être sélectionnées et modifiées avec les nouvelles. Certaines annotations importées comportent un contenu protégé ou une apparence que TrePDF ne peut pas modifier en toute sécurité. Elles restent consultables lorsque leur lecture est prise en charge, sans imposer de réécriture de leur apparence.',
        ],
      },
      {
        heading: 'Enregistrez une copie de révision',
        paragraphs: [
          'Les nouvelles annotations et les modifications de commentaires prises en charge restent des brouillons jusqu’à l’enregistrement. Annuler et Rétablir permettent de corriger une marque mal placée ou de revenir sur une note. Utilisez Enregistrer sous pour créer une copie de révision avec un nom distinct et conserver la source intacte.',
          'TrePDF enregistre les annotations dans le PDF, au lieu de garder les remarques uniquement dans l’application. Après l’enregistrement, rouvrez le fichier et vérifiez le résultat avant de l’envoyer. D’autres lecteurs PDF peuvent présenter les panneaux de commentaires et les statuts de révision différemment ; vérifiez le lecteur du destinataire lorsqu’un mode de révision particulier est nécessaire.',
          'Les annotations permettent de communiquer des remarques sans modifier le texte d’origine de la page. Pour effectuer la correction elle-même, passez à Modifier et mettez à jour un objet texte pris en charge.',
        ],
      },
    ],
    related: ['ocr', 'editor', 'getting-started'],
  },
  {
    id: 'getting-started',
    lang: 'fr',
    slug: 'fr/guides/premiers-pas',
    title: 'Premiers pas avec l’éditeur PDF de bureau TrePDF',
    description: 'Découvrez TrePDF : ouvrez un PDF, lisez, recherchez, modifiez le contenu pris en charge, annotez, remplissez des formulaires et enregistrez une copie.',
    heading: 'Votre premier document dans TrePDF.',
    intro: 'Commencez par un PDF que vous connaissez bien. Ce guide court vous accompagne de l’ouverture du fichier à la vérification et à l’enregistrement de vos premières modifications, avec quelques conseils pour les documents numérisés et les formulaires.',
    sections: [
      {
        heading: '1. Ouvrez le document et prenez vos repères',
        paragraphs: [
          'Utilisez Ouvrir pour choisir un PDF local, ou faites glisser un fichier dans l’application. TrePDF ouvre les documents dans des onglets distincts, pour garder une source et une référence à portée de main dans votre espace de travail. Un fichier protégé nécessite son mot de passe d’ouverture.',
          'Utilisez les miniatures pour passer d’une page à l’autre, réglez le zoom pour lire confortablement et choisissez l’affichage adapté au document. Le défilement continu facilite la lecture ; les pages en vis-à-vis conviennent aux publications conçues en doubles pages. La vue fractionnée permet de consulter une autre partie du même document pendant votre travail.',
        ],
      },
      {
        heading: '2. Choisissez l’outil adapté à votre tâche',
        items: [
          'Affichage : lisez les pages, recherchez dans le texte enregistré, sélectionnez un passage et copiez-le lorsque le document autorise la copie.',
          'Modifier : mettez à jour le texte et les images pris en charge, ajoutez du contenu et organisez les pages.',
          'Commentaire : surlignez des passages, ajoutez des notes, dessinez des marques et répondez aux remarques.',
          'Formulaires : créez les champs de formulaire pris en charge. Utilisez la vue de lecture normale pour remplir les champs interactifs d’un formulaire existant.',
          'Convertir : reconnaissez le texte des documents numérisés ou exportez vers Excel les tableaux textuels à bordures pris en charge.',
        ],
      },
      {
        heading: '3. Apportez une petite modification',
        paragraphs: [
          'Essayez de corriger un mot dans un objet texte modifiable ou d’ajouter une note. Si une police nécessaire est absente, suivez le message concernant les polices et examinez les options de téléchargement ou de remplacement proposées. Vérifiez la ligne après modification, surtout si vous avez changé de police ou allongé le texte.',
          'Un document numérisé peut ressembler à du texte tout en ne contenant qu’une image. L’OCR peut ajouter une couche consultable par recherche aux documents en anglais et en vietnamien. Il crée un PDF distinct et ne transforme pas la page numérisée en paragraphes modifiables. L’export Excel actuel nécessite des tableaux textuels avec une grille de bordures visibles et fermées.',
        ],
      },
      {
        heading: '4. Vérifiez et enregistrez une copie',
        paragraphs: [
          'Utilisez Annuler et Rétablir pour les modifications de brouillon prises en charge. Enregistrer écrit les changements acceptés ; Enregistrer sous crée un fichier distinct. Pour votre premier document, une copie séparée facilite la comparaison avec l’original. Rouvrez le fichier enregistré pour vérifier le texte modifié, les images, les commentaires et les valeurs des formulaires.',
          'Certaines opérations, dont l’OCR, nécessitent une source enregistrée sans modification en attente. Enregistrez ou abandonnez les changements en cours avant de les lancer. Lorsque vous placez une signature visible, gardez à l’esprit qu’il s’agit d’une image de votre signature ou de vos initiales : les outils de signature visible de TrePDF ne créent ni ne valident de signature numérique fondée sur un certificat.',
        ],
      },
    ],
    related: ['editor', 'fonts', 'ocr'],
  },
  {
    id: 'fonts',
    lang: 'fr',
    slug: 'fr/guides/telechargement-automatique-polices',
    title: 'Polices PDF manquantes : téléchargement automatique | TrePDF',
    description: 'Découvrez comment TrePDF détecte les polices manquantes, télécharge les styles disponibles avec votre accord et importe des polices locales pour modifier les PDF.',
    heading: 'Une police manquante ne doit pas arrêter votre correction.',
    intro: 'TrePDF détecte les polices manquantes pendant la modification des textes PDF pris en charge et vous aide à obtenir les styles disponibles. Vous approuvez le téléchargement avant son lancement, puis vérifiez le texte modifié dans la page.',
    sections: [
      {
        heading: 'Pourquoi une police peut s’afficher sans permettre la modification',
        paragraphs: [
          'Un PDF peut contenir assez d’informations sur une police pour afficher la page existante, sans fournir une police complète pour écrire du nouveau texte. La police d’origine peut aussi être absente de votre ordinateur. Afficher un paragraphe et le modifier peuvent donc nécessiter des ressources de police différentes.',
          'Cela se remarque souvent lorsque vous ajoutez un nom ou changez une phrase : les nouveaux caractères ont besoin d’une variante de police utilisable. Une police de remplacement peut avoir des caractères plus larges ou plus étroits et modifier la longueur d’une ligne. Choisir la famille et le style correspondants aide à limiter ces différences.',
        ],
      },
      {
        heading: 'Suivez le message concernant les polices',
        items: [
          'Sélectionnez le texte pris en charge que vous souhaitez modifier. Si une police nécessaire est indisponible, consultez le message de TrePDF.',
          'Vérifiez la famille et les styles disponibles. Normal, Gras, Italique et Gras italique sont des variantes distinctes, qui ne sont pas toujours toutes disponibles.',
          'Confirmez le téléchargement lorsqu’une police adaptée est proposée. Une connexion internet est nécessaire pour obtenir les fichiers de police.',
          'Reprenez votre modification et vérifiez la forme des caractères, les accents, les fins de ligne et l’espacement avant d’enregistrer.',
        ],
      },
      {
        heading: 'Importez votre propre police si vous la possédez',
        paragraphs: [
          'Réglages > Police permet d’importer des fichiers TTF ou OTF locaux pour une famille de polices, avec un fichier distinct pour chaque style dont vous disposez. L’aperçu vous aide à examiner la variante choisie avant de l’ajouter. Utilisez des fichiers de police que vous êtes autorisé à utiliser et choisissez un style qui correspond réellement au fichier.',
          'Les polices importées et téléchargées deviennent disponibles dans les outils de police de l’application. Les styles manquants restent indisponibles : l’application ne considère pas qu’elle possède une variante exacte si celle-ci manque. Si une police ne contient pas les caractères de votre texte, choisissez une autre police adaptée et vérifiez le résultat.',
        ],
      },
      {
        heading: 'Ce que le téléchargement automatique permet, et ses limites',
        paragraphs: [
          'La détection automatique simplifie l’identification d’une police manquante, mais sa disponibilité dépend du fournisseur. Elle ne garantit pas l’accès à toutes les polices commerciales ou personnalisées. Une police téléchargée portant un nom similaire peut aussi différer de la version utilisée pour créer le document.',
          'Pour une petite correction, vérifiez toute la ligne modifiée. Pour un remplacement plus long, vérifiez également les retours à la ligne et la zone de texte. Enregistrez une copie distincte lorsque la mise en page d’origine est importante. Si la bonne police est indisponible, ajouter un commentaire peut être plus approprié que modifier un document source soigneusement composé.',
        ],
      },
    ],
    related: ['editor', 'getting-started', 'privacy'],
  },
  {
    id: 'privacy',
    lang: 'fr',
    slug: 'fr/confidentialite',
    title: 'Confidentialité : documents, polices et site web | TrePDF',
    description: 'Comment TrePDF traite les PDF locaux, l’OCR, les téléchargements facultatifs de polices et ce site. Découvrez quand une connexion réseau intervient.',
    heading: 'Comprenez où passent vos documents.',
    intro: 'TrePDF est une application de bureau qui utilise les fichiers de votre ordinateur. Cette page distingue le traitement local des documents, le téléchargement facultatif de polices et la visite de ce site web.',
    sections: [
      {
        heading: 'Travaillez sur les PDF de votre ordinateur',
        paragraphs: [
          'L’ouverture, l’affichage, la modification et l’enregistrement des contenus PDF pris en charge s’effectuent localement. L’OCR reconnaît également le texte sur votre ordinateur et écrit le résultat dans un fichier distinct. Ces opérations ne nécessitent pas d’envoyer votre document à un service de traitement cloud de TrePDF.',
          'Vous choisissez où enregistrer vos fichiers. Si cet emplacement est géré par un disque cloud, un outil de sauvegarde ou un dossier partagé, ce service peut copier ou synchroniser vos fichiers selon ses propres réglages. Tenez compte de ces réglages lorsque vous travaillez sur des documents confidentiels.',
        ],
      },
      {
        heading: 'Le téléchargement de polices utilise une connexion réseau',
        paragraphs: [
          'Lorsque vous approuvez un téléchargement de police, TrePDF contacte le fournisseur concerné pour obtenir les fichiers demandés. Le fournisseur reçoit les informations nécessaires à cette requête réseau, comme la ressource demandée et votre adresse réseau. Le téléchargement d’une police est une opération distincte de l’envoi d’un PDF.',
          'Les polices importées depuis des fichiers TTF ou OTF locaux et celles téléchargées dans l’application sont conservées localement pour les outils de police. Les fournisseurs de polices appliquent leurs propres conditions et pratiques de confidentialité.',
        ],
      },
      {
        heading: 'Lorsque vous visitez ce site',
        paragraphs: [
          'Ce site présente le produit et ses guides. Il ne comporte ni formulaire d’envoi de documents, ni inscription à un compte, ni scripts publicitaires, ni outils d’analyse d’audience ajoutés par TrePDF. Ses styles, polices et images sont servis avec le site.',
          'Le site est hébergé sur GitHub Pages. Son hébergement implique des requêtes vers l’infrastructure GitHub, et GitHub peut traiter les informations techniques liées à ces requêtes selon sa déclaration de confidentialité. Un lien externe vous mène vers un service qui applique ses propres pratiques de confidentialité.',
        ],
      },
    ],
    related: ['fonts', 'ocr', 'getting-started'],
  },
  {
    id: 'changelog',
    lang: 'fr',
    slug: 'fr/nouveautes',
    title: 'Nouveautés et notes de version de TrePDF',
    description: 'Suivez le développement de TrePDF et ses futures notes de version. Les liens d’installation, prérequis vérifiés et détails des versions seront ajoutés ici.',
    heading: 'L’actualité du développement de TrePDF.',
    intro: 'TrePDF est actuellement en version de développement. Ce site ne propose pas encore de liens de téléchargement publics ni d’historique public des versions.',
    sections: [
      {
        heading: 'Les possibilités de la version de développement actuelle',
        items: [
          'Lecture de PDF sur ordinateur, recherche, sélection de texte, miniatures et onglets pour plusieurs documents.',
          'Modification de textes et d’images pris en charge, aide pour les polices manquantes, outils de page et Enregistrer sous.',
          'Commentaires, surlignages de texte, annotations dessinées, formulaires interactifs et signatures visibles.',
          'OCR local en anglais et en vietnamien créant un PDF distinct consultable par recherche.',
        ],
        paragraphs: ['Ces pages décrivent les possibilités actuelles du projet. Elles ne constituent ni une annonce de sortie ni la promesse que chaque fonction prend en charge tous les PDF. Les guides des fonctionnalités expliquent les limites concernées.'],
      },
      {
        heading: 'Les informations disponibles lors de la publication',
        paragraphs: [
          'Chaque version publiée indiquera son numéro, sa date de sortie, les changements importants, les limites connues et les liens vers les fichiers d’installation disponibles. Les informations de plateforme et d’architecture figureront à côté du téléchargement correspondant.',
          'Tant que ces fichiers d’installation ne sont pas prêts, les boutons de la page de téléchargement restent désactivés. Il n’est pas nécessaire de créer un compte ni de laisser une adresse e-mail pour lire ces guides.',
        ],
      },
    ],
    related: ['getting-started', 'editor', 'ocr'],
  },
  {
    id: 'forms',
    lang: 'fr',
    slug: 'fr/fonctionnalites/creer-formulaire-pdf',
    title: 'Créer des formulaires PDF à remplir | TrePDF',
    description: 'Créez des formulaires PDF à remplir dans TrePDF. Ajoutez des champs de texte, cases à cocher, boutons radio et listes de sélection, puis enregistrez votre PDF.',
    heading: 'Créez un PDF que chacun peut remplir.',
    intro: 'Transformez un PDF en formulaire à remplir avec TrePDF. Ouvrez l’onglet Formulaires, placez vos champs et disposez-les directement sur la page.',
    sections: [
      {
        heading: 'Choisissez les champs nécessaires',
        paragraphs: [
          'Ajoutez des champs de texte, des cases à cocher, des boutons radio, des listes déroulantes, des zones de liste ou des champs peigne pour une saisie caractère par caractère. Les listes déroulantes permettent une seule sélection ; les zones de liste permettent plusieurs sélections.',
        ],
      },
      {
        heading: 'Disposez et ajustez les champs',
        paragraphs: [
          'Déplacez et redimensionnez les champs pour les adapter au document. Activez plusieurs lignes ou fixez une limite de caractères pour un champ de texte. Attribuez le même identifiant de groupe aux boutons radio pour permettre de choisir une seule option dans ce groupe.',
        ],
      },
      {
        heading: 'Enregistrez, puis remplissez',
        paragraphs: [
          'Enregistrez la disposition des champs dans le PDF, ou utilisez Enregistrer sous pour conserver l’original et créer un formulaire distinct. Rouvrez le PDF enregistré dans TrePDF pour saisir du texte et sélectionner les options disponibles. Vous pouvez ensuite enregistrer les valeurs du formulaire avec le document.',
        ],
      },
    ],
    related: ['getting-started', 'editor'],
  },
];
