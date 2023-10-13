export namespace Texture {

    export interface ITerrainList {
        terrainsId: string[];
        terrains: ITerrains;
      }

    export interface ITerrainTexture {
        id: string,
        name: string,
        aoMap: string,
        bumpMap: string,
        normalMap: string,
        displacementMap: string,
        diffuseMap: string
    }

    export interface ITerrains {
        T01: ITerrainTexture,
        T02: ITerrainTexture,
    }

    export interface ITerrain {
        type: string, 
        id: number
    }

}