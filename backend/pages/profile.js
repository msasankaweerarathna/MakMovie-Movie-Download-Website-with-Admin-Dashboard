
import Head from "next/head";
import { MdOutlineAccountCircle } from "react-icons/md";


export default function profile() {


    return <>
        <Head>
            <title>Profile page</title>
        </Head>

        <div className="container">
            <div className="profilesettings">
                <div className="leftprofile_details flex">
                <img src="/img/coder.png" alt="coder" />
                    <div className="w-100">
                        <div className="flex flex-sb flex-left mt-2">
                            <h2>My Profile</h2>
                            <h3>Vbm Coder <br />Web Designer</h3>
                        </div>
                        <div className="flex flex-sb mt-2">
                            <h3>Phone</h3>
                            <input type="text" defaultValue='+94 783471760 ' />
                        </div>
                        <div className="mt-3">
                            <input type="email" defaultValue="manujaya77sasanka@gmail.com" />
                        </div>
                        <div className="flex flex-center w-100 mt-2">
                            <button>Save</button>
                        </div>
                    </div>
                </div>

                <div className="rightlogoutsec">
                    <div className="topaccoutnbox">
                        <h2 className="flex flex-sb">
                            My Account 
                            <MdOutlineAccountCircle/>
                        </h2>
                        <hr />
                        <div className="flex flex-sb mt-1">
                            <h3>Active Account <br /><span></span></h3>
                            <button>Log In</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </>
}