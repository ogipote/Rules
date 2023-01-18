const Discord = require('discord.js')
const { MessageActionRow, MessageButton } = require('discord.js')
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES] });

var generale = new Discord.MessageEmbed()
.setColor('#303136') // Couleur du message du règlement generale
.setTitle('Règlement génèrale') // Titre du règlement generale
.setImage('https://i.imgur.com/rcrMdKF.png')
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
		{ name: 'Notre Equipe', value: 'Pour maintenir une bonne entente sur la communauté il faut une bonne équipe de modération, voici là nôtre' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Créatrice', value: '<@499447456678019072> <@933429923572482108>', inline: true },
		{ name: 'Gérant.e', value: '<@594574555494875173> <@695212940596609075> <@832913780970094612> <@1062002817310670959> <@729279395629367318> <@683464613790220288>', inline: true },
	        { name: 'Assistance', value: '<@251022026872061952> <@981953679139684373> <@735480748932333588> <@751763098993426492> <@974858841437130792> <@738426341342576671>', inline: true },
	        { name: 'De confiance', value: '<@747890356665974895> <@836592388884660287> <@775470411583717384> <@752087356395225118>', inline: true },
	        { name: 'Staff', value: '<@725758918801752124> <@755152232105902101>', inline: true },
	        { name: 'CM Actif', value: '<@764873210268614656> <@983121607834882108> <@922176997579427890> <@715503630324858972> <@594640804518297610>', inline: true },
	)
.setImage('https://i.imgur.com/rcrMdKF.png') // Image des condtions
var discussion = new Discord.MessageEmbed()
.setColor('#303136') // Couleur du règlement de disccussion (1)
.setImage('https://i.imgur.com/rcrMdKF.png')
.setTitle('Règlement Textuel') // Titre du règlement de disccussio (1)
.setDescription(`・Pas de demande d'attribution de rôle de modérateur.\n・@mentionne le support pour le soutien.\n・Contactez les modérateurs sous <#945908859552292934> pour obtenir de l'aide.\n・Aucun contenu sexuellement explicite.\n・Aucun contenu pornographique.\n・Aucun contenu NSFW.\n・Aucun contenu illégal.\n・Pas de piratage.\n・Pas de modding.\n・Pas de piratage.\n・Aucune publication d'informations personnelles (y compris les vrais noms, adresses, e-mails, mots de passe, informations de compte bancaire et de carte de crédit, etc.).\n・Aucune attaque personnelle.\n・Pas de harcèlement.\n・Pas de sexisme.\n・Pas de racisme.\n・Pas de discours de haine.\n・Pas de langage offensant.\n・Pas de discussions religieuses.\n・Pas de discussions politiques.\n・Pas de discussions sexuelles.\n・Pas de spam.\n・Pas de message excessif (briser une idée dans de nombreux messages au lieu de tout écrire dans un seul article).\n・Pas de murs de texte (que ce soit dans des messages séparés ou comme un seul message).\n・Pas de verrouillage des majuscules.\n・Pas d'emojis abusifs.\n・Pas de réactions abusives.\n・Les modérateurs se réservent le droit de supprimer tout message.\n・Les modérateurs se réservent le droit de modifier n'importe quel message.\n・Pas de publicité sans permission.\n・Aucun lien vers d'autres serveurs.\n・Le bot commande uniquement sous <#945910640860622878>.\n・Pas de hors-sujet / utilisez le bon canal de texte pour le sujet que vous souhaitez discuter.`) // Description du règlement de disccussion (1)
var discussion2 = new Discord.MessageEmbed()
.setColor('#303136') // Couleur du règlement de disccussion (2)
.setImage('https://i.imgur.com/rcrMdKF.png')
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
            .setPlaceholder("Lire le règlement de la communauté") // Boutton de selection
            .addOptions([
                {
                    label: "Règlement Générale", // Réglement génèrale
                    emoji: "1065159096984145932",
                    value: "generale"
                },
                {
                    label: "Règlement Discussion", // Réglement de la discussion
                    emoji: "1065158925948829697",
                    value: "discussion"
                },
              {
                    label: "Notre Equipe", // Conditions du serveur
                    emoji: "1065159061470978078",
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
          .setColor("#303136") // Couleur de la présentation
          .setImage('https://i.imgur.com/rcrMdKF.png')
          .addFields(
		{ name: 'Bienvenue sur le serveur Kaori Café', value: '```\n⛩️  ✿  ⋅⊱  Bienvenue sur Kaori Café !```\nest un serveur communautaire afin de regrouper une communauté française autours de plusieurs thème une communauté amicale, LGBTQ+ nous avons pour but de faire à ce que tout se sens inclus\n\nComme tout serveur communautaire, nous avons conçu un règlement que vous devriez respecter à la lettre, au bout d\'un troisième avertissement et nous serons dans l\'obligation de vous bannir du serveur.\n\n`Invitation`・[.gg/kaori](https://discord.gg/kaori)\n`Créer le`・<t:1582578000:R>\n`Fondatrce`・<@499447456678019072>' },
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
