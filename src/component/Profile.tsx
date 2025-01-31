import { useAppSelector } from '../hooks/redux/hook';

function Profile() {
  const { currentUser } = useAppSelector((state) => state.user);
  return (
    <div className="flex flex-col shadow-md mx-auto md:w-[400px] w-full justify-center items-center p-4">
      <div>
        <img
          src="https://wallpapers.com/images/hd/profile-picture-xj8jigxkai9jag4g.jpg"
          alt="profile"
        />
      </div>
      <div>
        <h1>EMAIL: {currentUser?.email}</h1>
      </div>
    </div>
  );
}

export default Profile;
