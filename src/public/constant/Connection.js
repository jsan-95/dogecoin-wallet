const Connection = {
    protocol: "http:",
    host: document.location.hostname,
    port: "3000",
    endpoint: "",

    get url() {
        const { protocol, host, port, endpoint } = this;
        return `${protocol}//${host}:${port}/${endpoint}`;
    }
};

export default Connection;