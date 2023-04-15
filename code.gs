function myFunction() {
  const para = 'angelu_80@hotmail.com';
  const asunto = 'Correo localización';
  const template = HtmlService.createTemplateFromFile('template').evaluate().getContent();

GmailApp.sendEmail(para,asunto, '', {

  htmlBody: template
});

}
