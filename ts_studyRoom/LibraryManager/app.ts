class HelloWorld {
    constructor(public message: string) { }
}

var hello = new HelloWorld('Hello TypeScript');
console.log(hello.message);
console.log("new message");
//vscode includes built in task runner, could connect grunt or gulp
