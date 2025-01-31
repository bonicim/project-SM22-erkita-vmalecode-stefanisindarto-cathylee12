const { default: mongoose } = require("mongoose");
const deck = require("../models/deck.js");
const Flashcard = require("../models/flashcard.js");

async function createCard(req, res) {
  const newCard = new Flashcard({

    front: req.body.front,
    back: req.body.back,
  });
  try {
    await newCard.save();
    res.status(201).json(newCard);
    return newCard._id;
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
}

async function getCard(req, res) {
  const { id } = req.params;
  try {
    const card = await Flashcard.findById(id);
    res.status(200).json(card);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
}

async function getCards(req, res) {
  try {
    const deckId = req.params.id;
    const cards = await Flashcard.find({ deckId: deckId });
    res.status(200).json(cards);
    return cards;
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
}

async function getCardRecallability(req, res) {
  const { id } = req.params;
  try {
    const card = await Flashcard.findById(id);
    res.status(200).json(card.recallabiclity);
    return card.recallabiclity;
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
}

async function getFront(req, res) {
  const { id } = req.params;
  try {
    const card = await Flashcard.findById(id);
    res.status(200).json(card.front);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
}

async function getBack(req, res) {
  const { id } = req.params;
  try {
    const card = await Flashcard.findById(id);
    res.status(200).json(card.back);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
}

async function deleteCard(req, res) {
  const { id } = req.params;
  try {
    await Flashcard.findByIdAndRemove(id);
    res.status(200).json({ message: "Card deleted successfully" });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
}

async function updateFront(req, res) {
  const { id } = req.params;
  try {
    const card = await Flashcard.findById(id);
    card.front = req.body.front;
    await card.save();
    res.status(200).json(card);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
}

async function updateBack(req, res) {
  const { id } = req.params;
  try {
    const card = await Flashcard.findById(id);
    card.back = req.body.back;
    await card.save();
    res.status(200).json(card);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
}

async function updateRecallability(req, res) {
  const { id } = req.params;
  try {
    const card = await Flashcard.findById(id);
    card.recallability = req.body.recallability;
    await card.save();
    res.status(200).json(card);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
}

module.exports = {
  createCard,
  getCard,
  getCards,
  getCardRecallability,
  getFront,
  getBack,
  deleteCard,
  updateFront,
  updateBack,
  updateRecallability,
};
