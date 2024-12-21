import * as fs from 'fs'
import {v4 as uuidv4} from 'uuid';
import * as yaml from 'js-yaml'
import { readFileSync } from 'fs';
import { join } from 'path';

export interface yamlDatabaseRespons {
    data: string | object | [] | null
    error: string | object | null
}


export interface readTables {
  
}



export default class SddHandlerYaml {
    filePath: string;
    hashTable: string;
    constructor() {
        this.filePath = `./databse/DB.yml`                 // database route
        this.hashTable = `./database/hashTable.yml`         // hashtable route
    }


    /**
     * this function is private and for reading the tables and hashtables from database
    */

    async #readTables(): Promise<readTables> {
        const data = yaml.load(fs.readFileSync(this.filePath, 'utf-8'))              // get all tables from database in rout "./src/DATABASE"
        var hashdata = yaml.load(fs.readFileSync(join(this.hashTable), 'utf-8'))    // get all tables from database in rout "./src/DATABASE"
        return {}
    }


    // ////////////////////////////////!
    // // make new table
    // ////////////////////////////////!
    // async create(name: string): Promise<yamlDatabaseRespons> {
    //     const tables : readTables = await this.#readTables()    // get all tables and hash table
    //     const data = tables.tables                                
    //     const hashdata = tables.hashTables          
    //     console.log(data)
    //     if (data[name]) {                           // check if this table already made
           
    //     }
    //     try {
           
    //     } catch (error : any) {                                                                              // catch error if something went wrong while creating the new table
            
    //     }
    // }





    // ////////////////////////////////!
    // // delete table
    // ////////////////////////////////!
    // async delete(name: string): Promise<yamlDatabaseRespons> {
    //     const tables: readTables = await this.#readTables()        // get all tables and hash table
    //     const data = tables.tables
    //     const hashdata = tables.hashTables
    //     if (data[name]) {                           // check the existance of the table
    //         try {
                
    //         } catch (error) {
                
    //         }
    //     } else {
            
    //     }
    // }





    // ////////////////////////////////////////////////////!
    // // changes throw records in the tables
    // ////////////////////////////////////////////////////!
    // async CreateRecord(name: string, body: any): Promise<yamlDatabaseRespons> {
    //     const tables: readTables = await this.#readTables()          // get all tables and hash table
    //     const data = tables.tables
    //     const hashdata = tables.hashTables
    //     body['_id'] = uuidv4()                    // make new unique id for each record
    //     if (data[name]) {
    //         try {
                
    //         } catch (error) {
                
    //         }

    //     } else {
    //         return {                                                               // return not exist table error
    //             data: null,
    //             error: 'this table is not exist on database'
    //         }
    //     }

    // }




    // async find(name: string, body: {}): Promise<yamlDatabaseRespons> {
    //     if (Object.keys(body).length == 0) {
    //         try {
               
    //         } catch (error) {
                
    //         }
    //     } else {
    //         try {
               
    //         } catch (error) {
                
    //         }
    //     }
    // }



    // async findOn(tableName: string, body: object): Promise<yamlDatabaseRespons> {
    //     const tables: readTables = await this.#readTables()           // get all tables and hash table
    //     const data = tables.tables
    //     try {
           
    //     } catch (error) {
            
    //     }
    // }



    // async findOnById(tableName: string, id: string): Promise<yamlDatabaseRespons> {
    //     const tables: readTables = await this.#readTables()                          // get all tables and hash table
    //     const data = tables.tables
    //     const hashdata = tables.hashTables
    //     try {
           
    //     } catch (error) {
           
    //     }
    // }



    // async findOneAndupdate(tableName: string, id: string, body: {}): Promise<yamlDatabaseRespons> {
    //     const tables: readTables = await this.#readTables()                       // get all tables and hash table
    //     const data = tables.tables
    //     const hashdata = tables.hashTables
    //     try {
            
    //     } catch (error) {
            
    //     }
    // }




    // async removeOne(tableName: string, id: string): Promise<yamlDatabaseRespons> {
    //     const tables: readTables = await this.#readTables()                    // get all tables and hash table
    //     const data = tables.tables
    //     const hashdata = tables.hashTables
    //     try {
            
    //     } catch (error) {
           
    //     }
    // }







//////////////////! last line
}
