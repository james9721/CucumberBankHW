package steps;

import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import page.AccountPage;
import page.LoginPage;
import page.TestBase;
import page.dashboardPage;

public class bankAndCashSteps extends TestBase {

	LoginPage loginPage;
	dashboardPage dbPage;
	AccountPage acctPage;

	@Before
	public void setUp() {
		initDriver();
		loginPage = PageFactory.initElements(driver, LoginPage.class);
		dbPage = PageFactory.initElements(driver, dashboardPage.class);
		acctPage = PageFactory.initElements(driver, AccountPage.class);

	}

	@Given("^User is on the techfios login page$")
	public void user_is_on_the_techfios_login_page() {
		driver.get("https://www.techfios.com/billing/?ng=admin/");

	}

	@When("^User enters the \"([^\"]*)\" in \"([^\"]*)\"field$")
	public void user_enters_the_in_field(String loginData, String fieldName) {
		switch (fieldName) {
		case "userName":
			loginPage.enterUserName(loginData);
			try {
				Thread.sleep(1000);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
			break;
		case "passWord":
			loginPage.enterPassword(loginData);
			try {
				Thread.sleep(1000);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
			break;
		default:
			System.out.println("Unable to enter '" + loginData + "' data");
		}
	}

	@And("^User clicks on\"([^\"]*)\"")
	public void user_clicks_on_on(String button) {
		switch (button) {
		case "login":
			loginPage.clickSignInButton();
			break;
		case "bankCash":
			dbPage.BankAcctClick();
			break;
		case "newAccount":
			dbPage.NewAcctClick();
			break;
		case "submit":
			acctPage.clickSubmit();
			break;
		default:
			System.out.println("Unable to enter login data");
		}

	}

	@Then("^User should land on Dashboard page$")
	public void user_should_land_on_Dashboard_page() {
		if (loginPage.getPageTitle().contentEquals("Dashboard- iBilling1"))
			System.out.println("TITLE MATCHED");
		System.out.println(loginPage.getPageTitle());
		takeScreenshots(driver);
	}

	@Then("^User enters\"([^\"]*)\" in \"([^\"]*)\"field$")
	public void user_enters_in_field(String accountData, String fieldName) throws Throwable {
		switch (fieldName) {
		case "account":
			acctPage.enterAccountTitle(accountData);
			break;
		case "description":
			acctPage.enterDescription(accountData);
			break;
		case "initialBalance":
			acctPage.enterInitialBalance(accountData);
			break;
		case "accountNumber":
			acctPage.enterAccountNumber(accountData);
			break;
		case "contactPerson":
			acctPage.enterContactPerson(accountData);
			break;
		case "phone":
			acctPage.enterPhoneNum(accountData);
			break;
		case "internetBankingUrl":
			acctPage.enterInternerBankingUrl(accountData);
			break;
		default:
			System.out.println("Unable to enter login data");

		}
	}

	@Then("^User should be able to validate account created successfully$")
	public void user_should_be_able_to_validate_account_created_successfully() {
		if (acctPage.validateCreate()
				.contentEquals("Account Created Successfully. Error: Invalid URL. URL Not Updated.")) {
			System.out.println("Account Created");
			takeScreenshots(driver);
		}
	}

	@After
	public void tearDown() {
		driver.close();
		driver.quit();
	}
}
