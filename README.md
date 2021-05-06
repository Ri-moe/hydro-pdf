# hydro.pdf

PDF preview plugin for [Hydro](https://github.com/hydro-dev/Hydro), using [PDF.js](https://mozilla.github.io/pdf.js/).

为 [Hydro](https://github.com/hydro-dev/Hydro) 提供的 PDF 文件预览插件，使用 [PDF.js](https://mozilla.github.io/pdf.js/) 作为内核。提供浏览器无关的高性能增强 PDF 预览功能，并与原生 PDF 解析功能兼容。

## 安装

使用 Yarn 安装本插件，安装的版本应 **`>=1.0.3`**。

对于全局安装 Hydro 的用户（如使用一键脚本）：

```bash
yarn global add hydro.pdf
hydrooj addon add hydro.pdf
```

对于自定义安装 Hydro 的用户：

```bash
cd path/to/Hydro
yarn add hydro.pdf
hydrooj addon add hydro.pdf
```

其中 `path/to/Hydro` 改为 Hydro 的安装目录。

**插件安装完毕后，需要重启 Hydro 来使配置生效。**

使用 pm2：

```bash
pm2 restart hydrooj
```

## 使用

为了确保兼容性，hydro.pdf 不使用原生的 `@[pdf](url)` 语法，而是使用 `@[hpdf](url)` 语法，且支持使用 `file://` 插入题目附加文件中的 PDF。例如：

附加文件：example.pdf

```markdown
@[hpdf](file://example.pdf)
```

也可以直接用常规 URL 引入 PDF，但注意：如果跨域，需要正确配置 CORS，否则无法读取。例如：

```markdown
@[hpdf](https://hydro.org.cn/d/uuccww/p/1/file/%E9%AD%94%E5%A5%B3BLOG%E5%88%9D%E4%B8%AD%E7%B4%9A%E6%97%A5%E9%BA%BB%E8%AC%9B%E5%BA%A7.pdf?noDisposition=on)
```

这个例子一般无法正常工作，除非你正在 `hydro.org.cn` 中进行尝试。这是因为 CORS Policy 阻止了不被允许的跨域请求。
