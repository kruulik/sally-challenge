
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
  modal: {
    zIndex: 999,
    width: 465,
    background: 'white',
    borderRadius: 3,
    boxShadow: '0 2px 4px rgba(0,0,0,0.4)',
  },
  content: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '16px auto 5% auto 16px',
  },
  header: {
    height: 64,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 16px',
    reserved: {
      background: '#A81526'
    },
    active: {
      background: '#FF3600'
    },
    returned: {
      background: '#A87BD9'
    },
    archived: {
      background: '#4C4C4C'
    }
  },
  h2: {
    margin: 0,
    fontWeight: '400',
    lineHeight: 1,
    fontSize: 25,
    color: 'white'
  },
  subtitle: {
    fontWeight: '400',
    fontSize: 16,
    color: 'white'
  },
  divider: {
    marginTop: 8,
    marginBottom: 8,
    height: 1,
    background: '#E6E6E6',
    gridColumnStart: 2,
    gridColumnEnd: 5,
    width: '100%'
  },
  buttonRow: {
    background: '#E6E6E6',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    gridColumnStart: 1,
    gridColumnEnd: 6
  }
}
