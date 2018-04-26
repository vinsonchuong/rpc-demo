import passNotes, { ui, rpc } from 'passing-notes'

export default passNotes(
  rpc({
    add(x, y) {
      return x + y
    }
  }),
  ui('index.html')
)
