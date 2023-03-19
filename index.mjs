import { spawnSync } from 'child_process'

const isWin = process.platform === 'win32'
const isRoot = () => process.getuid && process.getuid() === 0
function isAdmin() {
  try {
    const result = spawnSync('net', ['session'])
    return result.status === 0
  } catch (e) {}
  return false
}

export default () => (isWin ? isAdmin() : isRoot())
