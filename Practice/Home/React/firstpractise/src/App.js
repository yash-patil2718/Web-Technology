const user = {
  name : 'Yash Patil',
  imageUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOXgnisPO5GZ-6cVfSx_jzxHjWEL_XrgUrLKH07CQ-CA&s',
  imageSize : 90
}

export default function Profile(){
  return(
    <>
      <h1>{user.name}</h1>
      <img
      className="avatar"
      src={user.imageUrl}
      alt={'Photo'}
      style={{
        width : user.imageSize,
        alignItems: "center"
      }}
      />
    </>
  );
}