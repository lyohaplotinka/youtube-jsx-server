import expressJsx from "./index";

export function Get({ url, handler }) {
    const task = expressJsx.createTask('get', url, handler);
    expressJsx.tasks.routes.push(task);
    return { url, handler };
}

export function Middleware({ handler, children }) {
    for (const child of children) {
        const task = expressJsx.createTask('use', child.url, handler);
        expressJsx.tasks.middlewares.push(task);
    }
}

export function Server({ host = 'localhost', port = 3000 }) {
    const tasks = expressJsx.tasks.middlewares.concat(expressJsx.tasks.routes);

    tasks.forEach(({ command, args }) => {
        expressJsx.app[command](...args);
    });

    expressJsx.app.listen(port, host, () => {
        console.log(`Server is listening on http://${host}:${port}`);
    });
}