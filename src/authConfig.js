import configJson from "./config.json";

const authConfig = {
    domain: configJson.domain ?? '',
    clientId: configJson.clientId ?? ''
}

export default authConfig;

