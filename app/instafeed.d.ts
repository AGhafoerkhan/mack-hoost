declare module 'instafeed.js' {
    export default class Instafeed {
        constructor(options: {
            accessToken: string;
            target: string | HTMLElement;
            limit?: number;
            template?: string;
            sortBy?: string;
            resolution?: string;
            after?: () => void;
        });
        run(): void;
    }
}
