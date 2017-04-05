var HelloWorld = (function () {
    function HelloWorld(message) {
        this.message = message;
    }
    return HelloWorld;
}());
var hello = new HelloWorld('Hello TypeScript');
console.log(hello.message);
console.log("new message");
//vscode includes built in task runner, could connect grunt or gulp
//# sourceMappingURL=app.js.map