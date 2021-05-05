const { Route, Handler } = global.Hydro.service.server;

class HydroPDFHandler extends Handler {
    async get({ url }) {
        this.response.body = { url: decodeURIComponent(url) };
        this.response.template = 'viewer.html';
    }
}

async function apply() {
    Route('hydro_pdf', '/hydro.pdf/:url', HydroPDFHandler);
}

global.Hydro.handler['hydro.pdf'] = apply;
