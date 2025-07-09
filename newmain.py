from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver import ActionChains
from selenium.webdriver.common.actions.wheel_input import ScrollOrigin
from selenium.webdriver.chrome.service import Service  # <-- for latest Selenium
from bs4 import BeautifulSoup
import time
import pandas as pd


def create_empty_csv(filename):
    """Creates an empty CSV file with headers."""
    empty_df = pd.DataFrame(columns=['Name', 'Address', 'Website', 'Phone number'])
    empty_df.to_csv(filename, index=False)
    print(f"[+] CSV file '{filename}' created.")


def selenium_extractor(link, filename):
    """Extracts data from Google Maps and saves it to CSV."""
    start_time = time.time()

    #  Use your actual ChromeDriver path here
    chromedriver_path = "C:/chromedriver_win32/chromedriver.exe"
    service = Service(chromedriver_path)
    browser = webdriver.Chrome(service=service)

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
            print(f"[+] Loaded {len(a)} places so far...")
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
                WebDriverWait(browser, 10).until(EC.element_to_be_clickable((By.CLASS_NAME, "hfpxzc")))
                element.click()
                time.sleep(2)

                source = browser.page_source
                soup = BeautifulSoup(source, 'html.parser')

                name_html = soup.find('h1', {"class": "DUwDvf lfPIob"})
                if not name_html:
                    continue

                name = name_html.text.strip()

                if name not in unique_names:
                    unique_names.add(name)

                    address_html = soup.find('div', {"class": "Io6YTe fontBodyMedium kR99db"})
                    address = address_html.text.strip() if address_html else "Not available"

                    website_html = soup.find('a', {"data-item-id": "authority"})
                    website = website_html['href'].strip() if website_html else "Not available"

                    phone_html = soup.find('button', {"data-tooltip": "Copy phone number"})
                    phone = phone_html.text.strip() if phone_html else "Not available"

                    if website == "Not available" and phone != "Not available":
                        print(f"[+] {name} | {phone}")
                        record.append((name, address, website, phone))

            except Exception as e:
                print("[!] Error processing entry:", e)
                continue

            finally:
                scroll_down(action, element)

        df = pd.DataFrame(record, columns=['Name', 'Address', 'Website', 'Phone number'])
        df.to_csv(filename, index=False, mode='a', header=False, encoding='utf-8')
        print(f"[✓] Scraping complete. {len(record)} records added to '{filename}'.")

    finally:
        browser.quit()
        end_time = time.time()
        print(f"[✓] Script finished in {round(end_time - start_time, 2)} seconds")


#  Entry point
if __name__ == "__main__":
    print("[*] Starting Google Maps scraper...")

    csv_filename = "restaurants_data.csv"
    google_maps_link = "https://www.google.com/maps/search/restaurants+in+chennai/"

    create_empty_csv(csv_filename)
    selenium_extractor(google_maps_link, csv_filename)

