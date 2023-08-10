"use client";

import { PostOwner } from "@/components/PostOwner";
import { Comment } from "@/components/Comment";
import { comments } from "@/libs/comments";
export default function HomePage() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm bg-white"
      >
        {/* Post Owner*/}
        <PostOwner
          photo={"/profileImages/me.jpg"}
          name={"Supakorn Suwannapop"}
          id={"650612100"}
          post={"Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207"}
          like={"100"}
        />

        {/* Comment and Reply */}
        {comments.map((user) => (
          <Comment
            userImagePath={user.userImagePath}
            username={user.username}
            commentText={user.commentText}
            likeNum={user.likeNum}
            replies={user.replies}
            key={user.username}
          />
        ))}

        {/* map-loop render Comment component here */}
      </div>
    </div>
  );
}
