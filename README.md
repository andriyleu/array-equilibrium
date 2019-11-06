# DialengaTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.17.

# Functionality
All the main functionality described in the PDF regarding this test is completed. This is a project with 2 pages: Info and Calculator. 

- Info: Just plain HTML that displays info about the algorithm

- Calculator: This page is divided in 2 sections: in the left side you have an input where you can add digits (followed by ",") and they will get added into array. This input auto increases width in case the digit is bigger than the default input. There are also 4 buttons that allow you to set an example array, calculate index(es) of equilibrium and to reset the current array. In the right side you can see a table with results that include timestamp, time in seconds that took the calculation, array used and result.

# To improve / Considerations

There are obviously lot of things that could be improven since this is just a simple PoC, for example:

- UI: Even thought this is like a typical simple academic related website (that explains something and let you calculate it) that normally have an "old" look I feel that this could be improved a lot. Few things that bother me: table is not scrollable and with fixed height, and the way the menu of buttons look, both the colors and positioning of them.

- Responsive: The website "is" responsive regarding the viewport, but this has not been checked extensively. Also, in case of smartphones, this should be adaptable, meaning results should be side by side with calculator if the screen has more height than width, it should be below.

- Input validation: There is minimal input validation, relaying on user to write proper inputs.

- Algorithm: There is few ways to develop this algorithm depending on how efficient you want it. I tried to make it efficient calculating the sum of the whole array and then I just substract from it instead of calculating sum by left and right each iteration. Probably there is still more ways to make it more efficient. Had to add a special case when the length of the array was less than 3. But the good thing is that I tried special cases like (900719929876432554740991, 2, 900719929876432554740990, 1) (result: 1) that in other languages would provoke overflow and its working right, same with floats (0.1, 0.2, -0.5, 0.3) (result: 2)


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
