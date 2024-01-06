# Prisoner's Dilemma : Game Theory Illustrated

## Introduction
This project is an interactive web application that simulates the classic game theory scenario known as the Prisoner's Dilemma.
Game theory is a theoretical framework for conceiving social situations among competing players. It attempts to predict the outcomes of interactions where participants have conflicting interests, often with the goal of finding the optimal decision-making strategy.
In the Prisoner's Dilemma, two prisoners must decide whether to betray the other or remain silent. The outcome depends on the decisions of both, acting independently, illustrating the interdependence typical in game theory. Game theory applies to the decisions of opponents, and it differs from decision theory, which typically applies to an individual decision-maker.

## Project Overview
The Prisoner's Dilemma Simulation is a simple web application that simulates a decision-making scenario based on game theory principles. It allows users to play against a computer-controlled opponent in a series of decision-making rounds. The user will make a choice (e.g., "Cooperate" or "Defect"), and the program will simulate the other player's choice, displaying the outcome. The application demonstrates the outcomes of cooperation versus defection and provides insights into game theory principles.
The application will also educate users on the concepts of Nash Equilibrium and dominant strategies by allowing users to set game strategies through an engaging, user-friendly interface.

### Good to know
- **Nash Equilibrium**, named after mathematician John Nash, is a concept within game theory. It represents a situation in a game where each player has chosen a strategy, and no player can benefit by changing their strategy while the other players keep theirs unchanged. Essentially, it's a state where every participant's choice is optimal, given the choices of others.
    - It can occur in non-cooperative games where players decide independently.
    - There can be more than one Nash Equilibrium in a game.
    - It does not necessarily mean the best overall outcome; rather, it’s a state of mutual best response.
- A **dominant strategy** is a strategy that is the best choice for a player, regardless of what strategies other players choose. If a player has a dominant strategy, they will always choose it because it yields the highest payoff in every possible scenario.
    - It's a strategy that results in a better outcome for a player in all circumstances.
    - Not all games have a dominant strategy for every player.
--------------------------------------
**Dominant Strategy:** Focuses on the best individual strategy without considering the strategies of others. It's about the best unilateral move.
**Nash Equilibrium:** Involves a situation where players' strategies are in mutual best response to each other. It's about the best collective outcome given the strategies of others.
- A game can have a dominant strategy but not a Nash Equilibrium and vice versa.
- In some games, the use of dominant strategies by all players can lead to a Nash Equilibrium.
---------------------------------------
**Dominant Strategy in the Prisoner's Dilemma:** Each prisoner defects (betray the other). This is because defecting offers a better payoff (or a lesser sentence) no matter what the other prisoner chooses.

**Nash Equilibrium in the Prisoner's Dilemma:** Occurs when both prisoners choose their dominant strategy of defecting. This is a stable state since no prisoner can improve their situation by changing their strategy unilaterally, even though both would be better off if they both cooperated.

**Illustration of the Difference:**
The dominant strategy focuses on the *individual’s best choice* (defect) in isolation of the other’s choice.
The Nash Equilibrium shows the outcome when both prisoners follow their dominant strategies, resulting in a *stable but suboptimal outcome* for both.

## User Stories
- As a user, I want to understand the basics of game theory.
- As a student, I'm interested in seeing how I can play the Prisoner's Dilemma in practice.
- As a teacher, I want a tool to illustrate strategic decision-making in an interactive way.

## Design

### Responsive Design
The application is fully responsive, providing a seamless experience on devices of various sizes, from mobile phones to desktop computers.

### Color Scheme
The color scheme is minimalistic, with a focus on blue and grey tones, ensuring readability and a professional appearance.

### Font Choice
We've chosen a clean, sans-serif font for its readability and modern feel.

### Icons
Icons are used sparingly, primarily for navigational elements and to enhance user interaction.

### Wireframes
(Include wireframe images or links here, if available.)

## Website Structure and Features
- **Interactive Game Grid**: Users interact with a grid to select their moves.
- **Dynamic Score Display**: Real-time updates of game scores and statistics.
- **Strategy Selection**: Users can choose different strategies for the computer opponent.
- **Graphical Statistics**: Visual representation of game outcomes using charts.

## Technologies Used
- HTML5
- CSS3
- JavaScript
- Chart.js (for graphical representations)

## Testing and Validation
The application has been thoroughly tested across multiple browsers and devices. The code has been validated using W3C Validator.

## Bugs

### Resolved Bugs
- Issue with spacing in text animation resolved by using non-breaking spaces.

### Unresolved Bugs
- (List of known issues that haven't been resolved.)

## Deployment

### Local Setup
To set up this project locally:
1. Clone the repository to your local machine.
2. Open the `index.html` file in a web browser.

## Contributions
Contributions to this project are welcome. Please fork the repository and open a pull request with your proposed changes.

## License
This project is released under the [MIT License](LICENSE.txt).

## Acknowledgement

### Code Inspiration
The project was inspired by classical game theory literature and other educational tools like:
- Youtube

### Media
FontAwesome
