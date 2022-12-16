const Discord = require('discord.js')
const { MessageActionRow, MessageButton } = require('discord.js')
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES] });

var generale = new Discord.MessageEmbed()
.setColor('#303136') // Couleur du message du règlement generale
.setTitle('Règlement génèrale') // Titre du règlement generale
.setImage('https://cdn-longterm.mee6.xyz/plugins/embeds/images/883428470326169680/aa790fc67f901531ea198662cf4646042bd6d56e60be4d825c6d495cb2c768d8.png')
.addFields(
		{ name: 'Règlement Importante de la communauté', value: 'Merci de respecter les règles ci-dessous et garder en tête que le staff se réserve de pouvoir prendre des sanctions qui ne sont pas présente sur le règlement.' },
		{ name: '\u200B', value: '\u200B' },
		{ name: '1. Respect et entraide', value: 'Tout propos émis doit l’être dans le plus grand respect de l’autre en ayant à l’esprit de préserver la fragilité émotionnelle de tout un chacun. L’entraide est la règle.', inline: false },
		{ name: '2. Régulation et animation du groupe', value: 'Administrateurs et modérateurs dialoguent et maintiennent la paix dans la communauté. Les animateurs rendent le groupe plus vivant et plus déterminé. Certains animateurs apportent un conseil précieux, leurs compétences et leur engagement est digne du respect de la communauté.', inline: false },
	        { name: '3. Une parole libre et respectueuse', value: 'Sur les différents espaces de discussion, la parole est libre, mais nous interdisons les propos racistes, sexistes, les incitations à la haine ou à la violence. Pas de drague lourde ni de harcèlement sexuel ou moral. Pas de mots grossiers, d’insultes, de moqueries, d’injures ou d’insinuations.', inline: false },
	        { name: '4. Des débats utiles entre membres transparents', value: 'Pas de règlement de compte sur le forum. Il est proscrit d’identifier un membre pour lui dire quelque chose de désagréable et d’utiliser une identité masquée en double d’une identité publique. Aucune remarque à propos de l’orthographe ou la façon d’écrire des membres. Toute expression est respectable.', inline: false },
	        { name: '5. Vente, recrutement, contenus émotionnellement sensibles ou dégradants', value: 'Publicité commerciale, recrutement, vente, diffusion d’images ou de films pornographiques ou d’horreur dans les discussions sont interdits.', inline: false },
	        { name: '6. Des contributions argumentées', value: 'Tout lien vers un site, un groupe ou une page externe doit être commenté par l’auteur pour justifier une ouverture de débat sur le sujet évoqué par le lien. On vérifiera avant de poster que le sujet proposé ne relève pas de la rumeur. Les liens vers les “pièges à clics” sont proscrits.', inline: false },
                { name: '7. Débat politique ou religieux', value: 'Tout prosélytisme politique ou religieux est interdit : chacun a ses opinions, on ne peut risquer d’offenser les autres par ce type de sujet. Les messages de voeux associés à une fête traditionnelle peuvent être émis dans un post ouvert pour la circonstance. Ils s’adressent à l’ensemble du groupe.', inline: false },
	        { name: '8. Mesures prises en cas de violation des règles', value: 'Le non respect d’une ou plusieurs de ces règles entraine une mis en “quarantaine” immédiat et temporaire du compte du membre par la modération ou les administrateurs. A l’issue de cette procédure, le membre est réintégré ou exclu.', inline: false },
	        { name: '9. Dénigrement et diffusion de fake news', value: 'Tout propos haineux ou mensongeaire envers un membres ou la communauté résultera à un bannissement du serveur et un signalement à Discord', inline: false },
	)
