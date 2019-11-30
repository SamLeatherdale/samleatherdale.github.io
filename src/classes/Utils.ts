export default class Utils {
    static prependSlash(path: string) {
        return path.startsWith("/") ? path.substr(1) : path;
    }

    static getBlogLink(path: string) {
        return `/blog/${Utils.prependSlash(path)}`;
    }
}