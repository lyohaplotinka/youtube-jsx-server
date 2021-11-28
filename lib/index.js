import express from "express";

const expressJsx = {
    app: express(),
    tasks: {
        routes: [],
        middlewares: [],
    },
    createTask: (command, ...args) => ({ command, args }),
    create(component, props, ...children) {
        const resultProps = Object.assign(props ?? {}, { children });
        return component(resultProps);
    }
}

export default expressJsx;