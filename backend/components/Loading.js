export default function Loading() {
    return <>
        <div className="loadingtext">
            <div className="spinnerContainer">
                <div className="spinner"></div>
                <div className="loader">
                    <p>Loading</p>
                    <div className="words">
                        <span className="word">Database</span>
                        <span className="word">Images</span>
                        <span className="word">Css</span>
                        <span className="word">Links</span>
                        <span className="word">Movies</span>
                    </div>
                </div>
            </div>
        </div>
    </>
}