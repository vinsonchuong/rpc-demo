import { api } from 'passing-notes'

async function run() {
  const result = await api.add(1, 2)
  document.body.textContent = result
}
run()

