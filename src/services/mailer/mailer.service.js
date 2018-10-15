const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;



class Mailer {

  async create(data) {

    // build message
    const mailOptions = {
      from: 'chaim.tester@gmail.com',
      to: 'chaimmw86@gmail.com',
      subject: 'sent from Finance Tracker contact page',
      generateTextFromHTML: true,
      text: data.message,
      html: data.message
    };

    // works with regular gmail but not secure
    // const transporter = nodemailer.createTransport({
    //   service: 'gmail',
    //   auth: {
    //     user: 'chaim.tester@gmail.com',
    //     pass: 'partypooper'
    //   },
    //   tls: {
    //     rejectUnauthorized: false
    //   }
    // });
    // await transporter.sendMail(mailOptions, (err, info) => {
    //   if (err) {
    //     console.log('err');
    //     console.error(err);
    //   } else {
    //     console.log('info', info);
    //   }
    // });

    // more secure way of sending with gmail
    // see: https://medium.com/@nickroach_50526/sending-emails-with-node-js-using-smtp-gmail-and-oauth2-316fe9c790a1

    const oauth2 = this.app.get('oauth2');

    // configure oath2
    const oauth2Client = new OAuth2(
      oauth2.clientId,
      oauth2.clientSecret,
      'https://developers.google.com/oauthplayground' // Redirect URL
    );

    await oauth2Client.setCredentials({
      refresh_token: oauth2.refreshToken
    });

    const tokens = await oauth2Client.getAccessToken();
    // const accessToken = await tokens.credentials.access_token;

    const smtpTransport = await nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: this.app.get('email'),
        clientId: oauth2.clientId,
        clientSecret: oauth2.clientSecret,
        refreshToken: oauth2.refreshToken,
        accessToken: tokens
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    await smtpTransport.sendMail(mailOptions, (error, response) => {
      error ? console.log(error) : console.log(response);
      smtpTransport.close();
    });
  }

  setup(app){
    this.app = app;
  }
}

module.exports = function () {
  const app = this;

  app.use('/mailer', new Mailer());

}
