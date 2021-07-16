Feature: D3A Basic Test Cases
    Execute basic test Cases on D3A

    Background: Login
        Given I login as a Precreated User

    Scenario: Login Precreated User
        Given I am logged in successfully

    Scenario Outline: Create Project
        When I go to Projects page
        * create a new project
        * enter a project name <name>
        * enter a project description <description>
        * save the project
        Then the project <name> is created and listed successfully

        Examples:
            | name              | description                   |
            | "Test Project 11" | "Test Project Description 11" |


    Scenario: Create Simulation
        Given the project is already created
        When I create a simulation "Simulation 11" for the created project
        Then the simulation "Simulation 11" is created and listed successfully