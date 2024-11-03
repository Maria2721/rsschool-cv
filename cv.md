# Maria Ivanova

### Contact Information

-   **Phone:** +7 911 7911771
-   **E-mail:** <mariiaivvas@gmail.com>
-   **Telegram:** [@immarusya](https://t.me/immarusya)
-   **GitHub:** [Maria2721](https://github.com/Maria2721)
-   **Codewars:** [Maria2701](https://www.codewars.com/users/Maria2701)

### About Me

I take on complex tasks with interest, I like to dig into the code and rack my brains over possible solutions. In Frontend development, I am primarily attracted by the opportunity to see the results of my work every day, which charges me with interest and the desire to move forward, to create new, higher-quality products. I am especially impressed by the variety of tasks and exciting projects, working on which simultaneously brings pleasure and professional development.

### Skills

-   HTML5
-   CSS3
-   SASS
-   GIT
-   JavaScript
-   React
-   Redux, Redux Toolkit
-   Vite
-   Next.js

### Code Example

[**Adding Big Numbers Kata from Codewars:**](https://www.codewars.com/kata/525f4206b73515bffb000b21)
We need to sum big numbers and we require your help.
Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

```javascript
const add = (a, b) => {
	if (a.length > b.length) {
		let diff = a.length - b.length;
		for (let i = 0; i < diff; i++) {
			b = "0" + b;
		}
	} else if (a.length < b.length) {
		let diff = b.length - a.length;
		for (let i = 0; i < diff; i++) {
			a = "0" + a;
		}
	}

	let result = "";
	let rank = 0;
	for (let i = a.length - 1; i >= 0; i--) {
		let curSum = Number(a.charAt(i)) + Number(b.charAt(i)) + rank;
		if (curSum > 9) {
			rank = parseInt(curSum / 10);
			curSum = curSum % 10;
		} else {
			rank = 0;
		}
		result = String(curSum) + result;
		if (i === 0 && rank !== 0) {
			result = rank + result;
		}
	}

	return result;
};
```

### Education

-   **Peter the Great St. Petersburg Polytechnic University, 2022**
    -   Mechanics and mathematical modeling of media with microstructure
-   **ITGIRLSCHOOL, 2022**
    -   Frontend developer
-   **Stepik, 2023**
    -   Redux for managing state in React applications

### Experience

-   **Exim Partners, 2022-2023**
    -   Frontend developer, developed web applications using the React library
-   **Pet-projects, since 2023**
    -   Worked on developing applications both alone and in a team

### Languages

-   **English** - Pre-Intermediate
-   **Russian** - Native
