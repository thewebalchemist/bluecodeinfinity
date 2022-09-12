import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const expertiseDirectory = path.join(process.cwd(), 'expertise')

export function getSortedExpertise() {
  // Get file names under /expertise
    const fileNames = fs.readdirSync(expertiseDirectory)
    const expertise = fileNames.map(fileName => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, ' ')
        

        // Read markdown file as string
        const fullPath = path.join(expertiseDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents)

        // Combine the data with the id
        return {
        id,
        ...matterResult.data
        }
    })
    // Sort expertise by date
    return expertise.sort(({ date: a }, { date: b }) => {
        if (a < b) {
        return 1
        } else if (a > b) {
        return -1
        } else {
        return 0
        }
    })
    }

    export function getAllExpertiseIds() {
        const fileNames = fs.readdirSync(expertiseDirectory)
        
            // Returns an array that looks like this:
            // [
            //   {
            //     params: {
            //       id: 'ssg-ssr'
            //     }
            //   },
            //   {
            //     params: {
            //       id: 'pre-rendering'
            //     }
            //   }
            // ]
            return fileNames.map(fileName => {
            return {
                params: {
                id: fileName.replace(/\.md$/, '')
                }
            }
            })
        }

export async function getExpertiseData(id) {

    const fullPath = path.join(expertiseDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)
    
    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)
    const contentHtml = processedContent.toString()
    
    // Combine the data with the id and contentHtml
    return {
        id,
        contentHtml,
        ...matterResult.data
    }
    }