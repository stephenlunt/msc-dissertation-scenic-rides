from dataclasses import dataclass
import csv
import pyautogui
import time


@dataclass
class Point:
    """
    Class containing a latitude and longitude point. Float representation is not
    required as the value is only copy/pasted in this program.
    """
    lat: str
    long: str

def main():
    route_points = read_in_file()

    pyautogui.FAILSAFE = True
    pyautogui.PAUSE = 0.25

    time.sleep(3)

    for point in route_points:
        time.sleep(1)
        input_on_screen(point)

        
def read_in_file() -> list:
    route_points = []
    csv_file_path = "./AD122_RoutePoints.csv"

    with open(csv_file_path, 'r') as csvfile:
        reader = csv.DictReader(csvfile)

        for row in reader:
            route_points.append(Point(row["lat"], row["long"]))

    return route_points


def input_on_screen(point: Point) -> None:
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