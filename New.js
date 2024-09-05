const fetch = require('node-fetch');
let jann = async (m, { conn }) => {
  const apiKey = 'YOUR_KEY'; // register on api.betabotz.eu.org to get apiKey
  const searchKey = [
    'japanese',
    'boobs',
    'threesome',
    'stepsister',
    'teenager',
    'pink pussy',
    'best friend',
    'indo',
    'alex adams',
    'thight',
    'party'
  ];
  const pick = searchKey[Math.floor(Math.random() * searchKey.length)];
  try {
    const searchMovies = await fetch(`https://api.betabotz.eu.org/api/search/xnxx?query=${pick}&apikey=${apiKey}`);
    const json = await searchMovies.json();
    
    const jx = await pickRandom(json);
    
    let xj = `乂 *R A N D O M B O K E P*\n\n`;
    xj += `  ◦ Title : ${jx.title}\n`;
    xj += `  ◦ Views : ${jx.views}\n`;
    xj += `  ◦ Quality : ${jx.quality}\n`;
    xj += `  ◦ Duration : ${jx.duration}\n`;
    xj += `  ◦ Link : ${jx.link}\n`;

    const getMovies = await (await fetch(`https://api.betabotz.eu.org/api/download/xnxxdl?url=${jx.link}&apikey=${apiKey}`)).json();
    conn.sendMessage(m.chat, {
      video: {
        url: getMovies.result.url
      },
      caption: xj
      }, { quoted: m });
  } catch (error) {
    throw `Gagal mencari dan mendapatkan data`
  }
}
jann.help = jann.command = /^(play|(rand(om)?)?bokep)$/i
jann.tags = ['internet'];
jann.premium = true;
jann.limit = 5;

module.exports = jann;

function pickRandom(data) {
  const results = data.result;
  const randomIndex = Math.floor(Math.random() * results.length);
  return results[randomIndex];
}


// CASE
case 'bokep': case 'playbokep': case 'randbokep': case 'randombokep': {
  const apiKey = 'YOUR_KEY'; // register on api.betabotz.eu.org to get apiKey
  const searchKey = [
    'japanese',
    'boobs',
    'threesome',
    'stepsister',
    'teenager',
    'pink pussy',
    'best friend',
    'indo',
    'alex adams',
    'thight',
    'party'
  ];
  const pick = searchKey[Math.floor(Math.random() * searchKey.length)];
  try {
    const data = await fetchJson(`https://api.betabotz.eu.org/api/search/xnxx?query=${pick}&apikey=${apiKey}`);
    
    let xj = `乂 *R A N D O M B O K E P*\n\n`;
    xj += `  ◦ Title : ${result[0].title}\n`;
    xj += `  ◦ Views : ${data.result[0].views}\n`;
    xj += `  ◦ Duration : ${data.result[0].duration}\n`;
    xj += `  ◦ Quality : ${data.result[0].quality}\n`;
    xj += `  ◦ Link : ${data.result[0].link}\n`;

    const getMovies = await (await fetchJson(`https://api.betabotz.eu.org/api/download/xvideos?url=${data.result[0].link}&apikey=${apiKey}`));
    conn.sendMessage(m.chat, {
      video: {
        url: getMovies.result.url
      },
      caption: xj
      }, { quoted: m });
  } catch (error) {
      console.log(error);
      return m.reply('Gagal mencari dan mendapatkan data');
  }
}
break

/**
 * Have problem? pv t.me/@JannTmvn
 * WANTS MORE? FOLLOW THIS CH
 * https://whatsapp.com/channel/0029VaDMn8D3mFYDKDGIFW2J
**/```
