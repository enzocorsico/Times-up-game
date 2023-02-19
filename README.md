## Table of Contents
- [Install](#install)
- [Example](#example)
  - [Words](#round)
  - [Players](#players)
  - [Rounds](#rounds)

## Install
```bash
$ npm install @enzo_corsico/times-up-game
```

Once the package is installed, you can import the library using `import` approach :
```js
import { TimesUp } from '@enzo_corsico/times-up-game';
```

## Example

```js
import { TimesUp } from '@enzo_corsico/times-up-game';

const timesUp = new TimesUp();

// Let's add some Words
timesUp.setWords(["Word 1", "Word 2", "Word 3"]);

// Let's add some Players
timesUp.setPlayers([
  {
    name: "Player 1",
    score: 0,
    team: 1
  },
  {
    name: "Player 2",
    score: 0,
    team: 1
  },
  {
    name: "Player 3",
    score: 0,
    team: 2
  },
  {
    name: "Player 4",
    score: 0,
    team: 2
  }
]);
```

- #### Words
  - Get the words
    ```js
    timesUp.getWords();
    // ["Word 1", "Word 2", "Word 3"]
    ```

  - Set the words
    ```js
    timesUp.setWords(["Word 1", "Word 2", "Word 3"]);
    ```

  - Add one word
    ```js
    timesUp.addWord("Word to add");
    ```

  - Delete one word
    ```js
    timesUp.removeWord("Word 1");
    ```

- #### Players
  - Get the players
    ```js
    timesUp.getPlayers();
    // [
    //  {
    //    name: "Player 1",
    //    score: 0,
    //    team: 1
    //  },
    //  {
    //    name: "Player 2",
    //    score: 0,
    //    team: 1
    //  },
    //  {
    //    name: "Player 3",
    //    score: 0,
    //    team: 2
    //  },
    //  {
    //    name: "Player 4",
    //    score: 0,
    //    team: 2
    //  }
    // ]
    ```
  
  - Set the players
    ```js
    timesUp.setPlayer([
      {
        name: "Player 1",
        score: 0,
        team: 0
      }
    ]);
    ```
  
  - Add one player
    ```js
    timesUp.addPlayer({
      name: "Player 2",
      score: 0,
      team: 0
    });
    ```
  
  - Remove one player
    ```js
    timesUp.removePlayer({
      name: "Player 2",
      score: 0,
      team: 0
    });
    ```

- #### Rounds
  - Get round number
    ```js
    timesUp.getRound();
    // 1
    ```

  - Set round number
    ```js
    timesUp.setRound(1);
    ```
  
  - Next round
    ```js
    // Increment the current round by one
    timesUp.nextRound();
    ```