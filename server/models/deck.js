const mongoose = require("mongoose");
const { ObjectId } = require("bson");
const { Flashcard } = require("./flashcard.js");

const deckSchema = mongoose.Schema({
  userId: { type: String },
  name: { type: String, required: true },
  recallabilityPercentage: { type: Number, min: 0, max: 100, default: 0 },
  lastReviewed: { type: Date, default: Date.now },
  dateCreated: { type: Date, default: new Date() },
  cards: [{
          metadata: String,
    front: String,
    back: String,
    dateCreated: { type: Date, default: new Date() },
    deckId: { type: ObjectId },
  }],

});

module.exports = mongoose.model("DeckSchema", deckSchema);
