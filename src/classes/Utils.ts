export default class Utils {
    static getBlogLink(path: string) {
        return `/blog/${path.startsWith("/") ? path.substr(1) : path}`;
    }
}