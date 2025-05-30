interface Env {
   [key: string]: string
}

const env : Env = { foo: "bar" };

// Type exported is "string" in loose mode and "string | undefined" in strict mode.
export const baz = env.foo;
