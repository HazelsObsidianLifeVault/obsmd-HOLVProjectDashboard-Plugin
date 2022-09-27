import { ChildProcess, SendHandle, spawn } from "child_process";
import { Plugin } from "obsidian";

export default class ExamplePlugin extends Plugin {
  async onload() {
    this.registerMarkdownCodeBlockProcessor("holvprojdash", (source, el, ctx) => {
      var pyParams = {};
      var pyResult = '';
      const pyProc = spawn('python', ['src/main.py']);
      pyProc.stdout.on('pyParams', (msg) => 
      {
        console.log(`Recieved msg: ${msg}`)
        pyResult += msg.toString();
      });
      pyProc.stdout.on('end', function(){
        console.log(`Result: ${pyResult}`);
      });
      pyProc.stdin.write(JSON.stringify(pyParams));
      pyProc.stdin.end();
    });
  }
}
