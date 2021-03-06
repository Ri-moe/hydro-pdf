(() => {
    const { AutoloadPage } = window.Hydro;
    const { $ } = window.node_modules;

    const page = new AutoloadPage('hydropdf', async () => {
        $('div[data-hpdf]').get().forEach(async (element) => {
            const url = new URL($(element).text(), window.location.href);
            const iframe = document.createElement('iframe');
            iframe.src = `/hydro-pdf/${encodeURIComponent(encodeURIComponent(url))}`;
            iframe.width = '100%';
            iframe.style.minHeight = '90vh';
            iframe.style.border = 'none';
            $(element).empty().append(iframe);
        });
    });

    window.Hydro.extraPages.push(page);
})();
