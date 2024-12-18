var config = {
    style: 'mapbox://styles/ethoreau23/cm41e4gtw006k01s61fnpbbz9', // lien vers le style mapbox
    accessToken: 'pk.eyJ1IjoiZXRob3JlYXUyMyIsImEiOiJjbTN6cGxzZG8wano2MmpzNWMxbWtka2ZkIn0.YJRBNK-L3rkMrs8DjaJOfg', // accès mapbox
    showMarkers: false,
    markerColor: '#3FB1CE',
    inset: true,
    insetOptions: {
        markerColor: 'orange' //couleur du marquer sur la map
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    // chaque chapitre a un identfiant il est chaque fois lié a une position sur la carte avevc les coordonnées, le zoom, etc
    // toutes la partie inférieur de chaque chapitre sert simplement a indiqquer si on fait apparaitre ou non les différentes couches 
    chapters: [
        {
            id: 'chapitre-contexte',
            alignment: 'center', // Centré pour un bloc de texte plus large
            hidden: false,
            description: `
                    <div style="max-width: 100%; margin: 0 auto; font-size: 18px; line-height: 1.8; padding: 20px; color: white; border-radius: 10px; text-align: justify;">
                        <p><strong>En été 2021, la Wallonie est frappée par des inondations dévastatrices.</strong> En cause, des quantités de précipitations exceptionnelles réparties du 13 au 15 juillet.</p>
                        <p>Ces précipitations, cumulées sur plusieurs jours, ont dépassé les records historiques, causant des dégâts humains, matériels et environnementaux sans précédent.</p>
                  
                    </div>
            `,
            location: {
                center: [5.6714, 50.5619],  // Coordonnées centrées sur la zone des inondations
                zoom: 8,                   // Zoom gloabl 
                pitch: 45,                  // Inclinaison pour un effet 3D
                bearing: 0                  // Orientation de la carte
            },
            mapAnimation: 'flyTo',         // Animation de vol vers la zone
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'amenagements_communes', // exemple pour cette premiere couche, on en a pas besoin du coup on met son opaité en début de chapitre  a zero 
                    opacity: 0,
                    duration: 0                
                },
                {
                    layer: 'Risque_25',         
                    opacity: 1, // active la couche rsqiue 25 
                    duration: 0
                },
                {
                    layer: 'water',
                    opacity: 1,
                    duration: 0
                },
                {
                    layer: '9_communes',
                    opacity: 0,
                    duration: 0              
                },
                {
                    layer: 'pepinster',         
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'yvoir',
                    opacity: 0,
                    duration: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'amenagements_communes', 
                    opacity: 0,
                    duration: 0                
                },
                {
                    layer: 'Risque_25',          
                    opacity: 1,
                    duration: 0
                },
                {
                    layer: 'water',
                    opacity: 1,
                    duration: 0
                },
                {
                    layer: '9_communes',
                    opacity: 0,
                    duration: 0                
                },
                {
                    layer: 'pepinster',           
                    opacity: 1,
                    duration: 0
                },
                {
                    layer: 'yvoir',
                    opacity: 1,
                    duration: 0
                }
            ]
        },        
        {
            id: 'Liège',
            alignment: 'left',
            hidden: false,
            description: 'La province de Liège est alors extrêmement touchée, notamment ses communes de Pepinster, Spa ou encore Verviers.',
            location: {
                center: [5.8638, 50.4921], // Coordonnées entre Dinant et Pepinster
                zoom: 10,                   // Zoom sur la zone
                pitch: 45,                  // Inclinaison de la vue
                bearing: 0                  // Orientation de la carte
            },
            mapAnimation: 'flyTo',         // Animation de vol vers la zone
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'amenagements_communes',
                    opacity: 0,
                    duration: 0              
                },
                {
                    layer: 'Risque_25',          
                    opacity: 1,
                    duration: 0
                },
                {
                    layer: 'water',
                    opacity: 1,
                    duration: 0
                },
                {
                    layer: '9_communes', 
                    opacity: 0,
                    duration: 0              
                },
                {
                    layer: 'pepinster',          
                    opacity: 1,
                    duration: 0
                },
                {
                    layer: 'yvoir',
                    opacity: 0,
                    duration: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'amenagements_communes', 
                    opacity: 0,
                    duration: 0               
                },
                {
                    layer: 'Risque_25',           
                    opacity: 1,
                    duration: 0
                },
                {
                    layer: 'water',
                    opacity: 1,
                    duration: 0
                },
                {
                    layer: '9_communes', 
                    opacity: 0,
                    duration: 0               
                },
                {
                    layer: 'pepinster',          
                    opacity: 1,
                    duration: 0
                },
                {
                    layer: 'yvoir',
                    opacity: 1,
                    duration: 0
                }
            ]
                    },
        {
            id: 'namur-chapter',
            alignment: 'left',
            hidden: false,
            description: 'La province voisine, Namur, n\'est pas épargnée. Yvoir, Rochefort et Dinant seront les communes les plus impactées.',
            location: {
                center: [5.1440, 50.2560],  // Coordonnées centrées sur Conneux
                zoom: 10,
                pitch: 45,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'amenagements_communes', 
                    opacity: 0,
                    duration: 0               
                },
                {
                    layer: 'Risque_25',          
                    opacity: 1,
                    duration: 0
                },
                {
                    layer: 'water',
                    opacity: 1,
                    duration: 0
                },
                {
                    layer: '9_communes', 
                    opacity: 0,
                    duration: 0              
                },
                {
                    layer: 'pepinster',          
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'yvoir',
                    opacity: 1,
                    duration: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'amenagements_communes', 
                    opacity: 0,
                    duration: 0                
                },
                {
                    layer: 'Risque_25',           
                    opacity: 1,
                    duration: 0
                },
                {
                    layer: 'water',
                    opacity: 1,
                    duration: 0
                },
                {
                    layer: '9_communes', 
                    opacity: 1,
                    duration: 0             
                },
                {
                    layer: 'pepinster',           
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'yvoir',
                    opacity: 0,
                    duration: 0
                }
            ]
        },
        {
            id: 'wallonne-risques-chapter', // ID du chapitre
            alignment: 'center',
            hidden: false,
            description:  `
            <div style="max-width: 100%; margin: 0 auto; font-size: 16px; line-height: 1.6; text-align: justify;">
                <p><strong>Un an après les inondations, la Région Wallonne publie un rapport.</strong> L'objectif, faire le point sur la catastrophe et préparer la reconstruction.</p>
                <p>Sur base des inondations de juillet 2021 et avec l'appui de recherches scientifiques, la Région définit les neuf communes les plus à risque.  Elles bénéficieront d'un soutien accru, d'une part pour reloger et reconstruire, d'autre part pour se prémunir, à l'avenir, de telles catastrophes.</p>
                <p><strong>C'est qu'auparavant la prévention contre les inondations existait, mais, comme les événements récents ont pu le montrer, peut-être pas en suffisance.</strong></p>
                <p>Le SPW recense de nombreux aménagements ayant pour vocation la lutte contre les inondations. Il s'agit par exemple de bassins d'orages ou de zones inondables.</p>
                <p>Le nombre d'aménagements de ce genre qui sont mis en place en Wallonie est en augmentation.</p>
                <div style="margin-top: 20px; text-align: center;">
                    <img src="./amenagements_temps.png" alt="Aménagements pour la prévention des inondations" style="max-width: 100%; height: auto; border-radius: 10px;">
                    <p style="font-size: 14px; color: lightgray; margin-top: 5px;">
                        <strong>Légende :</strong> Illustration des aménagements de prévention contre les inondations (exemple : bassins d'orages).
                    </p>
                </div>
            </div>
        `,
            location: {
                center: [5.2432, 50.3804],  // Coordonnées centrées sur Havelange
                zoom: 8,                   // Zoom dézoomer pour afficher toute la région wallonne
                pitch: 15,                  // Inclinaison de la vue
                bearing: 0                  // Orientation de la carte
            },
            onChapterEnter: [
                {
                    layer: 'amenagements_communes', 
                    opacity: 0,
                    duration: 0              
                },
                {
                    layer: 'Risque_25',         
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'water',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: '9_communes', 
                    opacity: 1,
                    duration: 0               
                },
                {
                    layer: 'pepinster',          
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'yvoir',
                    opacity: 0,
                    duration: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'amenagements_communes',
                    opacity: 1,
                    duration: 1                
                },
                {
                    layer: 'Risque_25',           
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'water',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: '9_communes', 
                    opacity: 0,
                    duration: 1              
                },
                {
                    layer: 'pepinster',          
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'yvoir',
                    opacity: 0,
                    duration: 0
                }
            ]
        },
        {
            id: 'amenagements-chapter',
            alignment: 'left',
            hidden: false,
            description: `
    <div style="max-width: 100%; margin: 0 auto; font-size: 18px; line-height: 1.8; padding: 20px; color: white; border-radius: 10px; text-align: justify;">
        <p><strong>Nous avons souhaité comprendre comment ces aménagements sont répartis sur le territoire.</strong> Sur la carte ci-contre, plus une commune est rouge, plus elle dispose d'aménagements liés à la lutte contre les inondations.</p>
        <p>Il est étonnant de constater que les communes définies comme les plus à risque par le SPW (les 9 communes en vert) sont loin d'être celles qui en ont le plus.</p>
        <p>Afin de comprendre ce paradoxe et d'observer les avancées depuis 2021, nous nous sommes rendus à Rochefort. </p>
    </div>
`
,
            location: {
                center: [5.2432, 50.3804],  // Coordonnées centrées sur Havelange
                zoom: 8,                   // Zoom dézoomer pour afficher toute la région wallonne
                pitch: 15,                  // Inclinaison de la vue
                bearing: 0                  // Orientation de la carte
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'amenagements_communes', 
                    opacity: 1,
                    duration: 0        
                },
                {
                    layer: 'Risque_25',        
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'water',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: '9_communes',
                    opacity: 0,
                    duration: 0              
                },
                {
                    layer: 'pepinster',     
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'yvoir',
                    opacity: 0,
                    duration: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'amenagements_communes', 
                    opacity: 0,
                    duration: 0               
                },
                {
                    layer: 'Risque_25',         
                    opacity: 1,
                    duration: 0
                },
                {
                    layer: 'water',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: '9_communes', 
                    opacity: 0,
                    duration: 0            
                },
                {
                    layer: 'pepinster',          
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'yvoir',
                    opacity: 0,
                    duration: 0
                }
            ]
        },        
        {
            id: 'Le cas rochefort', // ID unique du chapitre
            alignment: 'left',
            hidden: false,
            title: "", // Titre du chapitre
            description: `
            <div style="max-width: 100%; margin: 0 auto; font-size: 18px; line-height: 1.8; padding: 20px; color: white; border-radius: 10px; text-align: justify;">
                <p><strong>Le Bourgmestre de Rochefort, Julien Defaux (MR), était à l'époque échevin des affaires économiques.</strong> "Je ne faisais pas partie de la cellule de crise qui s’occupait des inondations. Chaque échevin avait quand même beaucoup à faire de son côté."</p>
                <p>Sa commune fait partie de la catégorie 1, le plus haut des 3 niveaux, des communes impactées par les inondations. Cette classification avait pour but de prioriser les interventions et de fixer les plafonds des aides financières.</p>
            </div>
`,
            location: {
                center: [5.1360, 50.150],  // Coordonnées centrées sur Rochefrot manuelles
                 zoom: 12,
                pitch: 45,
                bearing: 0
                },
            mapAnimation: 'flyTo',         // Animation de vol vers la zone
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [],
            image: './Julien_Defaux.jpg', // Chemin vers l'image du bourgmestre
            imageAlt: 'Image du bourgmestre de Rochefort', // Texte alternatif pour l\'image
            legend: '<strong>Légende :</strong> Le bourgmestre de Rochefort coordonne les efforts de secours pendant la crise des inondations.' // Légende à afficher avec l'image
        },
        {
            id: 'aide-financiere-rochefort',
            alignment: 'center',
            hidden: false,
            description: `
                <div style="max-width: 100%; margin: 0 auto; font-size: 18px; line-height: 1.8; padding: 20px; color: white; border-radius: 10px; text-align: justify;">
                <p>Ces communes avaient alors bénéficié d'un soutien financier important de la Wallonie. Au total, ce chiffre s'élevait à plus de 51 millions d'euros. Rochefort avait touché pas moins de 4 860 000 euros. Tout ce que l'on sait du Bourgmestre c'est que "beaucoup de rénovations ont été faites avec ce montant."<p>
                <div>
                <!-- Embed Infogram as iframe -->
                <iframe width="100%" height="600" src="https://e.infogram.com/fe8945ed-2b19-4e63-978c-3e1067482dc0" frameborder="0" allowfullscreen></iframe>
            `,
            location: {
                center: [5.1360, 50.150], // Coordonnées un peu plus à l'ouest de Rochefort
                zoom: 12,                   // Zoom sur Rochefort
                pitch: 45,                  // Inclinaison pour un effet 3D
                bearing: 0                  // Orientation de la carte
            },
            mapAnimation: 'flyTo',         // Animation de vol vers la zone
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Problèmes à rocherfort',
            alignment: 'center', // Centré pour un bloc de texte plus large
            hidden: false,
            title: 'Où en sont ces nouveaux projets?',
            description: `
                <div style="max-width: 100%; margin: 0 auto; font-size: 16px; line-height: 1.6; text-align: justify;">
                    <p></strong> Si des aménagements concrets ne sont pas encore recensés, ce n'est pas par manque de budget. "Les subsides sont disponibles. Le problème est d'ordre de qualification. Nous n'avons pas le personnel avec l'expérience nécessaire."</p>            
                    <p>Un autre problème ralentit la mise en place des aménagements : les démarches administratives. "On a fait des études pour savoir quels terrains et quelles manières de faire étaient à prioriser, explique la géomètre en charge de tout ce qui tourne autour des inondations. Le SPW a réparti des enveloppes budgétaires. Nous leur faisons alors des propositions sur les différents aménagements et après, c'est à eux d'approuver ou non. Cela prend du temps."</p>
                    <p>3 ans après les inondations, les avancées sont limitées en termes d'aménagements de lutte contre les inondations. En réalité, le sujet est encore sur la table. Ce qui a déjà été fait, c'est le rehaussement des berges et la réparation de celles endommagées. Une liste de projets d'aménagements a été effectuée et doit être revue par le SPW. <p>
                    </div>
            `,
            location: {
                center: [5.1360, 50.150],  // Coordonnées centrées sur Rochefrot manuelles
                zoom: 12,                   // Zoom sur Rochefort
                pitch: 45,                  // Inclinaison pour un effet 3D
                bearing: 0                  // Orientation de la carte
            },
            mapAnimation: 'flyTo',         // Animation de vol vers la zone
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'aménagements-rochefort',
            alignment: 'center', // Centré pour un bloc de texte plus large
            hidden: false,
            title: 'Une nouvelle arrivée pour gérer les dossiers',
            description: `
                <div style="max-width: 100%; margin: 0 auto; font-size: 16px; line-height: 1.6;">
                    <p></strong> Heureusement, Rochefort peut désormais compter sur Céline Renaville, géomètre-topographe, arrivée par le biais de la Région wallonne. "Cela a fait avancer les choses", sourit le Bourgmestre. "Elle vient mettre de l’ordre, de la clarté et les moyens humains nécéssaires pour mettre en place les travaux. Mais c'est sûr que cela arrive tard."</p>
                    </div>
            `,
            location: {
                center: [5.1360, 50.150],  // Coordonnées centrées sur Rochefrot manuelles
                zoom: 12,                   // Zoom sur Rochefort
                pitch: 45,                  // Inclinaison pour un effet 3D
                bearing: 0                  // Orientation de la carte
            },
            mapAnimation: 'flyTo',         // Animation de vol vers la zone
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'aménagements-rochefort',
            alignment: 'left', 
            hidden: false,
            title: 'Les différents projets d\'aménagements prévus:',
            description: `
                    <div style="max-width: 100%; margin: 0 auto; font-size: 16px; line-height: 1.6; text-align: justify;">
                    <p></strong> - Acquisition, démolition ou adaptation de terrain ou de bâtiments qui feraient obstacle au passage de l’eau.<p>
                    <p> - Systèmes de temporisation du ruissellement dans les terres en hauteur. <p>
                    <p> - Atténuation des méandres (sinuosité d'un cours d'eau) et dégagement des embâcles (obstruction du lit d'un cours d'eau).<p>
                    <p> - Agrandissement d'un ancien canal ici à Jemelle.<p>
                    </div>
            `,
            location: {
                center: [5.266230, 50.162498],  // Coordonnées centrées sur Rochefort manuelles
                zoom: 15,                  // Zoom sur Rochefort
                pitch: 45,                  // Inclinaison pour un effet 3D
                bearing: 0                  // Orientation de la carte
            },
            mapAnimation: 'flyTo',         // Animation de vol vers la zone
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'aménagements-cadastre',
            alignment: 'center', // Centré pour un bloc de texte plus large
            hidden: false,
            title: 'Les aménagements recensés dans le cadastre du SPW',
            description: `
                <div style="max-width: 100%; margin: 0 auto; font-size: 16px; line-height: 1.6;">
                    <p><strong>Mais alors, qu'est-ce qui est recensé dans le cadastre du SPW ?</strong> Ce sont probablement les aménagements concrets. Par exemple, des zones d'expansion de crues (ZEC). "C'est ce qu'on appelle aussi des zones d'immersion temporaire (ZIT)", ajoute la topographe. "C'est un espace aménagé où l'eau peut déborder et s'écouler petit à petit dans le sol." Cela permettrait donc de stocker une partie du débordement et d'en limiter les impacts.>
                    <P> La commune de Tubize ou encore celle d'Ath en ont par exmeple installées plusieurs sur leurs territoires ces dernières années</p>
                    <p>Les plans sont donc à voir au futur pour l'instant. Avec une population toujours psychologiquement touchée par cet événement, Julien Defaux et Céline Renaville espèrent surtout pouvoir atténuer les inquiétudes. "La Région oublie cet aspect. L'enveloppe actuelle doit être utilisée avant fin 2027. C'est une période qui reste courte, il faudra du travail à temps plein", conclut le Bourgmestre.</p>
                </div>
            `,
            location: {
                center: [5.6714, 50.5619],  // Coordonnées centrées sur la zone des inondations
                zoom: 8,                   // Zoom gloabl 
                pitch: 45,                  // Inclinaison pour un effet 3D
                bearing: 0                  // Orientation de la carte
            },
            mapAnimation: 'flyTo',         // Animation de vol vers la zone
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [],
            image: './ZIT.png', // Chemin vers l'image du bourgmestre
            imageAlt: 'Image du bourgmestre de Rochefort', // Texte alternatif pour l\'image
            legend: '<strong>Légende :</strong> Le bourgmestre de Rochefort coordonne les efforts de secours pendant la crise des inondations.' // Légende à afficher avec l'image
        
        }
        
        
        
        
    ]
};
