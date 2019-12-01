export default class Utils {
    static prependSlash(path: string) {
        return path.startsWith("/") ? path : "/" + path;
    }

    static getBlogLink(path: string) {
        return `/blog${Utils.prependSlash(path)}`;
    }

    static makeStrKey(text: string) {
        return text.toLowerCase().replace(/\s/g, '-');
    }
}