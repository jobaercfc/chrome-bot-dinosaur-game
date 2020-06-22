Runner.prototype.gameOver = function(){
    var setMaxScore = 300; //set your desired score
    // Update the high score.
    if (this.distanceRan >= setMaxScore*40) {
        this.saveHighScore(this.distanceRan);
        this.playSound(this.soundFx.HIT);
        vibrate(200);

        this.stop();
        this.crashed = true;
        this.distanceMeter.achievement = false;

        this.tRex.update(100, Trex.status.CRASHED);

        // Game over panel.
        if (!this.gameOverPanel) {
          if (this.canvas) {
            this.gameOverPanel = new GameOverPanel(this.canvas,
                this.spriteDef.TEXT_SPRITE, this.spriteDef.RESTART,
                this.dimensions);
          }
        } else {
          this.gameOverPanel.draw();
        }
        // Reset the time clock.
        this.time = getTimeStamp();
    }
}