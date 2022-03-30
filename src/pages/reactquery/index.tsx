import React from 'react';
import { useQuery, useQueryClient } from 'react-query';

const getPosts = async () => {
  return fetch('https://jsonplaceholder.typicode.com/posts').then((response) => response.json());
};

const genericValues = () => [
  'Generic Value 1',
  'Generic Value 2',
  'Generic Value 3',
  'Generic Value 4',
  'Generic Value 5',
];

export const ReactQuery = () => {
  const queryClient = useQueryClient();

  const RefetchPosts = () => {
    queryClient.invalidateQueries('posts');
  };
  return (
    <>
      <main>
        <h2>**** React Query ****</h2>
        <button
          onClick={() => {
            RefetchPosts();
          }}
        >
          Click to Refetch
        </button>
        <ChildComponent />
        <ChildComponent />
        <ChildComponent />
        <ChildComponent />
        <ChildComponent />
      </main>
    </>
  );
};

// const ChildComponent = () => {
//   const [posts, setPosts] = React.useState([]);

//   useEffect(() => {
//     getPosts().then((posts) => setPosts(posts));
//   }, []);

//   return (
//     <div>
//       <h2>Child Component - {posts.length}</h2>
//     </div>
//   );
// };

const ChildComponent = () => {
  const posts = useQuery(['posts'], getPosts);
  const genericData = useQuery('genData', genericValues);
  console.log('genericData', genericData);

  if (posts.isLoading) {
    return <p>Loading...</p>;
  }

  if (posts.isError) {
    return <p>Error :(</p>;
  }

  return (
    <div>
      <h2>Child Component - {posts.data.length}</h2>
    </div>
  );
};
