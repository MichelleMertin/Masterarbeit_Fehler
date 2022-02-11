import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import NewChoices from "../components/NewChoices";
import Choices from "../components/Choices";
import Genre from "../components/Genre";
import Book from "../components/Book";
import Help from "../components/Help";
import Author from "../components/Author";

const botName = "Luca";

const config = {
  botName: botName,
  initialMessages: [
    createChatBotMessage(
      `Hallo, ich bin ${botName}, dein Empfehlungssystem. Ich würde dir gerne bei deiner Suche behilflich sein und dir Bücher empfehlen.`
    ),
    createChatBotMessage(`Wonach möchtest du suchen?`, {
      widget: "help"
    })
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E"
    },
    chatButton: {
      backgroundColor: "#376B7E"
    }
  },
  widgets: [
    {
      widgetName: "help",
      widgetFunc: (props) => <Help {...props} />
    },
    {
      widgetName: "genre",
      widgetFunc: (props) => <Genre {...props} />
    },
    {
      widgetName: "author",
      widgetFunc: (props) => <Author {...props} />
    },
    {
      widgetName: "book",
      widgetFunc: (props) => <Book {...props} />
    },
    {
      widgetName: "choices",
      widgetFunc: (props) => <Choices {...props} />
    },
    {
      widgetName: "newChoices",
      widgetFunc: (props) => <NewChoices {...props} />
    }
  ]
};

export default config;
