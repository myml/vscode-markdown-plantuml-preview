// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  const config = vscode.workspace.getConfiguration();
  const option = {
    server: config.get("markdown.plantuml.server"),
    openMarker: config.get("markdown.plantuml.openMarker"),
    closeMarker: config.get("markdown.plantuml.closeMarker"),
    imageFormat: config.get("markdown.plantuml.imageFormat"),
  };
  console.log(option);
  return {
    extendMarkdownIt(md: any) {
      return md.use(require("markdown-it-plantuml"), option);
    },
  };
}

// this method is called when your extension is deactivated
export function deactivate() {}
