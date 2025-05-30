import { baz } from "../../Baz/src/index";

logString(undefined)

function logString(input: typeof baz): void {
    console.log(input);
}