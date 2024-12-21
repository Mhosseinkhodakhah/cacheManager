import * as fs from 'fs'
import { v4 as uuidv4 } from 'uuid';
import * as yaml from 'js-yaml'
import { readFileSync } from 'fs';
import { join } from 'path';





interface createDB {
    success: boolean
    data: string | null,
    error: string | null,
}




/**
 * @class SddHandler
 * @description In this class, all the necessary functions for the necessary operations in the database have been created
 */

export default class SddHandler {
    filePath: string;
    constructor() {
        this.filePath = `./database/DB.json`                 // database route
    }


    /**
     * 
     * @param name  is tableName that user want created on database
     * @description this property are creating the new table on database with json format in rout "../DATABASE/DB.json"
     */
    // async create(name: string): Promise<createDB> {
    //     let data = {}
    //     let hashdata = {}
    //     data[name] = []
    //     try{
    //         fs.writeFileSync(this.filePath, JSON.stringify(data))            // rewrite the new tables on the database
    //         fs.writeFileSync(this.hashTable, JSON.stringify(hashdata))       // rewrite the new hashtables on the hashtableDB
    //         return {data : 'file created successfully . . .' , error : null}
    //     }catch(error:any){
    //         return {data : null , error : `${error}`}
    //     }


    // }


    async setData(name: string, data: {}): Promise<createDB> {
        let last = fs.readFileSync(this.filePath)
        let lastData = JSON.parse(last.toString('utf-8'))
        if (lastData[name]) {
            lastData[name] = data
            let newData = JSON.stringify(lastData)
            let myBuffer = Buffer.from(newData, 'utf-8');
            try {
                fs.writeFileSync(this.filePath, myBuffer)            // rewrite the new tables on the database
                console.log('4')
                return { success: true, data: 'file created successfully . . .', error: null }
            } catch (error: any) {
                console.log(error)
                return { success: false, data: null, error: `${error}` }
            }
        } else {
            let cacheData: any = {}
            cacheData[name] = data
            let newData = JSON.stringify(cacheData)
            let myBuffer = Buffer.from(newData, 'utf-8');
            try {
                fs.writeFileSync(this.filePath, myBuffer)            // rewrite the new tables on the database
                return { success: true, data: 'file created successfully . . .', error: null }
            } catch (error: any) {
                console.log(error)
                return { success: false, data: null, error: `${error}` }
            }
        }
    }


    async getData(name: string): Promise<createDB> {
        let last = fs.readFileSync(this.filePath)
        let lastData = JSON.parse(last.toString('utf-8'))
        console.log(lastData)
        if (lastData) {
            if (lastData[name]) {
                return { success: true, data: lastData[name], error: null }
            } else {
                return { success: false, data: null, error: `the data with name ${name} is not exist` }
            }
        } else {
            return { success: false, data: null, error: `the data with name ${name} is not exist` }
        }
    }


    async deleteData(name: string): Promise<createDB> {
        let last = fs.readFileSync(this.filePath)
        let lastData = JSON.parse(last.toString('utf-8'))
        if (lastData) {
            if (lastData[name]) {
                delete lastData[name]
                let newData = JSON.stringify(lastData)
                let myBuffer = Buffer.from(newData, 'utf-8');
                try {
                    fs.writeFileSync(this.filePath, myBuffer)            // rewrite the new tables on the database
                    console.log('4')
                    return { success: true, data: 'file deleted successfully . . .', error: null }
                } catch (error: any) {
                    console.log(error)
                    return { success: false, data: null, error: `${error}` }
                }
            } else {
                return { success: false, data: null, error: `the data with name ${name} is not exist` }
            }
        } else {
            return { success: false, data: null, error: `the data with name ${name} is not exist` }
        }
    }


    async getAll() {
        let last = fs.readFileSync(this.filePath)
        let lastData = JSON.parse(last.toString('utf-8'))
        return lastData
    }


    async resetCache() {
        let lastData : any = {}
        let newData = JSON.stringify(lastData)
        let myBuffer = Buffer.from(newData, 'utf-8');
        try {
            fs.writeFileSync(this.filePath, myBuffer)            // rewrite the new tables on the database
            console.log('4')
            return { success: true, data: 'the cache reseted successfully . . .', error: null }
        } catch (error: any) {
            console.log(error)
            return { success: false, data: null, error: `${error}` }
        }
    }

    //////////////////! last line
}
