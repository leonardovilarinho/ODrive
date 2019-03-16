const EventEmitter = require('events');

class Globals extends EventEmitter {
  constructor() {
    super();

    this.win = null;
    this.db = null;
    this.args = null;
    this.api = "985525764653-m9dr93l4sme1ggp89fl28fopjas3equc.apps.googleusercontent.com";
    this.secret = "did-JgyKIPUtVU2J5Hi2a2ES";
    this.port = process.env.port || 16409;
    this.connected = true;
    this.syncing = false;
    this.autorun = false;
  }

  updateTray() {
	  this.emit('updateTray');
  }

  updateConnectivity(isConnected) {
    if (isConnected == this.connected) {
      return false;
    }

    console.log("Updated connection status");
    this.connected = isConnected;
    this.emit("connectivity", isConnected);
  }

  updateSyncing(syncing) {
    if (this.syncing === syncing) {
      return false;
    }

    console.log("Updated syncing status");
    this.syncing = syncing;
    this.emit("syncing", syncing);
  }

  set autorun(val) {
    this._autorun = val;
    this.emit('updateAutorun');
  }

  get autorun() {
    return this._autorun;
  }
}

module.exports = new Globals();
