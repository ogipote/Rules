const Discord = require('discord.js')
const { MessageActionRow, MessageButton } = require('discord.js')
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES] });

var generale = new Discord.MessageEmbed()
.setColor('#303136') // Couleur du message du règlement generale
.setTitle('Règlement génèrale') // Titre du règlement generale
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
.setTitle(`Conditions éxiger par Discord`) // Titre des conditions
.setDescription("Lorsque vous vous inscrivez à Discord vous avais accepter les [`Conditions d'Utilisation`](https://discord.com/terms) et le [`Guide Communautaire`](https://discord.com/guidelines) avant d'Utiliser Discord il est obligatoire d'avoir minimum 13 ans, respecter le guide communautaire, ne pas donner vos données aux inconnus voir même les personnes que vous connaissez les conditions de ce serveur sont aussi ceux de Discord nous éxigeons à ce que nos membres ai l'age minimum requis, qu'ils prennent leurs rôles et qu'ils respecte nôtre règlement, merci de nous signaler tout comportement douteux.") // Description des conditions
.setImage('https://i.imgur.com/9EYFRmx.png') // Image des condtions
var discussion = new Discord.MessageEmbed()
.setColor('#303136') // Couleur du règlement de disccussion (1)
.setTitle(``) // Titre du règlement de disccussio (1)
.setDescription(``) // Description du règlement de disccussion (1)
var discussion2 = new Discord.MessageEmbed()
.setColor('#303136') // Couleur du règlement de disccussion (2)
.setDescription(``) // Description du règlement de discussion (2)

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
	        .addFields(
		{ name: 'Soutenir la communauté Kaori', value: 'Vous pouvez soutenir notre communauté en boostant notre serveur ou en faisant des donnations mensuelle' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Tu veux prendre tes rôles?', value: '[`Clique ici`](https://discord.com/channels/681797849926860810/945909799609065503)', inline: true },
		{ name: 'Tu veux visiter notre site?', value: '[`Clique ici`](https://kaoricafe.fr)', inline: true },
	)
           .setThumbnail('https://cdn.discordapp.com/attachments/1030399871397679127/1044194432091697202/detailed-girl-anime-characters_52683-63971.jpeg')
          .setColor("#303136") // Couleur du haut de la présentation
        	const descregle = new Discord.MessageEmbed()
          .setAuthor({ name: 'Kaori Café', iconURL: 'https://i.imgur.com/d0diZ3p.jpg'})
          .setColor("#303136") // Couleur de la présentation
          .addFields(
		{ name: '• Bienvenue sur le serveur Kaori Café', value: 'Fais-toi de nouveaux amis dans la communauté francophone sociale\nPartage tes passions et découvres en de nouvelles que tu ne connaissais pasencore ! \nParticipe à d\'innombrables événements, giveaways et bien plus encore !\nNous nous réjouissons de t\'accueillir parmi nous.\n\n****• Mis à jour du règlement**** : <t:1669023300:R>\n****• Mis à jour du serveur**** : <t:1669023300:R>' },
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
