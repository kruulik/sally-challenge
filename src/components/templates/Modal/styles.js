
// Modal Styles

export default {
  container: {
    zIndex: 900,
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background: 'rgba(0,0,0,0.1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    zIndex: 999,
    height: 500,
    width: 465,
    background: 'white',
    borderRadius: 3,
    boxShadow: '0 2px 4px rgba(0,0,0,0.4)',
  },
  header: {
    height: 64,
    width: '100%',
    // color: 'white',
    reserved: {
      background: 'red'
    },
    active: {
      background: 'orange'
    },
    returned: {
      background: 'violet'
    },
    archived: {
      background: 'gray'
    }
  }
}
