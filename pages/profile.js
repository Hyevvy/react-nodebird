import AppLayout from "../components/AppLayout";
import Head from 'next/head'
import FollowerList from '../components/FollowerList';
import FollowList from '../components/FollowList';
import NicknameEditForm from '../components/NicknameEditForm'

const Profile = () => {
    const followerList= [{nickname:'혜삐'}, {nickname:'덤보'}, {nickname:'깜이'}]
    const followingList= [{nickname:'혜삐'}, {nickname:'덤보'}, {nickname:'깜이'}]

    return (
        <>
            <Head>
                <title> 내 프로필 | NodeBird</title>
            </Head>
            <AppLayout> 
                <NicknameEditForm />
                <FollowList header="팔로잉 목록" data={followingList}/>
                <FollowerList header="팔로워 목록" data={followerList}/>
            </AppLayout>
        </>
    );
};
export default Profile;