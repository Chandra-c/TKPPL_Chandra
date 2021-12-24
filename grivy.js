const Bot = require('./grivy_lib')
const readline = require('readline-sync')
const delay = require('delay');
const fs = require('fs');
const password_email = "Agung2020@";
(async () => {
	var filelist = 'list.txt';
	const readlist = fs.readFileSync(filelist, 'UTF-8');
    const list = readlist.split(/\r?\n/);
	const totalList = list.length;
	for (let i = 1; i <= totalList; i++) {
		const email = list[i-1];
		const bot = new Bot();
		await bot.initPuppeter();
		const redeem = await bot.redeem(email,password_email);
		if(redeem === true){
			console.log(email+ " = Sukses");
		}
		else{
			console.log(email+ " = Gagal");
		}
	}
}
)();