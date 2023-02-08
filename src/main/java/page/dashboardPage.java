package page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class dashboardPage {
WebDriver driver;
@FindBy (how = How.XPATH, using = "//*[@id=\"side-menu\"]/li[10]/a") WebElement Bank_Cash;
@FindBy (how = How.XPATH , using = "//*[@id=\"side-menu\"]/li[10]/ul/li[1]/a") WebElement New_Account_Button;

public void BankAcctClick() {
	Bank_Cash.click();
}
public void NewAcctClick() {
	New_Account_Button.click();
}

}

