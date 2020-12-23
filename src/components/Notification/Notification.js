import s from './Notification.module.css';

const Notification = ({ message }) => {
  return <span className={s.message}>{message}</span>;
};

export default Notification;
