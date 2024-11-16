import { execSync } from 'child_process'
import dayjs from 'dayjs'
import fs from 'fs/promises'
import matter from 'gray-matter'
import path from 'path'

/**
 * 获取文件修改时间并写入文件头部
 */
async function getFileModificationTime(filePath) {
  try {
    // 获取文件修改时间
    const stats = await fs.stat(filePath)
    const modificationTime = new Date(stats.mtime)
    const formattedTime = dayjs(modificationTime).format('YYYY-MM-DD HH:mm')

    // 读取文件内容
    const content = await fs.readFile(filePath, 'utf-8')
    // 获取文件头部元数据
    const meta = matter(content)

    // 将文件修改时间写入文件头部
    const newContent = matter.stringify(content, {
      ...meta.data,
      updateTime: formattedTime
    })
    // 写入文件
    await fs.writeFile(filePath, newContent)
    console.log(`File ${filePath} updated successfully`)
  } catch (err) {
    console.error(`Error processing file ${filePath}:`, err)
  }
}

/**
 * 获取暂存区文件列表并更新文件头部
 */
async function updateFiles() {
  const dirPath = process.cwd()
  const stagedFiles = execSync('git diff --name-only --cached', { encoding: 'utf-8' })
    .toString()
    .split('\n')
  for (const file of stagedFiles) {
    if (!file.endsWith('.md')) continue
    const filePath = path.resolve(dirPath, file)
    await getFileModificationTime(filePath)
    execSync(`git add ${filePath}`)
  }
}

updateFiles()
