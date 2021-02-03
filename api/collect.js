const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

module.exports = (req, res) => {
  if (req.method.toUpperCase() === 'POST') {
    const { mentor, nickname, score,
    shimo,
    taiga,
    yapi,
    github,
    wallet } = req.body
    sgMail
      .send({
        to: mentor, // Change to your recipient
        from: 'comunion@comunion.io', // Change to your verified sender
        subject: `Comunion新人考核通过：${nickname}`,
        html: `<p><strong>首先恭喜新人 ${nickname} 通过 Comunion 新人审核，得分${
          score}，正是加入 Comunion。</strong></p><p>TA的石墨账号是：${
          shimo}</p><p>TA的Taiga账号是：${
          taiga}</p><p>TA的yapi账号是：${
          yapi}</p><p>TA的Github账号是：${
          github}</p><p>TA的钱包地址是：${
          wallet}</p><p><strong>请Mentor帮忙开通新人相关账号，更快得接入Comunion。</strong></p>
        `,
      })
      .then(() => {
        console.log('Email sent')
        res.status(200)
      })
      .catch((error) => {
        console.error(error)
        res.status(500)
      })
  } else {
    res.send('')
  }
}
