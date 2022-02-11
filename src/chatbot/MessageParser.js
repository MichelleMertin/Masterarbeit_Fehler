class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    console.log(message);
    const lowercase = message.toLowerCase();

    if (lowercase.includes("hello")) {
      this.actionProvider.greet();
    }

    if (
      lowercase.includes("wie geht's") ||
      lowercase.includes("wie geht es dir")
    ) {
      this.actionProvider.antwort();
    }

    if (
      lowercase.includes("fantasy") ||
      lowercase.includes("krimi") ||
      lowercase.includes("liebesroman") ||
      lowercase.includes("sci-Fi") ||
      lowercase.includes("kinderbuch")
    ) {
      this.actionProvider.chooseGenre();
    }

    if (lowercase.includes("javascript") || lowercase.includes("js")) {
      this.actionProvider.handleJavascriptQuiz();
    }
  }
}

export default MessageParser;
