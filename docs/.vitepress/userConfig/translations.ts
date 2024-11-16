/**
 * 将目录名（或文件名）翻译成自定义名称
 *
 * ! 由于自动路由脚本是按照字典序排列。
 * ! 如果想要实现特定的顺序，请在文件或目录前人为排序。
 * ! 并在该文件中将其名称进行替换。
 */
export const fileName2Title: Record<string, string> = {
  Interviews: '🏃 八股面经',
  Learning: '🎨 学习笔记',
  Thoughts: '🔮 随想杂文'
}
