Feature: Login

  Scenario Outline: UC-1 Test Login form with empty credentials

    Given I am on the login page
    When I type "<username>" into the username field
    And I type "<password>" into the password field
    And I clear the username field
    And I clear the password field
    And I click the login button
    Then I should see a error message saying "<message>"

    Examples:
      | username | password | message                            |
      |          |          | Epic sadface: Username is required |

  Scenario Outline: UC-2 Test Login form with credentials by passing Username

    Given I am on the login page
    When I type "<username>" into the username field
    And I type "<password>" into the password field
    And I clear the password field
    And I click the login button
    Then I should see a error message saying "<message>"

    Examples:
      | username | password | message                            |
      |  aaa     |          | Epic sadface: Password is required |

  Scenario Outline: UC-3 Test Login form with credentials by passing Username & Password
    Given I am on the login page
    When I type "<username>" into the username field
    And I type "<password>" into the password field
    And I click the login button
    Then I should see the correct outcome for "<username>"

    Examples:
      | username                | password     | 
      | standard_user           | secret_sauce |
      | locked_out_user         | secret_sauce |
      | problem_user            | secret_sauce |
      | performance_glitch_user | secret_sauce |
      | error_user              | secret_sauce |
      | visual_user             | secret_sauce |

