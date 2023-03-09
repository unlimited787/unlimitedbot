/**
   * Create By Dika Ardnt.
   * Recode By Naze Dev
   * Contact Me on wa.me/6282113821188
   * Follow https://github.com/nazedev
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '0e92565522',
}

// Other
global.owner = ['393312171655']
global.ownernomer = "393312171655"
global.premium = ['393312171655']
global.packname = '𝐔ИL͎𝕀M𝕀TΞ𝐃'
global.author = '𝐁Ꮻ𝐓'
global.sessionName = 'nazedev'
global.prefa = ['+']
global.sp = ''
global.mess = {
    success: 'fatto',
    admin: 'contaci',
    botAdmin: 'come faccio senza admin',
    premime: 'funzione riservata',
    owner: 'funzione riservata',
    group: 'funzione riservata ai gruppi',
    private: 'funzione riservata alla chat in privato',
    bot: 'funzione riservata',
    wait: 'ok',
    endLimit: 'spam rilevato',
}
global.limitawal = {
    premium: "Infinity",
    free: 40
}
global.thumb = fs.readFileSync('./lib/naze.png')
global.vaze = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
