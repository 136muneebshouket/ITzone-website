/** @type {import('next').NextConfig} */
const nextConfig = {
  
    env: {

        DB_URI: 'mongodb+srv://pirateCoderz:studentPirateData@cluster0.j2phyin.mongodb.net/itzone?retryWrites=true&w=majority',
        
        urlEndPoint: 'https://ik.imagekit.io/yl7lenstl/',
        publicKey: 'public_MPqjDvTPf/9wOoOjfu5ZEOpYkAo=',
        privateKey: "private_r1U47Z3KU3Da7K4uZhGGajePqLg=",

        JWT_TOKEN: 'PeakTokenData33'
    }
};

export default nextConfig;
