 Questionnaire Web App

A simple React-based questionnaire web application featuring a timer, multiple-choice questions, and instant feedback on answers.

 Features

- 1-Minute Timer: Countdown timer that allows users 60 seconds to answer the question.
- Multiple-Choice Questions: Display one question with four options for the user to select from.
- Selectable Options: Clickable options that highlight the selected choice.
- Instant Feedback: 
  - Correct answers turn green upon submission.
  - Incorrect answers turn red, with the correct answer highlighted in green.
- Submission Handling: 
  - A submit button changes to "Next" after answering.
  - Users can reload the page to retake the questionnaire when the time is up.

 Technologies Used

- React
- CSS

 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Srivastavasanjh123/AISIntern.git
   ```
2. Navigate to the project directory:
   ```bash
   cd myapp
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

 Usage

Open your browser and go to `http://localhost:3000` to access the questionnaire. You will have 1 minute to answer the question presented.

 Code Structure

- src/components/AIS.js: Main component for the questionnaire logic and rendering.
- src/components/AIS.css: Styling for the questionnaire page.

 Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements.
