const { Route, Handler } = global.Hydro.service.server;
const system = global.Hydro.model.system;

class HydroPDFHandler extends Handler {
    async get({ url }) {
        const path = system.get('hydro-pdf-preview.loadingPath')?.trim();
        const loadingPath = path || '/hydro-pdf';
        this.response.body = { url: decodeURIComponent(url).replace(/\\/g, "\\\\").replace(/'/g, "\\'"), loadingPath };
        this.response.template = 'viewer.html';
    }
}

async function apply() {
    Route('hydro_pdf', '/hydro-pdf/:url', HydroPDFHandler);
}

global.Hydro.handler['hydro-pdf-preview'] = apply;
