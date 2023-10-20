import { resolve } from 'path'
import { readdirSync, lstatSync } from 'fs'

const readDir = (dirName: string, dirPath: string, result: string[] = []) => {
    const _dirPath = resolve(dirName, dirPath)
    let dir: string[] = []

    try {
        dir = readdirSync(_dirPath)
    } catch (e: any) {
        console.error(e?.message || e)
    }

    dir.forEach(filename => {
        const _filename = resolve(_dirPath, filename)
        if (lstatSync(_filename).isFile()) {
            result.push(_filename)
        } else {
            const _dirname = resolve(dirName, dirPath)
            readDir(_dirname, filename, result)
        }
    })

    return result
}

export default readDir
