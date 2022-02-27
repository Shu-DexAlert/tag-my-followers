
export default function Followers(props) {
    return (
        <div className="mt-4">
            {
                props?.followers?.data.length > 0 ?
                    props.followers.data.map((it) => (
                        <p key={it.id} className='text-black dark:text-white text-xl'>@{it.username}</p>
                    )) : ''
            }
        </div>
    );
}