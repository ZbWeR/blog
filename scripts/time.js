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

    const fileName = path.basename(filePath)
    console.log(`【time.js】 ${fileName}  ✔️`)
  } catch (err) {
    console.error(`Error processing file ${filePath}:`, err)
  }
}

async function LintStagedTask(stagedFiles) {
  for (const file of stagedFiles) {
    await getFileModificationTime(file)
  }
}

const args = process.argv.slice(2)
if (args.length) {
  LintStagedTask(args)
}
