Feature: registration to aim chat
   Registration to aim-chat
   Background:
      Given Maximize browser`s window

   Scenario: Verify that user can open the "sign up" page
      Given User goes to AimChat
      When User click on 'Send Request' button
      Then 'Sign up' page is open

   Scenario Outline: Sign up with a different names
      Given User goes to AimChat
      When User click on 'Send Request' button
      When enter <email> and <username>
      And Tap on the Sign up button
      Then Error message: (Invalid email address) is shown

      Examples:
         | email             | username         |
         | qwe@qwe.c         | 123456           |
         | eqw@qwe.c         | 654321           |
         | invalid@mail.c    | qwe123           |
         | also-invalid@1.1  | i4u4hf           |


#   Scenario Outline: Log in with a different names
#      Given User goes to AimChat
#      |testuser1   |qwerty1     |
#      When enter <email> and <username>
#      And Tap on the Sign up button
#      Then Error message: (Invalid email address) is shown

#      Examples:
#      | username          | Password         |
#      | admin@user.com    | 123456           |
#      | user@user         | 6545321          |
#      | notaUser@user.com | user@user.com    |
#      | 888888.com        | admin@user.com   |
##
#   Scenario: Sign in with invalid "Login"
#      Given User goes to AimChat
#      When Enter to the Login field  text (netestuser)
#      And Enter to the Password field text qwerty1
#      And Tap on the Sign in button
#      Then Error message: (Please, enter a valid login and password) is shown
#
#   Scenario: Sign in with invalid "password"
#      Given User goes to AimChat
#      When Enter to the Login field  text (testuser1@email.com)
#      And Enter to the Password field text qwertyNe1
#      And Tap on the Sign in button
#      Then Error message: (Please, enter a valid login and password) is shown
#
#   Scenario: Sign in with invalid "Login" and "Password"
#      Given User goes to AimChat
#      When Enter to the Login field  text (WrongPassword@email.com)
#      And Enter to the Password field text qwertyNe1
#      And Tap on the Sign in button
#      Then Error message: (Please, enter a valid login and password) is shown
#
#
   Scenario: Sign in with valid credentials
      Given User goe to AimChat
      When Enter to the Login field text (testuser1@email.com)
      And Enter to the Password field text qwerty1
      And Tap on the Sign in button
      Then User enters to a chat


