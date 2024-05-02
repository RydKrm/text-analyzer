const asyncHandler = require('express-async-handler');
const Text = require("../models/Text");
import express, { Express, Request, Response } from "express";

exports.textAdd = asyncHandler(async (req: Request, res: Response) => {
    const { text } = req.body;
    const newText = await Texts.create({ text });
    if (newText) res.json({
        status: true,
        message: "Text Created"
    })
})