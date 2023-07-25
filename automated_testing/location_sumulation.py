"""
Last modified: 21-07-2023
Modifying author: Stephen Lunt
File description: A standalone Python script that loops through the AD122_RoutePoints.csv
file and enters them into Xcode's iPhone simulator. It was used for automated testing
of the vertical scrollbar on the Guidebook screen. I.e., it simulates the geolocation
updating so to easily see the effect on the UI.
"""

from dataclasses import dataclass
import csv
import pyautogui
import time


@dataclass
class Coordinate:
    """
    Class containing a latitude and longitude point. Float representation is not
    required as the value is only copy/pasted in this program.
    """
    lat: str
    long: str

def main():
    """
    Main func to reads in the CSV file and loop through points.
    """
    route_points = read_in_file()

    pyautogui.FAILSAFE = True
    pyautogui.PAUSE = 0.25

    time.sleep(3)

    for point in route_points:
        time.sleep(1)
        input_on_screen(point)

        
def read_in_file() -> list:
    """
    Reads the CSV file and returns a list each row as a Coordinate class.
    """
    route_points = []
    csv_file_path = "./AD122_RoutePoints.csv"

    with open(csv_file_path, 'r') as csvfile:
        reader = csv.DictReader(csvfile)

        for row in reader:
            route_points.append(Coordinate(row["lat"], row["long"]))

    return route_points


def input_on_screen(point: Coordinate) -> None:
    pyautogui.click(x=355, y=8)
    pyautogui.click(x=415, y=285)
    pyautogui.click(x=605, y=307)

    # Window bottom left corner
    pyautogui.write(point.lat)
    pyautogui.press('tab')
    pyautogui.write(point.long)
    pyautogui.press('tab')
    pyautogui.press('enter')


if __name__ == "__main__":
    main()
