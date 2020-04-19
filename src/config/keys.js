
import dev from "./dev";

let keys = {};
if(process.env.NODE_ENV === "development") {
    // we're in development - send dev keys
    keys = dev;
} else {
    // we're in production - send prod keys
}

export default keys;