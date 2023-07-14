import {
  Button,
  Card,
  CardContent,
  TextField,
  TextareaAutosize,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import './Reviews.scss';

type Props = {};

type Review = {
  name: string;
  text: string;
};
const Reviews = (props: Props) => {
  const arrReviews: Review[] = [
    {
      name: 'Jack',
      text: 'I had amazing trip!',
    },
    {
      name: 'Lora',
      text: 'Thanks for your navigation!',
    },
  ];

  const [review, setReview] = useState<Review[]>(arrReviews);
  const [newReview, setNewReview] = useState<Review>({
    name: '',
    text: '',
  });

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewReview((prevState) => ({
      ...prevState,
      name: e.target.value,
    }));
  };
  const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewReview((prevState) => ({
      ...prevState,
      text: e.target.value,
    }));
  };
  const onSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newReview.name === '' || newReview.text === '') {
      alert('All fields are required');
    } else {
      setReview((prevState) => {
        return [...prevState, newReview];
      });

      setNewReview({
        name: '',
        text: '',
      });
    }
  };

  return (
    <div className="form-style">
      <Typography variant="h4" component={'h2'}>
        Reviews
      </Typography>
      {review.map(({ name, text }, i) => (
        <Card
          color="inherit"
          variant="outlined"
          sx={{ margin: '30px 0', background: '#ecd3b7' }}
        >
          <CardContent>
            <div>{name}:</div>
            <div>{text}</div>
          </CardContent>
        </Card>
      ))}
      <form className="comment-style" onSubmit={onSend}>
        <h3> Post a comment</h3>
        <div>
          <TextareaAutosize
            minRows={5}
            placeholder="Your comment"
            value={newReview.text}
            onChange={handleText}
          />
        </div>
        <br />
        <div>
          <TextField
            size="small"
            placeholder="Your name"
            value={newReview.name}
            onChange={handleName}
          />
        </div>
        <br />
        <Button
          color="inherit"
          variant="outlined"
          type="submit"
          sx={{ color: '#bb782f' }}
        >
          Send
        </Button>
      </form>
    </div>
  );
};
export default Reviews;
