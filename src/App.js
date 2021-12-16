import Comments from "./comments/Comments";

const App = () => {
  return (
    <div className="container">
    {/* center the heading  */}
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center">MUSIC FORUM</h1>
        </div>
      </div>
      <Comments
        commentsUrl="http://localhost:3004/comments"
        currentUserId="1"
      />
    </div>
  );
};

export default App;
