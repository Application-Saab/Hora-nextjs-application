/** @type {import('next').NextConfig} */
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const nextConfig = {
    rootDir: path.join(__dirname, 'src'),
    images:{
        unoptimized:true
      },
    output: "export",
    // trailingSlash: true,
    // webpack(config) {
    //     config.module.rules.push({
    //         test: /\.(mp4|webm|ogg|swf|ogv)$/,
    //         use: {
    //             loader: 'file-loader',
    //             options: {
    //                 publicPath: '/_next/static/videos/',
    //                 outputPath: 'static/videos/',
    //                 name: '[name].[hash].[ext]',
    //             },
    //         },
    //     });

    //     return config;
    // }
};

export default nextConfig;
