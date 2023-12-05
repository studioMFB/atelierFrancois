export namespace GitHubApi {

    const USERNAME = "studioMFB";
    const REPO = "atelierFrancois";
    const TEX_DIR = "src/components/modelViewer/textures/terrains"
    const MODEL_DIR = "src/components/modelViewer/models"


    export interface IGitHubFile {
        name: string,
        path: string,
        sha: string,
        size: number,
        url: string,
        html_url: string,
        git_url: string,
        download_url: string,
        type: string,
        content: string,
        encoding: string,
        _links: IGitHubLinks
    }

    export interface IGitHubLinks {
        self: string,
        git: string,
        html: string,
    }

    export async function getRateLimit(): Promise<string> {
        // Get /rate_limit
        const url = `https://api.github.com/rate_limit`;

        const res = await fetch(url, {
            method: "GET",
            headers: {
                'User-Agent': USERNAME
            }
        });

        let limit = "";

        if (res.ok) {
            limit = await res.json();
            console.log("Rate limit ", limit);
        }
        else{
            console.error(res.status, res.statusText);
        }

        return limit
    }

    export async function getSingleGLTFUrl(type: string, id: number, name: string): Promise<string> {
        // GET /repos/{owner}/{repo}/contents/{path}
        const url = `https://api.github.com/repos/${USERNAME}/${REPO}/contents/${MODEL_DIR}/${type}/${id}/${name}.gltf`;

        const res = await fetch(url, {
            method: "GET",
            headers: {
                'User-Agent': USERNAME
            }
        });

        if (res.ok) {
            const data = await res.json();
            return data.download_url;
        }
        else {
            console.error(res.status + res.statusText);
            return "ERROR!";
        }
    }

    export async function getSingleTextureUrl(type: string, id: number, name: string): Promise<string> {
        // GET /repos/{owner}/{repo}/contents/{path}
        const url = `https://api.github.com/repos/${USERNAME}/${REPO}/contents/${TEX_DIR}/${type}/${id}/${name}.png`;

        const res = await fetch(url, {
            method: "GET",
            headers: {
                'User-Agent': USERNAME
            }
        });

        let texUrl = "";

        if (res.ok) {
            const data = await res.json() as IGitHubFile;
            const b64Data = data.content;

            if (b64Data) {
                const file = await b64toBlob(b64Data, 'image/png');

                if (file) {
                    texUrl = URL.createObjectURL(file);
                }
            }
        }
        else {
            console.error(res.status + res.statusText);
        }

        return texUrl;
    }

    // SLOW compare to Get Singlt Texture.
    export async function getallTexturesUrl(type: string, id: number): Promise<string[]> {
        // GET /repos/{owner}/{repo}/contents/{path}
        const url = `https://api.github.com/repos/${USERNAME}/${REPO}/contents/${TEX_DIR}/${type}/${id}`;

        const res = await fetch(url, {
            method: "GET",
            headers: {
                'User-Agent': USERNAME
            }
        });

        const urlArray: string[] = [];

        if (res.ok) {
            const dataArray = await res.json() as IGitHubFile[];

            for (let i = 0; i < dataArray.length; ++i) {
                const data = dataArray[i];
                const b64Data = await getFileContent(data.sha);

                if (b64Data) {
                    const file = await b64toBlob(b64Data, 'image/png');

                    if (file) {
                        const url = URL.createObjectURL(file);
                        urlArray.push(url);
                    }
                }
            }
        }
        else {
            console.error(res.status + res.statusText);
        }

        return urlArray;
    }

    export async function getFileContent(sha: string): Promise<string> {
        // GET /repos/{owner}/{repo}/git/blobs/{file_sha}
        const url = `https://api.github.com/repos/${USERNAME}/${REPO}/git/blobs/${sha}`;

        const res = await fetch(url, {
            method: "GET",
            headers: {
                'User-Agent': USERNAME
            }
        });

        let b64Data = "";

        if (res.ok) {
            const data = await res.json();
            b64Data = data["content"];
        }
        else {
            console.error(res.status + res.statusText);
        }

        return b64Data;
    }

    export async function b64toBlob(b64Data: string, contentType: string = 'image/png', sliceSize: number = 512): Promise<Blob | undefined> {
        try {
            const byteCharacters = atob(b64Data);
            const byteArrays: Uint8Array[] = [];

            for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
                const slice = byteCharacters.slice(offset, offset + sliceSize);

                const byteNumbers = new Array(slice.length);
                for (let i = 0; i < slice.length; i++) {
                    byteNumbers[i] = slice.charCodeAt(i);
                }

                const byteArray = new Uint8Array(byteNumbers);
                byteArrays.push(byteArray);
            }

            const blob = new Blob(byteArrays, { type: contentType });
            return blob;

        } catch (error) {
            console.log(error);
        }
    }

}