import { Player } from "./Player.interface";

export interface TimesUpConstructor {
  words?: string[];
  players?: Player[];
  round?: number;
}

export class TimesUp {
  private words: string[];
  private players: Player[];
  private round: number;

  constructor(params?: TimesUpConstructor) {
    this.words = params?.words || [];
    this.players = params?.players || [];
    this.round = params?.round || 0;
  }

  /**
   * Get the words for the game.
   * @returns {string[]} - Array of words.
   * @example
   * const timesUp = new TimesUp();
   * timesUp.getWords();
   * // => ['Word 1', 'Word 2']
   */
  public getWords(): string[] {
    return this.words;
  }

  /**
   * Set the words for the game.
   * @param {string[]} words - Array of words.
   * @returns {void}
   * @example
   * const timesUp = new TimesUp();
   * timesUp.setWords(['Word 1', 'Word 2']);
   */
  public setWords(words: string[]): void {
    this.words = words;
  }

  /**
   * Add a word to the game.
   * @param {string} word - Word to add.
   * @returns {void}
   * @example
   * const timesUp = new TimesUp();
   * timesUp.addWord('Word 1');
   */
  public addWord(word: string): void {
    this.words.push(word);
  }
  
  /**
   * Remove a word from the game.
   * @param {string} word - Word to remove.
   * @returns {void}
   * @example
   * const timesUp = new TimesUp();
   * timesUp.removeWord('Word 1');
   */
  public removeWord(word: string): void {
    this.words = this.words.filter((w) => w !== word);
  }

  /**
   * Get the players for the game.
   * @returns {Player[]} - Array of players.
   * @example
   * const timesUp = new TimesUp();
   * timesUp.getPlayers();
   * // => [
   * //  {
   * //    name: 'Player 1',
   * //    score: 0,
   * //    team: 1,
   * //  },
   * //  {
   * //    name: 'Player 2',
   * //    score: 0,
   * //    team: 2,
   * //  }
   * // ]
   */
  public getPlayers(): Player[] {
    return this.players;
  }

  /**
   * Set the players for the game.
   * @param {Player[]} players - Player[] - Array of players.
   * @returns {void}
   * @example
   * const timesUp = new TimesUp();
   * timesUp.setPlayers([
   *  {
   *    name: 'Player 1',
   *    score: 0,
   *    team: 1,
   *  },
   *  {
   *    name: 'Player 2',
   *    score: 0,
   *    team: 2,
   *  }
   * ]);
   */
  public setPlayers(players: Player[]): void {
    this.players = players;
  }

  /**
   * Add a player to the game.
   * @param {Player} player - Player - Player to add.
   * @returns {void}
   * @example
   * const timesUp = new TimesUp();
   * timesUp.addPlayer({
   *  name: 'Player 1',
   *  score: 0,
   *  team: 1,
   * });
   */
  public addPlayer(player: Player): void {
    this.players.push(player);
  }

  /**
   * Remove a player from the game.
   * @param {Player} player - Player - Player to remove.
   * @returns {void}
   * @example
   * const timesUp = new TimesUp();
   * timesUp.removePlayer({
   *  name: 'Player 1',
   *  score: 0,
   *  team: 1,
   * });
   */
  public removePlayer(player: Player): void {
    this.players = this.players.filter((p) => (p.name !== player.name) && (p.team !== player.team));
  }

  /**
   * Get the current round.
   * @returns {number} - Current round.
   * @example
   * const timesUp = new TimesUp();
   * timesUp.getRound();
   * // => 1
   */
  public getRound(): number {
    return this.round;
  }

  /**
   * Set the current round.
   * @param {number} round - Current round.
   * @returns {void}
   * @example
   * const timesUp = new TimesUp();
   * timesUp.setRound(1);
   */
  public setRound(round: number): void {
    this.round = round;
  }

  /**
   * Increment the current round.
   * @returns {void}
   * @example
   * const timesUp = new TimesUp();
   * timesUp.nextRound();
   */
  public nextRound(): void {
    this.round++;
  }
}