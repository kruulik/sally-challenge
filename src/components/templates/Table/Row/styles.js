
// Row Styles

export default {
  container: {
    width: '100%',
    height: 32,
    background: '#EEEEEE',
    marginBottom: 4,
    paddingLeft: 16,
    paddingRight: 16,
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gridColumnGap: '3%',
    transition: 'all 100ms',
    cursor: 'pointer'
,
    ':hover': {
      boxShadow: '0 2px 2px rgba(0,0,0,0.15)',

    }
  },
  cell: {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    alignSelf: 'center',
    reserved: {
      fontSize: 'red'
    },
    active: {
      color: 'orange'
    },
    returned: {
      color: 'violet'
    },
    archived: {
      color: 'gray'
    }
  }


}
