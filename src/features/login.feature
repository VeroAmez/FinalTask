Feature: Login

  Scenario: UC-1 Test Login form with empty credentials

    Given I am on the login page
    When I type "" into the username field
    And I type "" into the password field
    And I clear the username field
    And I clear the password field
    And I click the login button
    Then I should see a error message saying "Epic sadface: Username is required"

  Scenario: UC-2 Test Login form with credentials by passing Username

    Given I am on the login page
    When I type "standard_user" into the username field
    And I type "" into the password field
    And I clear the password field
    And I click the login button
    Then I should see a error message saying "Epic sadface: Password is required"

  Scenario Outline: UC-3 Test Login form with credentials by passing Username & Password
    Given I am on the login page
    When I type "<username>" into the username field
    And I type "<password>" into the password field
    And I click the login button
    Then I should see the inventory page

    Examples:
      | username                | password     | 
      | standard_user           | secret_sauce |
      | problem_user            | secret_sauce |
      | performance_glitch_user | secret_sauce |
      | error_user              | secret_sauce |
      | visual_user             | secret_sauce |

  Scenario: UC-4 Locked out user

  Given I am on the login page
  When I type "locked_out_user" into the username field
  And I type "secret_sauce" into the password field
  And I click the login button
  Then I should see a error message saying "Epic sadface: Sorry, this user has been locked out."