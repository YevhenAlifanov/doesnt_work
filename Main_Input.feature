#Feature: Main input abilities
#
#Background:
#  Given User goes to AimChat
#  When User enters to the chat
#  Then User sees main screen
#
#
#  Scenario: Send a message to chat
#    Given user click in main input
#    When user enter text
#    And send a message
#    Then message goes to chat
#
#  Scenario: Check empty input field should contain (Write a message…) placeholder
#    Given User sees a default message in the main input
#
#  Scenario: Check send message to the public room
#    Given go to public room
#    When user send a message
#    And send a message
#    Then message is shown