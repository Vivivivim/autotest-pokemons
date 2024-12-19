describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); 

         cy.get('#mail') .type ('german@dolnikov.ru');
         cy.get('#pass') .type ('iLoveqastudio1');
         cy.get('#loginButton').click();   

         cy.get('#messageHeader').contains('Авторизация прошла успешно');
         cy.get('#messageHeader').should('be.visible');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');

     })
 
       
     it('Неверный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); 

        cy.get('#mail') .type ('german@dolnikov.ru');
        cy.get('#pass') .type ('гавгавгав1');
        cy.get('#loginButton').click();   

        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');

    })

   
    it('Верный пароль и неверный логин', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); 

        cy.get('#mail') .type ('perelman@dolnikov.ru');
        cy.get('#pass') .type ('iLoveqastudio1');
        cy.get('#loginButton').click();   

        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');

    })
 
    it('Проверка собачки в логине', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); 

        cy.get('#mail') .type ('germandolnikov.ru');
        cy.get('#pass') .type ('iLoveqastudio1');
        cy.get('#loginButton').click();   

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');

    })


    it('Проверка восстановления пароля ', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); 

        cy.get('#forgotEmailButton').click();   
        cy.get('#mailForgot') .type ('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click(); 
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');

    })

    it('Верный пароль и логин с строчными буквами', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); 

        cy.get('#mail') .type ('GerMan@Dolnikov.ru');
        cy.get('#pass') .type ('iLoveqastudio1');
        cy.get('#loginButton').click();   

        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');

    })

 })
 
 //найти поле логин ввести правилтный логин +
 //нацти поле пароль и ввести правильный пароль
 //найти поле войти и нажать войти
 //проверить что авторизация прошла успешно
 