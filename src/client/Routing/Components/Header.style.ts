import { makeStyles } from '@material-ui/core';

export default makeStyles({
  wrap: {
    display: 'grid',
    gridTemplateColumns: 'max-content 1fr max-content',
    gridTemplateRows: '1fr 1fr',
    gridTemplateAreas: '". s f" "a d f"',
    alignItems: 'center',
    flex: 1,
  },
  start: {
    gridArea: 's',
  },
  destination: {
    gridArea: 'd',
  },
  arrow: {
    gridArea: 'a',
    justifySelf: 'center',
    marginRight: '1em',
  },
  fav: {
    gridArea: 'f',
  },
});