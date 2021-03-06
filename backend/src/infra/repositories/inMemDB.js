class DB {

    constructor() {
        this.id = Math.random() * 1000
        global._todolist = {}
        this.memDB = global._todolist
    }

    _key(table, key) {
        return table + key
    }

    async get(table, key) {
        return this.memDB[this._key(table, key)]
    }

    async getMany(table, keys) {
        const ret = []
        for (const key of keys) {
            ret.push(await this.get(table, key))
        }
        return ret
    }

    async set(table, key, value) {
        return this.memDB[this._key(table, key)] = JSON.stringify(value)
    }
}

module.exports = new DB()