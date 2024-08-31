import Head from "next/head"
import Image from "next/image"

export default function Auth() {

    
    return <>
        <Head>
            <title>Movie App | Backend</title>
        </Head>

        <div className="container">
            <div className="loginfront flex flex-center">
                <div className="loginbox flex flex-col">
                    <Image src='/img/coder.png' width={250} height={250}/>
                    <h1>Welcome Admin of the Makmovies</h1>
                    <p>Visit our main Website <a href="https://www.linkedin.com/in/manujaya-sasanka-4a4284218/">Manujaya Sasanka</a></p>
                    <button className="mt-2">Log in with Google</button>
                </div>
            </div>
        </div>
    </>
}