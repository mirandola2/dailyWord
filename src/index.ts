const { XMLParser, XMLBuilder, XMLValidator} = require("fast-xml-parser");

export default {
	async fetch(request: Request) {
		

	  function getStringBeforeSeparator(string: String){
		let separator = ' ||| '
		return string.split(separator)[0]
	  }

	  const date = new Date(); 
	const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;

	  console.log(formattedDate)
	  
	  const url = 'https://liturgia.silvestrini.org/rss'

	  const dailyRawObject = new XMLParser().parse(await (await fetch(url)).text())
	  
	  dailyRawObject.rss.channel.item.forEach(item => {
		console.log("ciao")
	  });

	  let dailyInfo = {
		letture: dailyRawObject.rss.channel.item[0].description
		}

	  return new Response(JSON.stringify(dailyRawObject, undefined, 4));
	},
  };