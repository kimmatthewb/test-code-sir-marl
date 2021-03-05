import {
  Component,
  ViewChildren,
  ElementRef,
  QueryList,
  AfterViewInit
} from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements AfterViewInit {
  ascendingArray = [1, 3, 5, 7, 9];
  descendingArray = [2, 4, 6, 8, 10].reverse();

  ngAfterViewInit(): void {}

  onAddAscending(): void {
    const indexOfAscending = this.ascendingArray.indexOf(
      this.ascendingArray[0]
    );

    this.descendingArray.push(this.ascendingArray[0]);

    if (indexOfAscending > -1) {
      this.ascendingArray.splice(indexOfAscending, 1);
      this.descendingArray.sort((a, b) => b - a);
    }
  }

  onAddDescending(): void {
    const indexOfDescending = this.descendingArray.indexOf(
      this.descendingArray[this.descendingArray.length - 1]
    );

    this.ascendingArray.push(
      this.descendingArray[this.descendingArray.length - 1]
    );

    if (indexOfDescending > -1) {
      this.descendingArray.splice(indexOfDescending, 1);
      this.ascendingArray.sort((a, b) => a - b);
    }
  }

  refresh(): void {
    this.ascendingArray = [1, 3, 5, 7, 9];
    this.descendingArray = [2, 4, 6, 8, 10].reverse();
  }
}
