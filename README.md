**Google Maps Restaurant Scraper (Selenium + BeautifulSoup)**
📌 **Overview**

This project automates the extraction of details from Google Maps search results using Selenium and BeautifulSoup.
It scrolls through listings automatically, clicks each search results, extracts details, and stores them in a CSV file.

🎯 **Features**

Automates Google Maps search ->
Clicks each restaurant tile dynamically ->
Extracts:(
Restaurant Name
Address
Website
Phone Number) ->
Handles infinite scrolling
Saves data into a CSV file

▶️ **How It Works**

Opens Google Maps with a search query (eg:restaurant in chennai) ->
Detects search data for (eg:restaurant tiles) ->
Clicks each new listing ->
Extracts details from the place panel ->
Appends results to CSV ->
Scrolls until no new listings are found 

🛠️ **Tech Stack**

Python, 
Selenium,
BeautifulSoup (bs4),
Pandas,
ChromeDriver
