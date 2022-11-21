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
            .setPlaceholder("Lire le règlement de la communauté") // Boutton de selection
            .addOptions([
                {
                    label: "Generale", // Réglement génèrale
                  emoji: "",
                    value: "generale"
                },
                {
                    label: "Discussion", // Réglement de la discussion
                  emoji: "",
                    value: "discussion"
                },
              {
                    label: "Conditions", // Conditions du serveur
                emoji: "",
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
          .setTitle("Bienvenue sur **🍵 . 술 Kaori Café**") // Titre du haut de la présantation
	        .setImage("https://cdn.discordapp.com/attachments/1042651841059635200/1044179839869005864/anime-monogatari-series-mayoi-hachikuji-shinobu-oshino-wallpaper-preview_2.jpg?size=1024") //Image du haut de la présentation
          .setColor("#303136") // Couleur du haut de la présentation
        	const descregle = new Discord.MessageEmbed()
          .setAuthor({ name: 'Kaori Café', iconURL: 'https://i.imgur.com/d0diZ3p.jpg'})
          .setTitle("") // Titre de la présentation
          .setColor("#303136") // Couleur de la présentation
          .setDescription("En rejoignant notre communauté, **vous acceptez** de respecter nos conditions, nos règles, et vous montrer exemplaire sous peine de bannissement irrévocable.") // Description de la présentation

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