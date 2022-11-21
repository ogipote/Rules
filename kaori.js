const Discord = require('discord.js')
const { MessageActionRow, MessageButton } = require('discord.js')
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES] });

var generale = new Discord.MessageEmbed()
.setColor('#303136') // Couleur du message du règlement generale
.setTitle('Règlement génèrale') // Titre du règlement generale
.addFields(
		{ name: 'Regular field title', value: 'Some value here' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
var conditions = new Discord.MessageEmbed()
.setColor('#303136') // Couleur des conditions
.setTitle(``) // Titre des conditions
.setDescription(``) // Description des conditions
.setImage('') // Image des condtions
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
		{ name: 'Où vont les donnations?', value: 'En giveaway sur le serveur', inline: true },
		{ name: 'Où faire les dons', value: 'Sur [Patreon](https://patreon.com/animefr)', inline: true },
	)
           .setThumbnail('https://cdn.discordapp.com/attachments/1030399871397679127/1044194432091697202/detailed-girl-anime-characters_52683-63971.jpeg')
          .setColor("#303136") // Couleur du haut de la présentation
        	const descregle = new Discord.MessageEmbed()
          .setAuthor({ name: 'Kaori Café', iconURL: 'https://i.imgur.com/d0diZ3p.jpg'})
          .setColor("#303136") // Couleur de la présentation
          .addFields(
		{ name: '• Bienvenue sur le serveur Kaori Café', value: 'Fais-toi de nouveaux amis dans la communauté francophone sociale sur\nDiscord. Découvre de nouveaux anime, manga et jeux que tu ne connaissais pas\nencore ! Participe à d\'innombrables événements, giveaways et bien plus encore !\nNous nous réjouissons de t\'accueillir parmi nous.\n\n****• Mis à jour du règlement**** : <t:1669023300:R>\n****• Mis à jour des informations**** : <t:1669023300:R>' },
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