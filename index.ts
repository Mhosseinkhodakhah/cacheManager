import SddHandler from "./src/databaseJson2";
import SddHandlerYaml from "./src/databaseYaml";

export default class cacheManager{
    #jsonDB = new SddHandler();
    #yamlDB = new SddHandlerYaml();


    async setData(name : string , data : {}){
        console.log('1')
        const creation = await this.#jsonDB.setData(name , data)
        return creation.data
    }


    async getData(name : string ){
        const getter = await this.#jsonDB.getData(name)
        return getter.data
    }


    async delete(name : string){
        const deleter = await this.#jsonDB.deleteData(name)
        return deleter
    }

    async getAll(){
        const allData = await this.#jsonDB.getAll()
        return allData
    }

    async resetCache(){
        const reseter = await this.#jsonDB.resetCache()
        return reseter
    }

}