import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  footer: {
    textAlign: 'center',
    position: 'fixed',
    left: 0,
    bottom: 0,
    color: 'black',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  link: {
    textDecoration: 'none',
    color: 'rgba(21, 101, 192)',
  },
  image: {
    marginLeft: 10,
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    padding: '30%',
    borderRadius: 20,
    color: 'white',
    backgroundColor: 'rgba(21, 101, 192)',
    margin: '0 12px',
    textAlign: 'center',
    height: '25vmin',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      textAlign: 'center',
      width: '100%',
      height: 'initial',
      '&:nth-of-type(1)': {
        marginBottom: '10px',
      },
    },
  },
  infoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  logoContainer: {
    padding: 0,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'column', // Force column to stack logo and button
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      textAlign: 'center',
    },
  },
  alanLogo: {
    height: 'auto', // Auto height for text
    padding: '0 5%',
    margin: 0,
    [theme.breakpoints.down('sm')]: {
      padding: '0 2%',
    },
  },
  // Ensure the button container is fixed
  alanContainer: { // We will attach this class to the div in App.js if we can, or rely on ID styling. 
    // Actually, App.js used <div id="alan-btn" />. 
    // Material UI useStyles generates class names. It's better to target ID in CSS or use inline style in App.js. 
    // But let's add a class here and use it in App.js if we modify App.js again. 
    // Wait, I can't modify App.js in this step. I will add the class here and assume I might need it, 
    // OR just use index.css for #alan-btn. 
    // Recommendation: Use index.css for #alan-btn or just rely on the SDK's internal styling? 
    // The SDK appends specific classes. 
    // Let's stick to reducing spacing here.
  },
  themeContainer: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    transition: 'background 0.5s ease',
  },
  darkMode: {
    backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    color: '#fff',
  },
  lightMode: {
    backgroundImage: 'url("https://images.unsplash.com/photo-1516541196182-6bdb0516ed27?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")', // Light abstract
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    color: '#000',
  },
  themeButton: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    zIndex: 1000,
  }
}));
