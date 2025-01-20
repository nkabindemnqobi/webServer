const handler = async () => {
    const response = {
        status: 200,
        body: "Hello Cruel World"
    };
    return response;
};
module.exports = {handler};