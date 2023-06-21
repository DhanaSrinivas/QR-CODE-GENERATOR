import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';
inquirer
  .prompt([
    {
        message:"Enter your url: ",
        name:"url",
    },
  ])
  .then((answers) => {
    const urlLink=answers.url;
    var qr_png = qr.image(urlLink);
    qr_png.pipe(fs.createWriteStream('myQRcode.png'));

    fs.writeFile('message.txt', urlLink, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      }); 
  })
  .catch((error) => {
    console.error(error);
  });