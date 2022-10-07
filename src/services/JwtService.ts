const ID_TOKEN_KEY = 'id_token' as string;
const LOCALES_SERVER_SIDE = 'local_server_side' as string;

/**
 * @description get token form localStorage
 */
export const getToken = (): string | null => {
    return window.localStorage.getItem(ID_TOKEN_KEY);
};

/**
 * @description save token into localStorage
 * @param token: string
 */
export const saveToken = (token: string): void => {
    window.localStorage.setItem(ID_TOKEN_KEY, token);
};

/**
 * @description remove token form localStorage
 */
export const destroyToken = (): void => {
    window.localStorage.removeItem(ID_TOKEN_KEY);
};

/**
 * @description get locales form localStorage
 */
export const getLocalesServer = () => {
    return window.localStorage.getItem(LOCALES_SERVER_SIDE);
};

/**
 * @description save locales into localStorage
 */
export const saveLocalesServer = (locale): void => {
    window.localStorage.setItem(LOCALES_SERVER_SIDE, JSON.stringify(locale));
};

export default { getToken, saveToken, destroyToken, getLocalesServer, saveLocalesServer };
