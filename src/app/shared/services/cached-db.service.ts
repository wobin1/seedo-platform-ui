import { Injectable } from '@angular/core';
import { openDB, IDBPDatabase } from 'idb'
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CachedDbService {

  private dbPromise: Promise<IDBPDatabase>;
  currentDb:any;

  constructor() {
    this.dbPromise = this.initializeDB();
  }

  ngOnInit(){
    console.log('Initializing')
    this.initializeDB();
  }

  /** ✅ Initialize IndexedDB */
  private initializeDB(): Promise<IDBPDatabase> {
    return openDB('news-db', 1, {
      upgrade(db) {
        const stores = [
          'blogPost',
        ];

        stores.forEach((storeName) => {
          console.log('checking store ' + storeName)
          if (!db.objectStoreNames.contains(storeName)) {
            db.createObjectStore(storeName, { keyPath: 'id', autoIncrement: true });
            console.log(`Created object store "${storeName}".`);
          }
        });
      },
    });
  }

  /** ✅ Save items in IndexedDB */
  saveItem(data: any[], itemName: string): Observable<void> {
    return from(
      this.dbPromise.then(async (db) => {
        console.log('store names', db.objectStoreNames)
        if (!db.objectStoreNames.contains(itemName)) {
          console.error(`❌ Object store "${itemName}" not found.`);
          this.initializeDB()
        }

        const tx = db.transaction(itemName, 'readwrite');
        const store = tx.objectStore(itemName);

        store.clear(); // Clear previous data
        for (const item of data) {
          store.put(item);
          console.log(`Stored ${itemName}:`, item);
        }

        tx.done; // Ensure transaction completion
      })
    );
  }

  /** ✅ Retrieve cached news */
  getCachedNews(itemName: string): Observable<any[]> {
    return from(
      this.dbPromise.then(async (db) => {
        if (!db.objectStoreNames.contains(itemName)) {
          console.error(`❌ Object store "${itemName}" not found.`);
          return [];
        }else{
          console.log(`Found ${itemName}`)
          return db.getAll(itemName);
        }
      })
    );
  }

  /** ✅ Clear all stored news */
  clearNews(itemName: string): Observable<void> {
    return from(
      this.dbPromise.then(async (db) => {
        if (!db.objectStoreNames.contains(itemName)) {
          console.error(`❌ Object store "${itemName}" not found.`);
          return;
        }

        const tx = db.transaction(itemName, 'readwrite');
        await tx.objectStore(itemName).clear();
        await tx.done;
      })
    );
  }


  updateCurrentDb(dbName:string){
    this.currentDb = dbName;
    console.log('Current db updated to :', this.currentDb);
  }

  getCurrentDb(){
    return this.currentDb;
  }



}