var conditions = new Discord.MessageEmbed()
.setColor('#303136') // Couleur des conditions
.addFields(
		{ name: 'Âge requis par Discord', value: 'Avant de commencer à discuter sur le serveur vous devais respecter les éxigences de discord concernant vôtre âge.' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Asie', value: '・Corée du Sud : 14+\n・Vietnam : 15+', inline: false },
		{ name: 'Caraïbes', value: '・Aruba : 16+\n・Pays-Bas caribéens : 16+\n・Curaçao : 16+\n・Sint Maarten : 16+', inline: false },
	        { name: 'Europe', value: '・Autriche : 14+\n・Bulgarie : 16+\n・Croatie : 16+\n・Chypre : 14+\n・République tchèque : 15+\n・France : 15+\n・Allemagne : 16+\n・Grèce : 15+\n・Hongrie : 16+\n・Irlande : 16+\n・Italie : 14+\n・Lituanie : 14+\n・Luxembourg : 16+\n・Pays-Bas : 16+\n・Pologne : 16+\n・Roumanie : 16+\n・Saint-Marin : 16+\n・Serbie : 15+\n・Slovaquie : 16+\n・Slovénie : 16+\n・Espagne : 14+', inline: false },
	        { name: 'Amérique du Sud', value: '・Chili : 14+\n・Colombie : 14+\n・Pérou : 14+\n・Venezuela : 14+', inline: false },
	)
.setImage('https://cdn-longterm.mee6.xyz/plugins/embeds/images/883428470326169680/aa790fc67f901531ea198662cf4646042bd6d56e60be4d825c6d495cb2c768d8.png') // Image des condtions
var discussion = new Discord.MessageEmbed()
.setColor('#303136') // Couleur du règlement de disccussion (1)
.setImage('https://cdn-longterm.mee6.xyz/plugins/embeds/images/883428470326169680/aa790fc67f901531ea198662cf4646042bd6d56e60be4d825c6d495cb2c768d8.png')
.setTitle('Règlement Textuel') // Titre du règlement de disccussio (1)
.setDescription(`・Pas de demande d'attribution de rôle de modérateur.\n・@mentionne le support pour le soutien.\n・Contactez les modérateurs sous <#945908859552292934> pour obtenir de l'aide.\n・Aucun contenu sexuellement explicite.\n・Aucun contenu pornographique.\n・Aucun contenu NSFW.\n・Aucun contenu illégal.\n・Pas de piratage.\n・Pas de modding.\n・Pas de piratage.\n・Aucune publication d'informations personnelles (y compris les vrais noms, adresses, e-mails, mots de passe, informations de compte bancaire et de carte de crédit, etc.).\n・Aucune attaque personnelle.\n・Pas de harcèlement.\n・Pas de sexisme.\n・Pas de racisme.\n・Pas de discours de haine.\n・Pas de langage offensant.\n・Pas de discussions religieuses.\n・Pas de discussions politiques.\n・Pas de discussions sexuelles.\n・Pas de spam.\n・Pas de message excessif (briser une idée dans de nombreux messages au lieu de tout écrire dans un seul article).\n・Pas de murs de texte (que ce soit dans des messages séparés ou comme un seul message).\n・Pas de verrouillage des majuscules.\n・Pas d'emojis abusifs.\n・Pas de réactions abusives.\n・Les modérateurs se réservent le droit de supprimer tout message.\n・Les modérateurs se réservent le droit de modifier n'importe quel message.\n・Pas de publicité sans permission.\n・Aucun lien vers d'autres serveurs.\n・Le bot commande uniquement sous <#945910640860622878>.\n・Pas de hors-sujet / utilisez le bon canal de texte pour le sujet que vous souhaitez discuter.`) // Description du règlement de disccussion (1)
var discussion2 = new Discord.MessageEmbed()
.setColor('#303136') // Couleur du règlement de disccussion (2)
.setImage('https://cdn-longterm.mee6.xyz/plugins/embeds/images/883428470326169680/aa790fc67f901531ea198662cf4646042bd6d56e60be4d825c6d495cb2c768d8.png')
.setTitle('Règlement Vocale') // Description du règlement de discussion (2)
.setDescription(`・Aucun saut de canal de chat vocal.\n・Aucun bruit gênant, fort ou aigu.\n・Réduisez la quantité de bruit de fond, si possible.\n・Aucune soundboard\n・Les modérateurs se réservent le droit de vous déconnecter d'un canal vocal si votre qualité sonore est mauvaise.\n・Les modérateurs se réservent le droit de déconnecter, de mettre en sourdine, d'assourdir ou de déplacer des membres vers et depuis les canaux vocaux.`)

client.on('ready', () => {
	console.log('ready')
})

client.on('messageCreate',  message => {
  if(message.author.bot) return;

        var row = new Discord.MessageActionRow()
        .addComponents(
            new Discord.MessageSelectMenu()
            .setCustomId("select")
            .setPlaceholder("📚 Lire le règlement de la communauté") // Boutton de selection
            .addOptions([
                {
                    label: "Generale", // Réglement génèrale
                  emoji: "👩🏿‍🤝‍👩🏼",
                    value: "generale"
                },
                {
                    label: "Discussion", // Réglement de la discussion
                  emoji: "🧮",
                    value: "discussion"
                },
              {
                    label: "Conditions", // Conditions du serveur
                emoji: "🌈",
                    value: "conditions"
                }
            ])
			);
  const boutton = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setURL('') // URL du boutton 2
					.setLabel(``) // Texte a afficher
					.setStyle('LINK'), // Style du boutton
			);
	if (message.content.toLowerCase().startsWith('=')) {
	 	const msg = message.content.slice(1).trim()
      	const args = msg.split(/ +/)
      	const command = args.shift().toLowerCase()

      	if (command === "rules") {
 	       const regle = new Discord.MessageEmbed()
          .setImage('https://i.imgur.com/5HLKuh0.png')
          .setColor("#303136") // Couleur du haut de la présentation
        	const descregle = new Discord.MessageEmbed()
          .setAuthor({ name: 'Kaori Café', iconURL: 'https://i.imgur.com/d0diZ3p.jpg'})
          .setColor("#303136") // Couleur de la présentation
          .setImage('https://cdn-longterm.mee6.xyz/plugins/embeds/images/883428470326169680/aa790fc67f901531ea198662cf4646042bd6d56e60be4d825c6d495cb2c768d8.png')
          .addFields(
		{ name: 'Bienvenue sur le serveur Kaori Café', value: '```\n⛩️  ✿  ⋅⊱  Bienvenue sur Kaori Café !```\nest un serveur communautaire afin de regrouper une communauté française autours de plusieurs thème une communauté amicale, LGBTQ+ nous avons pour but de faire à ce que tout se sens inclus\n\nComme tout serveur communautaire, nous avons conçu un règlement que vous devriez respecter à la lettre, au bout d\'\un troisième avertissement et nous serons dans l\'\obligation de vous bannir du serveur.\n\n`Invitation`・[.gg/kaori](https://discord.gg/kaori)\n`Créer le`・<t:1582578000:R>\n`Fondatrce`・<@499447456678019072>' },
            )

       		message.channel.send({ embeds: [ regle, descregle ], components: [row]})
      	}
	}
});
client.on("interactionCreate", interaction => {
            if(interaction.isSelectMenu()){
            if(interaction.customId === "select"){
                console.log("Une personne viens de faire une selection");
            
                if(interaction.values == "generale"){
                    interaction.reply({embeds: [generale], ephemeral: true});
                
            };
              if(interaction.values == "discussion"){
                    interaction.reply({embeds: [ discussion, discussion2 ], ephemeral: true});
                
            };
              if(interaction.values == "conditions"){
                    interaction.reply({embeds: [conditions], ephemeral: true});
                
            };
        }
        }
    });

client.login(process.env.TOKEN)
