import { Link, Typography } from '@mui/material';

interface IAuthorsProps {
  authors: {
    name: string;
    url: string;
  }[];
}

const Copyright = ({ authors }: IAuthorsProps) => {
  const links = authors.map((author, i) => (
    <span key={i}>
      <Link
        href={author.url}
        target='_blank'
        rel='noopener noreferrer'
        color='inherit'
        underline='none'
        sx={{
          '&:hover': { color: 'primary.main' },
        }}>
        {author.name}
      </Link>
      {authors.length !== i + 1 ? ', ' : ' '}
    </span>
  ));

  return (
    <Typography variant='body2' align='center'>
      {'Copyright © '}
      {links}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

export default Copyright;
