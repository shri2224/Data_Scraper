from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver import ActionChains
from selenium.webdriver.common.actions.wheel_input import ScrollOrigin
from bs4 import BeautifulSoup
import time
import pandas as pd



def create_empty_csv(filename):
    empty_df = pd.DataFrame(columns=['Name', 'Address', 'Website', 'Phone number'])
    empty_df.to_csv(filename, index=False)

def selenium_extractor(link, filename):
    start_time = time.time()  # Record start time
    browser = webdriver.Chrome()
    record = []
    unique_names = set()
    le = 0

    def scroll_down(action, element):
        scroll_origin = ScrollOrigin.from_element(element)
        action.scroll_from_origin(scroll_origin, 0, 100).perform()

    try:
        browser.get(link)
        time.sleep(10)
        action = ActionChains(browser)
        a = browser.find_elements(By.CLASS_NAME, "hfpxzc")

        while len(a) < 1000:
            print(len(a))
            var = len(a)
            scroll_origin = ScrollOrigin.from_element(a[-1])
            action.scroll_from_origin(scroll_origin, 0, 1000).perform()
            time.sleep(2)
            a = browser.find_elements(By.CLASS_NAME, "hfpxzc")

            if len(a) == var:
                le += 1
                if le > 20:
                    break
            else:
                le = 0

        for i, element in enumerate(a):
            scroll_down(action, element)
            action.move_to_element(element).perform()

            try:
                # Wait for the element to be clickable
                WebDriverWait(browser, 10).until(EC.element_to_be_clickable((By.CLASS_NAME, "hfpxzc")))

                # Click on the element
                element.click()

                time.sleep(2)
                source = browser.page_source
                soup = BeautifulSoup(source, 'html.parser')

                # Extract the restaurant name
                name_html = soup.find('h1', {"class": "DUwDvf lfPIob"})
                name = name_html.text.strip()

                if name not in unique_names:
                    unique_names.add(name)

                    # Extract the address
                    address_html = soup.find('div', {"class": "Io6YTe fontBodyMedium kR99db"})
                    address = address_html.text.strip() if address_html else "Not available"

                    # Extract the website
                    website_html = soup.find('a', {"data-item-id": "authority"})
                    website = website_html['href'].strip() if website_html else "Not available"

                    # Extract the phone number using a different approach
                    phone_html = soup.find('button', {"data-tooltip": "Copy phone number"})
                    phone = phone_html.text.strip() if phone_html else "Not available"

                    if website == "Not available" and phone != "Not available":
                        # Print and record the data
                        print([name, address, website, phone])
                        record.append((name, address, website, phone))

            except Exception as e:
                print("Error:", e)
                continue

            finally:
                scroll_down(action, element)

        df = pd.DataFrame(record, columns=['Name', 'Address', 'Website', 'Phone number'])
        df.to_csv(filename, index=False, mode='a', header=False, encoding='utf-8')

    finally:
        browser.quit()
        end_time = time.time()  # Record end time
        execution_time = end_time - start_time
        print(f"Script execution time: {execution_time} seconds")


from input import get_csv_filename1
from input import get_google_maps_link1

# Specify the file name for the empty CSV file
csv_filename = get_csv_filename1()

# Create an empty CSV file
create_empty_csv(csv_filename)

# Specify the link for Google Maps search
google_maps_link = get_google_maps_link1()

# Run the Selenium script
selenium_extractor(google_maps_link, csv_filename)
