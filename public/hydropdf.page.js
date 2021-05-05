(() => {
    const { AutoloadPage } = window.Hydro;
    const { $ } = window.node_modules;

    const page = new AutoloadPage('hydropdf', async () => {
        $('div[data-hpdf]').get().forEach(async (element) => {
            const id = `pdf-${Math.random().toString()}`;
            $(element).attr('id', id);
            const url = new URL($(element).text(), window.location.href);
            const iframe = document.createElement('iframe');
            iframe.src = `/hydro.pdf/${encodeURIComponent(encodeURIComponent(url)).replace(/'/g, "\\'")}`;
            iframe.width = '100%';
            iframe.style.minHeight = '100vh';
            iframe.style.border = 'none';
            $(element).html('').append(iframe);
        });
    });

    window.Hydro.extraPages.push(page);
})();
