@FunctionalityFeature
Feature: Techfios bank and cash New Account Functionality 

@HWScenario
Scenario Outline: User should be able to login with valid credentials 
	and open a new account	
	Given User is on the techfios login page 
	When User enters the "<username>" in "userName"field
	When User enters the "<password>" in "passWord"field
	And  User clicks on"login" 
	Then User should land on Dashboard page 
	And User clicks on"bankCash"
	And User clicks on"newAccount"
	And User enters"<accountTitle>" in "account"field 
	And User enters"<description>" in "description"field 
	And User enters"<initialBalance>" in "initialBalance"field 
	And User enters"<accountNumber>" in "accountNumber"field 
	And User enters"<contactPerson>" in "contactPerson"field 
	And User enters"<Phone>" in "phone"field 
	And User enters"<internetBankingURL>" in "internetBankingUrl"field 
	And User clicks on"submit"
	Then User should be able to validate account created successfully
	
	Examples:
	|username|password|accountTitle|description|initialBalance|accountNumber|contactPerson|Phone|internetBankingURL|
	|demo@techfios.com|abc123|Broke Boy|Savings|250|12345166|Troy Aikman|4691231234|www.bofa.com|
	