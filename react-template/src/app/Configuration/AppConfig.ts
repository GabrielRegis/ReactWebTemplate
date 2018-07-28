export enum AppTarget {
    DEVELOP,
    STAGING,
    RELEASE
}

export default {
    target: AppTarget.DEVELOP,
    apiUrl: 'http://localhost:8080/api'
};
