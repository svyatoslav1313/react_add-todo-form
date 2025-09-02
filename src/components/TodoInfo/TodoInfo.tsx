import React from 'react';
import { UserInfo } from '../UserInfo';
import usersFromServer from '../../api/users';
import { Todos } from '../../types/todos';
import classNames from 'classnames';

type Props = {
  todo: Todos;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const user = usersFromServer.find(us => us.id === todo.userId);

  return (
    <article
      data-id="1"
      className={classNames('TodoInfo', {
        'TodoInfo--completed': todo.completed,
      })}
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>

      {user && <UserInfo user={user} />}
    </article>
  );
};
