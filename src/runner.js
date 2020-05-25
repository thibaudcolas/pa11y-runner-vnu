const { spawnSync } = require("child_process");

const runner = {
  // Update this when an API-compatible Pa11y gets released.
  supports: "^6.0.0-alpha || ^6.0.0-beta",
  // Needs to be defined even if this runner does not rely on any scripts.
  scripts: [],
  // needs to be defined even though it’s empty.
  run: () => {},
};

runner.processPage = async (page) => {
  const html = await page.content();
  let messages = [];
  try {
    const { stderr } = spawnSync(
      "vnu",
      ["--exit-zero-always", "--format", "json", "-"],
      {
        input: html,
        windowsHide: true,
      },
    );
    const result = JSON.parse(stderr);
    messages = result.messages;
  } catch (e) {
    return [];
  }

  const typeMap = {
    error: "error",
    info: "notice",
  };

  return messages.map((message) => ({
    // There are no error codes in the validator.
    code: "html-validation",
    message: message.message,
    type: typeMap[message.type],
    context: message.extract,
    // There is no selector provided by the validator.
    selector: "",
    runnerExtras: {
      // Not entirely sure how useful these are. To de-dupe issues perhaps?
      // lastLine: message.lastLine,
      // firstColumn: message.firstColumn,
      // lastColumn: message.lastColumn,
    },
  }));
};

module.exports = runner;
