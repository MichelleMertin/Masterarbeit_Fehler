class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.state = {
      author: "Tom Clancy"
      //genre: "",
      //index: 0,
      //book: {}
    };
  }

  greet = () => {
    const message = this.createChatBotMessage("Hello friend.");
    this.addMessageToState(message);
  };

  antwort = () => {
    const message = this.createChatBotMessage("Mir gehts gut und dir?");
    this.addMessageToState(message);
  };

  chooseGenre = () => {
    const message = this.createChatBotMessage(
      "Aus welchem Genre soll das Buch sein? Wenn du nach einem anderen Genre suchst, tippe den Namen ein.",
      {
        widget: "genre"
      }
    );
    this.addMessageToState(message);
  };

  //genreHandler = (chosenGenre) => { //wird bei der Autorauswahl aufgerufen und nicht chooseAuthor
  //this.setState({genre: chosenGenre});
  //this.chooseAuthor();
  //und dann muss man der Function nix übergeben, sondern nur let genre = this.state.genre
  //und nach der Kritik kann man dann einfach nur chooseAuthor aufrufen
  //}

  chooseAuthor = () => {
    const message = this.createChatBotMessage(
      "Von welchem Autor soll das Buch sein? Wenn du nach einem anderen Autor suchst, tippe den Namen ein.",
      {
        widget: "author"
      }
    );
    this.addMessageToState(message);
  };

  async fetchBookHandler(aspect) {
    let name = aspect;
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${this.state.author}&orderBy=newest&maxResults=3`
    );
    const data = await response.json();
    const transformedData = data.items.map((bookData) => {
      return {
        id: bookData.id,
        title: bookData.volumeInfo.title,
        author: bookData.volumeInfo.authors
      };
    });
    console.log(transformedData);
    //this.setState({book: transformedData[this.state.index]});
    //this.setState({index: +=1});
  }

  recommend = (chosenAspect) => {
    this.setState({ author: chosenAspect });
    let aspect = chosenAspect;
    this.fetchBookHandler(aspect);
    //this.props.BookStore.onFetchBooks();
    const message = this.createChatBotMessage("Mein Vorschlag für dich:");
    this.addMessageToState(message);
    const message2 = this.createChatBotMessage(
      "Wie möchtest du fortfahren? Möchtest du das Buch kaufen? Du kannst mir auch sagen, was dir an der Empfehlung nicht gefällt. Oder du kannst die Suche beenden.",
      {
        widget: "choices"
      }
    );
    this.addMessageToState(message2);
  };

  buyBook = () => {
    const message = this.createChatBotMessage(
      "Prima! Ich habe das Buch in deinen Warenkorb gelegt."
    );
    this.addMessageToState(message);
    const message2 = this.createChatBotMessage(
      "Möchtest du noch ein Buch kaufen?",
      {
        widget: "newChoices"
      }
    );
    this.addMessageToState(message2);
  };

  endConv = () => {
    const message = this.createChatBotMessage(
      "Vielen Dank für deinen Besuch. Bis bald!"
    );
    this.addMessageToState(message);
    const message2 = this.createChatBotMessage(
      "Kehre nun zum Fragebogen zurück."
    );
    this.addMessageToState(message2);
  };

  addMessageToState = (message) => {
    // NOTE: This function is set in the constructor, and is passed in
    // from the top level Chatbot component. The setState function here
    // actually manipulates the top level state of the Chatbot, so it's
    // important that we make sure that we preserve the previous state.
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message]
    }));
  };
}

export default ActionProvider;
