package page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class AccountPage extends BasePage {
	WebDriver driver;

	@FindBy(how = How.XPATH, using = "//*[@id=\"account\"]")
	WebElement Account_Title_Box;
	@FindBy(how = How.XPATH, using = "//*[@id=\"description\"]")
	WebElement Description_Box;
	@FindBy(how = How.XPATH, using = "//*[@id=\"balance\"]")
	WebElement Initial_Balance_Box;
	@FindBy(how = How.XPATH, using = "//*[@id=\"account_number\"]")
	WebElement Acct_Number_Box;
	@FindBy(how = How.XPATH, using = "//*[@id=\"contact_person\"]")
	WebElement Contact_Person_Box;
	@FindBy(how = How.XPATH, using = "//*[@id=\"contact_phone\"]")
	WebElement Phone_Box;
	@FindBy(how = How.XPATH, using = "//*[@id=\"ib_url\"]")
	WebElement Bank_URL_Box;
	@FindBy(how = How.XPATH, using = "//*[@id=\"page-wrapper\"]/div[3]/div[1]/div/div/div[2]/form/button")
	WebElement Submit_Box;
	@FindBy(how = How.XPATH, using = "//*[@id=\"page-wrapper\"]/div[3]/div[1]")
	WebElement Account_created;

	public void enterAccountTitle(String account) {
		Account_Title_Box.sendKeys(account + generateRndomNum(999));
	}

	public void enterDescription(String description) {
		Description_Box.sendKeys(description);
	}

	public void enterInitialBalance(String balance) {
		Initial_Balance_Box.sendKeys(balance);
	}

	public void enterAccountNumber(String AcctNumber) {
		Acct_Number_Box.sendKeys(AcctNumber);
	}

	public void enterContactPerson(String ContactPerson) {
		Contact_Person_Box.sendKeys(ContactPerson);
	}

	public void enterPhoneNum(String PhoneNumber) {
		Phone_Box.sendKeys(PhoneNumber);
	}

	public void enterInternerBankingUrl(String BankingURL) {
		Bank_URL_Box.sendKeys(BankingURL);
	}

	public void clickSubmit() {
		Submit_Box.click();

	}
	public String validateCreate() {
		return Account_created.getText();
	}

}
