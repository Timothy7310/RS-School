enum HTTPStatusCode {
    InfoContinue = 100,
    InfoProcessing = 102,
    InfoSwitchingProtocols = 101,

    SuccessAccepted = 202,
    SuccessAlreadyReported = 208,
    SuccessCreated = 201,
    SuccessIMUsed = 229,
    SuccessMultiStatus = 207,
    SuccessNoContent = 204,
    SuccessNonAuthoritativeInfo = 203,
    SuccessOK = 200,
    SuccessPartialContent = 206,
    SuccessResetContent = 205,

    RedirectFound = 302,
    RedirectMovedPermanently = 301,
    RedirectMultipleChoices = 300,
    RedirectNotModified = 304,
    RedirectPermanent = 308,
    RedirectSeeOther = 303,
    RedirectSwitchProxy = 306,
    RedirectTemp = 307,
    RedirectUseProxy = 305,

    ClientErrorBadRequest = 400,
    ClientErrorConflict = 409,
    ClientErrorExpectationFailed = 417,
    ClientErrorFailedDependency = 424,
    ClientErrorForbidden = 403,
    ClientErrorGone = 410,
    ClientErrorImATeapot = 418,
    ClientErrorLengthRequired = 411,
    ClientErrorLocked = 423,
    ClientErrorLoginTimeOut = 440,
    ClientErrorMethodNotAllowed = 405,
    ClientErrorMisdirectedRequest = 421,
    ClientErrorNotAcceptable = 406,
    ClientErrorNotFound = 404,
    ClientErrorPayloadTooLarge = 413,
    ClientErrorPaymentRequired = 402,
    ClientErrorPreconditionFailed = 412,
    ClientErrorPreconditionRequired = 428,
    ClientErrorProxyAuthRequired = 407,
    ClientErrorRangeNotSatisfiable = 416,
    ClientErrorRequestHeaderFieldsTooLarge = 431,
    ClientErrorRequestTimeout = 408,
    ClientErrorRetryWith = 449,
    ClientErrorTooManyRequests = 429,
    ClientErrorUnauthorized = 401,
    ClientErrorUnavailableForLegalReasons = 451,
    ClientErrorUnprocessableEntity = 422,
    ClientErrorUnsupportedMediaType = 415,
    ClientErrorUpgradeRequired = 426,
    ClientErrorURITooLong = 414,

    ServerErrorBadGateway = 502,
    ServerErrorBandwidthLimitExceeded = 509,
    ServerErrorGatewayTimeout = 504,
    ServerErrorHTTPVersionNotSupported = 505,
    ServerErrorInsufficientStorage = 507,
    ServerErrorInternal = 500,
    ServerErrorLoopDetected = 508,
    ServerErrorNetworkAuthRequired = 511,
    ServerErrorNotExtended = 510,
    ServerErrorNotImplemented = 501,
    ServerErrorServiceUnavailable = 503,
    ServerErrorVariantAlsoNegotiates = 506,
}

type StatusOptions = 'ok' | 'error';

interface SourcesData {
    category: string;
    country: string;
    description: string;
    id: string;
    language: string;
    name: string;
    url: string;
}

interface DrawnSources {
    status: StatusOptions;
    sources: SourcesData[];
}

interface NewsData {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: {
        id: string;
        name: string;
    };
    title: string;
    url: string;
    urlToImage: string;
}

interface DrawNews {
    status: StatusOptions;
    totalResults: number;
    articles: NewsData[];
}

interface Loader {
    baseLink: string;
    options: { [key: string]: string };
}

type Endpoints = 'everything' | 'sources' | 'top-headlines';

export type Callback = (data: DrawnSources & DrawNews) => void;

class Loader implements Loader {
    baseLink;
    options;

    constructor(baseLink: Loader['baseLink'], options: Loader['options']) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp(
        { endpoint, options = {} }: { endpoint: Endpoints; options?: Loader['options'] },
        callback: Callback = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load<DrawnSources & DrawNews>('GET', endpoint, callback, options);
    }

    errorHandler(res: Response) {
        if (!res.ok) {
            if (
                res.status === HTTPStatusCode.ClientErrorUnauthorized ||
                res.status === HTTPStatusCode.ClientErrorNotFound
            )
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: Loader['options'], endpoint: Endpoints) {
        const urlOptions: { [index: string]: string } = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load<T>(method: string, endpoint: Endpoints, callback: (data: T) => void, options: Loader['options']) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export { Loader, DrawnSources, SourcesData, DrawNews, NewsData };
