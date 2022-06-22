const Discord = require('discord.js')
const { MessageActionRow, MessageButton } = require('discord.js')
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES] });

var generale = new Discord.MessageEmbed()
.setColor('#303136')
.setTitle('Principaux règles de la communauté Straw')
.setDescription(`・**Soyez convivial, patient et accueillant.**
Participez à la sécurité de l'environnement et aidez-nous à veiller à ce que tout le monde respecte les présentes Règles.
・**Soyez respectueux.**
Nous ne serons pas toujours tous d'accord, mais le désaccord ne justifie pas l'incivilité et les mauvaises manières. Nous sommes tous susceptibles d'éprouver de la frustration de temps à autre, mais nous ne pouvons pas laisser cette frustration se transformer en attaque personnelle. Il est important de garder à l'esprit qu'une communauté dans laquelle les personnes se sentent mal à l'aise ou menacées n'est pas productive.
・**Faites attention aux mots que vous employez.**
Soyez gentil(le) envers les autres. N'insultez pas ou ne dénigrez pas les autres participants. Le harcèlement et autres comportements d'exclusion ne sont pas acceptables.
・**Essayez de comprendre les raisons de notre désaccord.**
Les désaccords, qu'ils soient sociaux ou techniques, se produisent tout le temps. Nous devons résoudre les désaccords et les opinions divergentes de manière constructive. Gardez à l'esprit que nous sommes tous différents. La force de notre communauté émane de sa diversité, des gens d'horizons divers. Différentes personnes ont des points de vue divers sur les problèmes. Notre incapacité à comprendre pourquoi une personne a tel point de vue ne signifie pas qu'elle a tort. N'oubliez pas que l'erreur est humaine et que rejeter les fautes les uns sur les autres ne mène nulle part. Concentrons-nous sur la collaboration pour résoudre les problèmes et apprendre de nos erreurs.`)
.setImage('')
var assistance = new Discord.MessageEmbed()
.setColor('#303136')
.setTitle(`Contacter l'Assistance du serveur`)
.setDescription('')
.setImage('')
var discussion = new Discord.MessageEmbed()
.setColor('#303136')
.setTitle(`Discussion & Sécuritée`)
.setDescription(`1.・**Harcèlement et cyberintimidation.**
Nous ne tolérons pas ces actes. Ils correspondent par exemple à des commentaires ou à des actions visant à :
> ・Traquer, agresser, intimider, blesser, attaquer, abuser ou humilier quelqu'un (ou une chose à laquelle une personne peut s'intéresser). Cela comprend l'utilisation ou l'encouragement à l'utilisation de vulgarités (jurons)
> ・Révéler les données personnelles d'une personne.
> ・Harceler ou isoler une personne (ou une chose à laquelle une personne peut s'intéresser) dans le but de la ridiculiser, d'abuser d'elle, de perpétrer une attaque malveillante contre elle, ou de réaliser toute chose de même nature.
> ・Dénoncez publiquement la mauvaise conduite des autres. Vous devez ouvrir un ticket de signalement sur le serveur pour nous informer de tout mauvais comportement.
> Encourager les autres personnes à faire ce qui est listé ci-dessus.

**2.・Mise en danger de mineurs.**
Nous avons des utilisateurs de tous âges et nous voulons créer un environnement sécurisé pour tous, y compris les mineurs. De ce fait, nous n'autorisons aucune action pouvant entrainer les enfants dans des situations inappropriées ou dangereuses, notamment :
> ・La prédation sexuelle et autres comportements de prédation.
> ・Tout ce qui sexualise les mineurs.
> ・Tous les autres actes ou commentaires énumérés dans les présentes Règles qui sont adressés ou liés aux enfants.

3.・**Contenu sexuel.**
Nous n'autorisons pas ce type de contenu, notamment :
> ・Des contenus ou des actes sexuels, la violence sexuelle, l'exploitation de toute sorte, ou la violence excessive. Ces contenus sont inclus, qu'ils impliquent de la nudité ou non, qu'ils présentent des caractéristiques de la pornographie ou non, qu'ils soient explicites ou non.
> ・Des contenus qui impliquent ou font apparaître une personne nu ou en sous-vêtements.
> ・Des atrocités, des massacres et d'autres événements réels (ou pseudo-réels) choquants.`)
.setImage('')

client.on('ready', () => {
	console.log('ready')
})

client.on('messageCreate',  message => {
  if(message.author.bot) return;

        var row = new Discord.MessageActionRow()
        .addComponents(
            new Discord.MessageSelectMenu()
            .setCustomId("select")
            .setPlaceholder("🧾 Lire le règlement de la communauté")
            .addOptions([
                {
                    label: "1. Generale",
                  emoji: "",
                    value: "generale"
                },
                {
                    label: "2. Discussion",
                  emoji: "",
                    value: "discussion"
                },
              {
                    label: "3. Conditions",
                emoji: "",
                    value: "conditions"
                }
            ])
			);
  const row1 = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('assistance')
					.setLabel(`Contacter l'assistance de la communauté`)
					.setStyle('PRIMARY'),
			);
  const row2 = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setURL('https://discord.com/channels/681797849926860810/945909799609065503/977002360641552435')
					.setLabel(`Prendre des rôles`)
					.setStyle('LINK'),
			);
	if (message.content.toLowerCase().startsWith('.')) {
	 	const msg = message.content.slice(1).trim()
      	const args = msg.split(/ +/)
      	const command = args.shift().toLowerCase()

      	if (command === "rules") {
 			const regle = new Discord.MessageEmbed()
        .setImage("https://i.imgur.com/MKxiI9m.png")
          .setColor("#303136")
        	const descregle = new Discord.MessageEmbed()
          .setAuthor({ name: 'Straw Café', iconURL: 'https://i.imgur.com/d0diZ3p.jpg'})
          .setTitle("Règlement & Présentation du serveur Straw Café")
          .setColor("#303136")
          .setDescription("Faites de bonnes rencontres, passer du bon temps sur notre communauté sociale sur le thème de la discussion générale, tout en respectant le règlement de notre communauté\n\n **Liens Utiles**\n<:twitter:988909880373035060> [Twitter](https://twitter.com/DiscordStraw?t=8A1kieIei2KPKWaWown6xw&s=09)\n<:youtube:988909931962974278> [Youtube](https://youtube.com/c/strawcafe)\n\n**Information mis à jour le** <t:1655846640:R>\n**Règlement mis à jour le** <t:1655848500:R>")

       		message.channel.send({ embeds: [ regle, descregle ], components: [ row1, row ]})
      	}
	}
});
client.on("interactionCreate", interaction => {
            if(interaction.isSelectMenu()){
            if(interaction.customId === "select"){
                console.log("Selection made");
            
                if(interaction.values == "generale"){
                    interaction.reply({embeds: [generale], components: [row2], ephemeral: true});
                
            };
              if(interaction.values == "discussion"){
                    interaction.reply({embeds: [discussion], ephemeral: true});
                
            };
              if(interaction.values == "conditions"){
                    interaction.reply({embeds: [conditions], ephemeral: true});
                
            };
        }
        }
    });

client.login(process.env.TOKEN)
